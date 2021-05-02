'use strict';
// ArrayList 7 - 225;
var arr = [1,2,3,4,5,6,7];
var IList = function (capacity) {
    this.capacity = capacity;
};
var ArrayList = function(capacity) {
    IList.call(this, capacity);
    this.size = 0;
    this.index = 0;
    this.DEFAULT_CAPACITY = 10;

    if (!this.capacity) {
        this.array = new Array();
        this.capacity = this.DEFAULT_CAPACITY;
    } else if (typeof this.capacity === 'number') {
        this.array = new Array(this.capacity);
    } else if (Array.isArray(this.capacity)) {
        this.index = this.capacity.length-1;
        this.size = this.capacity.length;
        this.array = this.capacity;
    } else {
        throw new Error("Failed to create ArrayList");
    }
    this.ensureCapacity = function() {
        var newArray = new Array(this.array.length * 2);
        for (var i = 0; i < this.array.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }
    this.addValue = function (value) {
        this.array[this.index++] = value;
        this.size++;
    }
};
ArrayList.prototype = Object.create(IList.prototype);
ArrayList.prototype.constructor = ArrayList;

ArrayList.prototype.clear = function() {
    this.array = [];
    this.size = 0;
    this.index = 0;
}
ArrayList.prototype.getSize = function () {
    return this.size;
}
ArrayList.prototype.add = function (value) {
    var numb = Number(value);
    if (this.size === this.array.length) {
        this.ensureCapacity();
        this.addValue(value);
    } else {
        if (this.array[this.index]) {
            this.index++;
            this.add(value);
        } else {
            this.addValue(value);
        }
    }
}
ArrayList.prototype.set = function (value, index) {
    value = Number(value);
    index = Number(index);
    if (index < 0 || index > this.array.length - 1) {
        throw new Error("Index is not in the boundaries");
    }
    if (this.array[index] === undefined) {
        this.array[index] = value;
        this.size++;
    } else {
        this.array[index] = value;
    }
}
ArrayList.prototype.get = function(index) {
    index = Number(index);
    if (index < 0 || index > this.array.length - 1) {
        throw new Error("Index is not in the boundaries");
    }
    for (var i = 0; i < this.array.length; i++) {
        return this.array[index];
    }
}
ArrayList.prototype.remove = function (index) {
    index = Number(index);
    if (index < 0 || index > this.array.length - 1) {
        throw new Error("Index is not in the boundaries");
    } else {
        var temp = this.array[index];
        this.array[index] = undefined;
        this.size--;
        return temp;    
    }
}
ArrayList.prototype.toArray = function () {
    return this.array;
}
ArrayList.prototype.toString = function () {
    return this.array.toString();
}
ArrayList.prototype.contains = function (value) {
    value = Number(value);
    for (var i = 0; i < this.array.length; i++) {
        if (value === this.array[i]) {
            return true;
        } 
    }
    return false;
}
ArrayList.prototype.minValue = function () {
    var tempMin = this.array[0];
    for (var i = 1; i < this.array.length; i++) {
        if (this.array[i] < tempMin) {
            tempMin = this.array[i];
        }
    }
    return tempMin;
}
ArrayList.prototype.maxValue = function () {
    var tempMax = this.array[0];
    for (var i = 1; i < this.array.length; i++) {
        if (this.array[i] > tempMax) {
            tempMax = this.array[i];
        }
    }
    return tempMax;
}
ArrayList.prototype.minIndex = function () {
    var tempMinIndex = this.array[0];
    var minIndex;
    for (var i = 1; i < this.array.length; i++) {
        if (this.array[i] <= tempMinIndex) {
            tempMinIndex = this.array[i];
            minIndex = i;
        }
    }
    return minIndex;
}
ArrayList.prototype.maxIndex = function () {
    var tempMaxIndex = this.array[0];
    var maxIndex;
    for (var i = 1; i < this.array.length; i++) {
        if (this.array[i] >= tempMaxIndex) {
            tempMaxIndex = this.array[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}
ArrayList.prototype.reverse = function () {
    var temp = '';
    for (var i = 0; i < this.array.length / 2; i++) {
        temp = this.array[i];
        this.array[i] = this.array[this.array.length-1 - i];
        this.array[this.array.length-1 - i] = temp;
    }
    return this.array;
}
ArrayList.prototype.halfReverse = function () {
    for (var i = 0; i < Math.floor(this.array.length / 2); i++) {
        var secondIndex = Math.ceil(this.array.length / 2) + i;
        var tempElement = this.array[i];
        this.array[i] = this.array[secondIndex];
        this.array[secondIndex] = tempElement;
    }
    return this.array;
}
ArrayList.prototype.removeAll = function (value) {
    if (Array.isArray(value)) {
        for (var i = 0; i < this.array.length; i++) {
            for (var j = 0; j < value.length; j++) {
                if (this.array[i] === value[j]) {
                    this.array[i] = undefined;
                    this.size--;
                }
            }
        }
        return this.array;
    } else {
        throw new Error("Argument is not an array");
    }
}
ArrayList.prototype.retainAll = function (value) {
    if (Array.isArray(value)) {
        for (var i = 0; i < this.array.length; i++) {
            var contains = false;
            for (var j = 0; j < value.length; j++) {
                if (this.array[i] === value[j]) {
                    contains = true;
                    break;
                }
            }
            if (!contains) {
                this.array[i] = undefined;
                this.size--;
            }
        }
        return this.array;
    }
}
ArrayList.prototype.sort = function () {
    // if (this.array.length < 2) {
    //     return this.array;
    // }
    // var pivot = this.array[0];
    // var firstArr = [];
    // var secondArr = [];
    // for (var i = 1; i < this.array.length; i++) {
    //     if (this.array[i] <= pivot) {
    //         firstArr[firstArr.length] = this.array[i];
    //     } else {
    //         secondArr[secondArr.length] = this.array[i];
    //     }
    // }
    // var result = this.sort(firstArr).concat(pivot, this.sort(secondArr));
    // return result;
    return this.array.sort();
}
ArrayList.prototype.print = function () {
    for (var i = 0; i < this.array.length; i++) {
        console.log(this.array[i]);
    }
}

module.exports = { ArrayList };
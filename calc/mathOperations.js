'use strict';
var MathOperations = function() {}
MathOperations.prototype.sum = function(arg1, arg2) {
    var numb1 = Number(arg1);
    var numb2 = Number(arg2);

    if (typeof numb1 === 'number' && typeof numb2 === 'number') {
        return numb1 + numb2;
    } else {
        throw new Error('Invalid numbers');
    }
}
MathOperations.prototype.subtract = function(arg1, arg2) {
    var numb1 = Number(arg1);
    var numb2 = Number(arg2);

    if (typeof numb1 === 'number' && typeof numb2 === 'number') {
        return numb1 - numb2;
    } else {
        throw new Error('Invalid numbers');
    }
}
MathOperations.prototype.multiply = function(arg1, arg2) {
    var numb1 = Number(arg1);
    var numb2 = Number(arg2);

    if (typeof numb1 === 'number' && typeof numb2 === 'number') {
        return numb1 * numb2;
    } else {
        throw new Error('Invalid numbers');
    }
}
MathOperations.prototype.divide = function(arg1, arg2) {
    var numb1 = Number(arg1);
    var numb2 = Number(arg2);

    if (typeof numb1 === 'number' && typeof numb2 === 'number') {
        return numb1 / numb2;
    } else {
        throw new Error('Invalid numbers');
    }
}
MathOperations.prototype.plusMinus = function(arg1) {
    var numb1 = Number(arg1);

    if (typeof numb1 === 'number') {
        return numb1 * (-1);
    } else {
        return 'error';
    }
}
MathOperations.prototype.factorial = function (arg1) {
    var numb1 = Number(arg1);
    var factorial = 1;
    for (var i = 1; i <= numb1; i++) {
        factorial *= i;
    }
    return factorial;
}
MathOperations.prototype.pi = function () {
    return Math.PI;
}
MathOperations.prototype.abs = function (arg1) {
    var numb1 = Number(arg1);
    return Math.abs(numb1);
}
MathOperations.prototype.oneXth = function (arg1) {
    var numb1 = Number(arg1);
    return 1/numb1;
}
MathOperations.prototype.square = function (arg1) {
    var numb1 = Number(arg1);
    return numb1 * numb1;
}
MathOperations.prototype.cube = function (arg1) {
    var numb1 = Number(arg1);
    return numb1 * numb1 * numb1;
}
MathOperations.prototype.powerOfNumber = function (arg1, arg2) {
    var numb1 = Number(arg1);
    var numb2 = Number(arg2);
    var temp = numb1;
    for (var i = 1; i < numb2; i++) {
        temp *= numb1;
    }
    return temp;
}
MathOperations.prototype.tenInXth = function (arg1) {
    var numb1 = Number(arg1);
    var temp = 1;
    for (var i = 0; i < numb1; i++) {
            temp *= 10;
    }
    return temp;
}
MathOperations.prototype.exponenta = function () {
    return Math.E;
}
MathOperations.prototype.mod = function (arg1, arg2) {
    var numb1 = Number(arg1);
    var numb2 = Number(arg2);
    return numb1 % numb2;    
}
MathOperations.prototype.naturalLogarithm = function (arg1) {
    var numb1 = Number(arg1);
    return Math.log(numb1);    
}
MathOperations.prototype.logarithm = function (arg1) {
    var numb1 = Number(arg1);
    return Math.log10(numb1);    
}
MathOperations.prototype.exp = function (arg1) {
    var numb1 = Number(arg1);
    return Math.exp(numb1);
}
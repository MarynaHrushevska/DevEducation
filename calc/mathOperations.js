'use strict';
var MathOperations = function() {}
MathOperations.prototype.sum = function(arg1, arg2) {
    var a = Number(arg1);
    var b = Number(arg2);

    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        throw new Error('Invalid numbers');
    }
}
MathOperations.prototype.subtract = function(arg1, arg2) {
    var a = Number(arg1);
    var b = Number(arg2);

    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        throw new Error('Invalid numbers');
    }
}
MathOperations.prototype.multiply = function(arg1, arg2) {
    var a = Number(arg1);
    var b = Number(arg2);

    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else {
        throw new Error('Invalid numbers');
    }
}
MathOperations.prototype.divide = function(arg1, arg2) {
    var a = Number(arg1);
    var b = Number(arg2);

    if (typeof a === 'number' && typeof b === 'number') {
        return a / b;
    } else {
        throw new Error('Invalid numbers');
    }
}
MathOperations.prototype.equal = function(arg1, arg2) {
    var a = Number(arg1);
    var b = Number(arg2);

    if (typeof a === 'number' && typeof b === 'number') {
        return a / b;
    } else {
        return 'error';
    }
}
MathOperations.prototype.plusMinus = function(arg1) {
    var a = Number(arg1);

    if (typeof a === 'number') {
        return a * (-1);
    } else {
        return 'error';
    }
}

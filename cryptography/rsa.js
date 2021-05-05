'use strict';

function rsa (p,q) {    
    var n = p * q;
    var eulerFunction = (p - 1) * (q - 1);
    console.log(eulerFunction);
    var e = Math.round(Math.random() * eulerFunction);
    var d = Math.round((1 + eulerFunction) / e);
    var keys = {
        'e': e,
        'd': d,
        'n': n
    }
    return keys;
}
console.log(rsa(8,9));
function twoNumberMutuallySimple (a, b) {
    var dividerA = mutuallySimple(a);
    var dividerB = mutuallySimple(b);

    for (var i = 0; i < dividerA.length; i++) {
        for (var j = 0; j < dividerB.length; j++) {
            if (dividerA.includes(dividerB[j])) {
                return false;
            } else {
                return true;
            }
        }
    }
}
function mutuallySimple (number) {
    number = Number(number);
    var array = [];
    for (var i = 1; i <= number; i++) {
        if (number % i === 0 && i !== 1) {
            array.push(i);
        }
    }
    return array;
}
function generateNumbers (p, q) {
    if (twoNumberMutuallySimple(p, q)) {
        rsa(p, q);
    } else {
        generateNumbers();
    }
}


function encoded (m,e,n) {
    var C = Math.pow(m,e) % n;
    return C;
}
console.log(encoded(46, 72))

function decoded (m,d,n) {
    var C = Math.pow(m,d) % n;
    return C;
}
console.log(decoded(46, 1))
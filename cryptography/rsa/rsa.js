'use strict';

var c = 10;

function rsa (p,q) {    
    var n = p * q;
    var eulerFunction = (p - 1) * (q - 1);
    var e = 5;
    var k = 2;
    var d = (eulerFunction * k + 1) / e;
    var keys = {
        'e': e,
        'd': d,
        'n': n
    }
    return keys;
}
var keys = rsa(13, 7);

function encoded(openKey, fn) {
    var {e, n} = fn;
    var encoded = (openKey ** e) % n;
    return encoded;
}
var encode = encoded(c, keys);


function decoded(fn, enc) {
    var {d, n} = fn;
    var encode = enc;
    var decoded = Math.pow(encode, d) % n;
    return decoded;
}









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

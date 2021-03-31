'use strict';
/* 
Задания
1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
Правила: 
-Яйца варить 5 минут
-Вместительность емкости не более 5 яиц одновременно
*/
function getCookingTime (eggsAmount) {
var result = 5;
var times = Math.ceil(eggsAmount/5);
    if (eggsAmount.length <= 5) {
        return result;
    } else {
        return times * 5;
    }
}
// console.log(getCookingTime(0)); 
//returns 0
// console.log(getCookingTime(5)); 
//returns 5
// console.log(getCookingTime(9)); 
//returns 10 (because capacity is 5 so we need to do it 2 times)
// console.log(getCookingTime(18)); 
// console.log(getCookingTime(28)); 
/* 
2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
*/
function getNumber(array) {
    var even = 0;
    var odd = 0;
    var answer;
    var anotherAnswer;
    for (var i = 0; i < array.length; i++) {
        var number = array[i];
        if (number % 2 === 0) {
            answer = number;
            even++;
        } else {
            anotherAnswer = number;
            odd++;
        }
    }
    if (even === 1) {
        return answer;
    } else {
        return anotherAnswer;         
    }
}
console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])); 
//returns 4
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])); 
//returns 13
/*
3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).
*/
function findTitle(array, string) { 
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (!array[i].title) {
            continue;
        } 
        if (array[i].title.toLowerCase().includes(string)) {
            result.push(array[i]);
        }
    }
    return result;
}
var arr = [{
title: 'Some title1'
}, {
title: 'I like JS'
}, {
user: `This obj doesn't have key title js`
}, {
title: 'Js - is the best!'
}];
console.log(findTitle(arr, 'js')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]
/* 
4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке
*/
function countCharacters(source) {
    var result = {};
    for (var i = 0; i < source.length; i++) {
        if (result[source[i]]) {
            result[source[i]] += 1;
        } else {
            result[source[i]] = 1;
        }
    }
    return result;
}
// console.log(countCharacters('sparrow')); 
// // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
// console.log(countCharacters('aabcddeffge')) 
// // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
// console.log(countCharacters('a 2ab !d')) // should return {a: 2, b:1, d:1, 2:1}
/* 
5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же, как вперед и назад, например, «мадам».
*/
function isPalindrome(str) {
    str = str.toString().toLowerCase();
    for (var i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        } 
    }
    return true; 
}
function getNextPalindrome(number) {
    var result = null;
    var count = 0;
    if (number < 10) {
        number = 10;
    } 
    while (!isPalindrome(++number)) {
        if (count > 10000) {
            return null;
        }
        count++;
    }
    result = number;
    return result;
}
// console.log(getNextPalindrome(46353));
// console.log(getNextPalindrome(7)) // returns 11
// console.log(getNextPalindrome(99)) //returns 101
// console.log(getNextPalindrome(132)) // returns 141
// console.log(getNextPalindrome(888)) // returns 898
// console.log(getNextPalindrome(999)) // returns 1001
// console.log(getNextPalindrome(1000001)) // returns 1001

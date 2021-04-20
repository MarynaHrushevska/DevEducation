'use strict';
/* Все созданные функции должны быть покрыты тестами!
1. Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце
getDays( 2021 , 4) 
getDays( 2021 , ‘April’) 
*/

// 1.
function getDays(year, month) {
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var monthsNames = [
        'январь',
        'февраль',
        'март', 
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь', 
        'декабрь'
    ];

    if (typeof month === 'string') {
        month = monthsNames.indexOf(month) + 1;
    }

    if (month === 2) {
        if (year % 4 === 0) {
            return 29;
        } else {
            return 28;
        }
    }
    return months[month - 1];
}

// 2. Через прототип расширьте встроенный объект Number методом isOdd(), который возвращает true, если число нечетное. 
Number.prototype.isOdd = function () {
    return this % 2 !== 0;
}

// 3. Написать функцию every, которая будет принимать первым аргументом массив, а вторым функцию колбэк(которая будет принимать каждый элемент массива и возвращать true либо false). Результатом функции должно быть логическое выражение true/false  в зависимости от того, выполняется ли условие для каждого из элементов.

function every (array, fn) {
    var result = true;
    if (typeof fn !== 'function') {
        return false;
    }

    for (var i = 0; i < array.length; i++) {
        if (!fn(array[i])) {
            return false;
        }
    }

    return result;
}

module.exports = { getDays, every, isOdd: Number.prototype.isOdd } 
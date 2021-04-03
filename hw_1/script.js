'use strict';
/*
(!) Красным отмечены задания повышенной сложности
Условные операторы
1. Если а – четное посчитать а*б, иначе а+б
2. Определить какой четверти принадлежит точка с координатами (х,у)
3. Найти суммы только положительных из трех чисел
4. Посчитать выражение (макс(а*б*с, а+б+с))+3
5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил
Рейтинг Оценка
0-19 F  
20-39 E
40-59 D
60-74 C
75-89 B
90-100 A
*/

// 1. Если а – четное посчитать а*б, иначе а+б
var getOddEvenCalculation = function (a, b) {
    if (a % 2 === 0) {
        return a * b;
    } else {
        return a + b;
    }
}
console.group('conditions. task 1');
console.log(getOddEvenCalculation(2, 3));
console.log(getOddEvenCalculation(5, 3));
console.log(getOddEvenCalculation(1, 2));
console.log(getOddEvenCalculation(0, 6));
console.groupEnd();

// 2. Определить какой четверти принадлежит точка с координатами (х,у)
var defineQuarter = function (x, y) {
    if (x > 0 && y > 0) {
        return `Точка с координатами (${x}; ${y}) принадлежит I четверти`;
    } 
    if (x > 0 && y < 0) {
        return `Точка с координатами (${x}; ${y}) принадлежит II четверти`;
    }  
    if (x < 0 && y < 0) {
        return `Точка с координатами (${x}; ${y}) принадлежит III четверти`;
    }  
    if (x < 0 && y > 0) {
        return `Точка с координатами (${x}; ${y}) принадлежит IV четверти`;
    }
    if (x === 0 && y === 0) {
        return `Точка с координатами (${x}; ${y}) в центре`;
    }
    return `Точка с координатами (${x}; ${y}) лежит на оси`;
}
console.group('conditions. task 2');
console.log(defineQuarter(9,3));
console.log(defineQuarter(0,0));
console.log(defineQuarter(9,0));
console.log(defineQuarter(0,3));
console.log(defineQuarter(-9,-3));
console.groupEnd();

// 3. Найти суммы только положительных из трех чисел
var sumPositiveDigits = function (a, b, c) {
    var sum = 0;
    if (a > 0) {
        sum += a;
    }  
    if (b > 0) {
        sum += b;
    } 
    if (c > 0) {
        sum += c;
    }
    return sum;
}
console.group('conditions. task 3'); 
console.log(sumPositiveDigits(1, 3, 5));
console.log(sumPositiveDigits(-1, 3, 5));
console.log(sumPositiveDigits(1, -3, 5));
console.log(sumPositiveDigits(1, 3, -5));
console.log(sumPositiveDigits(1, -3, -5));
console.log(sumPositiveDigits(-1, -3, 5));
console.log(sumPositiveDigits(-1, 3, -5));
console.log(sumPositiveDigits(-1, -3, -5));
console.groupEnd();

// 4. Посчитать выражение (макс(а*б*с, а+б+с))+3
var calcExpression = function (a, b, c) {
    var multiply = (a * b * c); 
    var sum = (a + b + c);
    return (multiply > sum) ? (multiply + 3) : (sum + 3);
} 
console.group('conditions. task 4');
console.log(calcExpression(4,5,7));
console.log(calcExpression(1,2,3));
console.groupEnd();

// 5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил
var defineScores = function(x) {
    if (x <= 19) {
        return 'F';
    }
    if (x >= 20 && x <= 39) {
        return 'E';
    }
    if (x >= 40 && x <= 59) {
        return 'D';
    }
    if (x >= 60 && x <= 74) {
        return 'C';
    }
    if (x >= 75 && x <= 89) {
        return 'B';
    }
    if (x >= 90 && x <= 100) {
        return 'A';
    }
}
console.group('conditions. task 5');
console.log(defineScores(3))
console.log(defineScores(25))
console.log(defineScores(67))
console.log(defineScores(78))
console.log(defineScores(100))
console.groupEnd();

/*
Циклы
1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;
5. Посчитать сумму цифр заданного числа
6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
*/

// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
var evenSum = function(max) {
    var sum = 0;
    var quantity = 0;
    for (var i = 1; i <= max; i++) {
        if (i % 2 === 0) {
            sum += i;
            quantity++;
        }
    }
    return {
        sum, 
        quantity
    };
}
console.group('cycles. Task 1');
console.log(evenSum(99));
console.log(evenSum(4));
console.groupEnd();

// 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
var primeNumber = function(numb) {
    if (numb === 1) {
        return false;
    }
    for (var i = 2; i < numb; i++) {
        if (numb % i === 0) {
            return false;
        } 
    }
    return true;
}
console.group('cycles. task 2');
console.log(primeNumber(13));
console.log(primeNumber(12));
console.log(primeNumber(5));
console.log(primeNumber(1));
console.groupEnd();

// 3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
var squareRoot = function(x) {
    for (var i = 0; i <= x; i++) {
        if (i * i === x) {
            return `Квадратный корень из ${x} = ${i}`;
        } 
        if ( ((i * i) < x) && ( ((i+1) * (i+1)) > x) ) {
            return `Целое число из квадратного корня ${x} = ${i}`;
        }
    }
}
console.group('cycles. task 3');
console.log(squareRoot(9));
console.log(squareRoot(121));
console.log(squareRoot(8));
console.log(squareRoot(78));
console.log(squareRoot(144));
console.log(squareRoot(90));
console.groupEnd();

// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;
var calculateFactorial = function(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.group('cycles. task 4');
console.log(calculateFactorial(9));
console.log(calculateFactorial(5));
console.log(calculateFactorial(3));
console.log(calculateFactorial(2));
console.log(calculateFactorial(4));
console.log(calculateFactorial(10));
console.groupEnd();

// 5. Посчитать сумму цифр заданного числа 
var sumOfNumbers = function(n) {
    var digitsToString = n.toString();
    var tempArr = [];
    var result = 0;
    for (var i = 0; i < digitsToString.length; i++) {
       tempArr[i] = digitsToString[i];
    }
    for (var i = 0; i < tempArr.length; i++) {
        result += Number(tempArr[i]);
    }
    return result;
}
console.group('cycles. task 5');
console.log(sumOfNumbers(14));
console.log(sumOfNumbers(53));
console.log(sumOfNumbers(36));
console.log(sumOfNumbers(289));
console.log(sumOfNumbers(4435));
console.log(sumOfNumbers(102));
console.groupEnd();

// 6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function mirrorNumber(x) {
    var tempArray = [];
    var newDigits = x.toString();
    var temp = '';
    var result = '';

    for (var i = 0; i < newDigits.length; i++) {
        tempArray[i] = newDigits[i];
    }
    for (var j = 0; j < tempArray.length / 2; j++) {
        temp = tempArray[j];
        tempArray[j] = tempArray[tempArray.length - 1 - j];
        tempArray[tempArray.length - 1 - j] = temp;
    }
    for (var k = 0; k < tempArray.length; k++) {
        result += tempArray[k];
    }
    return Number(result);
}
console.group('cycles. task 6');
console.log(mirrorNumber(289));
console.log(mirrorNumber(4435));
console.log(mirrorNumber(102));
console.groupEnd();

/*
Одномерные массивы
1. Найти минимальный элемент массива
2. Найти максимальный элемент массива
3. Найти индекс минимального элемента массива
4. Найти индекс максимального элемента массива 
5. Посчитать сумму элементов массива с нечетными индексами
6. Сделать реверс массива (массив в обратном направлении)
7. Посчитать количество нечетных элементов массива
8. Поменять местами первую и вторую половину массива, например, для массива 
1 2 3 4, результат 3 4 1 2
9* Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 
10* Отсортировать массив (Quick, Merge, Shell, Heap)
*/

// 1. Найти минимальный элемент массива
function findMinElement(arr) {
    var tempMin = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < tempMin) {
            tempMin = arr[i];
        }
    }
    return tempMin;
}
console.group('array. task 1');
console.log(findMinElement([4,6,7,2,4,1,5,3]));
console.log(findMinElement([89,66,45,4,76,23,56,13]));
console.log(findMinElement([67,89,34,45,23,554]));
console.groupEnd();

// 2. Найти максимальный элемент массива
function findMaxElement(arr) {
    var tempMax = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > tempMax) {
            tempMax = arr[i];
        }
    }
    return tempMax;
}
console.group('array. task 2');
console.log(findMaxElement([4,6,7,2,4,1,5,3]));
console.log(findMaxElement([89,66,45,4,76,23,56,13]));
console.log(findMaxElement([67,89,34,45,23,554]));
console.groupEnd();

// 3. Найти индекс минимального элемента массива
function findMinIndex(arr) {
    var tempMinIndex = arr[0];
    var minIndex;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= tempMinIndex) {
            tempMinIndex = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}
console.group('array. task 3');
console.log(findMinIndex([4,6,7,2,4,1,5,3, 0]));
console.log(findMinIndex([89,66,45,4,76,23,56,13]));
console.log(findMinIndex([67,89,34,45,23,554]));
console.groupEnd();

// 4. Найти индекс максимального элемента массива 
function findMaxIndex(arr) {
    var tempMaxIndex = arr[0];
    var maxIndex;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= tempMaxIndex) {
            tempMaxIndex = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}
console.group('array. task 4');
console.log(findMaxIndex([4,6,7,2,4,1,5,3]));
console.log(findMaxIndex([89,66,45,4,76,23,56,13]));
console.log(findMaxIndex([67,89,34,45,23,554]));
console.groupEnd();

// 5. Посчитать сумму элементов массива с нечетными индексами
function summOfOdds(array) {
    var sumOfElenent = 0;
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 1)
        sumOfElenent += array[i];
    }
    return sumOfElenent;
}
console.group('array. task 5');
console.log(summOfOdds([4,6,7,2,4,1,5,3]));
console.log(summOfOdds([3, 1, 5, 2, 3, 3, 6]));
console.log(summOfOdds([89,66,45,4,76,23,56,13]));
console.log(summOfOdds([67,89,34,45,23,554]));
console.groupEnd();

// 6. Сделать реверс массива (массив в обратном направлении)
function arrRevers(ar) {
    var temp = '';
    for (var i = 0; i < ar.length / 2; i++) {
        temp = ar[i];
        ar[i] = ar[ar.length-1 - i];
        ar[ar.length-1 - i] = temp;
    }
    return ar;
}
console.group('array. task 6');
console.log(arrRevers([4,6,7,2,4,1,5,3]));
console.log(arrRevers([3, 1, 5, 2, 3, 3, 6]));
console.log(arrRevers([89,66,45,4,76,23,56,13]));
console.log(arrRevers([67,89,34,45,23,554]));
console.groupEnd();

// 7. Посчитать количество нечетных элементов массива
function quantityOfOddElements(array) {
    var quantity = 0;
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 1) {
            quantity ++;
        }
    }
    return quantity;
}
console.group('array. task 7');
console.log(quantityOfOddElements([4,6,7,2,4,1,5,3]));
console.log(quantityOfOddElements([3, 1, 5, 2, 3, 3, 6]));
console.log(quantityOfOddElements([89,66,45,4,76,23,56,13,13,43,55]));
console.log(quantityOfOddElements([67,89,34]));
console.groupEnd();

// 8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
function switchElements(ar) {
    for (var i = 0; i < Math.floor(ar.length / 2); i++) {
        var secondIndex = Math.ceil(ar.length / 2) + i;
        var tempElement = ar[i];
        ar[i] = ar[secondIndex];
        ar[secondIndex] = tempElement;
    }
    return ar;
}
console.group('array. task 8');
console.log(switchElements([4,6,7,2, 4,1,5,3]));
console.log(switchElements([3,1,5,2, 5,3,3,6]));
console.log(switchElements([89,66,45,4,76, 23, 56,13,13,43,55]));
console.log(switchElements([67,89,34]));
console.groupEnd();

/*
Функции
1. Получить строковое название дня недели по номеру дня
2. Найти расстояние между двумя точками в двухмерном декартовом пространстве
3. Вводим число(0-999), получаем строку с прописью числа
4. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
5* Для задания 2 расширить диапазон до 999 миллиардов
6* Для задания 3 расширить диапазон до 999 миллиардов
*/ 

// 1. Получить строковое название дня недели по номеру дня
function dayOfWeek(day) {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day > days.length) {
        return 'Try again';
    }
    return days[day-1];
}
console.group('functions. task 1');
console.log(dayOfWeek(7));
console.log(dayOfWeek(5));
console.log(dayOfWeek(15));
console.groupEnd();

// 2. Найти расстояние между двумя точками в двухмерном декартовом пространстве
function lengthDefine(first, second) {
    return Math.sqrt( ((second.x - first.x) ** 2) + ((second.y - first.y) ** 2) );
}
console.log(lengthDefine({x:1, y:3}, {x: 4, y: 7}));

// 3. Вводим число(0-999), получаем строку с прописью числа
function getString(x) {
    var first = [null, 'один', 'два', 'три', 'четыре', 'пять', 'шесть',
    'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
    'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
    'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
    ];
    var dozens = [null, null, 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
    ];
    var hundreds = [null, 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
    ];

    var digits = x.toString().split('');
    if (x <= 19) {
        return `${first[x]}`;
    }
    if (digits.length === 2) {
        return `${dozens[digits[0]]} ${first[digits[1]]}`;
    }  
    if (digits.length === 3) {
        if (Number(digits[1]) === 0) {
            return `${hundreds[digits[0]]} ${first[digits[2]]}`
        }
        if (Number(digits[1]) === 1) {
            var firstIndex = Number(digits[1] + digits[2]);
            return `${hundreds[digits[0]]} ${first[firstIndex]}`
        }
        if (Number(digits[2]) === 0) {
            return `${hundreds[digits[0]]} ${dozens[digits[1]]}`
        } 
    }
    return 'Try again';
}
console.group('functions. task 3');
console.log(getString(363));
console.log(getString(13));
console.log(getString(19));
console.log(getString(810)); 
console.log(getString(819)); 
console.log(getString(802)); 
console.log(getString(830));
console.groupEnd();

// 4. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
function getNumber(x) {
    var stringArray = x.split(' ');
    var result = 0;
    var firstNumber = [null, 'один', 'два', 'три', 'четыре', 'пять', 'шесть',
    'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
    'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
    'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
    ];
    var dozenNumber = [null, null, 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
    ];
    var hundredsNumber = [null, 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
    ];

    for (var i = 0; i < stringArray.length; i++) {
        var number = stringArray[i];
        var index = findIndex(hundredsNumber, number);
        if (index !== null) {
            result += index * 100;
            continue;
        }
        index = findIndex(dozenNumber, number);
        if (index !== null) {
            result += index * 10;
            continue;
        }
        index = findIndex(firstNumber, number);
        if (index !== null) {
            result += index * 1;
        }
    }
    return result;
}
function findIndex(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }
    }
    return null;
} 
console.group('functions. task 4');
console.log(getNumber('пятьсот двадцать четыре'));
console.log(getNumber('двадцать шесть'));
console.log(getNumber('одиннадцать'));
console.log(getNumber('три'));
console.log(getNumber('восемьсот'));
console.groupEnd();
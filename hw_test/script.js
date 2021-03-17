'use strict';

/*
Условные операторы
1. Определить какой четверти принадлежит точка с координатами (х,у)
2. Найти суммы только положительных из трех чисел
3. Посчитать выражение (макс(а*б*с, а+б+с))+3
*/

// 1.
function defineQuarter(x, y) {
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

// console.log(defineQuarter(9,3));
// console.log(defineQuarter(0,0));
// console.log(defineQuarter(9,0));
// console.log(defineQuarter(0,3));
// console.log(defineQuarter(-9,-3));


// 2.
function sumFinding(a, b, c) {
    let sum = 0;
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

// console.log(sumFinding(1, 2, 3)) ;
// console.log(sumFinding(-1, 2, 3));
// console.log(sumFinding(1, -2, 3));
// console.log(sumFinding(1, 2, -3));
// console.log(sumFinding(1, -2, -3));
// console.log(sumFinding(-1, -2, 3));
// console.log(sumFinding(-1, 2, -3));
// console.log(sumFinding(-1, -2, -3));

// 3. 
function calcExpression(a, b, c) {
    let multiply = (a * b * c); 
    let sum = (a + b + c);

    return multiply > sum ? (multiply + 3) : (sum + 3);
} 
// console.log(calcExpression(4,5,7));
// console.log(calcExpression(1,2,3));

/* 
Циклы
1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
*/

// 1. 
function evenSum(max) {
    let sum = 0;
    let quantity = 0;
    for (let i = 1; i <= max; i++) {
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
// console.log(evenSum(99));
// console.log(evenSum(4));

/* 
2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
*/ 

function numberChecking(numb) {
    if (numb === 1) {
        return false;
    }
    for (let i = 2; i < numb; i++) {
        if (numb % i === 0) {
            return false;
        } 
    }
    return true;
}
// console.log(numberChecking(13));
// console.log(numberChecking(12));
// console.log(numberChecking(5));
// console.log(numberChecking(1));

/* 
3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
*/

function squareRoot(x) {
    for (let i = 0; i <= x; i++) {
        if (i * i === x) {
            return `Квадратный корень из ${x} = ${i}`;
        } 
        if ( ((i * i) < x) && ( ((i+1) * (i+1)) > x) ) {
            return `Целое число из квадратного корня ${x} = ${i}`;
        }
    }
}

// console.log(squareRoot(9));
// console.log(squareRoot(121));
// console.log(squareRoot(8));
// console.log(squareRoot(78));
// console.log(squareRoot(144));
// console.log(squareRoot(90));

/* 
Одномерные массивы
1. Найти минимальный элемент массива
2. Найти индекс максимального элемента массива
3. Сделать реверс массива (массив в обратном направлении)
4. Поменять местами первую и вторую половину массива, например, для массива
1 2 3 4, результат 3 4 1 2
*/

const arr = [4,7,1,4,8,9,3,5,13,46,5,4,35,7,54,2];


// 1.
function minEl(arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= min) {
             min = arr[i];
        } 
    }
    return min;
}
console.log(minEl(arr));

// 2.
function maxIndex(ar) {
    let max = arr[0];
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] >= max) {
             max = ar[i];
        } 
    }
    let indexOfMin = ar.indexOf(max);
    return {indexOfMin, max};
}
console.log(maxIndex(arr))

// 3.
function arrRevers(arr) {
    let lastEl;
    let newArr = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        lastEl = arr.pop();
        newArr.push(lastEl);
    }
    return newArr;

    // for (let i = 0; i < arr.length/2; i++) {
    //     let hole = arr[i];
    //     arr[i] = arr[arr.length-1 - i];
    //     arr[arr.length-1 - i] = hole;
    // }
    // return arr;


}
// console.log(arrRevers(arr));


const arr2 = [4,5,6,1,2,3];

/* 
4. Поменять местами первую и вторую половину массива, например, для массива
1 2 3 4, результат 3 4 1 2
*/
function switchEl(ar) {
    for (let i = 0; i < Math.floor(ar.length / 2); i++) {
        let secondIndex = Math.ceil(ar.length / 2) + i;
        let hole = ar[i];
        ar[i] = ar[secondIndex];
        ar[secondIndex] = hole;
        console.log(i, secondIndex);
    }
    return ar;
}
console.log(switchEl(arr2));

/*
Функции
1. Получить строковое название дня недели по номеру дня.
2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.
3. Вводим число(0-999), получаем строку с прописью числа
*/

// 1.
function dayOfWeek(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if (day > days.length) {
        return 'Try again';
    }
    return days[day-1];
}
console.log(dayOfWeek(7));
console.log(dayOfWeek(5));
console.log(dayOfWeek(15));

/*
2. Найти расстояние между двумя точками в двумерном декартовом пространстве.
*/

function lengthDefine(first, second) {
    return Math.sqrt( ((second.x - first.x) ** 2) + ((second.y - first.y) ** 2) );
}
console.log(lengthDefine({x:1, y:3}, {x: 4, y: 7}));

/*
3. Вводим число(0-999), получаем строку с прописью числа
*/
function getNumber(x) {
    const first = [null, 'один', 'два', 'три', 'четыре', 'пять', 'шесть',
    'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
    'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
    'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
    ];
    const dozens = [null, null, 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
    ];
    const hundreds = [null, 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
    ];

    const digits = x.toString().split('');
    if (x <= 19) {
        return `${first[x]}`;
    }
    if (digits.length === 1) {
        return `${first[digits[0]]}`
    } 
    if (digits.length === 2) {
        return `${dozens[digits[0]]} ${first[digits[1]]}`;
    }  
    if (digits.length === 3) {
        return `${hundreds[digits[0]]} ${dozens[digits[1]]} ${first[digits[2]]}`
    }
    return 'Try again';
}

console.log(getNumber(363));
console.log(getNumber(13));
console.log(getNumber(19));
console.log(getNumber(3));

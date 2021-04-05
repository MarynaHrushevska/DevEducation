var { getOddEvenCalculation, defineQuarter, sumPositiveDigits, calcExpression, defineScores, evenSum, primeNumber, squareRoot, calculateFactorial, sumOfNumbers, mirrorNumber, findMinElement, findMaxElement, findMinIndex, findMaxIndex, summOfOdds, arrRevers, quantityOfOddElements, switchElements, dayOfWeek, lengthDefine, getString, getNumber } = require('./script');
// const { describe } = require('yargs');

describe('getOddEvenCalculation', function() {
    it('should be defined', function() {
        expect(getOddEvenCalculation).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof getOddEvenCalculation).toBe('function')
    })
    it('should be multiply if a is even', function() {
        expect(getOddEvenCalculation(2, 3)).toBe(6)
    })
    it('should not be multiply if a is odd', function() {
        expect(getOddEvenCalculation(2, 3)).not.toBe(5)
    })
    it('should be sum if a is odd', function() {
        expect(getOddEvenCalculation(5, 3)).toBe(8)
    })
    it('should not be sum if a is even', function() {
        expect(getOddEvenCalculation(5, 3)).not.toBe(15)
    })
    it('should be 0 if a is even and b is 0', function() {
        expect(getOddEvenCalculation(4, 0)).toBe(0)
    })
    it('should not be 0 if a is odd and b is 0', function() {
        expect(getOddEvenCalculation(5, 0)).not.toBe(0)
    })
    it('should be a if a is odd and b is 0', function() {
        expect(getOddEvenCalculation(5, 0)).toBe(5)
    })
    it('should not be a if a is even and b is 0', function() {
        expect(getOddEvenCalculation(4, 0)).not.toBe(4)
    })
})
describe('defineQuarter', function() {
    it('should be defined', function() {
        expect(defineQuarter).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof defineQuarter).toBe('function')
    })
    test.each([
        [0, 0, `Точка с координатами (0; 0) в центре`],
        [1, 1, `Точка с координатами (1; 1) принадлежит I четверти`],
        [1, -1, `Точка с координатами (1; -1) принадлежит II четверти`],
        [-1, -1, `Точка с координатами (-1; -1) принадлежит III четверти`],
        [-1, 1, `Точка с координатами (-1; 1) принадлежит IV четверти`],
        [1, 0, `Точка с координатами (1; 0) лежит на оси`],
        [0, 1, `Точка с координатами (0; 1) лежит на оси`],
    ])('testing %s and %s with expected result %s', function(arg1, arg2, result) {
        expect(defineQuarter(arg1, arg2)).toBe(result)
    })
    test.each([
        [0, 0, `Точка с координатами (0; 0) не принадлежит I четверти`, 
                `Точка с координатами (0; 0) не принадлежит II четверти`, 
                `Точка с координатами (0; 0) не принадлежит III четверти`,
                `Точка с координатами (0; 0) не принадлежит IV четверти`,
                `Точка с координатами (0; 0) не лежит на оси`],
        [1, 1, `Точка с координатами (1; 1) не в центре`, 
                `Точка с координатами (1; 1) не принадлежит II четверти`, 
                `Точка с координатами (1; 1) не принадлежит III четверти`,
                `Точка с координатами (1; 1) не принадлежит IV четверти`,
                `Точка с координатами (1; 1) не лежит на оси`],
        [1, -1, `Точка с координатами (1; -1) не в центре`, 
                `Точка с координатами (1; -1) не принадлежит I четверти`, 
                `Точка с координатами (1; -1) не принадлежит III четверти`,
                `Точка с координатами (1; -1) не принадлежит IV четверти`,
                `Точка с координатами (1; -1) не лежит на оси`],
        [-1, -1, `Точка с координатами (-1; -1) не в центре`, 
                `Точка с координатами (-1; -1) не принадлежит I четверти`, 
                `Точка с координатами (-1; -1) не принадлежит II четверти`,
                `Точка с координатами (-1; -1) не принадлежит IV четверти`,
                `Точка с координатами (-1; -1) не лежит на оси`],
        [-1, 1, `Точка с координатами (-1; 1) не в центре`, 
                `Точка с координатами (-1; 1) не принадлежит I четверти`, 
                `Точка с координатами (-1; 1) не принадлежит II четверти`,
                `Точка с координатами (-1; 1) не принадлежит III четверти`,
                `Точка с координатами (-1; 1) не лежит на оси`],
        [1, 0, `Точка с координатами (1; 0) не в центре`, 
                `Точка с координатами (1; 0) не принадлежит I четверти`, 
                `Точка с координатами (1; 0) не принадлежит II четверти`,
                `Точка с координатами (1; 0) не принадлежит III четверти`,
                `Точка с координатами (1; 0) не принадлежит IV четверти`],
        [0, 1, `Точка с координатами (0; 1) не в центре`, 
                `Точка с координатами (0; 1) не принадлежит I четверти`, 
                `Точка с координатами (0; 1) не принадлежит II четверти`,
                `Точка с координатами (0; 1) не принадлежит III четверти`,
                `Точка с координатами (0; 1) не принадлежит IV четверти`],
    ])('testing %s and %s with expected result neither %s nor %s nor %s nor %s nor %s', function(arg1, arg2, result) {
        expect(defineQuarter(arg1, arg2)).not.toBe(result)
    })
})
describe('sumPositiveDigits', function() {
    it('should be defined', function() {
        expect(sumPositiveDigits).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof sumPositiveDigits).toBe('function')
    })
    test.each([
        [1, 1, 1, 3],
        [-1, 1, 1, 2],
        [1, -1, 1, 2],
        [1, 1, -1, 2],
        [1, -1, -1, 1],
        [-1, -1, 1, 1],
        [-1, 1, -1, 1],
        [-1, -1, -1, 0],
        [1, 0, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 1, 1],
        [0, 1, 1, 2],
        [1, 1, 0, 2],
        [1, 0, 1, 2],
        [1, 0, -1, 1],
        [0, 1, -1, 1],
        [1, -1, 0, 1],
        [-1, 0, 1, 1],
        [0, -1, 1, 1],
        [-1, 1, 0, 1],
        [-1, 0, 0, 0],
        [0, -1, 0, 0],
        [0, 0, -1, 0],
        [0, 0, 0, 0],
    ])('testing %s, %s and %s with expected result %s', function(arg1, arg2, arg3, result) {
        expect(sumPositiveDigits(arg1, arg2, arg3)).toBe(result)
    })
    test.each([
        [1, 1, 1, `0`, `1`, `2`],
        [-1, 1, 1, `0`, `1`, `3`],
        [1, -1, 1, `0`, `1`, `3`],
        [1, 1, -1, `0`, `1`, `3`],
        [1, -1, -1, `0`, `2`, `3`],
        [-1, -1, 1, `0`, `2`, `3`],
        [-1, 1, -1, `0`, `2`, `3`],
        [-1, -1, -1, `1`, `2`, `3`],
        [1, 0, 0, `0`, `2`, `3`],
        [0, 1, 0, `0`, `2`, `3`],
        [0, 0, 1, `0`, `2`, `3`],
        [0, 1, 1, `0`, `1`, `3`],
        [1, 1, 0, `0`, `1`, `3`],
        [1, 0, 1, `0`, `1`, `3`],
        [1, 0, -1, `0`, `2`, `3`],
        [0, 1, -1, `0`, `2`, `3`],
        [1, -1, 0, `0`, `2`, `3`],
        [-1, 0, 1, `0`, `2`, `3`],
        [0, -1, 1, `0`, `2`, `3`],
        [-1, 1, 0, `0`, `2`, `3`],
        [-1, 0, 0, `1`, `2`, `3`],
        [0, -1, 0, `1`, `2`, `3`],
        [0, 0, -1, `1`, `2`, `3`],
        [0, 0, 0, `1`, `2`, `3`],
    ])('testing %s, %s and %s with expected result neither %s nor %s nor %s', function(arg1, arg2, arg3, result) {
        expect(defineQuarter(arg1, arg2, arg3)).not.toBe(result)
    })
})
describe('calcExpression', function() {
    it('should be defined', function() {
        expect(calcExpression).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof calcExpression).toBe('function')
    })
    test.each([
        [2,3,4, 27],
        [0,3,4, 10],
        [2,0,4, 9],
        [2,3,0, 8],
        [2,0,0, 5],
        [0,3,0, 6],
        [0,0,4, 7],
        [0,0,0, 3],
    ])('testing %s, %s and %s with expected result %s', function(arg1, arg2, arg3, result) {
        expect(calcExpression(arg1, arg2, arg3)).toBe(result)
    })
    test.each([
        [2,3,4, 12],
        [0,3,4, 15],
        [2,0,4, 11],
        [2,3,0, 9],
        [0,0,0, 0],
    ])('testing %s, %s and %s with expected result not %s', function(arg1, arg2, arg3, result) {
        expect(calcExpression(arg1, arg2, arg3)).not.toBe(result)
    })
})
describe('defineScores', function() {
    it('should be defined', function() {
        expect(defineScores).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof defineScores).toBe('function')
    })
    test.each([
        [1, `F`],
        [19, `F`],
        [20, `E`],
        [21, `E`],
        [39, `E`],
        [40, `D`],
        [45, `D`],
        [59, `D`],
        [60, `C`],
        [62, `C`],
        [74, `C`],
        [75, `B`],
        [76, `B`],
        [89, `B`],
        [90, `A`],
        [95, `A`],
        [100, `A`],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(defineScores(arg1)).toBe(result)
    })
    test.each([
        [1, `A`, `B`, `C`, `D`, `E`],
        [19, `A`, `B`, `C`, `D`, `E`],
        [20, `A`, `B`, `C`, `D`, `F`],
        [21, `A`, `B`, `C`, `D`, `F`],
        [39, `A`, `B`, `C`, `D`, `F`],
        [40, `A`, `B`, `C`, `E`, `F`],
        [45, `A`, `B`, `C`, `E`, `F`],
        [59, `A`, `B`, `C`, `E`, `F`],
        [60, `A`, `B`, `D`, `E`, `F`],
        [62, `A`, `B`, `D`, `E`, `F`],
        [74, `A`, `B`, `D`, `E`, `F`],
        [75, `A`, `C`, `D`, `E`, `F`],
        [76, `A`, `C`, `D`, `E`, `F`],
        [89, `A`, `C`, `D`, `E`, `F`],
        [90, `B`, `C`, `D`, `E`, `F`],
        [95, `B`, `C`, `D`, `E`, `F`],
        [100, `B`, `C`, `D`, `E`, `F`],
    ])('testing %s with expected result neither %s nor %s nor %s nor %s nor %s', function(arg1, result) {
        expect(defineScores(arg1)).not.toBe(result)
    })
})    
describe('evenSum', function() {
    it('should be defined', function() {
        expect(evenSum).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof evenSum).toBe('function')
    })
    test.each([
        [99, {"quantity": 49, "sum": 2450 }],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(evenSum(arg1)).toStrictEqual(result)
    })
    test.each([
        [99, {"quantity": 99, "sum": 5050 }],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(evenSum(arg1)).not.toStrictEqual(result)
    })
})
describe('primeNumber', function() {
    it('should be defined', function() {
        expect(primeNumber).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof primeNumber).toBe('function')
    })
    test.each([
        [13, true],
        [1, false],
        [2, true],
        [8, false],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(primeNumber(arg1)).toBe(result)
    })
    test.each([
        [13, false],
        [1, true],
        [2, false],
        [8, true],
        [0, false],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(primeNumber(arg1)).not.toBe(result)
    })
})
describe('squareRoot', function() {
    it('should be defined', function() {
        expect(squareRoot).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof squareRoot).toBe('function')
    })
    test.each([
        [9, `Квадратный корень из 9 = 3`],
        [1, `Квадратный корень из 1 = 1`],
        [8, `Целое число из квадратного корня 8 = 2`],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(squareRoot(arg1)).toBe(result)
    })
    test.each([
        [10, `Квадратный корень из 10 = 3`],
        [2, `Квадратный корень из 2 = 1`],
        [9, `Целое число из квадратного корня 9 = 3`],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(squareRoot(arg1)).not.toBe(result)
    })
})
describe('calculateFactorial', function() {
    it('should be defined', function() {
        expect(calculateFactorial).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof calculateFactorial).toBe('function')
    })
    test.each([
        [1, 1],
        [5, 120],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(calculateFactorial(arg1)).toBe(result)
    })
    test.each([
        [1, 2],
        [5, 0],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(calculateFactorial(arg1)).not.toBe(result)
    })
})
describe('sumOfNumbers', function() {
    it('should be defined', function() {
        expect(sumOfNumbers).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof sumOfNumbers).toBe('function')
    })
    test.each([
        [14, 5],
        [58, 13],
        [0, 0],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(sumOfNumbers(arg1)).toBe(result)
    })
    test.each([
        [14, `5`],
        [58, `13`],
        [58, 58],
        [14, 14],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(sumOfNumbers(arg1)).not.toBe(result)
    })
})
describe('mirrorNumber', function() {
    it('should be defined', function() {
        expect(mirrorNumber).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof mirrorNumber).toBe('function')
    })
    test.each([
        [123, 321],
        [1234, 4321],
        [52, 25],
        [1, 1],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(mirrorNumber(arg1)).toBe(result)
    })
    test.each([
        [123, 123],
        [58, `85`],
        [5832, 2358],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(mirrorNumber(arg1)).not.toBe(result)
    })
})
describe('findMinElement', function() {
    it('should be defined', function() {
        expect(findMinElement).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof findMinElement).toBe('function')
    })
    test.each([
        [[2,3,4,6], 2],
        [[2,3,2,6], 2],
        [[2,-3,2,6], -3],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(findMinElement(arg1)).toBe(result)
    })
    test.each([
        [[0,2,3,4,6,44,65], 2],
        [[1,2,3,-4,6,44,65], 1],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(findMinElement(arg1)).not.toBe(result)
    })
})
describe('findMaxElement', function() {
    it('should be defined', function() {
        expect(findMaxElement).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof findMaxElement).toBe('function')
    })
    test.each([
        [[1,2,3,4,5], 5],
        [[-5,-4,-3,-2,-1], -1],
        [[0], 0],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(findMaxElement(arg1)).toBe(result)
    })
    test.each([
        [[1,2,3,4,5], 15],
        [[-5,-4,-3,-2,-1], -5],
        [[0], undefined],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(findMaxElement(arg1)).not.toBe(result)
    })
})
describe('findMinIndex', function() {
    it('should be defined', function() {
        expect(findMinIndex).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof findMinIndex).toBe('function')
    })
    test.each([
        [[1,2,3,4,5], 0],
        [[-5,-4,-3,-2,-1], 0],
        [[0], 0],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(findMinIndex(arg1)).toBe(result)
    })
    test.each([
        [[1,2,3,4,5], 1],
        [[-5,-4,-3,-2,-1], -5],
        [[0, 1], 1],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(findMinIndex(arg1)).not.toBe(result)
    })
})
describe('findMaxIndex', function() {
    it('should be defined', function() {
        expect(findMaxIndex).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof findMaxIndex).toBe('function')
    })
    test.each([
        [[1,2,3,4,5], 4],
        [[-5,-4,-3,-2,-1], 4],
        [[0,1], 1],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(findMaxIndex(arg1)).toBe(result)
    })
    test.each([
        [[1,2,3,4,5], 5],
        [[-5,-4,-3,-2,-1], -1],
        [[0, 1], 2],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(findMaxIndex(arg1)).not.toBe(result)
    })
})
describe('summOfOdds', function() {
    it('should be defined', function() {
        expect(summOfOdds).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof summOfOdds).toBe('function')
    })
    test.each([
        [[1,2,3,4,5,6], 12],
        [[1,2], 2],
        [[1], 0],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(summOfOdds(arg1)).toBe(result)
    })
    test.each([
        [[1,2,3,4,5,6], 9],
        [[1,2], 1],
        [[1], 1],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(summOfOdds(arg1)).not.toBe(result)
    })
})
describe('arrRevers', function() {
    it('should be defined', function() {
        expect(arrRevers).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof arrRevers).toBe('function')
    })
    test.each([
        [[1,2,3,4,5,6], [6,5,4,3,2,1]],
        [[1,2,3,4,5], [5,4,3,2,1]],
        [[1,2], [2,1]],
        [[1], [1]],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(arrRevers(arg1)).toStrictEqual(result)
    })
    test.each([
        [[1,2,3,4,5], [3,2,1,5,4]],
        [[1,2,3,4], [2,1,4,3]],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(arrRevers(arg1)).not.toBe(result)
    })
})
describe('quantityOfOddElements', function() {
    it('should be defined', function() {
        expect(quantityOfOddElements).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof quantityOfOddElements).toBe('function')
    })
    test.each([
        [[1,2,3,4,5], 2],
        [[1,2,3,4], 2],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(quantityOfOddElements(arg1)).toStrictEqual(result)
    })
    test.each([
        [[1,2,3,4,5], 6],
        [[1,2,3,4], 3],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(quantityOfOddElements(arg1)).not.toBe(result)
    })
})
describe('switchElements', function() {
    it('should be defined', function() {
        expect(switchElements).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof switchElements).toBe('function')
    })
    test.each([
        [[1,2,3,4], [3,4,1,2]],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(switchElements(arg1)).toStrictEqual(result)
    })
    test.each([
        [[1,2,3,4], [4,3,2,1]],
        [[1,2,3,4], [2,1,4,3]],
    ])('testing %s with expected result not %s', function(arg1, result) {
        expect(switchElements(arg1)).not.toBe(result)
    })
})
describe('dayOfWeek', function() {
    it('should be defined', function() {
        expect(dayOfWeek).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof dayOfWeek).toBe('function')
    })
    test.each([
        [1, `Monday`],
        [2, `Tuesday`],
        [3, `Wednesday`],
        [4, `Thursday`],
        [5, `Friday`],
        [6, `Saturday`],
        [7, `Sunday`],
        [8, `Try again`],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(dayOfWeek(arg1)).toBe(result)
    })
    test.each([
        [1, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`, `Try again`],
        [2, `Monday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`, `Try again`],
        [3, `Monday`, `Tuesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`, `Try again`],
        [4, `Monday`, `Tuesday`, `Wednesday`, `Friday`, `Saturday`, `Sunday`, `Try again`],
        [5, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Saturday`, `Sunday`, `Try again`],
        [6, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Sunday`, `Try again`],
        [7, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Try again`],
        [8, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`],
    ])('testing %s with expected result neither %s nor %s nor %s nor %s nor %s nor %s nor %s', function(arg1, result) {
        expect(dayOfWeek(arg1)).not.toBe(result)
    })
})
describe('lengthDefine', function() {
    it('should be defined', function() {
        expect(lengthDefine).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof lengthDefine).toBe('function')
    })
    test.each([
        [{x:1, y:3}, {x: 4, y: 7}, 5],
    ])('testing %s and %s with expected result %s', function(arg1, arg2, result) {
        expect(lengthDefine(arg1, arg2)).toBe(result)
    })
    test.each([
        [{x:1, y:3}, {x: 4, y: 7}, 25],
    ])('testing %s and %s with expected result not %s', function(arg1, arg2, result) {
        expect(lengthDefine(arg1, arg2)).not.toBe(result)
    })
})
describe('getString', function() {
    it('should be defined', function() {
        expect(getString).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof getString).toBe('function')
    })
    test.each([
        [2, `два`],
        [19, `девятнадцать`],
        [20, `двадцать`],
        [25, `двадцать пять`],
        [100, `сто`],
        [105, `сто пять`],
        [111, `сто одиннадцать`],
        [120, `сто двадцать`],
        [123, `сто двадцать три`],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(getString(arg1)).toBe(result)
    })
    test.each([
        [2, `девятнадцать`, `двадцать`, `двадцать пять`, `сто`, `сто пять`, `сто одиннадцать`, `сто двадцать`, `сто двадцать три`],
        [19, `два`, `двадцать`, `двадцать пять`, `сто`, `сто пять`, `сто одиннадцать`, `сто двадцать`, `сто двадцать три`],
        [20, `два`, `девятнадцать`, `двадцать пять`, `сто`, `сто пять`, `сто одиннадцать`, `сто двадцать`, `сто двадцать три`],
        [25, `два`, `девятнадцать`, `двадцать`, `сто`, `сто пять`, `сто одиннадцать`, `сто двадцать`, `сто двадцать три`],
        [100, `два`, `девятнадцать`, `двадцать`, `двадцать пять`, `сто пять`, `сто одиннадцать`, `сто двадцать`, `сто двадцать три`],
        [105, `два`, `девятнадцать`, `двадцать`, `двадцать пять`, `сто`, `сто одиннадцать`, `сто двадцать`, `сто двадцать три`],
        [111, `два`, `девятнадцать`, `двадцать`, `двадцать пять`, `сто`, `сто пять`, `сто двадцать`, `сто двадцать три`],
        [120, `два`, `девятнадцать`, `двадцать`, `двадцать пять`, `сто`, `сто пять`, `сто одиннадцать`, `сто двадцать три`],
        [123, `два`, `девятнадцать`, `двадцать`, `двадцать пять`, `сто`, `сто пять`, `сто одиннадцать`, `сто двадцать`],
    ])('testing %s and %s with expected result neither %s nor %s nor %s nor %s nor %s nor %s nor %s', function(arg1, result) {
        expect(getString(arg1)).not.toBe(result)
    })
})
describe('getNumber', function() {
    it('should be defined', function() {
        expect(getNumber).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof getNumber).toBe('function')
    })
    test.each([
        [`два`, 2],
        [`девятнадцать`, 19],
        [`двадцать`, 20],
        [`двадцать пять`, 25],
        [`сто`, 100],
        [`сто пять`, 105],
        [`сто одиннадцать`, 111],
        [`сто двадцать`, 120],
        [`сто двадцать три`, 123],
    ])('testing %s with expected result %s', function(arg1, result) {
        expect(getNumber(arg1)).toBe(result)
    })
    test.each([
        [`два`, 19, 20, 25, 100, 105, 111, 120, 123],
        [`девятнадцать`, 2, 20, 25, 100, 105, 111, 120, 123],
        [`двадцать`, 2, 19, 25, 100, 105, 111, 120, 123],
        [`двадцать пять`, 2, 19, 20, 100, 105, 111, 120, 123],
        [`сто`, 2, 19, 20, 25, 105, 111, 120, 123],
        [`сто пять`, 2, 19, 20, 25, 100, 111, 120, 123],
        [`сто одиннадцать`, 2, 19, 20, 25, 100, 105, 120, 123],
        [`сто двадцать`, 2, 19, 20, 25, 100, 105, 111, 123],
        [`сто двадцать три`, 2, 19, 20, 25, 100, 105, 111, 120],
    ])('testing %s and %s with expected result neither %s nor %s nor %s nor %s nor %s nor %s nor %s', function(arg1, result) {
        expect(getNumber(arg1)).not.toBe(result)
    })
})

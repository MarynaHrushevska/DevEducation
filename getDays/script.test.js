var { getDays, every, isOdd } = require('./script');

describe('getDays', function() {
    it('should be defined', function() {
        expect(getDays).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof getDays).toBe('function')
    })
    it('should be leap year', function(){
        expect(getDays(2020, 2)).toBe(29);
    })
    it('should be leap year', function(){
        expect(getDays(2020, 2)).not.toBe(28);
    })
    it('should not be leap year', function(){
        expect(getDays(2021, 2)).toBe(28);
    })
    it('should not be leap year', function(){
        expect(getDays(2021, 2)).not.toBe(29);
    })
    it('should month be string', function(){
        expect(getDays(2021, 'февраль')).toBe(28);
    })
    it('should be day as a number', function(){
        expect(getDays(2021, 1)).toBe(31);
    })
    it('should be day as a string', function(){
        expect(getDays(2021, 'январь')).toBe(31);
    })
})

describe('every', function() {
    var mock = [1,2,3];
    var mock2 = [1, -2, 3];
    var mock3 = [1, 3, 5];
    var mock4 = [2, 4, 6];
    var positive = function (mock) {
            return mock > 0;
    }
    var isEven = function (mock) {
            return mock % 2 === 0;
    }
    var isNotFunction = 'string';
    it('should be defined', function() {
        expect(every).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof every).toBe('function')
    })
    it('should only be positive numbers', function(){
        expect(every(mock, positive)).toBe(true);
    })
    it('should be even numbers', function(){
        expect(every(mock, isEven)).toBe(false);
    })
    it('should only be positive numbers', function(){
        expect(every(mock2, positive)).toBe(false);
    })
    it('should be even numbers', function(){
        expect(every(mock2, isEven)).toBe(false);
    })
    it('should only be positive numbers', function(){
        expect(every(mock3, positive)).toBe(true);
    })
    it('should be even numbers', function(){
        expect(every(mock3, isEven)).toBe(false);
    })
    it('should only be positive numbers', function(){
        expect(every(mock4, positive)).toBe(true);
    })
    it('should be even numbers', function(){
        expect(every(mock4, isEven)).toBe(true);
    })
    it('should be even numbers', function(){
        expect(every(mock4)).toBe(false);
    })
    it('should be function as an argument', function(){
        expect(typeof positive).toBe('function');
    })
    it('should be function as an argument', function(){
        expect(typeof isEven).toBe('function');
    })
})

describe('isOdd', function() {
    it('should be defined', function() {
        expect(isOdd).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof isOdd).toBe('function')
    })
    it('should be even numbers', function(){
        expect(Number(5).isOdd()).toBe(true);
    })
    it('should not be odd numbers', function(){
        expect(Number(4).isOdd()).toBe(false);
    })
})
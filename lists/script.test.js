const { it, expect } = require('@jest/globals');
var { ArrayList } = require('./script');

describe('ArrayList', function() {
    it('ArrayList should be defined', function() {
        expect('ArrayList').toBeDefined();
    })
    it('ArrayList should be function', function() {
        expect(typeof ArrayList).toBe('function');
    })
    it('alist should be object', function() {
        var alist = new ArrayList(7);
        expect(typeof alist).toBe('object');
    })
    it('should create array with capacity 7', function() {
        var alist = new ArrayList(7);
        expect(alist.capacity).toBe(7);
        alist.clear();
    })
    it('should add element to array', function() {
        var alist = new ArrayList();
        alist.add(7);
        expect(alist.array).toContain(7);
        alist.clear();
    })
    it('clear\'s argument should be array', function() {
        var alist = new ArrayList(7);
        alist.add(7);
        alist.clear();
        expect(alist.size).toBe(0);
    })
    it('should return size of array', function () {
        var alist = new ArrayList(7);
        alist.add(7);
        expect(alist.getSize()).toBe(1);
        alist.clear();
    })
    it('should add element to array', function() {
        var alist = new ArrayList(7);
        alist.add(9);
        expect(alist.array).toEqual([9, undefined, undefined, undefined, undefined, undefined, undefined]);
        alist.clear();
    })
    it('should set element at index', function() {
        var alist = new ArrayList(7);
        alist.set(4, 2);
        expect(alist.array).toEqual([undefined,undefined,4, undefined, undefined, undefined, undefined]);
        alist.clear();
    })
    it('should return element by index', function () {
        var alist = new ArrayList(7);
        alist.add(9);
        expect(alist.get(0)).toBe(9);
        alist.clear(); 
    })
    it('should remove element by index', function() {
        var alist = new ArrayList(7);
        alist.add(9);
        alist.add(9);
        alist.add(9);
        expect(alist.remove(0)).toBe(9)
        alist.clear(); 
    })
    it('should be array', function () {
        var alist = new ArrayList(7);
        expect(Array.isArray(alist.toArray())).toBe(true);
        alist.clear(); 
    })
    it('should be string and return string', function() {
        var alist = new ArrayList([1,2]);
        expect(alist.toString()).toBe('1,2');
        alist.clear(); 
    })
    it('should contain number and return false', function() {
        var alist = new ArrayList([1,2,3,4,5]);
        expect(alist.contains(1)).toBe(true);
        expect(alist.contains(3)).toBe(true);
        expect(alist.contains(5)).toBe(true);
        expect(alist.contains(6)).toBe(false);
        alist.clear(); 
    })
    it('should return min value of an array', function () {
        var alist = new ArrayList([4,6,7,4,8,1,9,2]);
        expect(alist.minValue()).toBe(1);
        alist.clear(); 
    })
    it('should return max value of an array', function () {
        var alist = new ArrayList([4,6,7,4,8,1,9,2]);
        expect(alist.maxValue()).toBe(9);
        alist.clear(); 
    })
    it('should return index of min value of an array', function () {
        var alist = new ArrayList([4,6,7,4,8,1,9,2]);
        expect(alist.minIndex()).toBe(5);
        alist.clear();
    })
    it('should return index of max value of an array', function () {
        var alist = new ArrayList([4,6,7,4,8,1,9,2]);
        expect(alist.maxIndex()).toBe(6);
        alist.clear();
    })
    it('should reverse an array', function () {
        var alist = new ArrayList([4,6,7,4,8,1,9,2]);
        expect(alist.reverse()).toStrictEqual([2,9,1,8,4,7,6,4]);
        alist.clear();
    })
    it('should reverse half of array', function () {
        var alist = new ArrayList([4,6,7,4,8,1,9,2]);
        expect(alist.halfReverse()).toStrictEqual([8,1,9,2,4,6,7,4]);
        alist.clear();
    })
    it('should remove elements from array', function() {
        var alist = new ArrayList([4,6,7,4,8,1,9,2]);
        expect(alist.removeAll([7,8])).toStrictEqual([4,6, undefined, 4, undefined, 1,9,2]);
        alist.clear();
    }) 
    it('should retain elements from array', function() {
        var alist = new ArrayList([4,6,7,4,4,8,1,9,2]);
        alist.retainAll([4, 6]);
        expect(alist.array).toStrictEqual([4,6,undefined,4,4,undefined,undefined,undefined,undefined]);
        alist.clear();
    }) 
    it('should sort array', function() {
        var alist = new ArrayList([3,2,4,1]);
        expect(alist.sort()).toStrictEqual([1,2,3,4]);
        alist.clear();
    })
})

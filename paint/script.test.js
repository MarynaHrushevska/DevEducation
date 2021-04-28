var { paint, support } = require('./script');

describe('paint', function() {
    it('paint should be defined', function() {
        expect(paint).toBeDefined()
    })
    it('paint should be function', function() {
        expect(typeof paint).toBe('function');
    })
    it('should draw line', function() {
        var fn = support.drawLine;
        expect(fn).toBeDefined();
        expect(typeof fn).toBe('function');
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
      
        expect(ctx).not.toBeUndefined();
        expect(fn(ctx, 1, 1)).toBe();
    })
    it('should pick thickness', function() {
        var fn = support.pickThickness;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        expect(fn).toBeDefined();
        expect(typeof fn).toBe('function');
        expect(fn(ctx, '2')).toBe();
    })
    it('should pick color', function() {
        var fn = support.pickColor;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        expect(fn).toBeDefined();
        expect(typeof fn).toBe('function');
        expect(fn(ctx, 'white')).toBe();
    })
    it('should be onPaint', function() {
        var fn = support.onPaint;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        expect(fn).toBeDefined();
        expect(typeof fn).toBe('function');
        expect(fn(ctx, 1, 1)).toBe();
    })
    it('should clear canvas', function() {
        var fn = support.clearCanvas;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        expect(fn).toBeDefined();
        expect(typeof fn).toBe('function');
        expect(fn(ctx, canvas)).toBe();
    })
    it('should save canvas', function() {
        var fn = support.saveImage;
        var canvas = document.createElement("canvas");
        var body = document.createElement('body');
        expect(fn).toBeDefined();
        expect(typeof fn).toBe('function');
        expect(fn(canvas, body)).toBe();
    })
})
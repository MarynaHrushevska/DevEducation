'use strict';
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var painting = document.getElementById('content');
var paintedStyle = getComputedStyle(painting);
var colorPick = document.getElementById('myColor');
var thicknessPick = document.getElementById('myThickness');
var tempColor = null;
var tempThickness = null;

canvas.width = parseInt(paintedStyle.getPropertyValue('width'));
canvas.height = parseInt(paintedStyle.getPropertyValue('height'));

var mouse = { x: 0, y: 0 };

canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetLeft - 125;
});

// ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
colorPick.addEventListener('change', function() {
    tempColor = colorPick.value;
    ctx.strokeStyle = tempColor;
})
thicknessPick.addEventListener('change', function() {
    tempThickness = thicknessPick.value;
    ctx.lineWidth = tempThickness;
})

canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    canvas.addEventListener('mousemove', onPaint, false);
})

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false)
})

function onPaint () {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
}

'use strict';
var body = document.getElementById('body');
var canvas = document.getElementById('myCanvas');
var painting = document.getElementById('content');
var thicknessPick = document.getElementById('myThickness');
var colorPick = document.getElementById('myColor');
var bin = document.getElementById('bin');
var saveImg = document.getElementById('save-img');
var ctx = canvas.getContext('2d');
var paintedStyle = getComputedStyle(painting);
var tempColor = null;
var tempThickness = null;

canvas.width = parseInt(paintedStyle.getPropertyValue('width'));
canvas.height = parseInt(paintedStyle.getPropertyValue('height'));

var mouse = { x: 0, y: 0 };
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetLeft - 125;
});

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
bin.addEventListener('click', clearCanvas);
saveImg.addEventListener('click', saveImage);
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
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
}
function saveImage() {
    var a = document.createElement('a');
    body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = 'canvas-img.jpeg';
    a.click();
    body.removeChild(a);
}

window.addEventListener('DOMContentLoaded', () => {
    paint();
})

var support = {
    drawLine(ctx, x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y);    
    },
    pickThickness(ctx, tempThickness) {
        ctx.lineWidth = tempThickness;
    },
    pickColor(ctx, tempColor) {
        ctx.strokeStyle = tempColor;
    },
    onPaint(ctx, x, y) {
        ctx.lineTo(x, y);
        ctx.stroke();
    },
    clearCanvas(ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
    },
    saveImage(canvas, body) {
        var a = document.createElement('a');
        body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = 'canvas-img.jpeg';
        a.click();
        body.removeChild(a);
    }
}

var paint = function () {
    var canvas = document.getElementById('myCanvas');
    var painting = document.getElementById('content');
    var thicknessPick = document.getElementById('myThickness');
    var colorPick = document.getElementById('myColor');
    var bin = document.getElementById('bin');
    var saveImg = document.getElementById('save-img');
    var ctx = canvas.getContext('2d');
    var paintedStyle = getComputedStyle(painting);
    var mouse = { x: 0, y: 0 };
    
    function onPaintHandler() {
        support.onPaint(ctx, mouse.x, mouse.y);
    }

    canvas.width = parseInt(paintedStyle.getPropertyValue('width'));
    canvas.height = parseInt(paintedStyle.getPropertyValue('height'));
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.addEventListener('mousemove', function(e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetLeft - 125;
    });

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    colorPick.addEventListener('change', () => {
        support.pickColor(ctx, colorPick.value)
    })
    thicknessPick.addEventListener('change', () => {
        support.pickThickness(ctx, thicknessPick.value);
    })
    bin.addEventListener('click', () => {
        support.clearCanvas(ctx, canvas);
    });
    saveImg.addEventListener('click', () => {
        support.saveImage(canvas, document.body);
    });
    canvas.addEventListener('mousedown', () => {
        support.drawLine(ctx, mouse.x, mouse.y);
        canvas.addEventListener('mousemove', onPaintHandler, false);
    });
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', onPaintHandler, false);
    });
}

module.exports = { support, paint };
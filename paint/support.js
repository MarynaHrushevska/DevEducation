var support = {
    drawLine() {
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        canvas.addEventListener('mousemove', onPaint, false);
    },
    pickThickness() {
        tempThickness = thicknessPick.value;
        ctx.lineWidth = tempThickness;
    },
    pickColor() {
        tempColor = colorPick.value;
        ctx.strokeStyle = tempColor;
    },
    removeListener() {
        canvas.removeEventListener('mousemove', onPaint, false);
    },
    onPaint () {
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    },
    clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
    },
    saveImage() {
        var a = document.createElement('a');
        body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = 'canvas-img.jpeg';
        a.click();
        body.removeChild(a);
    }
}
export default support;
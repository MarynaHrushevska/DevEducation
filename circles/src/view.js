import { FULL_HEIGHT, FULL_WIDTH } from '..constants';
export class View {
    constructor () {
        this.root = null;
        this.onClick = null;
        this.ctx = null;

        this.init();
    }

    init () {
        this.root = document.getElementById('container');
        this.field = document.getElementById('svg');
        field.addEventListener('click', function(event) {
            this.onClick && this.onClickCanvas(event.offsetX, event.offsetY);
            console.log('j');
        })
        this.ctx = field.getContext('2d');
    }
    drawCircle (circle) {
        var { x, y, radius, color } = circle;

        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }
    clear () {
        this.ctx.clearRect(0, 0, FULL_WIDTH, FULL_HEIGHT);
    }
    setOnClick (callback) {
        this.onClick = callback;
    }
}

import { FULL_WIDTH, FULL_HEIGHT, MAX_RADIUS, MIN_SPEED, MAX_SPEED, MIN_RADIUS } from '..constants';

export class Model {
    constructor () {
        var circle = this.createCircle();
        this.circle = new Circle(circle);
    }
    createCircle () {
        const radius = Math.floor(Math.random() * MAX_RADIUS + MIN_RADIUS);
        const x = Math.floor(Math.random() * (FULL_WIDTH - 2 * radius) + radius);
        const y = Math.floor(Math.random() * (FULL_HEIGHT - 2 * radius) + radius);
        const angle = Math.random() * 2 * Math.PI;
        const dx = Math.cos(angle);
        const dy = Math.sin(angle);
        const speed = Math.floor(Math.random() * MAX_SPEED + MIN_SPEED);
        const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        const circle = { x, y, dx, dy, radius, color, speed };
    
        return circle;
    }
}
export class Circle {
    x = 0;
    y = 0;
    dx = 0;
    dy = 0;
    radius = 0;
    color = 'black';
    speed = 0;

    constructor(startCircle) {
        const { x, y, dx, dy, radius, color, speed } = startCircle;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }

    setDx(dx) {
        this.dx = dx;
    }
    setDy(dy) {
        this.dy = dy;
    }
    setX (x) {
        this.x = x;
    }
    setY (y) {
        this.y = y;
    }
}

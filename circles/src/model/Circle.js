export default class Circle {
    x = 0;  //  center x
    y = 0;  //  center y
    dx = 0; // speed by x
    dy = 0; // speed by y
    radius = 0;
    color = 'black';
    speed = 0;

    constructor(startCircle) {
        const { x, y, dx, dy, radius, color, speed, id } = startCircle;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.id = id;
        this.isColliding = false;
    }

    setDx = dx => {
        this.dx = dx;
    }

    setDy = dy => {
        this.dy = dy;
    }

    setX = x => this.x = x;

    setY = y => this.y = y;

    setIsColliding(isColliding) {
        this.isColliding = isColliding;
    }
}

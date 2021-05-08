import { FULL_WIDTH, FULL_HEIGHT } from '../constants';
import { Model } from '../model';

export class Controller {
    constructor(view, physics) {
        this.view = view;
        this.physics = physics;
        this.view.setOnClickCanvas(this.onClickCircle);
        this.models = [];
    }
    
    draw = (model) => {
        this.view.drawCircle(model.circle);
    };

    play = () => {
        let lastTime = null;
        const render = (time) => {
            if (!lastTime) {
                lastTime = time;
            }
            const timeDelta = time - lastTime;

            this.models.forEach(model => {
                this.move(model, timeDelta);
                this.draw(model);
                this.handleCollisions();
            });
            requestAnimationFrame(render);
            lastTime = time;
        };

        requestAnimationFrame(render);
    };

    move = (model, timeDelta) => {
        const { circle } = model;
        const newX = circle.x + ((circle.speed * timeDelta) / 1000) * circle.dx;
        const newY = circle.y + ((circle.speed * timeDelta) / 1000)  * circle.dy;

        circle.setX(newX);
        this.fixHorizontal(circle);
        circle.setY(newY);
        this.fixVertical(circle);
    }

    fixHorizontal = circle => {
        const { x, dx, radius } = circle;
        const maxX = FULL_WIDTH - radius;
        const minX = radius;
        const offset = 3;

        if (x <= minX) {
            circle.setX(minX + offset);
            circle.setDx(-dx);
        }

        if (x >= maxX) {
            circle.setX(maxX - offset);
            circle.setDx(-dx);
        }
    }

    fixVertical = circle => {
        const { y, dy, radius } = circle;
        const maxY = FULL_HEIGHT - radius;
        const minY = radius;
        const offset = 3;

        if (y <= minY) {
            circle.setY(minY + offset);
            circle.setDy(-dy);
        }

        if (y >= maxY) {
            circle.setY(maxY - offset);
            circle.setDy(-dy);
        }
    }

    handleCollisions() {
        this.models.forEach(model => model.circle.setIsColliding(false));

        for (let i = 0; i < this.models.length; i++) {
            const targetCircle = this.models[i].circle;
            for (let j = i + 1; j < this.models.length; j++) {
                const circle = this.models[j].circle;
                if (circle.id === targetCircle.id || circle.isColliding) {
                    return;
                }

                if (this.physics.detectCirclesCollision(targetCircle, circle)) {
                    circle.setIsColliding(true);
                    targetCircle.setIsColliding(true);
                    this.physics.handleCirclesCollision(targetCircle, circle);
                }
            }
        }
    }

    onClickCircle = (clickX, clickY) => {
        let anyCollision = false;
        for (let model of this.models) {
            if (this.physics.detectCircleAndPointCollision(model.circle, { x: clickX, y: clickY })) {
                anyCollision = true;
                break;
            }
        }

        if (!anyCollision && this.models.length < 10) {
            this.models.push(new Model(clickX, clickY));
        }
    }
}

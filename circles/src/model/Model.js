import Circle from './Circle';
import { MAX_RADIUS, MIN_SPEED, MAX_SPEED, MIN_RADIUS } from '../constants';

export class Model {
    constructor(x, y) {
        const circle = this.createCircle(x, y);
        this.circle = new Circle(circle);
    }

    getRandomId(length) {
        const result = [];
        const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const symbolsLength = symbols.length;
        for (let i = 0; i < length; i++ ) {
            result.push(symbols.charAt(Math.floor(Math.random() * symbolsLength)));
        }
        return result.join('');
    }

    createCircle = (x, y) => {
        const radius = Math.floor(Math.random() * MAX_RADIUS + MIN_RADIUS);
        const angle = Math.random() * 2 * Math.PI;
        const dx = Math.cos(angle);
        const dy = Math.sin(angle);
        const speed = Math.floor(Math.random() * MAX_SPEED + MIN_SPEED);
        const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        const id = this.getRandomId(10);
        return { id, x, y, dx, dy, radius, color, speed };
    }
}

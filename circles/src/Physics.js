export class Physics {
    getDistance(circleA, circleB) {
        const distX = circleA.x - circleB.x;
        const distY = circleA.y - circleB.y;
        return Math.sqrt((distX * distX) + (distY * distY));
    }

    detectCirclesCollision(circleA, circleB) {
        const distance = this.getDistance(circleA, circleB);
        if (distance <= circleA.radius + circleB.radius) {
            return true;
        }
        return false;
    }

    detectCircleAndPointCollision(circle, point) {
        const { x: circleX, y: circleY, radius } = circle;
        if (
            (Math.abs(circleX - point.x) <= radius * 1.25) &&
            (Math.abs(circleY - point.y) <= radius * 1.25)
        ) {
            return true;
        }

        return false;
    }

    getCollisionVector(circleA, circleB) {
        return {
            x: circleB.x - circleA.x,
            y: circleB.y - circleA.y
        };
    }

    getVelocityVector(circleA, circleB) {
        return {
            x: circleA.dx - circleB.dx,
            y: circleA.dy - circleB.dy
        };
    }

    handleCirclesCollision(circleA, circleB) {
        let collisionVector = this.getCollisionVector(circleA, circleB);
        let distance = this.getDistance(circleA, circleB);
        let collisionVectorNorm = {
            x: collisionVector.x / distance,
            y: collisionVector.y / distance
        };
        let relativeVelVector = this.getVelocityVector(circleA, circleB);
        let speed = relativeVelVector.x * collisionVectorNorm.x + relativeVelVector.y * collisionVectorNorm.y;
        if (speed < 0) {
            return;
        }

        let impulse = 1.7 * speed / (circleA.radius + circleB.radius);
        circleA.dx -= (impulse * circleA.radius * collisionVectorNorm.x);
        circleA.dy -= (impulse * circleA.radius * collisionVectorNorm.y);
        circleB.dx += (impulse * circleB.radius * collisionVectorNorm.x);
        circleB.dy += (impulse * circleB.radius * collisionVectorNorm.y);
    }
}

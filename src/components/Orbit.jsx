export default class Orbit {
    constructor(distance, {
        orbitAxes,
        factor,
        targetEl
    }) {
        factor = factor || ((Math.random() * 1) + 0.5) * (Math.random() < 0.5 ? 1 : -1);
        this.distance = distance;
        this.factor = factor;
        const orbitAxesOptions = {
            all: ["top", "bottom", "right", "left"],
            x: ["right", "left"],
            y: ["top", "bottom"]
        }
        this.orbitors = orbitAxesOptions[orbitAxes].map(
            dir => new Orbitor(dir, distance)
        );
    }
        
    loop() {
        // noFill();
        // stroke(255, 130);
        // strokeWeight(2);
        // circle(0, 0, this.distance*2);
        // noStroke();
        // fill("green");
        for (let i = 0; i < this.orbitors.length; i++) {
            this.orbitors[i].update(this.factor * deltaTime);
            this.orbitors[i].show();
        }
    }
    
    setDistance(distance) {
        this.distance = distance;
        this.orbitors.forEach(
            orbitor => orbitor.setDistance(distance)
        );
    }
}

class Orbitor {
    constructor(direction, distance) {
        const DIRECTIONS = {
        top: createVector(0, -1),
        bottom: createVector(0, 1),
        left: createVector(-1, 0),
        right: createVector(1, 0)
        }
        this.direction = DIRECTIONS[direction];
        this.distance = distance;
    }

    setDistance(distance) {
        this.distance = distance;
    }

    update(factor=1) {
        this.direction.setHeading(
        this.direction.heading() + (inc * factor)
        );
    }

    show() {
        const pos = this.direction.copy();
        pos.setMag(this.distance);
        rect(pos.x, pos.y, size);   
    }
}
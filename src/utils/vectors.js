export default class Vec2D {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    clone() {
        return new Vec2D(this.x, this.y);
    }
    heading() {
        return Math.atan2(this.x, this.y);
    }
}
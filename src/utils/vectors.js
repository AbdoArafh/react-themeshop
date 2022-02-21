export default class Vec2D {
    constructor(x=0, y=x?x:0) {
        this.x = x;
        this.y = y;
    }
    clone() {
        return new Vec2D(this.x, this.y);
    }
    heading() {
        return Math.acos(this.x)
    }
}
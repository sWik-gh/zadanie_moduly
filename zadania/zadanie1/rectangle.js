class rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.height + this.width);
    }
}

export default rectangle;
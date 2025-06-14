class Shape {
    constructor() {}
    
    move() {
        console.log("move");
    }
    
    draw() {
        console.log("Shape draw");
    }
}

class Square extends Shape {
    constructor(){
        super()
    }
    
    draw(){
        super.draw();
        console.log("Square draw");
    }
}

const square = new Square("green");

square.move();

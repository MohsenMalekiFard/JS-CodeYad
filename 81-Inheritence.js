class Shape{
    
    move(){
        console.log("move");
    }
}



class Circle extends Shape{
    
}


class Square extends Shape{
    draw(){
        console.log("draw");
    }
}

class Triangle extends Shape{
    
}

const circle = new Circle();
const square = new Square();
const shape = new Shape();


circle.move();
square.move();
shape.move();

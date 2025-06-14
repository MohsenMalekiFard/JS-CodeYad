class Shape{
    #color;
    constructor(color){
        this.#color = color;
    }
    move(){
        console.log(this.#color);
    }
}


class Square extends Shape{
    constructor(color){
        super(color)
    }
    draw(){
        console.log("draw");
    }
}


const square = new Square("green");


square.move();

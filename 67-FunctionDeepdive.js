function Car(speed) {
  this.speed = speed;
  this.move = function () {
    console.log("moving");
  };
}


const car1=new Function('speed',` 
this.speed = speed;
this.move = function () {
  console.log("moving");
};`);


const carObject=new car1(80);


const car=new Car(120);

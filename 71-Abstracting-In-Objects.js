function Car(name, speed) {
  this.name = name;

   let bodyWeight = 550;

  let calculateSpeed = function () {
    bodyWeight / 12;
  };

  this.maxSpeed = function () {
    calculateSpeed();
    console.log(speed);
  };
}

const pride = new Car("killer machine", 180);

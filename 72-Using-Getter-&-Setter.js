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

  Object.defineProperty(this,'bodyWeight',{
    get: function() {
      return bodyWeight;
    },
    set: function(value) {
      if(value <= 0){
        throw new Error("Invalid Number");
      }

      bodyWeight=value+10;
    }

  })

}

const pride = new Car("killer machine", 180);
pride.bodyWeight=220;
console.log(pride.bodyWeight);

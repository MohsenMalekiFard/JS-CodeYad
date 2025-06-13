//Factory Function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// Constructor Function

function Circle(radius) { 
 console.log('this :',this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const newObject = new Circle(2);
const newObjec2 = new Circle(3);

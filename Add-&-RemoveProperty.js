function Car(name, speed) {

  this.name = name;

  this.maxSpeed = function () {

    console.log(speed);

  };

}



// const porche= new Car('porche macan',380);



const pride = new Car("killer machine", 180);



 pride.model={ year:1394};



 const propertyName='model year';



 pride[propertyName]={ year:1394};





 delete pride.model; 



 delete pride[propertyName];




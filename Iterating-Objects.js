function Car(name, speed) {
  this.name = name;
  this.maxSpeed = function () {
    console.log(speed);
  };
}



const pride = new Car("killer machine", 180);

for(let key in pride){
   if(typeof pride[key] !== 'function')
    console.log(key, typeof pride[key]);
}


const keys=Object.keys(pride);
console.log(keys);

 
if("name" in pride)
  console.log("name is in pride");

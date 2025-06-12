
const cars=["Benz","BMW","Peykan","Pride","Alfa Romeo"];


const car = { name:"BMW X3",   productYear:2006 ,color:"Blue" , isABS:true }


for (const key in car) {
 
  console.log("For in : "+key);
}

for(value of car) 
{
console.log("For Of : "+value);
}




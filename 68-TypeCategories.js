// **** Primitive types *****



// Number

// String

// Boolean

// Undefined

// Null

// Symbol



// **** Reference types *****



// Arrays

// Objects

// Functions





//Primitive Type



let a = { value: 10 };

let b = a;

a.value = 20;



// a output : {value: 20}

// b output : {value: 20}





//Reference Type



let a1 = 10;

let b1 = a1;

a1 = 20;



// a output : 20

// b output :  10





//Reference Type



let array1=[1,2,3];

let array2=array1;



array1.push(4);





//Primitive Type



let str1="Hello";

let str2=str1;

str1="Hi";





//Reference Type



let obj1={name:'mohammad',age:24};

let obj2=obj1;

obj1.age=30;

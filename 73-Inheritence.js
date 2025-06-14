class Animal{
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return this.name + 'صدا می کند.';
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    
    bark() {
        return this.name + 'واق واق میکند!';
    }
}


const myDog = new Dog('هاپو');
console.log(myDog.speak()); //هاپو صدا میکند.
console.log(myDog.bark()); //هاپو واق واق میکند!

//------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person{
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
}

const student = new Student('Mohsen', "M");
console.log(student.name); //Mohsen
console.log(student.grade); //M

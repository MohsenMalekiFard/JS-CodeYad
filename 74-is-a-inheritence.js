class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal { //Cat is an Animal
    meow() {
        return `${this.name} میو میو میکند.`;
    }
}

//استفاده
const myCat = new Cat("ملوس");
console.log(myCat instanceof Animal); //true
console.log(myCat instanceof Cat); //true

class Animal {
    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }
    eat() {
        console.log(`${this.name} is eats grass.`)
    }
    jump() {
        console.log(`${this.name} speed is ${this.speed} kmph.`)
    }
    details() {
        console.log(`${this.name} is a very funny animal and his speed ${this.speed}.`)
    }
}
/* class Rabbit extends Animal {
    run() {
        console.log("This runs very fast.")
    }
    jump(){
        // With the help of super keyword we can call method of Parent class.
        // Syntax:-> super.method()
        super.jump()
        console.log(`${this.name} jump not run ${this.speed} kmph.`)
    }
} */
// create a object
/* let champu=new Animal("Champu",20)
champu.eat()
champu.jump()
// This is another object.
let shyamu=new Rabbit('Shyamu',25)
console.log('\n')
shyamu.run()
shyamu.eat()
shyamu.jump() */
// console.log(typeof(Animal))
// ----------------Overridiig a constructor and method---------------
class Monkey extends Animal {
    constructor(name, speed) {
        super(name, speed)
        // this.name = name
        // calling a static method
       /*  we can call any static method with the help of class and static method. The following syntax is: 
       className.staticMethod()
       
       
       */
        

        this.name = Monkey.capitalize(name)
    }
    jump() {
        console.log(`${this.name} jumps easily.`)
    }
    eat() {
        console.log(`${this.name} is a vegetarian animal.`)
    }
    // -------------static method--------------------------
    static capitalize(string) {
        return string.toUpperCase()
    }

}
// -----------create an object
let kalu = new Monkey('kalu', 20)
console.log(kalu.__proto__)
kalu.eat()
kalu.jump()
// call the parent method
kalu.details()
// Monkey.capitalize()
// kalu.capitalize()

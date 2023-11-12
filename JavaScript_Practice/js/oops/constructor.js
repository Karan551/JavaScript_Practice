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
}
class Rabbit extends Animal {
    run() {
        console.log("This runs very fast.")
    }
    jump(){
        // With the help of super keyword we can call method of Parent class.
        // Syntax:-> super.method()
        super.jump()
        console.log(`${this.name} jump not run ${this.speed} kmph.`)
    }
}
// create a object
let champu=new Animal("Champu",20)
champu.eat()
champu.jump()
// This is another object.
let shyamu=new Rabbit('Shyamu',25)
console.log('\n')
shyamu.run()
shyamu.eat()
shyamu.jump()
// console.log(typeof(Animal))
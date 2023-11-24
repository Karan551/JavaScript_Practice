// 
class Complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    static addComplexNum(c1, c2) {
        // here c1 and c2 are two objects of complexNum
        let realSum = c1.real + c2.real
        let imagineSum = c1.imaginary + c2.imaginary
        return realSum + " + " + imagineSum + "i"
    }
    complexNum() {
        return this.real + " + " + this.imaginary + "i"
    }

}
// ------------create an object------------
let a1 = new Complex(2, -21)
console.log(a1.complexNum())
let a2 = new Complex(22, -11)
console.log("The real part of complex number is ", a1.real, ",", a2.real)
console.log("The imaginary part of comlex number is :", a1.imaginary, ",", a2.imaginary)
console.log('The sum of complex number is ', Complex.addComplexNum(a1, a2))

// ------------create an another class------------
class Human {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} speak easily.`)
    }
    eat() {
        console.log(`${this.name} eat easily foods`)
    }
}


class Student extends Human {
    speak() {
        console.log(`${this.name} speak and sing easily any song.`)
    }
}
let shyam = new Student('Shyam')
shyam.speak()
console.log(Student instanceof Human)
console.log(shyam instanceof Student)
console.log(shyam instanceof Human)
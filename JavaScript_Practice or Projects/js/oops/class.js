// console.log('Hello OOPS.')
// ---------------------Creating a class--------------------
class User {
    // This is a method 1.
    sayHi() {
        return "You're most welcome in OOPS " + this.name
    }
    // This is a method 2.
    greet() {
        // alert(Happy Diwali." + " this.name)
        console.log("Happy Diwali")
        return 'Happy Diwali. ' + this.name
    }
    // this is a method 3.
    /*  submit() {
         console.log(this.name + ": Your form is submitted for train number: " + this.train_no)
     } */
    print = () => {
        return'Your Name is ' + this.name
    }


    fillInformation(user_name, train_no = 22011) {
        // console.log(user_name)
        this.name = user_name
        this.train_no = train_no
    }


}
//----------- create an object
let ram = new User()
ram.fillInformation("ram")
// console.log(ram.sayHi())
// console.log(ram.greet())
console.log(ram.print())
console.log('\n')
//----------- create another object.
let shyam = new User()
// we will have to call this function before any other method otherwise
// we get this.name = undefined
shyam.fillInformation("Shyam")
console.log(shyam.print())
console.log(shyam.sayHi())
console.log(shyam.greet())
// shyam.submit()
// console.log(shyam.Name('shyam'))

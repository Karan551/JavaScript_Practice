const myHeroes = ["SpiderMan", "IronMan", "Thor", "Hulk"];

const heroPower = {
  thor: "Hammer",
  spider: "sling",
  ironman: "suit",
  hulk: "power",
  getPower: function () {
    return `Spidy Power is ${this.spider}`;
  },
};

// To insert a method manually in Object in which we can access every object.
Object.prototype.strength = function () {
  console.log("This is very powerful");
};

Object.prototype.power = "This is very interesting";

// console.log(heroPower.getPower())
// heroPower.strength();
// myHeroes.strength();

//
Array.prototype.heyMaster = "This is very careful.";
Array.prototype.getMaster = function () {
  console.log("He is very obedient.");
};

// console.log(Array.prototype);

const myArr = [1, 2, 3, 5];
/* 

console.log(myArr.heyMaster);
myArr.getMaster();

console.log(myHeroes.heyMaster);
myHeroes.getMaster(); 

*/
// console.log(Object.prototype);

// ------------Inheritance
const User = {
  name: "Ganesh",
  mail: "ganesh@google.com",
};

const Profession = {
  writeCode: true,
  language: ["Python", "JavaScript", "CSS", "React"],
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: true,
  fulltime: true,
  //   __proto__: Profession,
};
// this is the oldest way
TASupport.__proto__ = User;
TASupport.__proto__ = Teacher;

// 
// Object.setPrototypeOf()
// Object.setPrototypeOf(TASupport,Teacher)

console.log(TASupport.makeAssignment);
console.log(TASupport.makeVideo);
console.log(TASupport.mail);

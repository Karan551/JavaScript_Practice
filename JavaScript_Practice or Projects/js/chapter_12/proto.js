let animal = {
  eat: true,
  walk:'yes animal can walk easily.'
};
let rabbit = {
  jump: true,
  walk:'It is normally jump , walk is rarely.',
  __proto__:animal
};
// rabbit.__proto__ = animal;
console.log(rabbit);
console.log(rabbit.jump);
console.log(rabbit.eat);
console.log(rabbit.walk);


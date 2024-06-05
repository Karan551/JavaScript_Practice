console.log("This is a Recursion Prctice Problems Part-2");
const sumFirstNumber = (number) => {
  if (number === 0) {
    return 0;
  }
  return number + sumFirstNumber(number - 1);
};
// call the function
// console.log("Sum of first Number is:", sumFirstNumber(5));
const sumFirstOddNumber = (number) => {
  // This function add first N odd number.
  if (number === 0) {
    return 0;
  }
  return 2 * number - 1 + sumFirstOddNumber(number - 1);
};
// call the function
// console.log("Sum of first Number is:", sumFirstOddNumber(6));

const sumFirstEvenNumber = (number) => {
  // This functio add first N even Number.
  if (number === 0) {
    return 0;
  }
  return 2 * number + sumFirstEvenNumber(number - 1);
};
// call the function
// console.log("Sum of first Number is:", sumFirstEvenNumber(5));
const sumSquareNumber = (number) => {
  if (number <= 0) {
    return 0;
  }
  return number ** 2 + sumSquareNumber(number - 1);
};

const sumCubeNumber = (number) => {
    if (number <= 0) {
      return 0;
    }
    return number ** 3 + sumCubeNumber(number - 1);
  };


const factorial = (number) => {
  if (number == 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

//  Yahan se solve karna hai.
const sumOddNumber = (number) => {
  // This function add odd number up till N.
  if (number <= 0) {
    return 0;
  }
  return (number % 2) + sumOddNumber(number - 1);
  //   return number
  /*  if (number % 2 !== 0) {
    // console.log(number)
    console.log( "Helllo odd ")
    // number+
    // return number + sumOddNumber(number - 1);
  } */
};
// call the function
console.log("Sum of first Number is:", sumCubeNumber(3));
// sumOddNumber(5)

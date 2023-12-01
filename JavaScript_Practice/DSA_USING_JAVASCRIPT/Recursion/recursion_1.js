console.log("Recursion Practice Problems.");
function printNumber(number) {
  if (number <= 0) {
    return;
  }
  printNumber(number - 1);
  console.log(number);
}
// calling a function
// printNumber(10);

function printReverseNumber(number) {
  if (number <= 0) {
    return;
  }
  console.log(number);
  printReverseNumber(number - 1);
}
// calling a function
// printReverseNumber(10)

function printFirstOddNumber(number) {
  // This function print the first N odd number in console.
  if (number <= 0) {
    return;
  }
  printFirstOddNumber(number - 1);
  console.log(2 * number - 1);
}

// calling a function
// printFirstOddNumber(5)

function printReverseFirstOddNumber(number) {
  // This function print the first N odd number in  reverse order in console.
  if (number <= 0) {
    return;
  }
  console.log(2 * number - 1);
  printReverseFirstOddNumber(number - 1);
}
// calling a function
// printReverseFirstOddNumber(10)

function printOddNumber(number) {
  // This function prints odd numer uptill user provide maximum number.
  if (number <= 0) {
    return;
  }
  printOddNumber(number - 1);
  if (number % 2 != 0) {
    console.log(number);
  }
}
// calling a function
// printOddNumber(15);

function printReverseOddNumber(number) {
  // This function prints odd numer uptill user provide maximum number.
  if (number <= 0) {
    return;
  }
  if (number % 2 != 0) {
    console.log(number);
  }
  printReverseOddNumber(number - 1);
}
// calling a function
// printReverseOddNumber(20);

const printFirstEvenNumber = (number) => {
  if (number <= 0) {
    return;
  }
  printFirstEvenNumber(number - 1);
  console.log(2 * number);
};
// calling a function
// printFirstEvenNumber(10)
const printFirstReverseEvenNumber = (number) => {
  if (number <= 0) {
    return;
  }
  console.log(2 * number);
  printFirstReverseEvenNumber(number - 1);
};
// calling a function
// printFirstReverseEvenNumber(10)

const printEvenNumber = (number) => {
  if (number <= 0) {
    return;
  }
  printEvenNumber(number - 1);
  if (number % 2 == 0) {
    console.log(number);
  }
};
//calling a function
// printEvenNumber(10);

const printReverseEvenNumber = (number) => {
  if (number <= 0) {
    return;
  }
  if (number % 2 == 0) {
    console.log(number);
  }
  printReverseEvenNumber(number - 1);
};
// calling a function
// printReverseEvenNumber(20)

// normal function
function sum(num1, num2) {
  const result = num1 + num2;
  // console.log(result);
}
sum(10, 20);

// function expression
const add = function sum(num1, num2) {
  const result = num1 + num2;
  // console.log(result);
}
add(20, 20);


//arrow function

const sum2 = (num1,num2) => num1 + num2 // sigle line code er khetre return na likheo hoy.
// console.log(sum2(3, 7));

const sum3 = (num1, num2) => num1 + num2;
// console.log(sum3(11, 19));


// different ways of write arrow function
const name = () => console.log('My name is shadhin');
console.log(name())

const square = (x) => x * x;
console.log(square(5))

const multiply = x => x * 10;
console.log(multiply(5));


// multiline arrow function

const addition = (num1, num2, num3) => {
  const sum = num1 + num2 + num3;
  return sum;
}
console.log(addition(5,5,5))
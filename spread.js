const max = Math.max(34, 64, 45, 12, 773, 32, 113, 99, 555);
console.log(max);

const numbers = [35, 53, 632, 563, 62, 633];
const newArray = [353, 322, 232, ...numbers]; // copy array element
console.log(Math.max(...newArray)); //copy array element and maximum number found
console.log(Math.min(...newArray)); //copy array element and minimum number found

// const arr1 = [23, 42, 63];
// const arr2 = arr1;
// console.log(arr1);
// console.log(arr2);

const arr1 = [23, 42, 63];
const arr2 = [...arr1]; // spread operator makes a new array.
arr2.push(555)
console.log(arr1);
console.log(arr2);
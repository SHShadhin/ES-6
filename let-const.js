// difference between var,let,const

// console.log(a) // undefined;
// var a = 10;
// var a = 20; // re-declare allowed
// console.log(a)// 20;
// var b = 10;
// b = 20; // Re-assign
// console.log(b)


// console.log(c) // error;
// let c = 10;

// let d = 20;
// let d = 30; // re-declare not allowed

// let e = 10;
// e = 20; // Re-assign allowed;
// console.log(e)


// console.log(a) // error;
// const a = 10;

// const b = 20;
// const b = 30; // re declare not allowed

// const f = 10;
// f = 20; // Re-assign not allowed;
// console.log(f)

const array = [35, 63, 64, 74];
array.push(3333);// allowed;
array = [353, 343, 3] // error, not allowed;
console.log(array)

const object = { name: 'shadhin', age: '27' }
object.name = 'ashik'// allowed;
console.log(object)
object = { name: 'akash', age: '22' }// error, not allowed;
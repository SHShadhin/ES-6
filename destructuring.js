// const product = { name: 'Samsung', price: '30000', color: 'black' };
// console.log(product.name)
// const price = product.price;
// const color = product.color;
// console.log(price, color)




// object destructuring
// const {name, price, color} = { name: 'Samsung', price: '30000', color: 'black' };
// console.log(name,price,color)

// const color = 'red'
// const {name, price, color: newColor} = { name: 'Samsung', price: '30000', color: 'black' }; // color name ekta variable thakai color er pore :colon diye notun variable likha hoyeche.
// console.log(name,price,newColor)

//camera add kora hoise object er property r value hisebe.
const {name, price, camera= '64px'} = { name: 'Samsung', price: '30000', color: 'black' };
console.log(name, price, camera);


// array destructuring

const [first, second] = [35, 63, 35];
console.log(first,second)
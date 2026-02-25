function sum(num1, num2) {
  const output = num1 + num2;
  console.log(output)
}
sum(10, 20);

// default parameter

function sum2(num1, num2 = 0) {
  const result = num1 + num2;
  console.log(result)
}
sum2(15)

function friend(name1, name2 = 'Islam') {
  const FullName = name1+ ' ' + name2;
  console.log(FullName)
}
friend('Shamim')
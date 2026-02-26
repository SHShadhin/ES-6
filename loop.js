const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number)
}


const student = { name: 'Shadhin', roll: '2', id: '2342' }

for (const key in student) {
  const value = student[key]
  console.log(key, value)
}

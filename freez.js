const king = { name: 'Mufasa', age: '15', kingdom: 'South Africa' };
// Object.freeze(king); // freeze korle object er vitorer kono kisu change kora jai na
// delete king.age // delete kortise
Object.seal(king); // add kora jaina, delete kora jaina but modification kora jai
delete king.kingdom;
king.queen = 'Rani';
king.name = 'King Simba';
console.log(king);

const person = {
  name: 'Jack',
  age: 25,
};

Object.seal(person);

person.age = 30; // ✅ change করা যাবে
person.city = 'Dhaka'; // ❌ add করা যাবে না
delete person.name; // ❌ delete করা যাবে না

console.log(person);
// array destructure
const numbers = [23, 45, 67, 78];
// const x = numbers[0];
// const y =  numbers[1];
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1){
          return [num1, num1 + 5];
}
const [p, q] = boxify(8);
// console.log(p, q);

// object destructuring with
const {name , age, gf} = {id: 12, name: "Ashraful", age: 23, money: 400, gf: "homira"};
// console.log(name, age, gf);

// create object 
const one = 23;
const two = 30;
const obj = {x: one, y: two};
const obj2 = {one, two};
// console.log(obj2);
// console.log(obj);
// console.log(one, two);
let array = [12, 34, 56, 78, 90];
let newNumbers = [...array, 34, 60];
console.log(newNumbers);
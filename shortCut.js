const money = 100;
let food;
if(money > 12){
          food = "birani";
}
else{
          food = "alur vorta";
}
// console.log(food)

// shortCut if-else
let foodItem = money > 160 ? "birani" : "alur Vorta";
// console.log(foodItem);


const active = false;
let cssClass;
if(active === true){
          cssClass = "active";
}
else{
          cssClass = "inactive";
}
// console.log(cssClass);
// shortCut if-else
const cssClass2 = active ? "active" : "inactive";
// console.log(cssClass);

// function call shortCut alternative 
// active ? displayUser() : hideUser();

// active && displayUser();
// active || displayUser();

const x = active && 5;
const y = active || 10;
// console.log(y);

// string to number
const num = +"45";
console.log(num);

// number to string
const num2 = 45 + "";
console.log(num2);

function add(num1, num2){
          num2 = num2 || 3;
          return num1 + num2;
}
const result = add(23);
console.log(result);
// API
// fetch(`url`)
// .then(res => res.json())
// .then(data => console.log(data));

// object parse

const person = {
          name: 'John',
          age: 34,
          gf: "Homira"
}

// const person2 = JSON.stringify(person);
// const person3 = JSON.parse(person2);
// console.log(person3.name);

// localStorage 
// localStorage.setItem("user", 1234);
const userId = localStorage.getItem("user");
// console.log(userId);

localStorage.setItem("person", JSON.stringify(person));
const getPerson = localStorage.getItem("person");
const parsedPerson = JSON.parse(getPerson);
// console.log(parsedPerson.gf);

const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);

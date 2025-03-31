const person = {
  name: "John",
  lastname: "Smith",
  age: 45,
  country: "USA",
  addres: {
    city: "New York",
    zip: 10001,
    lat: 40.7128,
    long: -74.0060,
  }
};

// console.table(person);

const person2 = {...person};
person2.name = "James";

console.log(person);
console.log(person2);

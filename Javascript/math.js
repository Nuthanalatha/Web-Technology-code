//Math object
//min method will accecpt the list of values as argument and return the minimum no among the list

let minNumber = Math.min(12, 20, 1, 3, 8, 4, 100, 1, 89);
console.log(minNumber);

let maxNumber = Math.max(2, 8, 13, 55, 99, 77, 80);
console.log(maxNumber);

//to find the power
let powOfNumber = Math.pow(2, 3);
console.log(powOfNumber);

//floor-nearest value
let floorValue = Math.floor(20.9);
console.log(floorValue);

let ceilValue = Math.ceil(20.1);
console.log(ceilValue);

let randomValue = Math.random();
console.log(randomValue);

let names = [
  "Avi",
  "Akshata",
  "Namana",
  "Nayana",
  "Nuthana",
  "Prajwal",
  "Vaibhav",
  "Himagirish",
];
let randomIndex = Math.floor(Math.random(names) * names.length);
console.log(names[randomIndex]);

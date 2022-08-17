//for loop
//does not work with objects
//does not ignore empty elements
//break statements is not supported
//ignore the extra properties which

let arr = [20, "megha", " ", , 78, , 69, 90];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for of loop
//does not work with objects
//does not ignore empty elements
//break statements is not supported
for (let value of arr) {
  console.log(value);
}
//2
let student = [
  "Avi",
  "Akshata",
  "Namana",
  "Nayana",
  "Nuthana",
  "Prajwal",
  "Vaibhav",
  "Himagirish",
];
for (let i of student) {
  console.log(i);
}

let pens = [
  {
    brand: "renolt",
    color: "pink",
    price: 3,
    type: "gel",
  },
  {
    brand: "parker",
    color: "black",
    price: 500,
    type: "ball point",
  },
  {
    brand: "cello",
    color: "blue",
    price: 5,
    type: "ball point",
  },
  {
    brand: "bright",
    color: "red",
    price: 2,
    type: "ball point",
  },
];
//print the pens whos price>5rs
// for (i = 0; i < pens.length; i++) {
//   if (pens[i].price > 5) {
//     console.log(pens[i]);
//   }
// }

for (let i of pens) {
  if (i.price < 5) {
    console.log(i);
  }
}

//type=ball point and price>5
for (i = 0; i < pens.length; i++) {
  if (pens[i].type == "ball point" && pens[i].price > 5) {
    console.log(pens[i]);
  }
}

//for in loop
//works both with object and arrays
//it ignores empty elements
//it does not ignore extra properties which donot have index

let person = {
  firstName: "Megha",
  lastName: "Gowda",
  gender: "female",
  phNo: 76522876543,
};

for (let key in person) {
  console.log(key);
  console.log(`${key}-${person[key]}`);
}

for (let value in pens) {
  if (pens[value].type === "ball point" && pens[value].price > 5) {
    console.log(pens[value]);
  }
}

for (let value in arr) {
  console.log("this from for in loop", arr[value]); //ignores the spaces
}

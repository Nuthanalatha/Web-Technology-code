//3.calculate BMI and print results using ternary operator and if else ststements
let bmi = 30;
console.log(
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 24.9
    ? "Healthy"
    : bmi <= 29.9
    ? "Overweight"
    : "obese"
);

//5.2 examples for each primitive type using typeof operator
//1.Number
let num = 1;
let num2 = 76543;
console.log(typeof num);
console.log(typeof num2);
//2.string
const name = "Nuthana";
const sem = "8";
console.log(typeof name);
console.log(typeof sem);
//3.boolean
let boo = true;
const lean = false;
console.log(typeof boo);
console.log(typeof lean);
//4.undefined
let a;
let b;
console.log(typeof a);
console.log(typeof b);
//5.null
const c = null;
let over = null;
console.log(typeof c);
console.log(typeof over);

//6.create 5 arrays without using new keyword with all primitive types and object and loop using for loop
//1.number
const arr = [80, 90, 100, 5, 75];
for (let value of arr) {
  console.log(value);
}
//2.string
let arr2 = ["nuthana", "lathish", "gangadharappa", "mmm", "p"];
for (let value of arr2) {
  console.log(value);
}
//3.object
let obj = {
  name: "nuthana",
  phNo: 45689868765,
  address: "Tumkur",
  age: 22,
  gender: "f",
};
for (let key in obj) {
  console.log(`${key}-${obj[key]}`);
}

//7.create 5 arrays with using new keyword with all primitive types and object and loop using for loop
//1.number
const newArr = new Array(46, 8, 68, 58, 48);
for (let value of newArr) {
  console.log(value);
}
//2.string
let newarr2 = new Array("nuthana", "lathish", "gangadharappa", "mmm", "p");
for (let value of newarr2) {
  console.log(value);
}
//3.object
let obj1 = new Object(); //creating an object using new key world
obj1.name = "Nuthana";
obj1.phNo = 3456785678;
obj1.age = 20;
obj1.address = "tumkur";
obj1.gender = "f";
for (let key in obj1) {
  console.log(`${key}-${obj1[key]}`);
}

//8.display day
const date1 = new Date("sept/12/2020");
const fullDate = date1.toLocaleDateString("eng", {
  //kan,en-in
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "2-digit",
});
console.log(fullDate);

//5 examples using for in loop ,for of loop
let colors = ["pink", "green", "red", "blue", "black"];
for (let i of colors) {
  console.log(i);
}

let obj2 = new Object();
obj2.firstName = "nuthana";
obj2.lastName = "T G";
obj2.gender = "female";
obj2.phNo = 76522876543;
obj2.age = 22;

for (let key in obj2) {
  console.log(`${key}-${obj2[key]}`);
}

let numbers = [45.8, 32.7, 98.0, 764, 7];
for (let key in numbers) {
  console.log(numbers[key]);
}

//WAP to find prime number or not using four ways of functions
//WAP for prime number
let primeNumber = (num) => {
  let s = 0;
  for (let i = 1; i < num / 2; i++) {
    if (num % i === 0) {
      s = s + 1;
    }
  }
  if (s === 1) {
    console.log("prime");
  } else {
    console.log("not prime");
  }
};

// primeNumber(9);

//WAP for bubblesort

// let bubblesort = () => {
//   let arr = [9, 20, 62, 2, 0, 98, 21];
//   let n = arr.length;
//   let temp = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j < n - i; j++) {
//       if (arr[j - 1] > arr[j]) {
//         temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);
// };

// bubblesort();

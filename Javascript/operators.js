console.log(30 + 30);
console.log(20 - 30);
let a = 20;
let b = a++; //the increment operator increments and return the value before increment
let c = ++a; //it increments the value and return the incremented value
console.log(b);
console.log(a);

//comparision operators
//>=,<=,==,>,<,!=

//== and ===
let num = 10;
let num2 = "10";
console.log(num == num2); //true because it will check only the value
console.log(num === num2); //false because it will check along with the data type

let str = "true";
let str1 = true;

let num3 = 20;
let num4 = "20";
console.log(num3 == num4, "this is boolian");

let x = 40;
let y = 50; //y="50"
console.log(x < y);

let z = 40;
let k = "40";
console.log(z !== k);
console.log(z != k);

//ternary operator
let age = 18;
console.log(age >= 18 ? "eligible for voting and dating" : "not eligible");

let marks = 81;
// if(marks>80){
//     console.log("distinction");
// }
// elseif(marks>70 & marks<80);
// {
//     console.log("first class");
// }
// elseif(marks>35 & marks<70){
//     console.log("second class");
// }
// else{
//     console.log("fail");
// }
console.log(
  marks > 80
    ? "distinction"
    : marks > 70
    ? "first class"
    : marks > 35
    ? "second class"
    : "fail"
);

//typeof operator for validation
const name = "Megha";
console.log(typeof name);
let num1 = 20;
console.log(typeof num);

const data = {
  name: "Nuthana",
  sec: "c",
  sal: 500000,
};
console.log(typeof data); //object

const arr = [1, 3, 4, 56, 33];
console.log(typeof arr); //object

//concatination operator
console.log("hello" + " " + "world");
console.log(5 + 5 + "hello"); //10hello
console.log("5" + 5 + "hi every one"); //55hi every one
console.log(5 + "5" + "good after noon");
console.log("Number" + "10" + 30 + 40 + "are not correct");
console.log(5 + "data is true" + 7);
console.log(5 + "10" + 5 + "good morning" + 7 + 10);

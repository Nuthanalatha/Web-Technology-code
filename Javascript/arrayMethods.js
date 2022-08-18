let myArray = [20, 30, 2, 4, 9, 6, 8];
//push method
//push method will add an element at the end
//it will take a value
//it will return a new array if we pushed any value else it wil return length of an array
//it will change the length of an array

myArray.push(50); //one element at the end
console.log(myArray);
myArray.push(60, 70, 80, 90);
console.log(myArray);

console.log(myArray.push()); //12 length of an array

//pop method don't take anything as argument
//pop method will remove the last element of an array
//pop method will return the removed items
console.log(myArray.pop());
console.log(myArray);
console.log(myArray.pop());

//unshift is used to add an element in thebegining
//it will take an element to add to the array as an argument
//unshift method will return the length of an array
let fruits = ["Apple", "grap", "Mango", "Orange"];
fruits.unshift("Lemon");
console.log(fruits);

//shift is used to remove an element at the begining
//it will not take any argument
//it will return the removed elements
//fruits.shift();
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

//concatination method will join two or more arrays
//it will return a joined new array
//concat method will not change your original array
let a = [20, 30, 40];
let b = [1, 2, 3];
let c = [4, 5, 6];
let res = a.concat(b, c);
console.log(res, "array");

const arr1 = [1, 2, [7, 8]];
const arr2 = [[4, 5], 6, 8, 9];
const arr3 = arr1.concat(arr2);
console.log(arr3, "nested array");

//flat
//flat method will make nested arrays as single array
console.log(arr1.flat());
console.log(arr3.flat());

//join method will convert array to string
const citys = ["banglore", "kolar", "tumkur", "hubli"];
let string = citys.join(" ");
console.log(string);

//findIndex and indexOf
//findIndex method will take a callback function

let arrayDate = [3, 10, 18, 20];
let x = arrayDate.findIndex((age) => {
  return age > 18;
});
console.log(x);
//or
let arrayData = [17, 19, 20, 30, 50];
function votingEligibility(age) {
  return age > 18;
}

let y = arrayData.findIndex(votingEligibility);
console.log(y);

//indexOf

//the indexOf method will return the first index position of the specified value
//indexOf method return if your array does not have the specified value -1
console.log(arrayData.indexOf(70)); //not found
console.log(arrayData.indexOf(20, 1)); //returns the index position
console.log(typeof arrayData);
let e = 78;
console.log(Array.isArray(arrayData)); //true is array method will return me booleian value

// to convert string to an array
let data = "hello java script";
let arrData = data.split(" ");
console.log(arrData);

//print the words in revers order
let lamda = "Before a good leader be a good human";
let lamArray = lamda.split(" ");
console.log(lamArray);
//map();
//forEach();
//filter()
//map method takes a call back function(value,index,original array)
//we use map method to loop an array
let reverse = "";
for (let i = lamArray.length - 1; i--; ) {
  reverse += lamArray[i];
}
console.log(reverse);

lamArray.map((value, index, arr) => {
  console.log(value, index);
});
//or
let lamda1 = "Before a good leader be a good human";
let beta = lamda.split(" "); //this convert string to array
let gama = beta.reverse();
console.log(gama);
//or
let lamda2 = "before a good leader be a good human";
let ba = lamda.split(" ");
ba.reverse();
console.log(ba);

//filter
lamArray.filter((value, index, arr) => {
  console.log(value, "filter");
});

let filterArr = [20, 30, 50, 60, 80, 12, 17];
filterArr.filter((value, ind, arr) => {
  if (value > 20) {
    console.log(value);
  }
});
//or
filterArr.map((value, ind, arr) => {
  if (value > 20) {
    console.log(value);
  }
});
//above both map and filter give same output

let mapped = filterArr.map((value) => {
  return value + 10;
}); //10 extra will be added to the values

let filtered = filterArr.filter((value) => {
  return value + 10;
}); //no change in the  output we cann't able to modify filters
console.log(mapped);
console.log(filtered);

//forEach
let hobbies = [
  "criket",
  "batminton",
  "carrom",
  "cooking",
  "gardening",
  "shuttle",
];
hobbies.forEach(function (val, ind, arr) {
  console.log(`${val}-${ind}`);
});
//includes
console.log(hobbies.includes("criket")); //true it returns boolian
console.log(hobbies.includes("chees")); //false

//... mazical dots

//rest parameter
//it will allow us to add varing arguments to function
function add(...a) {
  let sum = 0;
  for (let i of a) {
    sum = sum + i;
  }
  console.log(sum);
  return sum;
}
add(20, 30);
add(10, 2, 3, 4);
add(1, 2, 3, 5, 6, 8, 5, 34, 678, 5, 3, 2, 4, 7, 8, 9, 1);

//primitive types are copied by value
let x = 30;
let y = x + 10;
console.log(y); //40
console.log(x); //30

//reference types are copied by reference
let m = {
  name: "Avi",
  phNO: 86543234567,
  age: 22,
};

//spread operator using 3 magical dots
let n = { ...m };
m.name = "vibhav";
n.age = 25;
console.log(n); //avi,25
console.log(m); //vibhav,22

let person = {
  fName: "Nayana",
  lname: "S R",
  moreDetails: {
    bloodGroup: "A+",
    gender: "female",
  },
  dob: "5th jan",
};
let personCopy = { ...person }; //shalow copy will copy only the first layer
person.fName = "Nuthana";
person.lName = "T G";

let deepCopy = { ...person, moreDetails: { ...person.moreDetails } };

person.moreDetails.bloodGroup = "AB+";
console.log(person); //fname-nuthana,bg:AB+
console.log(personCopy); //fn:nayana bg:AB+

//deep copy will copy all the levels of array or object
//new object will be created with new reference

//JSON.parse():this will convert json object to js object
//JSON.stringify will convert from object to Json object
const personCopyJson = JSON.parse(JSON.stringify(person));
console.log(personCopyJson);

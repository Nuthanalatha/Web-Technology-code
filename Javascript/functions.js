console.log(typeof NaN); //number
//named function
//syntax
//function funName(parameters){
//    statements or fun body
//}
function add(a, b) {
  return a + b;
} //function declaration

console.log(add(2, 3)); //function call

//function expression
//anonimous function-there wonot be a name
//syntax
//let x=function(){
//statements
//}
let addAnoni = function (a) {
  return a * a;
}; //function expression

addAnoni(3); //9
console.log(addAnoni(3));
//or
let x = addAnoni(3);
console.log(x);
//or
console.log(addAnoni("ag"));

//Arrow functions it is a ES6 feature
//syntax
//let ArrowFun = (argument) => {
//statements
//};
//ArrowFun();
let ArrowFun = (a, b) => {
  return a - b;
};
let y = ArrowFun(5, 2);
console.log(y);

//immediatly invoked function
(function funName(argument) {
  //statements
})();

//code reusablity
function addition(a, b) {
  let sum = a + b;
  console.log(`sum of ${a} and ${b} is`, sum);
}
addition(4, 5);
addition(3, 5);
addition(6, 8);

//passing function as an argument to another function (callback functions)
function findIsEligibleForVoting(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let result = findIsEligibleForVoting(22);

function printEligibleOrNot(arg) {
  if (arg === true) {
    console.log("eligible for voting");
  } else {
    console.log("not eligible for voting");
  }
}

printEligibleOrNot(result);

//immediatly invoked functions
(function substraction(a, b) {
  let sub = a - b;
  console.log(sub);
})(5, 3);

//when you have a single line in your function body no need of curly brases
let product = (a) => a * a;
console.log(product(4));

//if you have only one argument No need of parantesis and curly brases
let square = (b) => b * b;
square();
//if we don't hava parameter then oaranthesis is mandatory
let names = () => console.log("data is safe in arrow function");
names();

//

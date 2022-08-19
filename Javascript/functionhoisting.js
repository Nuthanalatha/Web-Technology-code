console.log("out side the function a", a); //undefined
var a = 20;
var b = 30; //global variable

console.log("out side the function b", b); //30

//variable hoisting inside the function
function test() {
  console.log("b inside the function", b); //undefined
  var b = 10; //inside the function local variable will the more preference
  console.log("a inside the function", a); //20
  console.log(b);
}
test();

//hoisting=hoisting is a technique which moves variables
//and function declarations to the top of there scope before code execution begins
//in function hoisting declaration only moved to the top not initialization
//in function hoisting is suppored for named function
add(2, 4); //function declaration will move to top 1st

function add(a, b) {
  console.log(a + b);
}

//anonimous function
greet(); //greet is act like variable in anonimous,arrow... so it give error

var greet = function () {
  console.log("Good Morning");
};

//debugger;
console.log(student); //undefined

var student = "Nuthana";
var student = 34;
console.log(student); //Nuthana

//to avoid these conflicts we have let and const key words
//are introduced in ecMaScript6(ES6)
var d;
console.log(a); //undefined
console.log(b); //undefined
console.log(c); //undefined
console.log(d); //error notdefined
var a = 10;
var b = 20;
var c = 90;
console.log(a); //10
console.log(b); //20
console.log(c); //30

//let and const
//console.log(sec);

//temporal dead zoon is a time b/w variable declaration and variable initilzation
//you can not access the varibles untill they are assigned to some value
//this means it gives the error if we not assign any value ,it doesnot print undefined
let sec = "b";

//console.log(number2);
const number2 = 56;
let x = 10;
console.log(x);
//let x=20;//redeclaring of variables is not possible if it is let key word

let m = 20;
x = m;
console.log(x); //in let reinitilization is possible

//const
const y = 50;
console.log(y);
//y = m;
console.log(y);
//const y=50;//if it is const key word redeclaration and reinitilization is not possible

//console.log(num);//error
//const num=20;//
const num = 30;
let num2 = 20;

num = num2; //reinitilization
console.log(num2);

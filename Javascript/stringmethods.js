var str = "Test yantra";
str.toUpperCase();
console.log(str); //Test yantra:string is immutable

var str = "Test yantra";
var upper = str.toUpperCase();
console.log(upper);

var greet = "Good Morning";
var greet = greet.toLocaleLowerCase();
console.log(greet); //same variable name to

console.log(greet.charAt(5)); //this method gives

//find index
console.log(greet.indexOf("o")); //1

//includes
var wishing = "Good Afternoon";
console.log(wishing.includes("noon"));

//replace
console.log(wishing.replace("Afternoon,Morning"));
console.log(wishing); //Good Afternoon

// sub str
var data = "Welcome to javascript world";
const substr = data.substr(9, 8); //(9=index,5=value)
console.log(substr);

//sub string
var substring = data.substring(9, 4); //(9,4=indexs)
console.log(substring);

//trim
var email = "                 nuthana@gmail.com        ";
console.log(email);
console.log(email.trim());

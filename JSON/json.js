//JSON =JavaScript object Notation
let person = {
  name: "megha",
  ph: 87654,
  sal: 70000,
};
const jsonObje = JSON.stringify(person);
//it will convert java script objects to json objects
console.log(jsonObje);

const javascriptObj = JSON.parse(jsonObje);
console.log(javascriptObj);

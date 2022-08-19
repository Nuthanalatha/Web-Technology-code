add();
console.log("start");
function add() {
  console.log("i am inside function");
}
console.log("hello");
console.log("end");

console.log("start");
function add() {
  console.log("i am inside function");
  setTimeout(() => {
    console.log("i am inside add functions set time out");
  }, 3000); //API take time
  setTimeout(() => {
    console.log("i am inside add functions set time out2");
  }, 2000);
}
add();
setTimeout(() => {
  console.log("i am set time out out side the function");
}, 0);
console.log("hello");
console.log("end");
//figure

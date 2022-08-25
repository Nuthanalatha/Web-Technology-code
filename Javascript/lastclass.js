console.log("start");
10 === 10 ? console.log("equal") : console.log("not  equal");

//console.log()() //the above code is looking like this ,this is function curying

function test() {
  function inner() {
    console.log("inner function");
  }
  return inner;
}
test()(); // this is called curying

//closure is a previlage for a inner functions to access a outer function
function outer() {
  let count = 0;
  function inner() {
    console.log("inner function");
    count = count + 1;
    console.log(count);
  }
  return inner;
}
outer()();

//call back function:it is a function
//which take function as a argument

//why call back functions
//we need call back functions to handle the asyncronous behavior of java script

function first(callback) {
  setTimeout(() => {
    console.log("first exicuted");
    callback();
  }, 6000);
}

function second() {
  setTimeout(() => {
    console.log("hello");
  }, 2000);
}

first(second);

//call back hell

// const animateAll = (animate) => {
//   setTimeout(() => {
//     animate();
//     setTimeout(() => {
//       animate();
//       setTimeout(() => {});
//     });
//   }, 2000);
// };
//call back inside a call back will lead to callback hell or piramid of doom

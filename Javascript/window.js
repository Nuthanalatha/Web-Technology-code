//window object is the global object
var x = 10; //global
m = 20; //global
let y = 1; //not global
console.log(window);
console.log(window.history); //give the history
console.log(window.location); //give jio location
console.log(window.document); //give html document

//on global level this is equal to window
console.log(this === window);

//Example for setTimeout(),setInterval(),clearTimeout,clearInterval

//6.add,remove,update-array operations
//for add we use both push and splice and pop,slice is used for delete
let myArray = [20, 30, "nuthana", "a", 2, 4];
myArray.push(60, 70, "meghana");
console.log(myArray);

let spliceArray = [2, 4, 7, 3, 5, 6, 9, 8, 10];
let splicedArr = spliceArray.splice(0, 2, 56, 78);
console.log(spliceArray);

//pop
console.log(myArray.pop());
console.log(myArray);
//slice
const data = spliceArray.slice(0, 4);
console.log(data);
console.log(spliceArray);

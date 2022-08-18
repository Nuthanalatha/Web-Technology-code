const n = [10, 20, 30];
const n1 = n;
n.slice(0);
console.log(n1);

//7.Give five examples for array methods
//a.forEach
let colors = ["white", "green", "black", "blue", "pink", "red"];
colors.forEach(function (val, ind, arr) {
  console.log(`${val}-${ind}`);
});

//b.push
let letters = ["A", "B", "C", "D", "E", "F", "G"];
letters.push("H");
console.log(letters);

//c.pop
console.log(letters.pop());
console.log(letters);

//d.shift
console.log(letters.shift());
console.log(letters);

//e.unshift
letters.unshift("A");
console.log(letters);

//f.includes
console.log(letters.includes("C"));
console.log(letters.includes("Z"));

//g.splice
console.log(colors.splice(2));

//h.slice
console.log(colors.slice(0, 3));

//i.isArray
console.log(Array.isArray(colors));

//12.Explain find(),findIndex(),flat(),sort(),reverse() methods of Array
//findIndex
let arrayDate = [34, 67, 963, 8765, 765];
let x = arrayDate.findIndex((number) => {
  return number > 67 && number < 963;
});
console.log(x);

//flat()
const str = [["a", "b"], "f", "g", "r"];
console.log(str.flat());

//reverse
let lamda2 = "Thanks for your help";
let ba = lamda2.split(" ");
ba.reverse();
console.log(ba);

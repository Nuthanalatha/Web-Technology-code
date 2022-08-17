//global level this is refers to window object
console.log(this);
console.log(window);

console.log(this === window);

const personObj = {
  firstName: "Akshatha",
  lastName: "Nayak",
  getFullName: function () {
    console.log(this);
    return this.firstName + this.lastName;
  },
};

console.log(personObj.getFullName());

console.log("=======================");
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr == arr2); //false
console.log(arr === arr2); //false

//we cannot compair refrence data type like this we as to loop it
console.log(null = 0);
console.log(null >= 0);
console.log(1<2<3);//true
            true<3   
console.log(3>2>1);//flase
            true>1
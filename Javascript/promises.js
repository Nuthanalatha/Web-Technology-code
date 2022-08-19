//promises:there are asyncronous and wed APIs
//three states of promises
//1.pending :waiting for respone
//2.resolved
//3.rejected
//promises are used to handle callback hell

console.log("start");

new Promise(function (resolve, reject) {
  if (10 > 4) {
    resolve("success");
  } else {
    reject("error");
  }
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("ended");

//2.example
const myPromis = new Promise(function (resol, rej) {
  setTimeout(() => {
    resol("successfully done");
  }, 4000);
});

myPromis
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//promise.all
//will exceute when all promiese are resolved it like and
Promise.all([firstProm, myPromis])
  .then(() => {})
  .catch(() => {});

//promise.any
//works like or

//promise.raise

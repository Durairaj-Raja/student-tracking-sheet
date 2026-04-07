// console.log("Start");

// console.log("Middle");

// console.log("End");


// console.log("Start");

// setTimeout(() => {
//     console.log("Inside Timeout");
// }, 5000);

// console.log("End");


let myPromise = new Promise((resolve, reject) => {

    let a =30;

    if (a >= 50) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
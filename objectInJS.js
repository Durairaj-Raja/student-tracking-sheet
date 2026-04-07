// If we are storing the object values to a variable, that variable will be consider as object variable.
//At the same time if we want to access the value of an object we should use dot(.) after the object and provide the key name.
let student = {
    name: "Durairaj",
    age: 25,
    course: "React"
};

// console.log(student);
// console.log(student.age);

let joinString = '{"name":"Kavitha","course":"FrontEnd","Duration":3}';
console.log(joinString);


let obj = JSON.parse(joinString);
console.log(obj);

let convertToJSON = JSON.stringify(obj);
console.log(convertToJSON);


let jsonData = '{"name":"Durairaj","age":25}';

let obj = JSON.parse(jsonData);

console.log(obj.name);



let user = {
    name: "Durairaj",
    age: 25
};

let jsonString = JSON.stringify(user);

console.log(jsonString);
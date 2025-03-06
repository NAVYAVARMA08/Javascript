let car = {
    brand : "toyoto",
    model : "corolla",
    year : 2020
};

 console.log(car.brand);
 console.log(car.model);
 console.log(car.year);

 let person = {};
    person.firstName = "Alice";
    person.LastNmae = "smith";
    person.age = 25;

    delete person.age;
console.log(person);

let a = {
    title : "Navya book",
    author : "Navya"
}
 function hasproperty(obj , Key) {
    return key in obj;
 }
  console.log(hasproperty(a, "title"));
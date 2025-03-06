// function print(){
    // console.log("Hello")
// }
//  setTimeout(print,2000)
//  setInterval(print,2000)

// colsure 
// function outerFunction(){
//     let a = 0;
//     function innerFunction(){
//         a++;
//         return a;
//     }
//     return innerFunction;
// }
// const c = outerFunction();
// console.log(c());
// console.log(c());
// console.log(c());
//  let car = {
//     color : 'true',
//     startsfast(){
//         console.log("yes this car is start fast")
//     }
//  };
//   let bmw = {
//     version : 'corolla'
//   };

//   bmw.__proto__= car;

//   console.log(bmw.color);
//   console.log(bmw.version);
//   console.log(bmw.startsfast());
//   console.log(bmw.hasOwnPropert(version));
   
// method overriding
// let animal = {
//   walk() {
//     console.log("animal walk");
//   }
// };

// let rabbit = {
//   __proto__ : animal
// };

// rabbit.walk = function() {
//   console.log("Rabbit Walk");
// };

// rabbit.walk();
// animal.walk();


// apply and call metods
 var emp1 = { fname: "jhon", lname : "rodson"};
  var emp2 = {fname: "alice", lname : "baily"};

  function invite(grt1,grt2){
   console.log(
    grt1 + " " + this.fname + " " + this.lname + " " + grt2
  );
  }

invite.call(emp1,"Hello", "How Are You?");
invite.apply(emp2,["Hello","How Are You?"]);

var inviteemp1 = invite.bind(emp1);
var inviteemp2 = invite.bind(emp2);
inviteemp1("Hello", "How Are You?");
inviteemp2("Hello", "How Are You?");


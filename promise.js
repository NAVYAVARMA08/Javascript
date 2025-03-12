//  const mypromise = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         reject("hello this is resolved")
//         },1000)
//  })

//  mypromise 
//  .then((value)=>{
//      console.log(value + "full")}) 
//  .catch((error)=>{
// console.log(error + "reject")})

const mypromise = new Promise((resolve,reject)=>{
    const randomnum = Math.random();
    if (randomnum>0.5){
        resolve("Number greater ")
    } else{
        reject("smaller")
    }
    })
    mypromise
    .then((value)=>{
        console.log(value)
        return "Hello new return"
    })
    .then(mess=>{
        console.log(mess)
    })
    .catch((error)=>{
        console.log(error)})
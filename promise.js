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

// const mypromise = new Promise((resolve,reject)=>{
//     const randomnum = Math.random();
//     if (randomnum>0.5){
//         resolve("Number greater ")
//     } else{
//         reject("smaller")
//     }
//     })
//     mypromise
//     .then((value)=>{
//         console.log(value)
//         return "Hello new return"
//     })
//     .then(mess=>{
//         console.log(mess)
//     })
//     .catch((error)=>{
//         console.log(error)})

// advanced promises

// promise.all()
// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("first"),1000)
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("second"),2000)
    
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Third"),3000)
// })
// Promise.all([p1,p2,p3])
// .then((value)=>
//     {console.log(value)})
// .catch((error)=>
//     {console.log(error)})

// promise.allSettled()

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("first"),1000)
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(reject("second"),2000)
    
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Third"),3000)
// })
// Promise.allSettled([p1,p2,p3])
// .then((value)=>
//     {console.log(value)})
// .catch((error)=>
//     {console.log(error)})

 let p1 = new Promise((resolve,reject)=>{
    setTimeout(resolve("first"),1000)
 })
 let p2 = new Promise((resolve,reject)=>{
    setTimeout(reject("second"),2000) 
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(resolve("Third"),3000)
})
Promise.any([p1,p2,p3])
.then((value)=>
    {console.log(value)})
.catch((error)=>
    {console.log(error)})

// promise.race()

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("first"),1000)
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(reject("second"),2000)
    
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Third"),3000)
// })
// Promise.race([p1,p2,p3])
// .then((value)=>
//     {console.log(value)})
// .catch((error)=>
//     {console.log(error)})
// function addSum(){
//      let s = 0 
//     for (let i = 1; i <= 1000000; i++){
//         s+=i;
//     }
//     return sum;
// }

// let start = performance.now();
// let sum =  addSum();
// let end = performance.now();
// console.log(end-start);


// function fetchUserData() {
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve("user data receievd"),1000);
//     });
// }

// function fetchPosts() {
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve("Posts data receievd"), 500);
//     });
// }
// fetchUserData()
//     .then((userData)=>{
//         console.log(userData);
//         return fetchPosts();
//     })
//     .then((postsDataMess)=>{
//         console.log(postsDataMess);
//     })
//     .catch((error)=>{
//         console.log(error);

//     })

async function getUserAndPosts() {
    try {
        const userData = await fetchUserData();
        console.log(userData);

        const postsData = await fectchposts();
        console.log(postsData);
    } catch (error) {
        console.log(error);
    }
}
getUserAndPosts();


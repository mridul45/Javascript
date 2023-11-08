/*
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})



const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username:"Mridul",email:"xyz@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user)
})

*/


// const promise4 = new Promise(function(resolve,reject){
//     let error = true
//     if(!error){
//         resolve({username:"Mridul",password:"xyz"})
//     } else{
//         reject("Something went wrong")
//     }
// },1000)

// promise4.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch(function(err){
//     console.log(err)
// })


const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username:"Mridul",email:"xyz@gmail.com"})
    },1000)
})


async function consume(){
    const response = await promise3
    console.log(response)
}

consume()
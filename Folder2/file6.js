// function sayName(){
//     console.log("Mridul Singhal")
// }

// sayName()

function addNums(num1,num2){
    console.log(num1+num2)
}

function logInUser(username="Mridul"){
    if(!username){
        console.log("Please enter a username")
    }
    return `${username} just logged in`
}

console.log(logInUser())

function restOp(val1,val2,...num){
    return num
}
console.log(restOp(100,200,300,400,500))
/*

Memory --> Stack and Heap
In primitive datatypes Stack memory is used
In Non-primitive datatypes Heap memory is used

*/

let myName = "Game Freak"
let anotherName = myName

anotherName = "Collab"

console.log(anotherName)  // The value in this changes to Colab but thevalue in myName remans same


// For non primitive types

let userOne = {
    email: "user@gmail.com",
    upi: "xyz@upi"
}

let user2 = userOne

user2.email = "xyz@gmail.com"

console.log(userOne)
console.log(user2)

// The value changes above
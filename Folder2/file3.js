const user = {
    name: "Mridul",
    age: 21,
    loacation: "Ambala Cantt",
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
} // Object

// user.email = "here" --> Editing values

// console.log(user["email"])

user.greeting = function(){
    console.log(`Hello user ${this.name}`)
}

// this is used to reference the same Object

user.greeting()
const user = {}

user.id = 1
user.name = "Mridul"

console.log(user)

const user1 = {
    email: "xyz@gmail.com",
    fullname: {
        firstname: "Mridul",
        lastname: "Singhal"
    }
}

console.log(user1)

const obj1 = {1:"A",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// console.log(obj3)

obj3 = Object.assign({},obj1,obj2) // -> {} is target and the rest is source

console.log(obj3)

// console.log(Object.keys(user1))

console.log(Object.entries(user1))
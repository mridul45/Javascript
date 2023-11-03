const score = 400

const balance = new Number(100)

console.log(score)
console.log(balance) // Object of Number type

// console.log(balance.toString().length)
console.log(balance.toFixed(2))

const num2 = 23.8966
console.log(num2)

console.log(num2.toPrecision(3))

// Maths

/*

console.log(Math)// Object
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(4.4))
console.log(Math.floor(4.4))

*/

console.log(Math.random())
console.log(Math.random()*10)

const min = 10
const max = 20

let value = Math.random()*(max-min+1) + min
console.log(value)
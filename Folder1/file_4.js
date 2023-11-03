let score = 33;
let score2 = "33"

let score3 = "33abc"

console.log(typeof score) // number
console.log(typeof score2) // String

let valInNumber = Number(score2)
let valInNumber2 = Number(score3)
console.log(typeof valInNumber) // Number

console.log(valInNumber)
console.log(valInNumber2) // Is a number but gives value NaN on log.

// when we try to convert null and undefined to number we get 0 and undefined
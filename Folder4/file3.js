const coding = ["JS","C++","Py","C"]

const values = coding.forEach((item) => {
    console.log(item)
})

console.log(values)

// JS
// C++
// Py
// C
// undefined --> op , Hense forEach dosen't returns anything

// Filter

const nums = [1,2,3,4,5,6,7,8,9,10]

// newNums = nums.filter((num) => num>4)
// console.log(newNums)

// note

// const myNums = nums.filter((num) => {
//     return num>4 // Here if we start a scop then we have to add a return statement
// })

//chaining

const newNums = nums.map((num) => num*10).map((num) => num+1)
console.log(newNums)
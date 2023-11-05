const nums = [1,2,3,4,5,6,7,8,9]

// const total = nums.reduce(function (acc,currVal) {
//     return acc+currVal
// },100) // --> initial value of the accumulator

// console.log(total)

// converting to arrow func

const tot = nums.reduce((acc,currVal) => acc+currVal,0)
console.log(tot)
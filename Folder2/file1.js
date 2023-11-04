const myArr = [0,1,2,3,4,5]

// Js Arrays are resizable
// Cannot be accessed using arbitrary strings
// 0 based indexing
// make shallow copies --> i.e share the same reference point

const arr2 = new Array(1,2,3,4) // Another way to make an array

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(1)
// myArr.shift()
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

console.log("A",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)


const myn3 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myn3)

// The splice operation manuplates the orignal array
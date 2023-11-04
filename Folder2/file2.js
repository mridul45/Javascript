const fruits = ["Apple","Mango","Grapes"]
const veg = ["Cauliflower","Peas","Carrot"]

// fruits.push(veg)

// console.log(fruits)

// [ 'Apple', 'Mango', 'Grapes', [ 'Cauliflower', 'Peas', 'Carrot' ] ] --> Output
// This veg array is the 4th element wholetogether

let combo = fruits.concat(veg)
console.log(combo)

// [ 'Apple', 'Mango', 'Grapes', 'Cauliflower', 'Peas', 'Carrot' ] --> Output

const combo2 = [...fruits, ...veg] // Spread operator
console.log(combo2)


let arr1 = [1,2,3,[4,10,3],[11,23,56]]
let arr2 = arr1.flat(Infinity)
console.log(arr2)


// [
//     1,  2,  3,  4, 10,
//     3, 11, 23, 56
//   ]  --? O/p For above

console.log(Array.from("Mridul"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
// for of loop

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i)
}


// Maps

const map = new Map() // Stores unique values
map.set("IN","India")
map.set("US","United States")

// console.log(map)

for (const key of map) {
    console.log(key)
}

for (const [key,value] of map) {
    console.log(value)
}


const obj = {
    name: "Mridul Singhal",
    profession: "Engineering",
    age: 21
}

for (const key in obj){
    console.log(`${key} for ${obj[key]}`)
}

const coding = ["JS","C++","Py","C"]
coding.forEach(function (item) {
    console.log(item)
})


coding.forEach((item) => {
    console.log(item)
})
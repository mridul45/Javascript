// Destructuring of objects

const course = {
    coursename: "Full stack Dev",
    price: "$ 100",
    instructor: "M Sighal"
}

// const {instructor} = course
// console.log(instructor) // --> We have the value

// Another way

const {instructor: teach} = course
console.log(teach)
// let myName = "Mridul "
// console.log(myName.trueLength)

const fruits = ["Apple","Mango"]

let fruitTaste = {
    Apple: "Sweet",
    Mango: "Jucy",

    getMangoproperties: function(){
        console.log(`The mango is vert ${this.Mango}`)
    }
}

Object.prototype.grapes = function(){
    console.log(`Grapes are present in all objects`)
}

Array.prototype.addFruits = function(){
    console.log("I say hello")
}

fruitTaste.grapes()
fruits.addFruits()
fruitTaste.addFruits()
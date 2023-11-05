//  Immediately Invoked Function Expressions (IIFE) //


/*
(
    function one(){
        console.log`DB connected`
})()

*/

(()=>{
    console.log(`DB connected`)
})(); // --> Ending the function , if you not end error occurs

(function one(){
    console.log(`Hola`)
})()  // --> is a named IIFE
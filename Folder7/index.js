const changeTxt = function(){
    document.querySelector('h1').innerHTML = "JS"
}

setTimeout(changeTxt,3000)

setTimeout(function(){
    console.log("Hello")
},2000)
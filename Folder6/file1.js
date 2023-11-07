// document.getElementById('owl').onclick = function(){
//     alert("Owl Clicked")
// }

// sec approach

// document.getElementById('owl').addEventListener(
//     'click',function(){
//         alert("Owl Clicked again")
//     }
// )


// 3rd approach

// document.getElementById('owl').addEventListener('click',
//     function(e){
//         console.log(e) // --> e is the event
//     }
// )

document.getElementById('images').addEventListener(
    'click',function(e){
        console.log("Clicked inside ul")
    },false
)

document.getElementById('owl').addEventListener(
    'click',function(e){
        console.log("Owl Clicked")
        e.stopPropagation()
    },false
)

// Preventing the default behaviour
document.getElementById('google').addEventListener(
    'click',function(e){
        e.preventDefault()
    }
)

// document.querySelector('#images').addEventListener(
//     'click',function(e){
//         console.log(e.target.parentNode)
//         let removeIt = e.target.parentNode
//         removeIt.remove()
//     }
// )


document.querySelector('#images').addEventListener(
    'click',function(e){
        if(e.target.tagName === 'IMG'){
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
    }
)
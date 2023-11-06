const parent = document.querySelector('.parent')
    console.log(parent)
    console.log(parent.children)

    console.log(parent.children[1])
    console.log(parent.children[1].innerHTML)

    /* div.parent
        one.html:58 HTMLCollection(4) [div.day, div.day, div.day, div.day]
        one.html:60 div.day
        one.html:61 Tuesday

    */

   for(let i = 0 ; i < parent.children.length ; i++){
    console.log(parent.children[i].innerHTML)
   }

//    parent.children[1].style.color = "orange"  --> can change properties

//    console.log(parent.firstElementChild)

//    const day1 = document.querySelector('.day')
//    console.log(day1)

//    console.log(day1.parentElement)
//    console.log(day1.nextElementSibling)

   console.log("Node: ", parent.childNodes)
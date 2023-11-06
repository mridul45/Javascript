/*

function addLang(name){
    const li = document.createElement('li')
    li.innerHTML = `${name}`
    document.querySelector('.language').appendChild(li)
}

*/

// addLang("Python")

// Optimized way

function addLang(name){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(name))

    document.querySelector('.language').appendChild(li)
}

addLang("Python")

const secChild = document.querySelector("li:nth-child(2)")
// secChild.innerHTML = "GO"

const newli = document.createElement('li')
newli.textContent = "GoLang"
secChild.replaceWith(newli)
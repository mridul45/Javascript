const div = document.createElement('div')

div.className = "main"
div.id = Math.random()

div.setAttribute("title","generatedTitle")
// div.innerHTML = "JS DOM"

const addText = document.createTextNode("JS DOM")
div.appendChild(addText)

document.body.appendChild(div)
console.log(div)
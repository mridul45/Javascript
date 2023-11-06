# DOM

document.getElementById('title')
<h1 id=​"title" class=​"heading">​Learning JS​</h1>
​
document.getElementById('title').id
--> 'title'

document.getElementById('title').class
-->undefined

document.getElementById('title').className
--> 'heading'

document.getElementById('title').getAttribute
--> ƒ getAttribute() { [native code] }
document.getElementById('title').getAttribute()
VM234:1 Uncaught TypeError: Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.
    at <anonymous>:1:34
    (anonymous) @ VM234:1

document.getElementById('title').getAttribute('id')
--> 'title'

document.getElementById('title').setAttribute('class','test')
--> undefined
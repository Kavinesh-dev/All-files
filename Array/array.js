let mycontainer = document.createElement("h1")
mycontainer.textContent = "Web Technologies"

let content = document.getElementById("container")
content.appendChild(mycontainer)

let button = document.createElement("button")
button.textContent = "Click Here"
button.style.padding = "10px"
button.style.borderRadius = "15px"
button.style.marginRight = "10px"
content.appendChild(button)

button.onclick = function(){
    mycontainer.textContent = "4.0 Web Technology";
    mycontainer.style.color = "Yellow"
}

let changecolor = document.createElement("button")
changecolor.textContent = "Remove"
changecolor.style.padding = "10px"
changecolor.style.borderRadius = "15px"
changecolor.style.marginRight = "10px"
content.appendChild(changecolor)

changecolor.onclick = function(){
    mycontainer.textContent = "Web Tehchnology";
    mycontainer.style.color = "Black"
}
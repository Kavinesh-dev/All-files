let myDiv = document.createElement('div');
myDiv.classList.add("d-flex", "flex-column", "align-items-center");
document.body.appendChild(myDiv);

let labelInput = document.createElement('label');
labelInput.textContent = "Enter the secret key to refuse the BOMB! Mudinja Kandupudi :)"

myDiv.appendChild(labelInput);

let nameInput = document.createElement('input');
nameInput.type = "text";
nameInput.classList.add("mt-4", "label")
nameInput.id = "nameInput";
myDiv.appendChild(nameInput);

let myImg = document.createElement('img');
myImg.src = "https://cdn.create.vista.com/api/media/small/189676480/stock-photo-dynamite-bomb-timer-bunch-dynamite-black-background-dynamite-going-explode"
myImg.classList.add("img");
myDiv.appendChild(myImg);

let btnDiv = document.createElement('div');
btnDiv.classList.add("d-flex");
myDiv.appendChild(btnDiv);

let btn1 = document.createElement('button');
btn1.classList.add("btn", "btn-primary", "mr-2", "p-2", "mt-4");
btn1.id = "btn1"
btn1.textContent = "Time to Blast"
myDiv.appendChild(btn1);

let para = document.createElement('p');
para.textContent = "15";
para.id = "para";
para.classList.add("paragraph");
document.body.appendChild(para);

let button = document.getElementById("btn1");
let uniqueid = null;

button.onclick = function () {
    let counter = 15;
    uniqueid = setInterval(function () {
        counter = counter - 1;
        para.textContent = counter;
        if (counter === 0) {
            para.textContent = "BOOM!!!";
            myImg.src = "https://www.pitara.com/media/nuclear-bomb-conventional-bomb-2.jpg";
            myImg.classList.add("mt-4")
            myImg.style.width = "30%";
            clearInterval(uniqueid);
        }
    }, 1000);

};

nameInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter" && nameInput.value === "kandupudi") {
        alert("Bomb has been refused! Shoobbbaaaa thapichitom");
        clearInterval(uniqueid);
    }
});

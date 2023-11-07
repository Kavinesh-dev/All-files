
let counterIn = document.getElementById("counterValue");
console.log(counterIn.textContent);

function increase(){
    let updatednumbervalue = parseInt(counterIn.textContent);
    counterIn.textContent = updatednumbervalue + 1;

    if(updatednumbervalue >= 0){
        counterIn.style.color = "green"
    }
    else if(updatednumbervalue <= 0){
        counterIn.style.color = "red"
    }
    else {
        counterIn.style.color = "black"
    }
}

function reset(){
    let resetvalue = 0;
    counterIn.textContent = resetvalue;
    counterIn.style.color = "black"
}

function decrease(){
    let updatednumbervalue = parseInt(counterIn.textContent);
    counterIn.textContent = updatednumbervalue - 1;

    if(updatednumbervalue > 0){
        counterIn.style.color = "green"
    }
    else if(updatednumbervalue <= 0){
        counterIn.style.color = "red"
    }
    else {
        counterIn.style.color = "black"
    }
}

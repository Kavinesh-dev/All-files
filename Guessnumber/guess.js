let randomnumber = Math.ceil(Math.random() * 100);
console.log(randomnumber)

let gameresult = document.getElementById("gameResult");

function checkGuess() {
    let uservalue = document.getElementById("userInput").value;
    let getuservalue = parseInt(uservalue);

    if (getuservalue > randomnumber) {
        gameresult.textContent = "That's too High Bro"
        gameresult.style.backgroundColor = "Blue"
    }
    else if (getuservalue < randomnumber) {
        gameresult.textContent = "That's too Low Bro"
        gameresult.style.backgroundColor = "Blue"
    }
    else if (getuservalue === randomnumber) {
        gameresult.textContent = "Congratulations! You got it"
        gameresult.style.backgroundColor = "Blue"
    }
}


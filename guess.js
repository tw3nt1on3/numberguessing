const randomNumber = Math.floor(Math.random() * 20) + 1;
function checkGuess(){
    let userGuess = document.querySelector("#userGuess").value; 
    let result = document.querySelector("#result");
    if (userGuess == randomNumber) {
        result.textContent = "Bravooo bg je vois que ton cerveau fonctionne hun" ; 
    }
    else {
        result.textContent = "le feu sur toi" ; 
    }
   
}
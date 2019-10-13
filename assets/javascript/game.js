//create variables for wins, losses, guessesLeft and set those to 0 
var wins = 0;
var losses = 0;
//set the variable to max number of guesses
var guessesLeft = 9;
//blank array for storing the guessChoice
var guessesChoice = [];
//create a function to reset the game after either user won or computer won
function guessesLeftReset() {
    guessesLeft = 9;
    guessesChoice = [];
}
//create an Array with the list of letters A-Z
var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//create variables to display on the HTML page
var WordGameDirectionsText = document.getElementById("pressKeyToStartTheGame");
var numberOfWins = document.getElementById("wins");
var numberOfLosses = document.getElementById("losses");
var guessLeft = document.getElementById("guessLeft");
var userMadeTheChoice = document.getElementById("userGuessSoFar");
//create a function for onKeyUp
document.onkeyup = function(event) {
    var userGuess = event.key;
    //pushing each of the userGuesses into the GuessesChoice array to print on the HTML page
    guessesChoice.push(userGuess);
    var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    //this will decrement each time the userchoice "NotEqual" to computer choice
    guessesLeft--;
    //if usechoice === computerchoice increment wins++
    if (userGuess.toUpperCase()===computerGuess.toUpperCase()){
        wins++;
        guessesLeftReset();
    }
    //if guessleft ===0 reset the guessleft and increment losses by 1
    else{
        if (guessesLeft===0){
            losses++;
            guessesLeftReset();
        }
    }
    //Display Wins/Losses/NumberOfGuessesLeft/ListofGuessesUserMade on the HTML page
    numberOfWins.textContent = "Wins :" + wins;
    numberOfLosses.textContent = "Losses :" + losses;
    guessLeft.textContent = "Number of Guesses Left :" + guessesLeft;
    userMadeTheChoice.textContent = "List your Guesses :" + guessesChoice;
}
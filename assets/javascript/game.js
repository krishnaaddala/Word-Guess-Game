//create variables for wins, losses, guessesLeft and set those to 0 
var wins = 0;
var losses = 0;
//set the variable to max number of guesses
var guessesLeft = 9;
//create an Array with the list of letters A-Z
var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//create a function for onKeyUp
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log(computerGuess);
    if (userGuess===computerGuess){
        consol.log("You win!");
        wins++;
        //Create guessesLeftReset(); --> to reset the game
    }
    else {
        losses++;
        if (guessesLeft<0){
        guessesLeft--;
        }
    }
}
//function for user guess
//function for computer guess
//function compare the guess
    //within compare function do the comparison for win or loss
    //if usechoice === computerchoice wins++ or  guessleft-- 
//&& if guessleft ==0 reset the guessleft and increment losses by 1
//actively concatenate and print on the screen
//reset the game when user looses or wins

//create a function to guessing letters 
// function userGuess(){
//    if (guessesLeft <=(lettersChosen.length -1)){
//      document.querySelector("#yourGuessSoFar").innerHTML = "Wrong Guess!";
//      console.log("yourGuessSoFar");
//    }
// }
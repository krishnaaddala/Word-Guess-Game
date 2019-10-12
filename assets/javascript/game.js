//create variables for wins, losses, guessesLeft and set those to 0 
var wins = 0;
var losses = 0;
var guessesLeft = 0;
//create an Array with the list of letters A-Z
var lettersChosen = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//create a function for onKeyUp
    $("#yourGuess").on("keyup", function(){
        for (i=0, i<10; i++;){
            
        var showChosenLetter = $("<div>");
        showChosenLetter.attr("class", "letter letter-clicked")
        }
        

        console.log("#userGuess");
    });

//create a function to guessing letters 
// function userGuess(){
//    if (guessesLeft <=(lettersChosen.length -1)){
//      document.querySelector("#yourGuessSoFar").innerHTML = "Wrong Guess!";
//      console.log("yourGuessSoFar");
//    }
// }
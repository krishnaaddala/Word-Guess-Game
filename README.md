# Word-Guess-Game
As part of the Word Game Guess assignment, this repo consists to the Psychic game
assignment that displays the game between user choice and randomized computer choice and resets after the number of guess which is set to a max number of 9 either by incrementing the wins or losses.

## Table of contents
Technologies Used
Applications Used
Code Snippets

## Technologies Used
HTML
Javascript
Markdown

## Applications Used
GitHub
ChromeDev tools
Visual Studio Code
Chrome browser

## Code Snippets

```var wins = 0;
var losses = 0;
//set the variable to max number of guesses
var guessesLeft = 9;
//blank array for storing the guessChoice
var guessesChoice = [];
  ```

  ```document.onkeyup = function(event) {
    var userGuess = event.key;
    //pushing each of the userGuesses into the GuessesChoice array to print on the HTML page
    guessesChoice.push(userGuess);
    var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    //this will decrement each time the userchoice "NotEqual" to computer choice
    guessesLeft--;
  ```

  ```function guessesLeftReset() {
    guessesLeft = 9;
    guessesChoice = [];
}
  ```
Git commands:

```git status
    git add .
    git commit -m "message"
    git push origin master
    ```
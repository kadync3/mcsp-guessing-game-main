//Create a guessing game that allows users to guess a secret number. 
//You will need to use the built in “prompt()” function to capture the user input when the program is running. 
//Once you have the user’s input, 
//you can compare it with your secret number and use the built in “alert()” function to send back the appropriate message.

play(); // This is your main function that runs when the page loads
var max = 10;
var min = 1;
var guess;
var isPlaying = true;
var name = ''
var randomNumber = Math.floor((Math.random() * max) + min);
var tries = 0;
var highScores = {};

function play(){
  name = prompt('What is your name?')
    var history = [];
    while(isPlaying){
      tries++
    guess = prompt('Guess a number 1-10');
      history.push(guess)
        if( guess == randomNumber){
          highScores['High Scores'] = [name, tries];
         alert('Great guess ' + name +  '! It took you ' + tries + ' tries! You guesses were, ' + history);
          console.log(highScores)
          isPlaying = false;
          playAgain();
          
  
        } else if (guess < randomNumber){
            alert('Higher');
          guess
        } else if (guess > randomNumber){
            alert('Lower');
          guess
        }   
    }
}

function playAgain(){
  var Q = prompt('Play again?');
  if (Q == 'Yes' || Q == 'yes') {
    randomNumber = Math.floor((Math.random() * max) + min);
    isPlaying = true;
    play();
  }
}


//if (prompt('can you guess my number', 2) == 2){
    // alert('you are right')} else{
    //     alert('nope try again')}

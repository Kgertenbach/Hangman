// Variables needed
var letterBank = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var basketballTerms =['court vision','jump ball', 'hack', 'motion defense', 'perimeter', 'pick and roll','intentional foul','technical foul', 'press','overhead pass','crossover','dead ball','crash the boards','fifteen footer','traveling','dunk','buzzer beater', 'fadeaway', 'fast break','box out','block out','controlling the boards','sixth man','and one','Backboard','Assist','Five Secod Violation', 'three second violation', 'backdoor cut', 'ball fake', 'backboard', ];
var chosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var underscore =[];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 10;
var rightGuessCounter = 0;

  

// Pick Random Word on Reset
function reset()

{
  (var i = 0; i < numBlanks; i++)
chosenWord = basketballTerms[Math.floor(Math.random() * basketballTerms.length)];
lettersInWord = chosenWord.split('');
numBlanks = lettersInWord.length;

var letterBank = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
underscore =[];
wrongLetters = [];
guessesLeft = 10;
rightGuessCounter = 0;
letterGuessed = 0;

test=false;
startGame();
}

// Game Play
function startGame()
{
chosenWord = basketballTerms[Math.floor(Math.random() * basketballTerms.length)];
lettersInWord = chosenWord.split('');
numBlanks = lettersInWord.length;


var letterBank = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
underscore =[];
wrongLetters = [];
guessesLeft = 10;
rightGuessCounter = 0;
letterGuessed = 0;


// Correct guess replaces underscore
for(var i = 0; i< numBlanks; i++)
{
underscore.push('_');
document.getElementById('wordToGuess').innerHTML = underscore;
}

document.getElementById('wordToGuess').innerHTML = underscore.join(' ');
document.getElementById('numGuesses').innerHTML = guessesLeft;
document.getElementById('winCounter').innerHTML = winCount;
document.getElementById('lossCounter').innerHTML = loseCount;
document.getElementById('wrongGuesses').innerHTML = wrongLetters;

}


// To compare users guess with chosen word
function compareLetters(userKey)
{
console.log(chosenWord);

if(chosenWord.indexOf(userKey) > -1)
{
for(var i = 0; i < numBlanks; i++)
{

// Fill in the right guess
  if(lettersInWord[i] === userKey)
  {
    rightGuessCounter++;
    underscore[i] = userKey;
    document.getElementById('wordToGuess').innerHTML = underscore.join(' ');
  }	
}
console.log(underscore);
}

//Wrong Key is pressed mark down guesses left
else
{
wrongLetters.push(userKey);
guessesLeft--;
document.getElementById('numGuesses').innerHTML = guessesLeft;
document.getElementById('wrongGuesses').innerHTML = wrongLetters;
console.log('Wrong Letters = ' + wrongLetters);
console.log('Guesses left are ' + guessesLeft);
}

// The player needs to either win or lose

}
function winLose()
{
// When number blanks are filled with right letters player win
if(rightGuessCounter === numBlanks)
{
winCount++;
document.getElementById('winCounter').innerHTML = winCount;
alert('You Win!');
reset();
}

// How to loose
else if(guessesLeft === 0)
{
loseCount++;
document.getElementById('lossCounter').innerHTML = loseCount;
alert('You Lose');
reset();
}
}

startGame();

document.onkeyup = function(event)
{
test = true;
var letterGuessed = event.key;
for(var i = 0; i < letterBank.length; i++)
{	
if(letterGuessed === letterBank[i] && test === true)
{
var spliceDword = letterBank.splice(i,1);

console.log('Letter Chosen is = ' + letterBank[i]);

compareLetters(letterGuessed);
winLose();
}
}		

}
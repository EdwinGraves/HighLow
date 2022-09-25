//Put everything on this page first before you screw up the real JS page!!!
//Make sure to change back to real javascript and css on your html index

//Setup ask for max number display message//
var maxNumb = document.getElementById("maxNumb");
var maxValidation = true;
var maxNumber = Math.round(prompt("Enter the maximum number to guess."));
var guessList = [];

//Validate the number//
while (maxValidation) {
  if (Math.sign(maxNumber) === 1) {
    maxNumb.innerHTML = `Please guess a number between 1 and ${maxNumber}.`;
    maxValidation = false;
  } else {
    maxNumber = Math.round(prompt("Please enter a valid, positive number."));
  }
}
//Get the random number//
var randomNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log(randomNumber);

// let guessList = [guess];
// for (var i = 0; guess === randomNumber; i++) {
//   guessList.push(guess);
// }
// console.log(guessList);

//Compare numbers and display result message

function higherLower() {
  var guess = Number(document.getElementById("guess").value);
  var message = document.getElementById("message");

  //Not a number
  if (Number.isNaN(guess)) {
    message.innerHTML = `That isn't a number! Please choose a valid number between 1-${maxNumber}.`;
    //number not in range
  } else if (guess < 1 || guess > maxNumber) {
    message.innerHTML = `This number isn't in range! Please choose a valid number between 1-${maxNumber}.`;
    //Correct
  } else if (guess == randomNumber) {
    message.innerHTML = "You got it. Great job!";
    console.log(guessList, guess);
    //Too low
  } else if (guess < randomNumber) {
    message.innerHTML = "You guessed too low, please guess again.";
    //Too high
  } else {
    message.innerHTML = "You guessed too high, please guess again.";
  }
  console.log(guess);
  guessList.push(guess);
  return guess;
}

//this will state the values
// for (var x = 0; x < guessList.length; x++) {
//   console.log(` ${guessList.length} ${guessList[x]}`);
// }

// var guessList = [];
// guessList = guessList.push(guess);
// duplicateCheck(guess);
//Make an array to keep track of guesses. When user wins, add the number of guesses and display guesses seperated by comas. Don't count invalid guesses.//
// function duplicateCheck(guessList, guess) {
//   alert(guessList.length);
//   for (var i = 0; i < guessList.length; i++) {
//     if (guessList[i] == guess) {
//       console.log(guessList[i]);
//       message.innerHTML =
//         "You have already guessed this number. Try another one.";
//Prevent duplicate guesses

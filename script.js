///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  
  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////

var passArea = document.querySelector("#password")

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var num = ["1","2","3","4","5","6","7","8","9","0"]

function generatePassword(){
  // Ensuring the password is between 8 and 128 characters
  var length = prompt("How long would you like your password to be? (8-128)");
  while(length < 8 || length > 128 || isNaN(length)){
    var length = prompt("Please enter a number between 8 and 128.");
  }
  // Asking user what character types they want
  var lowerT = confirm("Would you like lowercase characters? (Ok: Yes, Cancel: No)")
  var upperT = confirm("Would you like uppercase characters? (Ok: Yes, Cancel: No)")
  var numT = confirm("Would you like numbers? (Ok: Yes, Cancel: No)")
  // Covering all 7 scenarios (all 3, any given 2, or just 1 character type being selected)
  if(lowerT && upperT && numT){   
      var lowerN = prompt("How many characters would you like to be lowercase out of " + (length-2));
      while(lowerN < 1 || lowerN > (length-2) || isNaN(lowerN)){
       var lowerN = prompt("How many characters would you like to be lowercase out of " + (length-2));
      }
      
      length = length - lowerN;
      var upperN = prompt("How many characters would you like to be uppercase out of " + (length-1));
      while(upperN < 1 || upperN > (length-1) || isNaN(upperN)){
       var upperN = prompt("How many characters would you like to be uppercase out of " + (length-1));
      }
      length = length - upperN;
      var numN = length;
      alert("You will have " + length + " numbers in your password.")
    
  }
  if(lowerT && upperT && numT === false){
    var lowerN = prompt("How many characters would you like to be lowercase out of " + (length-1));
      while(lowerN < 1 || lowerN > (length-1) || isNaN(lowerN)){
       var lowerN = prompt("How many characters would you like to be lowercase out of " + (length-1));
      }
      length = length - lowerN;
      var upperN = length;
      alert("You will have " + length + " uppercase characters in your password.")
  }
  if(lowerT && numT && upperT === false){
    var lowerN = prompt("How many characters would you like to be lowercase out of " + (length-1));
      while(lowerN < 1 || lowerN > (length-1) || isNaN(lowerN)){
       var lowerN = prompt("How many characters would you like to be lowercase out of " + (length-1));
      }
      length = length - lowerN;
      var numN = length;
      alert("You will have " + length + " numbers in your password.")
  }
  if(upperT && numT && lowerT === false){
    var upperN = prompt("How many characters would you like to be uppercase out of " + (length-1));
      while(upperN < 1 || upperN > (length-1) || isNaN(upperN)){
       var upperN = prompt("How many characters would you like to be uppercase out of " + (length-1));
      }
      length = length - upperN;
      var numN = length;
      alert("You will have " + length + " numbers in your password.")
  }
  if(lowerT && upperT === false && numT === false){
    alert("You will have " + length + " lowercase characters in your password.")
    lowerN = length;
  }
  if(upperT && lowerT === false && numT === false){
    alert("You will have " + length + " uppercase characters in your password.")
    upperN = length;
  }
  if(numT && lowerT === false && upperT === false){
    alert("You will have " + length + " numbers in your password.")
    numN = length;
  }
  // Collecting x characters based on user input and creating an array with them
  var pW = [];
    for(i=0; i < lowerN; i++){
    var lC = Math.floor(Math.random()*lower.length)
    console.log(lower[lC])
    pW.push(lower[lC])
  }
    for(i=0; i < upperN; i++){
    var uC = Math.floor(Math.random()*upper.length)
    console.log(upper[uC])
    pW.push(upper[uC])
  }
    for(i=0; i < numN; i++){
    var nC = Math.floor(Math.random()*num.length)
    console.log(num[nC])
    pW.push(num[nC])
  }
  var passwordText = document.querySelector("#password");
  // Fisher-Yates shuffle algorithm to randomize the order of the type of character
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }
  shuffle(pW);
  // Join the array together with .join()
  var thePass = pW.join('');
  passwordText.textContent = thePass;
  }

    

  



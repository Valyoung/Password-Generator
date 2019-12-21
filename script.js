// Assignment Code
let generateBtn = document.querySelector("#generate");
let randomChar = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 
                'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
let randomNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let randomSymb =['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '<', '=', '>', '?', '@', '[', '/', '/', ']', '^', '_', '`', '{', '|', '}', '~',];
let passLength = 8;
let randomPass = [];




// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  
}


// BONUS EVENT LISTENER
copyToClipboard.addEventListener('click', );

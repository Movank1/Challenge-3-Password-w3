// Array of special characters, numbers, lower and upcase characters to be generated in secure password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','{','$','^','?',':',',',']','[','~','-','_','.',')','(','}'];


var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
for (var i = 0; i < 3; i++)

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];


var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
];




// Function to select password criteria
function getPasswordOptions() {

  var length = parseInt(prompt("Enter the password length:between 8 and 128 chaecters"))

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    ravoid;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    ravoid;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters');
    ravoid;
  }
   
  var includeSpecialCharacters = confirm(
    'Include special characters? Click OK to confirm.'
  );

 
  var includeNumericCharacters = confirm(
    'Include numbers? Click OK to confirm.'
  );

  var includeLowerCasedCharacters = confirm(
    'Include lowercase characters? Click OK to confirm.'
  );

  var includeUpperCasedCharacters = confirm(
    'Include uppercase characters? Click OK to confirm.'
  );

  
  if (
    includeSpecialCharacters === null &&
    includeNumericCharacters === null &&
    includeLowerCasedCharacters === null &&
    includeUpperCasedCharacters === null
  ) {
    alert('Must select at least one character type');
    ravoid;
  }

  var passwordOptions = {
    length: length,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumericCharacters: includeNumericCharacters,
    includeLowerCasedCharacters: includeLowerCasedCharacters,
    includeUpperCasedCharacters: includeUpperCasedCharacters,
  };

  return passwordOptions;
}


//Function to  include a random index within the range of the array length


  function IncludeRandom(arr) {
  
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
// Function to produce password
function generatePassword() {

   var options = getPasswordOptions()
   var result = [];
   var possibleCharacters = [];
   var guaranteedCharacters = [];
  
   if (options.includeSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
     guaranteedCharacters.push(IncludeRandom(specialCharacters));
   }

   
   if (options.includeNumericCharacters) {
     possibleCharacters = possibleCharacters.concat(numericCharacters);
     guaranteedCharacters.push(IncludeRandom(numericCharacters));
   }

   
   if (options.includeLowerCasedCharacters) {
     possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
     guaranteedCharacters.push(IncludeRandom(lowerCasedCharacters));
   }

   
   if (options.includeUpperCasedCharacters) {
     possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
     guaranteedCharacters.push(IncludeRandom(upperCasedCharacters));
   }

  
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = IncludeRandom(possibleCharacters);

    result.push(possibleCharacter);
  }


  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

 
  return result.join('');
  
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Produce secure password to the #password input

  function producePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


generateBtn.addEventListener('click', producePassword);


function generateButton() {

    var passwordLength = prompt("Please select a password length between 8 and 128!");
    var includeNumber = confirm("would you like to include numbers?");
    var includeUpper = confirm("would you like to inlcude uppercase letters?");
    var includeLower = confirm("would you like to include lowercase letters?");
    var includeSpecial = confirm("would you like to include special characters?");
}

// select a random letter in string x amount of times, depending on userinput

// 4 strings with various characters depending on what user is looking for//

var = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// password combination options...
//lowercase
var = "abcdefghijklmnopqrstuvwxyz";
//uppercase
var = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//numbers
var = "1234567890";
//symbols (missing "")
var = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//lowercase & uppercase
var = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//lowercase & uppercase & numbers
var = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//lowercase & uppercase & numbers & symbols
var = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//uppercase & numbers
var = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//uppercase & numbers & symbols
var = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//numbers & lowercase
var = "abcdefghijklmnopqrstuvwxyz1234567890";
//numbers & lowercase & symbols
var = "abcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//symbols & numbers
var = "1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//symbols & lowercase
var = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz";
//symbols & uppercase
var = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// function that performs generates one of the above passwords based on user input
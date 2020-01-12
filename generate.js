// password combination possibilities...

//lowercase
var lower = "abcdefghijklmnopqrstuvwxyz";
//uppercase
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//numbers
var num = "1234567890";
//symbols (missing "")
var sym = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//lowercase & uppercase 
var lowerUpper = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//lowercase & uppercase & numbers 
var lowerUpperNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//lowercase & uppercase & numbers & symbols
var all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//uppercase & numbers 
var upperNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//uppercase & numbers & symbols 
var upperNumSym = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//numbers & lowercase 
var lowerNum = "abcdefghijklmnopqrstuvwxyz1234567890";
//numbers & lowercase & symbols 
var lowerNumSym = "abcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//symbols & numbers 
var numSym = "1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//symbols & lowercase
var symLower = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz";
//symbols & uppercase
var upperSym = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// retreive info from user needed to generate password

 var passwordLength = document.querySelector("#pwlength");
 var generate = document.querySelector("#gbutton");
 var copy = document.querySelector("#cbutton");
 var includeLower = document.querySelector("#chkLowercase");
 var includeUpper = document.querySelector("#chkUppercase");
 var includeNumber = document.querySelector("#chkNumbers");
 var includeSpecial = document.querySelector("#chkSymbols");

 //make a series of if/then statements for the various scenarios
 





 if (passwordLength >= 8 && passwordLength <=128) {

if (includeLower === true) {
    chooseRandom(lower);
    alert("your password is " + randomSelection);
}

else if (includeUpper === true) {
    chooseRandom(upper);
    alert("your password is " + randomSelection);
}

else if (includeNumber === true) {
    chooseRandom(num);
    alert(" ");
}

else if (includeSpecial === true) {
    chooseRandom(sym);
    alert(" ");
}

else if (includeLower === true && includeUpper === true) {
    chooseRandom(lowerUpper);
    alert("");
}

else if (includeLower === true && includeUpper === true && includeNumber === true) {
    alert("");
}

else if (includeLower === true && includeUpper === true && includeNumber === true && includeSpecial === true ) {
    alert("");
}

else if (includeUpper === true && includeNumber === true) {
    alert("");
}

else if (includeUpper === true && includeNumber === true && includeSpecial === true) {
    alert("");
}

else if (includeNumber === true && includeLower === true) {
    alert("");
}

else if (includeNumber === true && includeLower === true && includeSpecial === true) {
    alert("");
}

else if (includeSpecial === true && includeNumber === true) {
    alert("");
}

else if (includeSpecial === true && includeLower === true) {
    alert("");
}

else if (includeSpecial === true && includeUpper === true) {
    alert("");
}
}

else {
    alert("please select a number between 8 and 128");
    var passwordLength = prompt("Please select a password length between 8 and 128!");
}
//choose a random letter in that the string 

function chooseRandom(string) {

        randomSelection = string.charAt(Math.floor(Math.random() * string.length));
    
}


for (var i = 0; i < passwordLength; i++) {
    chooseRandom(all);
    console.log(randomSelection);
}


//keep choosing a random letter for the amount of times that the user requested and concatenate them into a string
// for (var i = 0; i < passwordLength; i++) {
//     string.charAt(Math.floor(Math.random() * string.length));
// }





// function generatePassword() {

//     for (var i = 0; i < passwordLength; i++) {

//         password = randomSelection * passwordLength;
//     }
    
// }


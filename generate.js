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

 //listen for button activity..

 //generate password button clicked
generate.addEventListener("click", function(event) {
     event.preventDefault();
     console.log(passwordLength.value);
     makePassword();
 })
//copy to clipboard button clicked
copy.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(passwordLength.value);
})
//lowercase button checked
includeLower.addEventListener("click", function() {
    console.log(includeLower.checked);
    chooseRandom(lower);
    console.log(randomSelection);
})
//uppercase button checked
includeUpper.addEventListener("click", function() {
    console.log(includeUpper.checked);
    chooseRandom(upper);
    console.log(randomSelection);
})
//numbers button checked
includeNumber.addEventListener("click", function() {
    console.log(includeNumber.checked);
    chooseRandom(num);
    console.log(randomSelection);
})
//symbols button checked
includeSpecial.addEventListener("click", function() {
    console.log(includeSpecial.checked);
    chooseRandom(sym);
    console.log(randomSelection);
})


if (includeSpecial.clicked == true) {
    chooseRandom(sym);
    alert(randomSelection);
}


//make a series of if/then statements for the various scenarios

function makePassword() {
    
    if (includeLower.checked == true && includeUpper.checked == false && includeNumber.checked == false && includeSpecial.checked == false) {
            chooseRandom(lower);
            alert("your password is " + randomSelection);
        }
  
    else if (includeLower.checked == false && includeUpper.checked == true && includeNumber.checked == false && includeSpecial.checked == false) {
            chooseRandom(upper);
            alert("your password is " + randomSelection);
}
 
    else if (includeLower.checked == false && includeUpper.checked == false && includeNumber.checked == true && includeSpecial.checked == false) {
            chooseRandom(num);
            alert("your password is " + randomSelection);
}
 
    else if (includeLower.checked == false && includeUpper.checked == false && includeNumber.checked == false && includeSpecial.checked == true) {
            chooseRandom(sym);
            alert("your password is " + randomSelection);
}
 
    else if (includeLower.checked == true && includeUpper.checked == true && includeNumber.checked == false && includeSpecial.checked == false) {
            chooseRandom(lowerUpper);
            alert("your password is " + randomSelection);
}

    else if (includeLower.checked == true && includeUpper.checked == true && includeNumber.checked == true && includeSpecial.checked == false) {
            chooseRandom(lowerUpperNum);
            alert("your password is " + randomSelection);
}

    else if (includeLower.checked == true && includeUpper.checked == true && includeNumber.checked == true && includeSpecial.checked == true) {
            chooseRandom(all);
            alert("your password is " + randomSelection);
}

    else if (includeLower.checked == false && includeUpper.checked == true && includeNumber.checked == true && includeSpecial.checked == false) {
            chooseRandom(upperNum);
            alert("your password is " + randomSelection);
}

    else if (includeLower.checked == false && includeUpper.checked == true && includeNumber.checked == true && includeSpecial.checked == true) {
            chooseRandom(upperNumSym);
            alert("your password is " + randomSelection);
}

    else if (includeLower.checked == true && includeUpper.checked == false && includeNumber.checked == true && includeSpecial.checked == false) {
            chooseRandom(lowerNum);
            alert("your password is " + randomSelection);
}

    else if (includeLower.checked == true && includeUpper.checked == false && includeNumber.checked == true && includeSpecial.checked == true) {
            chooseRandom(lowerNumSym);
            alert("your password is " + randomSelection);
}

    else if (includeLower.checked == false && includeUpper.checked == false && includeNumber.checked == true && includeSpecial.checked == true) {
            chooseRandom(numSym);
            alert("your password is " + randomSelection);
}

    else if (includeLower.checked == true && includeUpper.checked == false && includeNumber.checked == false && includeSpecial.checked == true) {
            chooseRandom(symLower);
            alert("your password is " + randomSelection);
}

    else if (includeLower.checked == false && includeUpper.checked == true && includeNumber.checked == false && includeSpecial.checked == true) {
            chooseRandom(upperSym);
            alert("your password is " + randomSelection);
}
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


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
generate.addEventListener("click", function() {
     console.log(passwordLength.value);
     makePassword();
 })
//copy to clipboard button clicked
copy.addEventListener("click", function() {
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

//make a series of if/then statements for the various scenarios in a function
    
function makePassword() {
    
    
    if (includeLower.checked == true && includeUpper.checked == false && includeNumber.checked == false && includeSpecial.checked == false) {
            generatorOfPasswords(lower)
}
  
    else if (includeLower.checked == false && includeUpper.checked == true && includeNumber.checked == false && includeSpecial.checked == false) {
            generatorOfPasswords(upper)
}
 
    else if (includeLower.checked == false && includeUpper.checked == false && includeNumber.checked == true && includeSpecial.checked == false) {
            generatorOfPasswords(num)
}
 
    else if (includeLower.checked == false && includeUpper.checked == false && includeNumber.checked == false && includeSpecial.checked == true) {
            generatorOfPasswords(sym)
}
 
    else if (includeLower.checked == true && includeUpper.checked == true && includeNumber.checked == false && includeSpecial.checked == false) {
            generatorOfPasswords(lowerUpper)
}

    else if (includeLower.checked == true && includeUpper.checked == true && includeNumber.checked == true && includeSpecial.checked == false) {
            generatorOfPasswords(lowerUpperNum)
}

    else if (includeLower.checked == true && includeUpper.checked == true && includeNumber.checked == true && includeSpecial.checked == true) {
            generatorOfPasswords(all)
}

    else if (includeLower.checked == false && includeUpper.checked == true && includeNumber.checked == true && includeSpecial.checked == false) {
            generatorOfPasswords(upperNum)
}

    else if (includeLower.checked == false && includeUpper.checked == true && includeNumber.checked == true && includeSpecial.checked == true) {
            generatorOfPasswords(upperNumSym)
}

    else if (includeLower.checked == true && includeUpper.checked == false && includeNumber.checked == true && includeSpecial.checked == false) {
            generatorOfPasswords(lowerNum)
}

    else if (includeLower.checked == true && includeUpper.checked == false && includeNumber.checked == true && includeSpecial.checked == true) {
            generatorOfPasswords(lowerNumSym)
}

    else if (includeLower.checked == false && includeUpper.checked == false && includeNumber.checked == true && includeSpecial.checked == true) {
            generatorOfPasswords(numSym)
}

    else if (includeLower.checked == true && includeUpper.checked == false && includeNumber.checked == false && includeSpecial.checked == true) {
            generatorOfPasswords(symLower)
}

    else if (includeLower.checked == false && includeUpper.checked == true && includeNumber.checked == false && includeSpecial.checked == true) {
            generatorOfPasswords(upperSym)
}
} 

//choose a random letter in that the string 

function chooseRandom(string) {

        randomSelection = string.charAt(Math.floor(Math.random() * string.length));

        return randomSelection;

        console.log(randomSelection)
    
}


function generatorOfPasswords(string){
    if (passwordLength.value < 8 || passwordLength.value > 128 || passwordLength.length == "") {
        alert("please enter a valid #");
        return;
    }
    
    var randomArray = [];
    for (let index = 0; index < passwordLength.value; index++) {
        randomArray.push(chooseRandom(string))
    }
    console.log(randomArray.join(""))
    document.getElementById("passwordDisplay").textContent=randomArray.join("");
}

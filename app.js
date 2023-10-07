var input = prompt("Enter a character (number or string):");

if (input.length === 1) {
    var charCode = input.charCodeAt(0);

    if (charCode >= 48 && charCode <= 57) {
        alert("The input is a number.");
    } else if (charCode >= 65 && charCode <= 90) {
        alert("The input is an uppercase letter.");
    } else if (charCode >= 97 && charCode <= 122) {
        alert("The input is a lowercase letter.");
    } else {
        alert("The input is not a number, uppercase letter, or lowercase letter.");
    }
} else {
    alert("Please enter only one character.");
}

//greater value

var integer1=+prompt("Enter any number:");
var integer2=+prompt("Now enter different number:");

if(integer1>integer2){
    alert(integer1+" is greater than "+integer2);
}
else if(integer2>integer1){
    alert(integer2+" is greater than "+integer1);
}
else{alert("Both numbers are equal")};

//nagative positve value

var integer1=+prompt("Enter any number:");


if(integer1>0){
    alert(integer1+" is a positve number ");
}
else if(integer1<0){
    alert(integer1+" is a nagative Number");
}
else{alert("its Zero")};


// time game
var time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));

if (isNaN(time) || time < 0 || time > 2359) {
    alert("Invalid time format. Please enter a valid time.");
} else if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else {
    alert("Good night!");
}


// vowel check
var character = prompt("Enter a single character:");

// Check if the input is a single character
if (character.length === 1) {
    // Convert the character to lowercase to handle both uppercase and lowercase vowels
    character = character.toLowerCase();

    // Check if the character is a vowel
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
        alert("The character is a vowel. (true)");
    } else {
        alert("The character is not a vowel. (false)");
    }
} else {
    alert("Please enter a single character.");
}


//password store and validate

var password = "smit2023"

var userInput=prompt("Enter your Password (smit2023)");

if(userInput === password){
    alert("Correct! The password you entered matches the original password.");
}
else{alert("Incorrect Password.")}

// script correction

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
// Sets the length of the "Select" field for character length
var setPwLenght = document.getElementById("pwLength");

for (var i = 8; i <= 128; i++) {
    var option = document.createElement("option");
    option.text = i;
    setPwLenght.add(option);
 }

 // Makes sure at least one checkbox is selected
 function validateForm() {
     var checkbox = document.getElementsByClassName('form-check-input');
     var isChecked = false;
     for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            isChecked = true;
        }
     };
     if (isChecked) {
        passwordGen();
     } else {
         alert("Please check at least one option!");
     };  
}
 function passwordGen() {
    var newPassword = ""; // this variable will hold the generated password
    var getPwlength = document.getElementById("pwLength").value; // sets the condition for the 'for' loop

    // checks which boxes are checked or not
    var ScChecked = document.getElementById("specialChar").checked;
    var NcChecked = document.getElementById("numbers").checked;
    var LcChecked = document.getElementById("lowercaseLetters").checked;
    var UcChecked = document.getElementById("uppercaseLetters").checked;

    // creates a custom string with the value of the checked boxes
    var finalCharSet = "";

    function finalString(s,n,l,u) {
        // strings that hold the characters to be used in the password
        var specialCharSet = "!@#$%^&*().;:?";
        var numberCharSet = "0123456789";
        var lowerCharSet = "qwertyuiopasdfghjklzxcvbnm";
        var upperCharSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
        var x = "";
        if(s) {
            x += specialCharSet;
        };
        if(n) {
            x += numberCharSet;
        };
        if(l) {
            x += lowerCharSet;
        };
        if(u) {
            x += upperCharSet;
        }
        console.log(x);
        return x;
    };
    
    finalCharSet=finalString(ScChecked,NcChecked,LcChecked,UcChecked); // Callback function to generate the final string
    console.log(finalCharSet);

    // this loop will assign a value to the 'newPassword' variable
    for (var i = 0; i < getPwlength; i++) {
        newPassword += finalCharSet.charAt(Math.floor(Math.random()*finalCharSet.length));
    }
    document.getElementById("newPW").innerHTML = "Your new password is "+newPassword; // Displays the new password
    
    // adds the button to copy new password to clipboard - UNFINISHED, DOES NOT WORK YET
    var btn = document.createElement("button");
    btn.innerHTML = "Copy to Clipboard";
    document.body.getElementsByClassName("container").appendChild(btn);
 }


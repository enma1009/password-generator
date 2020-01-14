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

    // strings that hold the characters to be used in the password
    var specialCharSet = "!@#$%^&*().;:?";
    var numberCharSet = "0123456789";
    var lowerCharSet = "qwertyuiopasdfghjklzxcvbnm";
    var upperCharSet = "QWERTYUIOPASDFGHJKLZXCVBNM";

    // checks which boxes are checked or not
    var ScChecked = document.getElementById("specialChar").checked;
    var NcChecked = document.getElementById("numbers").checked;
    var LcChecked = document.getElementById("lowercaseLetters").checked;
    var UcChecked = document.getElementById("uppercaseLetters").checked;

    // creates a custom string with the value of the checked boxes
    var finalCharSet = function(s,n,l,u) {
        var finalString = "";
        if(s) {
            finalString += specialCharSet;
        };
        if(n) {
            finalString += numberCharSet;
        };
        if(l) {
            finalString += lowerCharSet;
        };
        if(u) {
            finalString += upperCharSet;
        }
        return finalString;
    };
    
    finalCharSet(ScChecked,NcChecked,LcChecked,UcChecked);
    console.log(finalCharSet);

    //alert(finalCharSet(ScChecked,NcChecked,LcChecked,UcChecked));
    
    // this loop will assign a value to the 'newPassword' variable
    for (var i = 0; i < getPwlength; i++) {

        newPassword += finalCharSet.charAt(Math.floor(Math.random()*finalCharSet.length));
        /* if (LcChecked) {
            newPassword += lowerCharSet.charAt(Math.floor(Math.random()*lowerCharSet.length));
        }
        if (NcChecked) {
            newPassword += numberCharSet.charAt(Math.floor(Math.random()*numberCharSet.length));
        }   */
       //getPwlength--;
    }

    document.getElementById("newPW").innerHTML = "Your new password is "+newPassword;
    //alert(newPassword);
   // alert(lowerC+upperC+specialC+numberC+"char length"+getPwlength);
 }


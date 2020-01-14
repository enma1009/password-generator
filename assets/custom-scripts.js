// Sets the length of the "Select"
var setPwLenght = document.getElementById("pwLength");

for(var i=8; i<=128; i++) {
    var option = document.createElement("option");
    option.text = i;
    setPwLenght.add(option);
 }
    

//prompt("Please type in the desired length for your password. It must be between 8 and 128 characters.");
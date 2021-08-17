function My_First_Function (){ //Defining a function
    var str = "This text is pink"; //Defining a variable
    var result = str.fontcolor("pink"); //Adding color to variable str
    document.getElementById("Pink_Text").innerHTML = result; //Adding function to HTML
}

function myFunction () { //Defining a function
    var sentence = "I am learning"; //Concatenating a string
    sentence += " JavaScript!"; //Concatenating a string
    document.getElementById("Concatenate").innerHTML = sentence; //Adding function to HTML
}
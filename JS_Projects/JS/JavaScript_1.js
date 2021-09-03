// Switch Statement Assignment
function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great animal!";
    switch(Animals) {
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
            break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
            break;
        case "Giraffe":
            Animal_Output = "Giraffe" + Animal_String;
            break;
        case "Zebra":
            Animal_Output = "Zebra" + Animal_String;
            break;
        case "Monkey":
            Animal_Output = "Monkey" + Animal_String;
            break; 
        case "Bear":
            Animal_Output = "Bear" + Animal_String;
            break;
            default:
            Animal_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML= Animal_Output;
}

// getElementByClassName Method
function Hello_World_Function () {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// Canvas Challenge
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(20,20,150,100);
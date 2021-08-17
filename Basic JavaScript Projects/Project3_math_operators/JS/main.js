function addition_Function() { //defining a function
    var addition = 27 + 13; //defining a variable
    document.getElementById("Math").innerHTML = "27 + 13 =" +addition; //adding element to HTML
}

function subtraction_Function () { //defining a function
    var subtration = 5 - 2; //defining a variable
    document.getElementById("Math1").innerHTML = "5 - 2 =" +subtration; //adding element to HTML
}

function multiplication_Function() { //defining a function
    var multiplication = 6 * 8; //defining a variable
    document.getElementById("Math2").innerHTML = "6 x 8 =" + multiplication; //adding element to HTML
}

function division_Function() { //defining a function
    var division = 48 / 6; //defining a variable
    document.getElementById("Math3").innerHTML = "48 / 6 = " + division; //adding element to HTML
}

function more_Math () { //defining a function
    var simple_Math = (1 + 2) * 10 / 2 - 5; //defining a variable
    document.getElementById("Math4").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math; //adding element to HTML
}

function modulus_Operator () { //defining a function
    var modulus = 25 % 6; //defining a variable
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainer of: " + modulus; //adding element to HTML
}

function negation_Operator () { //defining a function
    var x = 10; //defining a variable
    document.getElementById("Math6").innerHTML = -x; //adding element to HTML
}

var y = 5; //defining a variable
y++; //incrementing by 1
document.write(y); //printing in html

var z = 5.25; //defining a variable
z--; //decrementing by 1
document.write(z); //printing in html

window.alert(Math.random()); // return random number between 0 & 1

window.alert(Math.random() * 100); //random number displayed between 0 & 100

Math.SQRT2
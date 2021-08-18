document.write("10" + 5); //type coercion

document.write(typeof "Alisha"); //type of operator returns string

document.write(typeof 257); //type of operator returns number

function notnum_Function () { //defining a function
    document.getElementById("NaN").innerHTML = 0/0; //returns NaN because 0 cannot be divided by zero
}

function string_Function () { //defining a function
    document.getElementById("String").innerHTML = isNaN ('This is a string'); //returns true because NaN
}

function num_Function () { //defining a function
    document.getElementById("Num").innerHTML = isNaN ('2021'); //returns false because 2021 is a number
}

function infinity_Function () { //defining a function
    document.getElementById("Infinity").innerHTML = (4E520); //returns infinity
}


function neginfinity_Function () { //defining a function
    document.getElementById("NegInfinity").innerHTML = (-5E340); //returns -infinity
}

function booleanFalse_Function () { //defining a function
    document.getElementById("False").innerHTML = (13 > 20); //returns false
}

function booleanTrue_Function () { //defining a function
    document.getElementById("True").innerHTML = (20 > 13); //returns true
}

console.log(7 + 8); //returns 15 in console

console.log(8 < 6); //returns false in console

console.log((10+5)==15); //returns true in console

console.log(15==7); //returns false in console

function truedoubeq_Function () { //defining a function
    document.getElementById("True==").innerHTML = (10==10); //returns true
}

function falsedoubeq_Function () { //defining a function
    document.getElementById("False==").innerHTML = (3==15); //returns false 
}

X= 74;
Y= 74;
document.write(X===Y); //returns true

X= 37; 
Y= "52";
document.write(X===Y); //returns false

X= 2;
Y="two"
document.write(X===Y); //returns false

X= 65;
Y= 56;
document.write(X===Y); //returns false

document.write(20 > 6 && 30 > 2); //returns true

document.write(20 < 6 && 30 > 2); //returns false

document.write(30 > 13 || 13 > 30); //returns true

document.write(30 > 40 || 13 > 30); //returns false

function notfal_Function () { //defining a function
    document.getElementById("NotFal").innerHTML = ! (15 > 7); //returns false 
}

function nottru_Function () { //defining a function
    document.getElementById("NotTru").innerHTML = ! (3 > 40); //returns true
}
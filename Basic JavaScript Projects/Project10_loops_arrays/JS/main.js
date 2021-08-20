//Creating a Loop
function Call_Loop () {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Creating length property
function str_leng () {
var str = "Hello Alisha!";
document.getElementById("strleng").innerHTML = str.length;
}

//Creating a For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Creating an Array
function array_Function () {
    var foods = [];
    foods[0] = "Caprese Salad";
    foods[1] = "Shrimp Cocktail";
    foods[2] = "Filet Mignon";
    foods[3] = "Creme Brulee"
    document.getElementById("Array").innerHTML = "For dinner I will have " + foods[2] + ".";
}

//Const keyword
function constant_function () {
    const Shoe_Types = {Brand:"Nike", type:"Air Force 1", color:"White"};
    Shoe_Types.type = "Court Legacy";
    Shoe_Types.color = "Black";
    document.getElementById("Constant").innerHTML= "Becky's favorite shoe is " +
    Shoe_Types.type + " in color " + Shoe_Types.color;
}

// Let
function let_Function () {
var X = 75;
document.write(X);
{
    let X = 25;
    document.write("<br>" + X);
}
document.write("<br>" + X);
}

//Return statement
function return_Function (name) {
    return "Hello " + name;
}
document.getElementById("returnfunc").innerHTML = return_Function("Alisha");

//Objects
let wine = {
    maker: "Caymus ",
    type: "Cabernet ",
    year: "2017 ",
    type2: "Special Selection ",
    description : function () {
        return "This wine is a " + this.year + this.maker + this.type, + this.type2;
    }
};
document.getElementById("winelove").innerHTML = wine.description();
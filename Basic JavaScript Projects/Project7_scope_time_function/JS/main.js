//Writing a global variable
var X = 55;
function Add_numbers_1 () {
    document.write(15 + X + "<br>");
}
function Add_numbers_2 () {
    document.write(X + 200 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

//Writing a local variable
function Add_numbers_3 () {
    var Y = 20;
    document.write(30 + Y + "<br>");
}
function Add_numbers_4 () { //Will not display because the variable is local (within a function)
    document.write(Y + 300);
}
Add_numbers_3();
Add_numbers_4();

//Utilizing console.log to help debug code
function Add_numbers_5 () {
    var Z = 20;
    console.log(30 + Z);
}
function Add_numbers_6 () { //Will not display because the variable is local (within a function)
    console.log(Z + 300);
}
Add_numbers_5();
Add_numbers_6();

//If statement 
function get_Date () {
    if (new Date () .getHours() < 18) {
        document .getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Else statement
function age_Function () {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink!";
    }
    else {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("drinking_age").innerHTML = Drink;
}

//Else if statement
function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
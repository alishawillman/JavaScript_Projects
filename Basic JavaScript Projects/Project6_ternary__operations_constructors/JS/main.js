function Ride_Function () { //Defining a function
    var Height, Can_ride; //Defining variables
    Height = document.getElementById("Height").value; //Adding value of height into HTML
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //Result for input by user
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Adding into HTML
}

function Vote_Function () { //Defining a function
    var Age, Can_vote; //Defining Variables
    Age = document.getElementById("Age").value; //Adding value of age into HTML
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!"; //Result for input by user
    document.getElementById("Vote").innerHTML = Can_vote; //Adding into HTML
}

function Vehicle(Make, Model, Year, Color) { //Defining a class function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Variables of the class function
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White ad Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () { //Defining a function
    document.getElementById("Keywords_and_Constructors").innerHTML = //Adding to HTML
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Wine(Maker, Year, Region, Type) { //Defining a class function
    this.Wine_Maker = Maker;
    this.Wine_Year = Year;
    this.Wine_Region = Region;
    this.Wine_Type = Type;
}

var Alisha = new Wine("Ferrari-Carano", 2012, "Sonoma County", "Sangiovese"); //Variables of the class function
var Joey = new Wine("Belle Glos", 2014, "Santa Barbara", "Pinot Nior");
var Hannah = new Wine("Kim Crawford", 2016, "New Zealand", "Sauvignon Blanc");
function myFunction2 () { //Defining a function
    document.getElementById("New_and_This").innerHTML = //Adding to HTML
    "Alisha's favorite wine is " + Alisha.Wine_Maker + "'s " + Alisha.Wine_Type +
    " from year " + Alisha.Wine_Year;
}

function count_Function () { //Creating a nested function
    document.getElementById("Nested_Function").innerHTML = Count ();
    function Count () {
        var Starting_point = 11;
        function Plus_one () {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
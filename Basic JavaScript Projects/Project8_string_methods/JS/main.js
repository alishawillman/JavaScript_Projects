//Concatenating strings
function first_sentence() {
    var part_1 = "This is ";
    var part_2 = "my first ";
    var part_3 = "concatenated ";
    var part_4 = "sentence using ";
    var part_5 = "JavaScript!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}

//Slice method
function slice_Method() {
    var Sentence = "The way I see it, if you want the rainbow, you gotta put up with the rain.";
    var Section = Sentence.slice (34,41);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase method
function upper_method() {
    var str = "Hello Alisha!";
    var Upper = str.toUpperCase ();
    document.getElementById("Upper").innerHTML = Upper;
}

//Search method
function search_Function () {
    var str = "I love dogs!"; 
    var tosearch = str.search ("dogs!");
    document.getElementById("search").innerHTML = tosearch;
}

//toString method
function string_Method () {
    var X = 355;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision method
function precision_Method () {
    var X = 8734673647135.746278154781;
    document.getElementById("Precision").innerHTML = X.toPrecision(15);
}

//toFixed method
function fixed_Function () {
    var num = 72685.827;
    var n = num.toFixed (2);
    document.getElementById("fixed").innerHTML = n;
}

//valueOf method
function value_Function () {
    var str = "Hello Alisha";
    var val = str.valueOf();
    document.getElementById("value").innerHTML = val;
}
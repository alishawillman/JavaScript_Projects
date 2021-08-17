function my_Dictionary () { //defining a function
    var Animal = { //defining variables
        Species: "Dog",
        Color: "Black & Tan",
        Breed: "Yorkshire Terrier"
        Age: 10
        Sound: "Bark",
    };
    delete Animal.Breed; //utilizing delete operator
    document.getElementById("Dictionary").innerHTML = Animal.Breed; //output to html
}
function displayType(dog) {
    var dogType = dog.getAttribute("data-dog-type");
    alert(dog.innerHTML + " is a " + dogType + "!");
}
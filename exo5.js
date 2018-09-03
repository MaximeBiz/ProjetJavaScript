

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(event) {
var fruitsList = document.getElementById("fruits");
fruitsList.remove(fruitsList.selectedIndex);
});
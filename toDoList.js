
function addToList() {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("myTextarea").value;
  
  if (inputValue ==='') {
	  alert("Le champ de saisie est vide");
  }
  else {
	  var t = document.createTextNode(inputValue);
	  li.appendChild(t);
	  document.getElementById("list").appendChild(li);
  }
  document.getElementById("myTextarea").value = '';
}

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(event) {
var fruitsList = document.getElementById("fruits");
fruitsList.remove(fruitsList.selectedIndex);
});
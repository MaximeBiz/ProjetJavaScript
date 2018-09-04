
//Fonction qui ajoute le texte saisi à la liste lors du click
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


//Fonction qui supprime un élément de la liste
var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(event) {
var fruitsList = document.getElementById("fruits");
fruitsList.remove(fruitsList.selectedIndex);
});

//Fonction qui clear toute la liste

function clearList() {
	var clearAll = document.getElementsByTagName("li");
	for (let i = 0; i<clearAll.length; i++) {
		document.getElementById("list").removeChild(li);
	}
}

//Fonction qui recherche dans la liste
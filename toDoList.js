
//Fonction qui ajoute le texte saisi à la liste lors du click
function addToList() {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("textOne").value;
  
  if (inputValue ==='') {
	  alert("Le champ de saisie est vide");
  }
  else {
	  var t = document.createTextNode(inputValue);
	  li.appendChild(t);
	  document.getElementById("list").appendChild(li);
  }
  document.getElementById("textOne").value = '';
}


//Fonction qui supprime un élément de la liste


//Fonction qui clear toute la liste

function clearList() {
	var list = document.getElementById("list");
	var items = Array.from(document.getElementsByTagName("li"));
	//console.log(items)
	
	for (var i = 0; i<items.length; i++) {
		list.removeChild(items[i]);
	}
}

//Fonction qui recherche dans la liste
function search() {
	
	// Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('textTwo');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

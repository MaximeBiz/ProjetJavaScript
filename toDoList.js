// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


//Fonction qui supprime un élément de la liste
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
	var li = this.parentElement;
    li.remove();
  }
}


//Fonction qui ajoute le texte saisi à la liste lors du click
function addToList() {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("textOne").value;
  var list = document.getElementById("list");
  
  if (inputValue ==='') {
	  alert("Le champ de saisie est vide");
  }
  else {
	  var t = document.createTextNode(inputValue);
	  li.appendChild(t);
	  list.appendChild(li);
  }
  document.getElementById("textOne").value = '';
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var li = this.parentElement;
	li.remove();
    }
  }
  
}



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
	
    var input = document.getElementById('textTwo');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("list");
    var items = Array.from(document.getElementsByTagName("li"));

    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < items.length; i++) {
        
        if (items[i].innerText.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
	
}

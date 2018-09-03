function myFunction() {
	let max = 100;
	let min = 0; 
	var resultat;
   resultat = Math.floor(Math.random() * (max - min + 1)) + min;
   console.log(resultat);
  // document.getElementById("affichage").value = resultat;
  // console.log(document.getElementById("affichage").value);
}
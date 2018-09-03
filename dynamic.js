var elements = document.getElementsByTagName("p");
var length = elements.length;
for (var i = 0; i < length; i++)
{
	elements[i].style.color= "red";
}
var myLink = document.getElementById("link");
var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function(event) {
	alert(myLink.getAttribute("href"));
});
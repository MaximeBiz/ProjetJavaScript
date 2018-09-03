
function addToList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myTextarea").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
}
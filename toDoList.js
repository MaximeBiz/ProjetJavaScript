
function addToList() {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("myTextarea").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("list").appendChild(li);
}
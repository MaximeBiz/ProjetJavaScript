
function insertRow() {
var foo = document.getElementById('myTable').insertRow(0);
var cell1 = foo.insertCell(0);
var cell2 = foo.insertCell(1);
cell1.innerHTML = "NvllLigne Cellule1";
cell2.innerHTML = "NvllLigne Cellule2";
}
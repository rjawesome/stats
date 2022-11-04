var curItems = 0;
var itemsDiv = document.getElementById("items");

document.getElementById("add-new").onclick = function () {
  var newInput = document.createElement("input");
  newInput.type = "number";
  newInput.placeholder = "Item #" + (curItems+1).toString();
  newInput.id = "item"+curItems;
  newInput.name = "data";
  newInput.className = "form-control";

  itemsDiv.appendChild(newInput);
  curItems++;
  return false;
}

async function addNav() {
  const resp = await fetch("layouts/nav.html");
  const html = await resp.text();
  document.getElementById("page").insertAdjacentHTML("beforebegin", html);
}

addNav();
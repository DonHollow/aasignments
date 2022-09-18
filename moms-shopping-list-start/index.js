const userInput = document.getElementById("submitItem")

document.addItem.addEventListener("submit", function(e){
  e.preventDefault()
  
  console.log(e.target[0].value)
})


userInput.addEventListener('onclick()', function(e){
  var list = document.getElementById("newItem");
  var deleteButton = document.getElementById("delete");
  var addItem = document.createElement("li");
  addItem.setAttribute("id", "item" + i + "");
  addItem.innerHTML = 'Item ' + i;
  deleteButton.setAttribute("onclick", "remove(this)");
  list.appendChild(addItem);
})
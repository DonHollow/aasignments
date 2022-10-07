const form = document.addItem

form.addEventListener("submit", function(e){
  e.preventDefault()
  
  let list = document.getElementById("list")
  
  const input = form.title.value
  
  let newDiv = document.createElement("div")
  
  let listItem = document.createElement("li")

  listItem.textContent = input
  list.append(newDiv)

  newDiv.append(listItem)

  form.title.value = ""

  let edit = document.createElement("button")

  edit.textContent = "edit"

  let remove = document.createElement("button")
  remove.textContent  = "X"

  newDiv.append(edit, remove)

  remove.setAttribute("class", "button")
  edit.setAttribute("class","button1")
  newDiv.setAttribute("class", "button")

  remove.addEventListener("click", function(){
    let listItem = this.parentNode;
      let list = listItem.parentNode;
      list.removeChild(listItem);
  })

  let saveBtn = document.createElement('button')
  
  let inputBox = document.createElement('input')

  saveBtn.textContent = "Save"

  edit.addEventListener("click", function(){
    newDiv.append(inputBox)
    inputBox.value = listItem.textContent
    newDiv.append(saveBtn)
  })

  saveBtn.addEventListener("click", function(){
    listItem.textContent = inputBox.value
    inputBox.remove()
    saveBtn.remove()
  })

})
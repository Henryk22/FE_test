const form = document.querySelector("form")
const input = document.querySelector("#new_item_input")
const list = document.querySelector("#todo_list")


const todoItems = []

function addItem(event) {
      event.preventDefault();    // предотвращаем перезагрузку страницы
  let text = input.value;    // сохраняем значение введенное пользователем
  form.reset()// очищаем поле ввода
   text = text.trim()  //""

  if (text === "") {
    return  // exit from function
}
  const todoItems = {
    text: text,
    status: false
  }
  todoItems.push(todoItem)
  updateList()
  }
function updateList() {
list.innerHTML = "" 
    for (let index = 0; index < todoItems.length; index++) {
     const li = document.createElement("li")
       const input = document.createElement("input")
       const label = document.createElement("label")
       const button = document.createElement("button")
       button.innerText = "Remove"
       label.innerText = text
       input.setAttribute("type", "checkbox")
       li.append(input, label, button)

       li.append(li)
    }
    
}

form.addEventListener("submit", addItem)

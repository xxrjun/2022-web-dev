// add data
let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", e => {
  // 避免按下新增按鈕時網頁重新整理
  e.preventDefault();

  // get the input values
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoMonth = form.children[1].value;
  let todoDay = form.children[2].value;

  // check for text input is not empty string
  if (todoText === "") {
    // alert("Please Enter Some Text");
    return;
  }

  // create a todo
  createATodo(todoText, todoMonth, todoDay, form);
  loadToLocalStorage(todoText, todoMonth, todoDay);
  form.children[0].value = "";  // CLEAR THE TEXT INPUT
})


// // load data
let myList = localStorage.getItem("list");
loadTodo(myList);

function loadTodo(myList) {
  if (myList !== null) {
    let myListArray = JSON.parse(myList);
    myListArray.forEach(item => {
      createATodo(item.todoText, item.todoMonth, item.todoDay);
    })
    
  }
}


function createATodo(todoText, todoMonth, todoDay) {
  // add a todo
  let todo = document.createElement("div");
  todo.classList.add("todo");
  let text = document.createElement("p");
  text.classList.add("todo-text");
  text.innerText = todoText;
  let time = document.createElement("p");
  time.classList.add("todo-time");
  time.innerText = todoMonth + " / " + todoDay;
  todo.appendChild(text);
  todo.appendChild(time);

  // create green check and red trash botton
  let completeButton = document.createElement("button");
  completeButton.classList.add("complete");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.addEventListener("click", e => {
    let todoItem = e.target.parentElement;
    todoItem.classList.toggle("done");
  })
  
  let trashButton = document.createElement("button");
  trashButton.classList.add("delete")
  trashButton.addEventListener("click", e => {
    let todoItem = e.target.parentElement;
    todoItem.addEventListener("animationed", e => {
      todoItem.remove();
    })
    todoItem.style.animation = "scaleDown 0.3s forwards";
  })
  trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  todo.appendChild(completeButton);
  todo.appendChild(trashButton);

  todo.style.animation = "scaleUp 0.3s forwards";

  section.appendChild(todo);  
}

function loadToLocalStorage(todoText, todoMonth, todoDay) {
  // create an object
  let myTodo = {
    todoText: todoText,
    todoMonth: todoMonth,
    todoDay: todoDay
  }

  // store data into an array of objects
  let myList = localStorage.getItem("list");
  if (myList == null) {
    localStorage.setItem("list", JSON.stringify([]));
  }
  else {
    let myListArray = JSON.parse(myList);
    myListArray.push(myTodo);
    localStorage.setItem("list", JSON.stringify(myListArray));
  }
}
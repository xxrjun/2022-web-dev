// add data
let section = document.querySelector("section");
let add = document.querySelector("form button");
const form = document.querySelector("form");
add.addEventListener("click", (e) => {
  // 避免按下新增按鈕時網頁重新整理
  e.preventDefault();

  let form = e.target.parentElement;
  form.reportValidity();
  const chk_status = form.checkValidity();

  if (chk_status) {
    // get the input values
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDay = form.children[2].value;

    // check for text input is not empty string
    if (todoText === "") {
      // alert("Please Enter Some Text");
      return;
    }

    createTodo(todoText, todoMonth, todoDay);
    storeToLocal(todoText, todoMonth, todoDay);
    form.children[0].value = ""; // CLEAR THE TEXT INPUT
  }
});

// load todo data
loadData();

function loadData() {
  let myList = localStorage.getItem("list");
  if (myList !== null) {
    let myListArray = JSON.parse(myList);
    myListArray.forEach((item) => {
      createTodo(item.todoText, item.todoMonth, item.todoDay);
    });
  }
}

function createTodo(todoText, todoMonth, todoDay) {
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
  completeButton.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;
    todoItem.classList.toggle("done");
  });

  let trashButton = document.createElement("button");
  trashButton.classList.add("delete");
  trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

  trashButton.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;

    todoItem.addEventListener("animationend", () => {
      // remove from local storage
      let text = todoItem.children[0].innerText;
      let myListArray = JSON.parse(localStorage.getItem("list"));
      myListArray.forEach((item, index) => {
        if (item.todoText == text) {
          console.log("remove " + item);
          myListArray.splice(index, 1);
          localStorage.setItem("list", JSON.stringify(myListArray));
        }
      });
      todoItem.remove();
    });

    todoItem.style.animation = "scaleDown 0.25s forwards";
  });

  todo.appendChild(completeButton);
  todo.appendChild(trashButton);

  todo.style.animation = "scaleUp 0.3s forwards";

  section.appendChild(todo);
}

function storeToLocal(todoText, todoMonth, todoDay) {
  // create an object
  let myTodo = {
    todoText: todoText,
    todoMonth: todoMonth,
    todoDay: todoDay,
  };

  // store data into an array of objects
  let myList = localStorage.getItem("list");
  if (myList == null) {
    localStorage.setItem("list", JSON.stringify([myTodo]));
  } else {
    let myListArray = JSON.parse(myList);
    myListArray.push(myTodo);
    localStorage.setItem("list", JSON.stringify(myListArray));
  }
}

function mergeTime(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];

  while (i < arr1.length && j < arr2.length) {
    if (Number(arr1[i].todoMonth) > Number(arr2[j].todoMonth)) {
      res.push(arr2[j++]);
    } else if (Number(arr1[i].todoMonth) < Number(arr2[j].todoMonth)) {
      res.push(arr1[i++]);
    } else if (Number(arr1[i].todoMonth) == Number(arr2[j].todoMonth)) {
      if (Number(arr1[i].todoDay) > Number(arr2[j].todoDay)) {
        res.push(arr2[j++]);
      } else {
        res.push(arr1[i++]);
      }
    }
  }

  while (i < arr1.length) res.push(arr1[i++]);
  while (j < arr2.length) res.push(arr2[j++]);

  return res;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  else {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return mergeTime(mergeSort(left), mergeSort(right));
  }
}

let sortButton = document.querySelector("div.sort button");
sortButton.addEventListener("click", () => {
  // get sorted data
  let sortedArray = mergeSort(JSON.parse(localStorage.getItem("list")));
  localStorage.setItem("list", JSON.stringify(sortedArray));

  // remove html data
  let len = section.children.length;
  for (let i = 0; i < len; i++) section.children[0].remove();

  // load new html data
  loadData();
});

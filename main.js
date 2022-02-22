let taskInput = document.querySelector(".toDo__input"); // new-task
const form = document.querySelector("form"); //add button
const list = document.querySelector(".todo__list");
const btns = document.querySelector(".item__button");
let listItem = document.querySelector(".listItem");
let deleteButton = document.querySelector("#trash__button");
let allBtns = document.querySelectorAll(".item__button");

//New Task List item

let tasks = [];
let addedItems;

form.addEventListener("submit", (event) => {
  console.log(tasks);
  event.preventDefault();

  // create List Item
  if (taskInput.value !== "") {
    tasks.unshift(taskInput.value);
  } else {
    window.alert(
      "Input field cannot be empty \nEnter the description of the task"
    );
    tasks = [...tasks];
  }

  list.innerHTML = "";
  tasks.forEach(function (item) {
    list.insertAdjacentHTML(
      "beforeend",
      `<div><li class=list__Item>${item}</li><button class="item__button" id="completed__button"><i class="fas fa-check"></i>
        </button><button class="item__button" id="edit__button">
        <i class="uil uil-pen"></i>
        </button><button class="item__button" id="trash__button">
        <i class="fas fa-trash"></i>
        </button>
      <div>`
    );
    addedItems = list;
    console.log(addedItems);
    taskInput.value = "";
  });
});

// completeButton.addEventListener("click", () => {
//   console.log("working");
// });

// deleteButton.addEventListener("click", (e) => {
//   console.log(e);
// });

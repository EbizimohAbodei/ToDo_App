let taskInput = document.querySelector(".toDo__input"); // new-task
const form = document.querySelector("form"); //add button
const list = document.querySelector(".todo__list");
const btns = document.querySelector(".item__button");
let listItem = document.querySelector(".listItem");

//New Task List item

let tasks = [];

form.addEventListener("submit", (event) => {
  tasks.unshift(taskInput.value);
  console.log(tasks);
  event.preventDefault();

  // create List Item

  list.innerHTML = "";
  tasks.forEach(function (item) {
    list.insertAdjacentHTML(
      "beforeend",
      `<div><li class=list__Item>${item}</li><div>`
    );
    taskInput.value = "";
  });

  if (tasks.length > 0) {
    let list_item = document.querySelector("list__Item");
    list_item.appendChild(`${btns}`);
    btns.classList.add("listed__item");
  } else {
    btns.classList.remove("listed__item");
  }
});

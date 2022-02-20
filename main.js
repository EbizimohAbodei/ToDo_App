const taskInput = document.querySelector(".toDo__input"); // new-task
const addButton = document.querySelector(".toDo__button"); //add button
const list = document.querySelector(".todo__list");

//New Task List item

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  let input = taskInput.value;
  console.log(input);
  // create List Item

  list.appendChild("<li>${input}</li>");

  //   Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
});

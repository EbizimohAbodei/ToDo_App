let taskInput = document.querySelector(".toDo__input");
const form = document.querySelector("form");
const list = document.querySelector(".todo__list");
const completedList = document.querySelector(".completed__list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let id = Date.now();

  const text = taskInput.value;

  // Validating user input
  if (!text) {
    window.alert("Input field cannot be empty \nEnter the task description");
    return;
  } else if (text.length < 2) {
    window.alert("Input must have more than two characters");
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("list__item");

  const completedListItem = document.createElement("li");
  completedListItem.classList.add("completed");

  const task_input = document.createElement("input");
  task_input.classList.add("list__text", "listItem__defHov");
  task_input.type = "text";
  task_input.value = text;
  task_input.setAttribute("readonly", "readonly");

  const edit = document.createElement("button");
  edit.classList.add("edit__button", "show");
  edit.innerHTML = '<i class="uil uil-pen"></i>';

  const remove = document.createElement("button");
  remove.classList.add("trash__button");
  remove.innerHTML = '<i class="fas fa-trash"></i>';

  const completed = document.createElement("button");
  completed.classList.add("completed__button");
  completed.innerHTML = '<i class="fas fa-check"></i>';

  const save = document.createElement("button");
  save.classList.add("save__show");
  save.innerHTML = '<i class="uil uil-save"></i>';
  save.hidden = true;

  listItem.appendChild(task_input);
  listItem.appendChild(edit);
  listItem.appendChild(save);
  listItem.appendChild(remove);
  listItem.appendChild(completed);
  list.appendChild(listItem);

  taskInput.value = "";

  // Handles edit functionality
  edit.addEventListener("click", (e) => {
    classes = edit.classList;
    if (classes.contains("show")) {
      task_input.removeAttribute("readonly");
      task_input.classList.add("listItem__edit");
      task_input.focus();
      save.hidden = false;
      edit.hidden = true;
      edit.classList.add("hide");
      edit.classList.remove("listItem__default");
    }
  });

  // Handles the save after user is done editing
  save.addEventListener("click", () => {
    classes = edit.classList;
    if (classes.contains("hide")) {
      save.hidden = true;
      edit.hidden = false;
      edit.classList.remove("hide");
      task_input.setAttribute("readonly", "readonly");
    }
  });

  // Deletes the list item
  remove.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  // Marks the list itme as completed
  completed.addEventListener("click", () => {
    list.removeChild(listItem);
    completedListItem.textContent = task_input.value;
    completedList.appendChild(completedListItem);
  });
});

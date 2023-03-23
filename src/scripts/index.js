import "../styles/index.scss";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";

const newItemBtn = document.querySelector(".new-item-btn");
const taskList = document.querySelector(".new-tasks");
const optionsBtn = document.querySelector(".options");
const modalWindow = document.querySelector(".modal");
const tasksDoneList = document.querySelector(".tasks-done");
const closeModalBtn = document.querySelector(".close-modal");

alertify.set("notifier", "position", "top-center");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [
  {
    id: 0,
    checked: false,
    name: "chill & enjoy this code",
  },
  {
    id: 1,
    checked: true,
    name: "you already done something?",
  },
];

const listElement = (name) => {
  return `  <div class="input-wrapper">
              <input class="checkbox" type="checkbox">
              <p class="description">${name}</p>
            </div>
            <button class="delete">X</button>
          `;
};

const handleCheckboxChange = (task, newElement) => {
  const checkbox = newElement.querySelector(".checkbox");
  const taskName = newElement.querySelector(".description");
  checkbox.checked = task.checked;
  checkbox.addEventListener("change", () => {
    task.checked = checkbox.checked;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (checkbox.checked) {
      taskName.style.textDecoration = "line-through";
      setTimeout(() => {
        taskName.style.textDecoration = "none";
        tasksDoneList.appendChild(newElement);
      }, 600);
      alertify.notify("Great! Task completed", "success", 2);
    } else {
      taskList.appendChild(newElement);
    }
  });
};

const deleteTaskHandler = (task, newElement) => {
  const deleteBtn = newElement.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    const taskIndex = tasks.findIndex((t) => t.id === task.id);
    tasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    newElement.remove();
    alertify.notify("You delete this task", "error", 2);
  });
};

const newTaskShowHandler = (tasks) => {
  tasks.forEach((task) => {
    const newElement = document.createElement("li");
    newElement.dataset.id = task.id;
    newElement.innerHTML = listElement(task.name, task.id);

    if (task.checked) {
      tasksDoneList.appendChild(newElement);
      newElement.querySelector(".checkbox").checked = true;
    } else {
      taskList.appendChild(newElement);
    }

    handleCheckboxChange(task, newElement);
    newElement.querySelector(".checkbox").checked = task.checked;

    deleteTaskHandler(task, newElement);
  });
};

const newItemBtnHandler = () => {
  const newInput = document.createElement("input");
  newInput.classList.add("new-item-input");
  newInput.type = "text";
  newInput.placeholder = "Enter new task";
  newItemBtn.parentNode.replaceChild(newInput, newItemBtn);
  newInput.focus();

  newInput.addEventListener("focusout", () => {
    newInput.parentNode.replaceChild(newItemBtn, newInput);
    return;
  });

  newInput.addEventListener("keyup", (e) => {
    const value = newInput.value;
    const isValueUnique = !tasks.some((task) => task.name === value);

    if (e.key === "Enter" && value.trim() !== "" && isValueUnique) {
      const newTask = {
        id: tasks[tasks.length - 1]?.id + 1,
        checked: false,
        name: value,
      };
      tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      newTaskShowHandler([newTask]);
      alertify.notify("New task added", "success", 2);
      newInput.parentNode.replaceChild(newItemBtn, newInput);
    } else if (!isValueUnique) {
      alertify.notify("Do not enter the same tasks!", "warning", 2);
    } else if (value === "") {
      alertify.notify("Enter new task", "warning", 2);
    }
  });
};

optionsBtn.addEventListener("click", () => {
  modalWindow.style.display = "block";

  closeModalBtn.addEventListener("click", () => {
    modalWindow.style.display = "none";
  });
});

newItemBtn.addEventListener("click", newItemBtnHandler);
newTaskShowHandler(tasks);

import "../styles/index.scss";

const newItemBtn = document.querySelector(".new-item-btn");
const taskList = document.querySelector(".new-tasks");
const optionsBtn = document.querySelector(".options");
const modalWindow = document.querySelector(".modal");
const tasksDoneList = document.querySelector(".tasks-done");
const closeModalBtn = document.querySelector(".close-modal");

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
      newInput.parentNode.replaceChild(newItemBtn, newInput);
    } else if (!isValueUnique) {
      alert("do not enter same tasks");
    } else if (value === "") {
      alert("enter new task");
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

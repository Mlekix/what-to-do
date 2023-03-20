import "../styles/index.scss";

const newItemBtn = document.querySelector(".new-item-btn");
const taskList = document.querySelector(".new-tasks");
const optionsBtn = document.querySelector(".options");
const modalWindow = document.querySelector(".modal");
const tasksDoneList = document.querySelector(".tasks-done");
const closeModalBtn = document.querySelector(".close-modal");

let tasks = [
  {
    id: 0,
    checked: false,
    name: "wypij 3 kawy i nie umrzyj",
  },
  {
    id: 1,
    checked: true,
    name: "skończ stylowanie",
  },
  {
    id: 2,
    checked: false,
    name: "dorzuć JS",
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

    const checkbox = newElement.querySelector(".checkbox");
    checkbox.checked = task.checked;
    checkbox.addEventListener("change", () => {
      const taskId = parseInt(newElement.dataset.id);
      const taskIndex = tasks.findIndex((t) => t.id === taskId);
      tasks[taskIndex].checked = checkbox.checked;
      console.log(tasks);

      if (checkbox.checked) {
        tasksDoneList.appendChild(newElement);
      } else {
        taskList.appendChild(newElement);
      }
    });

    const deleteBtn = newElement.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
      const taskIndex = tasks.findIndex((t) => t.id === task.id);
      tasks.splice(taskIndex, 1);
      newElement.remove();
    });
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
      tasks.push({
        id: tasks[tasks.length - 1]?.id + 1,
        checked: false,
        name: value,
      });
      newTaskShowHandler([tasks[tasks.length - 1]]);
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
  console.log(tasks);

  closeModalBtn.addEventListener("click", () => {
    modalWindow.style.display = "none";
  });
});

newItemBtn.addEventListener("click", newItemBtnHandler);
newTaskShowHandler(tasks);

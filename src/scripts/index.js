import "../styles/index.scss";

const newItemBtn = document.querySelector(".new-item-btn");
const taskList = document.querySelector("ul");

let tasks = [
  {
    id: 0,
    checked: false,
    name: "wypij 3 kawy i nie umrzyj",
  },
  {
    id: 1,
    checked: false,
    name: "skończ stylowanie",
  },
  {
    id: 2,
    checked: false,
    name: "dorzuć JS",
  },
];

const newTaskShowHandler = (tasks) => {
  tasks.forEach((task) => {
    const li = document.createElement("li");
    taskList.appendChild(li);

    const div = document.createElement("div");
    div.classList.add("input-wrapper");
    li.appendChild(div);

    const input = document.createElement("input");
    input.classList.add("checkbox");
    input.setAttribute("type", "checkbox");
    div.appendChild(input);

    const p = document.createElement("p");
    p.classList.add("description");
    p.textContent = task.name;
    div.appendChild(p);

    const btn = document.createElement("button");
    btn.classList.add("delete");
    btn.textContent = "X";
    btn.addEventListener("click", () => {
      const taskIndex = tasks.findIndex((t) => t.id === task.id);
      tasks.splice(taskIndex, 1);
      li.remove();
      console.log(tasks);
    });
    li.appendChild(btn);
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

    if (e.keyCode === 13 && value !== "" && isValueUnique) {
      tasks.push({
        id: tasks[tasks.length - 1].id + 1,
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

newItemBtn.addEventListener("click", newItemBtnHandler);
newTaskShowHandler(tasks);

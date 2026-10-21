let tasks = [];
let nextId = 1;

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");
const todoEmpty = document.getElementById("todoEmpty");
const todoError = document.getElementById("todoError");
const todoCount = document.getElementById("todoCount");

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    todoError.textContent = "Please type a task before adding it.";
    return;
  }
  todoError.textContent = "";
  tasks.push({ id: nextId++, text: text, done: false });
  taskInput.value = "";
  taskInput.focus();
  render();
}

function toggleTask(id) {
  const task = tasks.find(function (t) { return t.id === id; });
  if (task) {
    task.done = !task.done;
    render();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(function (t) { return t.id !== id; });
  render();
}

function render() {
  todoList.innerHTML = "";

  tasks.forEach(function (task) {
    const row = document.createElement("div");
    row.className = "todo-item" + (task.done ? " completed" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input mt-0";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", "Mark as completed");
    checkbox.addEventListener("change", function () { toggleTask(task.id); });

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = task.text;   // textContent keeps user input safe from HTML injection
    span.addEventListener("click", function () { toggleTask(task.id); });

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-sm btn-outline-danger";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () { deleteTask(task.id); });

    row.appendChild(checkbox);
    row.appendChild(span);
    row.appendChild(delBtn);
    todoList.appendChild(row);
  });

  todoEmpty.style.display = tasks.length === 0 ? "block" : "none";
  const doneCount = tasks.filter(function (t) { return t.done; }).length;
  todoCount.textContent = tasks.length === 0 ? "" : doneCount + " of " + tasks.length + " completed";
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});

render();

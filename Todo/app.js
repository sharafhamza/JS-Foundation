document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".add");
  const input = document.querySelector(".add-input");
  const parentEl = document.querySelector(".task-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function updateTodo() {
    parentEl.innerHTML = "";
    tasks.forEach((item) => {
      const todoItem = renderList(item);
      parentEl.appendChild(todoItem);
    });
  }
  updateTodo();
  button.addEventListener("click", () => {
    const task = input.value.trim();
    if (!task) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    input.value = "";
    updateTodo();
  });

  function renderList(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `<span>${task.text}</span> <button class="delete-btn">Delete</button>`;

    const deleteButton = parentEl.document.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      deleteTodoItem(task.id);
    });

    return li;
  }
  function deleteTodoItem(todoIndex) {
    tasks = tasks.filter((_, i) => i !== todoIndex);
    saveTask();
    updateTodo();
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

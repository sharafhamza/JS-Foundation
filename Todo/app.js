document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".add");
  const input = document.querySelector(".add-input");
  const parentEl = document.querySelector(".task-list");

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    renderList(task);
  });

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
    renderList(newTask);
  });

  function renderList(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `<span>${task.text}</span> <button class="delete-btn">Delete</button>`;
    parentEl.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

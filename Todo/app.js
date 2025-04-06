document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".add");
  const input = document.querySelector(".add-input");
  const parentEl = document.querySelector(".main");

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    renderList(task);
  });
  button.addEventListener("click", () => {
    const task = input.value;
    if (!task) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    input.value = "";
    console.log(tasks);
  });

  function renderList(task) {
    console.log(task);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

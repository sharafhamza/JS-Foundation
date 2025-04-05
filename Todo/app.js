const button = document.querySelector(".add");
const input = document.querySelector(".add-input");
const parentEl = document.querySelector(".main");

const arr = [];
button.addEventListener("click", () => {
  const task = input.value;
  arr.push(task);
  const li = document.createElement("li");

  li.textContent = task;

  parentEl.appendChild(li);
});

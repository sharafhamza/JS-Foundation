const button = document.querySelector("button");
let content = document.querySelector(".content");
const arr = [];

function removeTodo(item) {
  const index = arr.indexOf(item);

  if (index !== -1) {
    arr.splice(index, 1);
  }

  renderList();
}

function renderList() {
  content.innerHTML = "";

  arr.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item} <button onClick="removeTodo('${item}')">Delete</button>`;
    content.appendChild(li);
  });
}
button.addEventListener("click", function () {
  const input = document.querySelector("input");
  if (!input.value) {
    content.innerHTML = "Please enter a value";
    return;
  }
  arr.push(input.value);

  input.value = "";

  renderList();
});

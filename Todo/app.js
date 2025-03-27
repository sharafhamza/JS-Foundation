const button = document.querySelector("button");
let content = document.querySelector(".content");
const input = document.querySelector("input");
const arr = [];

function removeTodo(item) {
  const index = arr.indexOf(item);

  if (index !== -1) {
    arr.splice(index, 1);
  }

  renderList();
}
function editTodo(item) {
  const index = arr.indexOf(item);
  const existItem = arr[index];
  input.value = existItem;
  renderList();
}
function renderList() {
  content.innerHTML = "";

  arr.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item} <button onClick="editTodo('${item}')">Edit</button> <button onClick="removeTodo('${item}')">Delete</button>`;
    content.appendChild(li);
  });
}
button.addEventListener("click", function () {
  if (!input.value) {
    content.innerHTML = "Please enter a value";
    return;
  }
  arr.push(input.value);

  input.value = "";

  renderList();
});

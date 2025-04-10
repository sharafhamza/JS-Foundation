// DOM elements
const input = document.querySelector(".add-input");
const addButton = document.querySelector("#add");
const taskList = document.querySelector(".task-list");

// Initialize tasks array from localStorage, or set to an empty array if no data exists
let tasks = JSON.parse(localStorage.getItem("todos")) || [];

// Function to update the task list
function updateTodo() {
  taskList.innerHTML = ""; // Clear the existing tasks
  tasks.forEach((item) => {
    const todoItem = renderList(item); // Render each task
    taskList.appendChild(todoItem); // Append to the task list
  });
}

// Function to render each task as an HTML list item
function renderList({ text, id }) {
  const li = document.createElement("li"); // Create the <li> element
  li.setAttribute("data-id", id); // Set the data-id attribute with task id
  li.innerHTML = `<span>${text}</span> <button class="delete-btn">Delete</button>`; // Set content of <li>

  // Add event listener to the delete button
  const deleteButton = li.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    deleteTodo(id); // Call deleteTodo function when delete button is clicked
  });

  return li;
}

// Function to save tasks to localStorage
function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(tasks)); // Save tasks array as JSON string
}

// Function to delete a task by its id
function deleteTodo(id) {
  tasks = tasks.filter((item) => item.id !== id); // Remove task with matching id
  updateTodo(); // Re-render the updated task list
  saveTodo(); // Save the updated tasks to localStorage
}

// Update the task list initially when the page loads
updateTodo();

// Event listener for the add button click
addButton.addEventListener("click", () => {
  const inputText = input.value.trim(); // Get the input value and trim any excess spaces

  // If the input is empty, do nothing
  if (!inputText) return;

  // Create a new task object
  const newTask = {
    id: Date.now(), // Use current timestamp as a unique ID
    text: inputText,
    completed: false,
  };

  // Add the new task to the tasks array
  tasks.push(newTask);
  updateTodo(); // Re-render the task list
  saveTodo(); // Save the updated tasks to localStorage
  input.value = ""; // Clear the input field
});

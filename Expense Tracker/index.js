const nameInput = document.querySelector("#course-name");
const amount = document.querySelector("#amount");
const submitForm = document.querySelector("#submitForm");
const expenseList = document.querySelector("#expense-list");
const displayAmount = document.querySelector(".display-amount");
const emptyText = document.querySelector(".empty-text");
const expenseTitle = document.querySelector(".expense-title");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let totalAmount = 0;

renderExpenses();
updateTotal();

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const number = parseFloat(amount.value.trim());

  if (!name || isNaN(number) || number <= 0) return;
  const newExpense = {
    name,
    amount: number,
    id: Date.now(),
  };
  expenses.push(newExpense);
  saveToLocal();
  renderExpenses();
  updateTotal();

  nameInput.value = "";
  amount.value = "";
});

function saveToLocal() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function renderExpenses() {
  expenseList.innerHTML = "";

  if (expenses.length === 0) {
    emptyText.classList.remove("hidden");
    expenseTitle.classList.add("hidden");
    displayAmount.classList.add("hidden");
    expenseList.classList.add("hidden");
    return;
  }

  emptyText.classList.add("hidden");
  expenseList.classList.remove("hidden");
  expenseTitle.classList.remove("hidden");
  displayAmount.classList.remove("hidden");

  expenses.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("expense-item");
    li.innerHTML = `
     <span>${element.name} - $${element.amount}</span>
          <button class="delete-btn" data-id="${element.id}">Delete</button>
    `;
    expenseList.appendChild(li);
  });
}

function updateTotal() {
  totalAmount = expenses.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );
  displayAmount.innerHTML = `Total: $${totalAmount}`;
}

expenseList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const expenseId = parseInt(e.target.getAttribute("data-id"));
    expenses = expenses.filter((expense) => expense.id !== expenseId);
    saveToLocal();
    renderExpenses();
    updateTotal();
  }
});

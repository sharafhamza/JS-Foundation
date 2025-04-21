const nameInput = document.querySelector("#course-name");
const amount = document.querySelector("#amount");
const submitForm = document.querySelector("#submitForm");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const amount = parseFloat(amount.value.trim());
  if (name && amount) return;
});

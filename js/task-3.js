const input = document.querySelector("#name-input");
console.log(input);
const anonymous = document.querySelector("#name-output");
console.log(anonymous);

input.addEventListener("input", (event) => {
  const inputWithTrim = event.currentTarget.value.trim();
  if (inputWithTrim) {
    anonymous.textContent = inputWithTrim;
  } else {
    anonymous.textContent = "Anonymous";
  }
});

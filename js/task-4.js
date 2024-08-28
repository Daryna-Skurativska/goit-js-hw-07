const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };
  if (formData.email === "" || formData.password === "") {
    alert("All form fields must be filled in");
    return;
  }
  console.log(formData);
  form.reset();
});

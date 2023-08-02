const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);

  if (!formData.get("email") || !formData.get("password")) {
    alert("Please fill in all fields.");
  } else {
    const formObject = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(formObject);
    loginForm.reset();
  }
});

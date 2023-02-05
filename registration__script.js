let users = [];
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let repeatPasswordInput = document.getElementById("repeatPassword");
let checkboxInput = document.getElementById("checkbox");
function registerUser() {
  if (usernameInput.value.length < 3) {
    errorType("username__error");
  } else if (passwordInput.value.length < 4) {
    errorType("password__error");
    hideErrorText("username__error");
  } else if (passwordInput.value !== repeatPasswordInput.value) {
    errorType("password__error__match");
    // hideErrorText("username__error");
    hideErrorText("password__error");
  } else if (counterUppercase(passwordInput.value) < 2) {
    errorType("password__error__symbols");
    hideErrorText("password__error__match");
  } else if (!checkboxInput.checked) {
    errorType("checkbox__error");
    hideErrorText("password__error__symbols");
  } else {
    hideErrorText("checkbox__error");
    users = [
      ...users,
      {
        username: usernameInput.value,
        password: passwordInput.value,
      },
    ];
    alert("you are registered");
  }
  console.log(users);
}

//
//
// validaciis punqciebi

function errorType(id) {
  let error = document.getElementById(id);
  error.classList.remove("hidden");
  error.classList.add("active");
}
function hideErrorText(id) {
  let errorText = document.getElementById(id);
  errorText.classList.remove("active");
  errorText.classList.add("hidden");
}

function counterUppercase(password) {
  let count = 0;
  for (i in password) {
    if (password[i] == password[i].toUpperCase()) {
      count++;
    }
  }
  return count;
}

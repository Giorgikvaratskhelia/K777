const mainBtnReg = document.querySelector(".signup__btn");
const mainBtnSign = document.querySelector(".login__btn");
const signUpContainer = document.querySelector(".sign__up__container");
const signInContainer = document.querySelector(".sign__in__container");
const closeBtn = document.querySelector(".close__btn");
const closeBtn2 = document.querySelector(".close__btn2");
mainBtnReg.addEventListener("click", function () {
  signUpContainer.classList.add("active");
  signInContainer.classList.remove("active");
});

mainBtnSign.addEventListener("click", function () {
  signUpContainer.classList.remove("active");
  signInContainer.classList.add("active");
});

// closeBtn.addEventListener("click", function () {
//   signUpContainer.classList.remove("active");
// });
// closeBtn2.addEventListener("click", function () {
//   signInContainer.classList.remove("active");
// });
// function closeFunc() {}

function closeFunc() {
  signUpContainer.classList.remove("active");
  signInContainer.classList.remove("active");
}
function registrationFormVisible() {
  signUpContainer.classList.add("active");
  signInContainer.classList.remove("active");
}
function signInVisible() {
  signUpContainer.classList.remove("active");
  signInContainer.classList.add("active");
}

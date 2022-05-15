/* form login */
const containerOne = document.querySelector(".containertwo"),
  pwShowHideOne = document.querySelectorAll(".showHidePwd"),
  pwFieldsOne = document.querySelectorAll(".passwordtwo"),
  signUpOne = document.querySelector(".signup-linktwo"),
  loginOne = document.querySelector(".login-linktwo");

//   js code to show/hide password and change icon
pwShowHideOne.forEach((eyeIcontwo) => {
  eyeIcontwo.addEventListener("click", () => {
    pwFieldsOne.forEach((pwFieldOne) => {
      if (pwFieldOne.type === "password") {
        pwFieldOne.type = "text";

        pwShowHideOne.forEach((icontwo) => {
          icontwo.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        pwFieldOne.type = "password";

        pwShowHideOne.forEach((icontwo) => {
          icontwo.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});
// js code to appear signup and login form
signUpOne.addEventListener("click", () => {
  containerOne.classList.add("active");
});
loginOne.addEventListener("click", () => {
  containerOne.classList.remove("active");
});
/* 2nd */
const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

const loginFormHandler = document.getElementById("Login_form_submit");
const loginForm = document.querySelector(".login_form");
const Lemail = document.getElementById("Lemail");
const Lpassword = document.getElementById("Lpassword");

const LemailError = document.getElementById("LemailError");
const LpasswordError = document.getElementById("LpswError");

const LemailErr = document.querySelector(".Lemail");
const LPasswordErr = document.querySelector(".Lpassword");

function LoginHandler(event) {
    event.preventDefault();
  
    if (Lemail.value == "") {
      LemailError.innerText = "Enter email";
      LemailErr.classList.add("error");
    } else {
      LemailError.innerText = "";
      LemailErr.classList.remove("error");
    }
  
    if (LPasswordErr.value == "") {
      LpasswordError.innerText = "Enter password";
      LPasswordErr.classList.add("error");
    } else if (LPasswordErr.value.length <= 6) {
      LpasswordError.innerText = "Password must be above 6 character";
      LPasswordErr.classList.remove("error");
    } else {
      LpasswordError.innerText = "";
      LPasswordErr.classList.remove("error");
    }
  
    if (Lemail.value != '' && LPasswordErr.value != '') {
      alert("success")
      window.location.href="../main.html"
    }
  }
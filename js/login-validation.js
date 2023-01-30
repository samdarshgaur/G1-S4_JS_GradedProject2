const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const usernameValidation = document.querySelector("#username-validation");
const passwordValidation = document.querySelector("#password-validation");
const loginBtn = document.querySelector("#login-btn");

function validateUsernamePassword(event) {
    if (usernameInput.value === "" && passwordInput.value === "") {
        event.preventDefault();
        usernameValidation.classList.add("error");
        passwordValidation.classList.add("error");
        usernameInput.style.marginBottom = "0.3rem";
        passwordInput.style.marginBottom = "0.3rem";
        usernameInput.style.border = "1px solid red";
        passwordInput.style.border = "1px solid red";
    } else if (usernameInput.value === "") {
        event.preventDefault();
        usernameValidation.classList.add("error");
        usernameInput.style.marginBottom = "0.3rem";
        usernameInput.style.border = "1px solid red";
    } else if (passwordInput.value === "") {
        event.preventDefault();
        passwordValidation.classList.add("error");
        passwordInput.style.marginBottom = "0.3rem";
        passwordInput.style.border = "1px solid red";
    } else if (usernameInput.value !== "admin" || passwordInput.value !== "admin123") {
        event.preventDefault();
        alert("Incorrect username or password. Please try again!");
        usernameInput.value = "";
        passwordInput.value = "";
    } else {
        location.replace("resume-page.html");
    }
}

loginBtn.addEventListener("click", validateUsernamePassword);
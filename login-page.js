const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "supersecurepassword") {
        alert("You have successfully logged in.");
        window.location.replace('home.html')

    } else {
        alert("You are not authenticated....");
    }
})
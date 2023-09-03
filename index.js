const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const imageContainer = document.getElementById("imageContainer");
const signOutMessage = document.getElementById("signOutMessage");

function handleLoginLogout() {
    if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";

        imageContainer.style.display = "block";

        loginButton.textContent = "Logout";
        loginButton.removeEventListener("click", handleLoginLogout);
        loginButton.addEventListener("click", handleLogout);
    } else {
        usernameInput.style.display = "block";
        passwordInput.style.display = "block";

        imageContainer.style.display = "none";

        loginButton.textContent = "Login";
        loginButton.removeEventListener("click", handleLogout);
        loginButton.addEventListener("click", handleLoginLogout);
    }
}

function handleLogout() {
    imageContainer.style.display = "none";

    usernameInput.style.display = "block";
    passwordInput.style.display = "block";

    loginButton.textContent = "Login";
    loginButton.removeEventListener("click", handleLogout);
    loginButton.addEventListener("click", handleLoginLogout);
}

loginButton.addEventListener("click", handleLoginLogout);

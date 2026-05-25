const toggle = document.querySelector(".toggle-password");
const password = document.getElementById("password");

if (toggle && password) {
    toggle.addEventListener("click", () => {
        if(password.type === "password"){
            password.type = "text";
            toggle.textContent = "🙈";
        } else {
            password.type = "password";
            toggle.textContent = "👁️";
        }
    });
}
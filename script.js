const password1 = document.querySelector("#password")
const conPass1 = document.querySelector("#con-password")
const button = document.querySelector("button")

function comparePwd() {
    if (password1.value != conPass1.value) {
        password1.style.borderColor = "red"
        conPass1.style.borderColor = "red"
        document.createElement("p")
        return
    }
    password1.style.borderColor = "#E5E7EB"
    conPass1.style.borderColor = "#E5E7EB"
}

button.addEventListener("click", e => {
    e.preventDefault();
    comparePwd();
})
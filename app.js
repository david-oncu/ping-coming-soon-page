let form = document.getElementById("form");
let email = document.getElementById("email");
let errorText = document.getElementById("error-text");
let submitButton = document.getElementById("button");


form.addEventListener("submit", (e) => {
    if (email.validity.typeMismatch) {
        e.preventDefault();
        errorText.style.display = "block";
        email.style.borderColor = "hsl(354, 100%, 66%)";
    } else {
        errorText.style.display = "none";
    }
});
    

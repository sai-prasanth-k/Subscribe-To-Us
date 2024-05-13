let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrorMsgEl = document.getElementById("nameErrMsg");
let emailErrorMsgEl = document.getElementById("emailErrMsg");
let subscribeFormEl = document.getElementById("subscribeForm");

nameEl.addEventListener("blur", function() {
    if (nameEl.value === "") {
        nameErrorMsgEl.classList.remove("d-none");
        nameErrorMsgEl.textContent = "Required*";
    }else {
        nameErrorMsgEl.textContent = "";
    }
});
emailEl.addEventListener("blur", function() {
    if (emailEl.value === "" && emailEl.value === "") {
        emailErrorMsgEl.classList.remove("d-none");
        emailErrorMsgEl.textContent = "Required*";
    }else {
        emailErrorMsgEl.textContent = "";
    }
});

subscribeFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});
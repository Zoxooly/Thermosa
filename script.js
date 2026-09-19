let button = document.getElementById("secretButton");

button.onclick = function() {
    alert("test works");
};

let password = document.getElementById("password");
let submit = document.getElementById("submit");
let response = document.getElementById("response");

submit.onclick = function() {
    if (password.value == "THERMOSA") {
        response.textContent = "ACCESS GRANTED.";
    } else {
        response.textContent = "ACCESS DENIED.";
    }
};

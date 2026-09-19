let code = document.getElementById("code");
let submit = document.getElementById("submit");
let response = document.getElementById("response");

submit.onclick = function() {
    if (code.value == "th3Vf2Q1Lxmk4K") {
        response.textContent = "ACCESS GRANTED.";
    } else {
        response.textContent = "ACCESS DENIED.";
    }
};



document.getElementById("subscribe").onclick = function() {
    let email = document.getElementById("emailValue").value;
    let emailRe = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;

    if(emailRe.test(email) == false) {
        if(email == "") {
            document.getElementById("errorMsg").innerHTML = "Type your email, please!"
            document.getElementById("errorMsg").style.display = "block";
        } else {
            document.getElementById("errorMsg").innerHTML = "Valid email required"
            document.getElementById("errorMsg").style.display = "block";
        }
        document.getElementById("emailValue").style.borderColor = "red";
        document.getElementById("emailValue").style.color = "red";
        document.getElementById("emailValue").style.backgroundColor = "rgb(247, 177, 177)";

        document.querySelector(".sign").style.display = "flex";
        document.querySelector(".success").style.display = "none";
        return false;
    } else if (emailRe.test(email) == true) {

        document.querySelector(".sign").style.display = "none";
        document.querySelector(".success").style.display = "block";
        document.getElementById("userEmail").innerHTML = email;

        return false;
    }

    // return true;
}
document.getElementById("emailValue").value = "";

document.querySelector(".success button").addEventListener("click", function() {
    document.querySelector(".sign").style.display = "flex";
    document.querySelector(".success").style.display = "none";
    document.getElementById("emailValue").value = "";
})
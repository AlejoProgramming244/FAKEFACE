function entrar()
{
    username = document.getElementById("username").value;
    localStorage.setItem("userfake", username);
    window.location="FaceFake.html";
}


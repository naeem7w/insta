document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("savedUsername", username);
    localStorage.setItem("savedPassword", password);

    alert("Login successful! Redirecting...");
    window.location.href = "blank.html";
});

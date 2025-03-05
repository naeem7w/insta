document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from refreshing the page
            
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("Please enter both username and password.");
                return;
            }

            // Save user info in localStorage
            localStorage.setItem("username", username);

            alert("Login successful! Redirecting...");
            window.location.href = "blank.html"; // Redirect to blank page
        });
    }
});

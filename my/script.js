document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents form from reloading the page
            
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("Please enter both username and password.");
                return;
            }

            // Save credentials to localStorage (for demonstration purposes)
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            alert("Login successful! Redirecting...");
            window.location.href = "blank.html"; // Redirect to blank page
        });
    } else {
        console.error("Error: loginForm not found.");
    }
});

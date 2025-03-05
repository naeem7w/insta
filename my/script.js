console.log("script.js is loaded");

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents the default form submission behavior

            alert("Login successful! Redirecting...");

            // Redirecting to the specified page (Change the URL as needed)
            window.location.href = "https://yourbankwebsite.com"; 
        });
    } else {
        console.error("Error: loginForm not found.");
    }
});

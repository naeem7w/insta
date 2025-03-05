document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login successful! Redirecting...");
    window.location.href = "https://yourbankwebsite.com"; // Change this to the bank page you want
});

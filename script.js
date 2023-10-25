// Get form and message elements
const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

// Simulated user data (replace with actual authentication)
const users = [
    { username: "nusaiba", password: "nusaiba@123" },
    { username: "Hisham", password: "Hisham@123" },
    // Add more user data here
];

// Event listener for form submission
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Get entered username and password
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Check if the entered credentials match any user data
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Redirect to a dashboard or home page on successful login
        window.location.href = "dashboard.html";
    } else {
        // Display an error message if login fails
        loginMessage.textContent = "Invalid username or password. Please try again.";
    }
});
// Logout button functionality



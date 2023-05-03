// Get form and input elements
var form = document.querySelector("form");
var nameInput = document.getElementById("name");
var dobInput = document.getElementById("dob");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// Add event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get existing user data from local storage, or initialize as empty array
    var userData = JSON.parse(localStorage.getItem("userData")) || [];

    // Check if user with same email already exists
    var existingUser = userData.find(function (userData) {
        return userData.email === emailInput.value;
    });

    // If user with same email exists, display error message and exit function
    if (existingUser) {
        alert("An account with this email already exists. Please log in instead.");
        return;
    }

    // Create new user object and add to user data array
    var newUser = {
        name: nameInput.value,
        dob: dobInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };
    userData.push(newUser);

    // Store updated user data array in local storage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to login page
    window.location.href = "login.html";
});

// Get form and input elements
var form = document.querySelector("form");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// Add event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user data from local storage
    var userData = JSON.parse(localStorage.getItem("userData"));

    // Find user with matching email and password
    var user = userData.find(function (userData) {
        return userData.email === emailInput.value && userData.password === passwordInput.value;
    });

    // Check if user was found and display appropriate message
    if (user) {
        // Redirect to success page
        window.location.href = "pro1.html";
    } else {
        // Alert user that email or password is incorrect
        alert("Incorrect email or password. Please try again.");
    }
});

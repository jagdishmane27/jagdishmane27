// Toggle Navbar on Mobile View
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Call-To-Action Button Click
function ctaClick() {
  alert("Your trading journey begins now! 🚀");
}

// Login Form Submission
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    alert("Login successful! Welcome to the Trading Journal platform!");
  } else {
    alert("Please enter both email and password to continue.");
  }
});

// Sign-Up Form Validation
document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;

  // Password Validation Regex
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 6 characters long, include an uppercase letter, a number, and a special character."
    );
    return;
  }

  // If all validations pass
  alert(`Welcome, ${name}! Your account has been successfully created!`);
});

document.addEventListener("DOMContentLoaded", () => {
  // Form Selection
  const form = document.getElementById("registration-form");

  // Feedback Division Selection
  const feedbackDiv = document.getElementById("form-feedback");

  // Form Submission and Event Prevention
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload

    // Input Retrieval and Trimming
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation Logic
    let isValid = true;
    let messages = [];

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email Validation (basic check using string includes)
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Displaying Feedback
    feedbackDiv.style.display = "block"; // make feedback visible

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // green
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // red
    }
  });
});

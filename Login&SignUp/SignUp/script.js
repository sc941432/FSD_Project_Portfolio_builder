
document.getElementById('signup-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Add more validations if needed
});

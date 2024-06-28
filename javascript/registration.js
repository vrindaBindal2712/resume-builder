document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    const submitButton = document.querySelector("#btn");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let valid = true;

        if (nameInput.value.trim() === "") {
            valid = false;
            alert("Name is required.");
        }

        if (!validateEmail(emailInput.value)) {
            valid = false;
            alert("Please enter a valid email address.");
        }

        if (passwordInput.value.length < 6) {
            valid = false;
            alert("Password must be at least 6 characters long.");
        }

        if (valid) {
            alert("Registration successful!");
            // Perform form submission or other actions here
            form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

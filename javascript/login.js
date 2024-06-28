document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    const submitButton = document.querySelector("#btn");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let valid = true;

        if (!validateEmail(emailInput.value)) {
            valid = false;
            alert("Please enter a valid email address.");
        }

        if (passwordInput.value.trim() === "") {
            valid = false;
            alert("Password is required.");
        }

        if (valid) {
            alert("Login successful!");
            // Perform form submission or other actions here
            form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

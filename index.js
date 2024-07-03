const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const roleSelect = document.querySelector('select');
const emailError = document.createElement('div');
const passwordError = document.createElement('div');
const roleError = document.createElement('div');

emailError.style.color = 'red';
passwordError.style.color = 'red';
roleError.style.color = 'red';

// Show the popup when the "Login" button is clicked
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Hide the popup when the close icon is clicked
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Form validation
form.addEventListener('submit', (e) => {
    let valid = true;

    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    roleError.textContent = '';

    // Email validation
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.parentNode.appendChild(emailError);
        valid = false;
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordInput.parentNode.appendChild(passwordError);
        valid = false;
    }

    // Role validation
    if (roleSelect.value === '') {
        roleError.textContent = 'Please select a role.';
        roleSelect.parentNode.appendChild(roleError);
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

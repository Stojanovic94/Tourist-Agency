document.getElementById('reservationForm').addEventListener('submit', function (event) {
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    
    if (!emailField.validity.valid) {
        emailError.style.display = 'block';
        event.preventDefault();
    } else {
        emailError.style.display = 'none';
    }
});

const dateInput = document.getElementById('departureDate');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

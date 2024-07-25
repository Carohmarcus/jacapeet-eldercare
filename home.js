// Add event listeners to the login and registration forms
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  // Add your login logic here
  console.log('Login form submitted');
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  // Add your registration logic here
  console.log('Registration form submitted');
});

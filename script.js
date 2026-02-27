// script.js

// Interactive functionality for the salon website

// Function to display current date and time
function displayDateTime() {
    const now = new Date();
    const utcDate = now.toUTCString();
    document.getElementById('date-time').innerText = `Current Date and Time: ${utcDate}`;
}

// Function to initialize website features
function init() {
    displayDateTime();
}

// Event listener for loading the script
window.onload = init;
// script.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"]');
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error'); // Add some error class
        } else {
            input.classList.remove('error');
        }
    });
    if (!isValid) {
        e.preventDefault();
        alert('Please fill all fields');  
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Animations
const animatedElements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
});
// script.js
// Dark mode toggle functionality

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Load the preferred theme from localStorage
const currentTheme = localStorage.getItem('data-theme') || 'light';
body.setAttribute('data-theme', currentTheme);
if (currentTheme === 'dark') {
    toggleButton.checked = true;
}

// Function to toggle dark mode
const toggleDarkMode = () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    }
};

// Event listener for button clicks
toggleButton.addEventListener('click', toggleDarkMode);
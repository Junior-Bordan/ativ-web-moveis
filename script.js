// Theme toggle functionality
const temaBtn = document.getElementById('temaBtn');
const htmlElement = document.documentElement;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

// Toggle theme on button click
temaBtn.addEventListener('click', function() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

// Update button icon based on theme
function updateThemeButton(theme) {
    temaBtn.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Contact form submission
function submitContactForm() {
    alert("Faço votos que esteja bem!");
}

// Event listener for form submission
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    submitContactForm();
});
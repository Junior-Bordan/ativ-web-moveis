// ========================================
// MENU MOBILE
// ========================================

// Elementos do menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Alterna menu (abrir/fechar)
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Fecha menu ao clicar em link
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});


// ========================================
// TEMA (DARK / LIGHT)
// ========================================

const temaBtn = document.getElementById('temaBtn');
const htmlElement = document.documentElement;

// Carrega tema salvo
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

// Define ícone inicial
temaBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

// Alterna tema
temaBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    temaBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});


// ========================================
// FORMULÁRIO
// ========================================

const form = document.getElementById("formContato");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    // Campos obrigatórios
    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }

    // Validação de e-mail
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Email inválido!");
        return;
    }

    // Sucesso
    msg.innerText = "Mensagem enviada com sucesso!";
    msg.style.color = "green";

    form.reset();
});

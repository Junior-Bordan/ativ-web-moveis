// ===== BOTÃO DE TEMA =====
const temaBtn = document.getElementById('temaBtn');
const htmlElement = document.documentElement;

// ===== CARREGAR TEMA SALVO =====
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
temaBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';

// Ajusta ícone inicial
if (temaSalvo === "dark") {
    temaBtn.textContent = "☀️";
} else {
    temaBtn.textContent = "🌙";
}

// ===== ALTERAR TEMA AO CLICAR =====
temaBtn.addEventListener('click', function() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    temaBtn.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
});


// ===== VALIDAÇÃO DO FORMULÁRIO =====
const form = document.getElementById("formContato");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    // Verifica campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Validação de email
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Email inválido!");
        return;
    }

    // Simulação de envio
    msg.innerText = "Mensagem enviada com sucesso!";
    msg.style.color = "green";

    // Limpar formulário
    form.reset();
});

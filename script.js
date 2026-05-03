// ===== BOTÃO DE TEMA =====
const temaBtn = document.getElementById("temaBtn");

// ===== CARREGAR TEMA SALVO =====
const temaSalvo = localStorage.getItem("data-theme") || "light";
document.body.setAttribute("data-theme", temaSalvo);

// Ajusta ícone inicial
if (temaSalvo === "dark") {
    temaBtn.textContent = "☀️";
} else {
    temaBtn.textContent = "🌙";
}

// ===== ALTERAR TEMA AO CLICAR =====
temaBtn.addEventListener("click", () => {
    let temaAtual = document.body.getAttribute("data-theme");

    if (temaAtual === "dark") {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
        temaBtn.textContent = "🌙";
    } else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
        temaBtn.textContent = "☀️";
    }
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

// ===== TEMA COM PERSISTÊNCIA =====
const temaBtn = document.getElementById("temaBtn");

// Carrega tema salvo
if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
}

// Alterna tema
temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Salva no navegador
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
});

// ===== MENU RESPONSIVO =====
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
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

    // Regex para validar email
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Email inválido!");
        return;
    }

    // Simulação de envio
    msg.innerText = "Mensagem enviada com sucesso!";
    msg.style.color = "green";

    // Limpa formulário
    form.reset();
});

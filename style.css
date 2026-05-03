const temaSwitch = document.getElementById("temaSwitch");

// Carrega tema salvo
const temaSalvo = localStorage.getItem("data-theme") || "light";
document.body.setAttribute("data-theme", temaSalvo);

// Ajusta switch
if (temaSalvo === "dark") {
    temaSwitch.checked = true;
}

// Alternar tema
temaSwitch.addEventListener("change", () => {
    if (temaSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
    }
});

// ===== FORMULÁRIO =====
const form = document.getElementById("formContato");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Email inválido!");
        return;
    }

    msg.innerText = "Mensagem enviada com sucesso!";
    msg.style.color = "green";

    form.reset();
});

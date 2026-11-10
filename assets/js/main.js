// Número que vai receber as confirmações (DDI + DDD + número, só dígitos)
const WHATSAPP_NUMBER = "5513991312486";
// ============================

const body = document.body;
const themeButton = document.getElementById("switch-theme-button");
const musicButton = document.getElementById("music-button");
const music = document.getElementById("music");
const form = document.getElementById("rsvp-form");
const errorBox = document.getElementById("form-error");

// Alternar entre mundo normal e mundo invertido
themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
});

// Música (navegadores bloqueiam autoplay, então o visitante liga no botão)
musicButton.addEventListener("click", async () => {
    try {
        if (music.paused) {
            await music.play();
            musicButton.textContent = "Desligar música";
            musicButton.setAttribute("aria-pressed", "true");
        } else {
            music.pause();
            musicButton.textContent = "Ligar música";
            musicButton.setAttribute("aria-pressed", "false");
        }
    } catch (err) {
        console.warn("Não foi possível tocar a música:", err);
    }
});

// Confirmação de presença: abre o WhatsApp com a mensagem pronta
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const guests = Number(form.guests.value) || 1;
    const message = form.message.value.trim();

    if (!name) {
        errorBox.textContent = "Digite seu nome para confirmar a presença.";
        errorBox.hidden = false;
        form.name.focus();
        return;
    }
    errorBox.hidden = true;

    let text = `Olá! Aqui é ${name}. Confirmo presença no aniversário da Helena! Vamos em ${guests} pessoa${guests > 1 ? "s" : ""}.`;
    if (message) text += ` Recado: ${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
});

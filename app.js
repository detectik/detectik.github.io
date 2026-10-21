/* Detectik: personaliza estos datos antes de publicar. */
const DETECTIK = {
  contactEmail: "contacto@detectik.cl",
  whatsappNumber: "", // Formato internacional, solo números. Ej.: 56912345678
};

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-service], [data-package]").forEach(link => {
  link.addEventListener("click", () => {
    const choice = link.dataset.service || link.dataset.package;
    const interest = document.querySelector("#interest");
    const match = [...interest.options].find(option => option.text.toLowerCase().includes(choice.toLowerCase()));
    if (match) interest.value = match.value;
    else document.querySelector("#message").value = `Me interesa el servicio/paquete "${choice}".\\n\\n`;
  });
});

document.querySelector("#contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Consulta desde Detectik — ${data.get("interest")}`);
  const body = encodeURIComponent(
    `Nombre: ${data.get("name")}\\nCorreo: ${data.get("email")}\\nInterés: ${data.get("interest")}\\n\\nMensaje:\\n${data.get("message") || "(Sin mensaje adicional)"}`
  );
  const help = document.querySelector("#form-help");
  if (DETECTIK.contactEmail.includes("tudominio") || !DETECTIK.contactEmail) {
    help.textContent = "Antes de publicar, configura contactEmail en app.js con el correo real de Detectik.";
    return;
  }
  help.textContent = "Se abrirá tu aplicación de correo. Revisa el destinatario y envía el mensaje desde allí.";
  window.location.href = `mailto:${DETECTIK.contactEmail}?subject=${subject}&body=${body}`;
});
/* Detectik: personaliza estos datos antes de publicar. */
const DETECTIK = {
  contactEmail: "detectikspa+page@gmail.com",
  whatsappNumber: "56958989422", // Formato internacional, solo números. Ej.: 56912345678
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
  window.location.href = `https://google.com{DETECTIK.contactEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Asistente guiado local: no envía ni almacena respuestas del visitante.
const guideSteps = {
  cuentas: [
    { title: "Paso 1 de seguridad", text: "Abre la página oficial del servicio escribiendo su dirección tú mismo. No uses enlaces inesperados de correos, SMS o mensajes.", question: "¿Ya estás en el sitio oficial?" },
    { title: "Paso 2: revisa los datos", text: "Comprueba el usuario o correo, el dominio y que Bloq Mayús no esté activado. Si el servicio muestra un error, léelo con atención.", question: "¿Pudiste iniciar sesión?" },
    { title: "Paso 3: recuperación", text: "Pulsa ‘Olvidé mi contraseña’ en el sitio oficial y sigue su proceso de recuperación. Revisa spam si esperas un correo. Nunca compartas el código de verificación.", question: "¿Recuperaste el acceso?" },
    { title: "Paso 4: protege la cuenta", text: "Si recuperaste el acceso y sospechas actividad extraña, cambia la contraseña por una única, cierra sesiones desconocidas y activa la verificación en dos pasos.", question: "¿La cuenta quedó segura y accesible?" },
    { title: "Paso 5: soporte oficial", text: "Si sigue bloqueada, utiliza el soporte oficial del proveedor. Si es una cuenta laboral, contacta al administrador. No pagues a desconocidos que prometan recuperar la cuenta.", question: "¿Necesitas ayuda especializada?" }
  ],
  internet: [
    { title: "Paso 1: identifica el alcance", text: "Prueba otra página y otra aplicación. Comprueba si otros dispositivos conectados a la misma red también fallan.", question: "¿Internet funciona ahora?" },
    { title: "Paso 2: reconecta el equipo", text: "Desactiva el modo avión, activa Wi-Fi, confirma que elegiste la red correcta y vuelve a conectar. Después reinicia el equipo si puedes guardar tu trabajo.", question: "¿Se restableció la conexión?" },
    { title: "Paso 3: reinicia el router", text: "Si varios dispositivos fallan, desconecta el router de la corriente durante 30 segundos, vuelve a conectarlo y espera unos minutos. No pulses el botón de restablecimiento de fábrica.", question: "¿Volvió Internet en tus dispositivos?" },
    { title: "Paso 4: revisa el proveedor", text: "Mira las luces del router y consulta la página o teléfono oficial de tu proveedor para saber si hay una interrupción del servicio.", question: "¿El proveedor confirma que la conexión está operativa?" },
    { title: "Paso 5: prepara el diagnóstico", text: "Si solo falla un equipo, puedes olvidar la red y reconectarte si conoces la contraseña. En un equipo laboral consulta a TI. Anota el error, hora de inicio y dispositivos afectados.", question: "¿Quedó resuelto o necesitas soporte?" }
  ],
  equipo: [
    { title: "Paso 1: guarda y cierra", text: "Guarda los documentos abiertos y cierra aplicaciones que no uses. No reinicies si el sistema está instalando actualizaciones.", question: "¿Mejoró el rendimiento?" },
    { title: "Paso 2: reinicia", text: "Si no hay actualizaciones en curso, reinicia el equipo y prueba de nuevo la tarea que fallaba.", question: "¿El equipo o programa funciona mejor?" },
    { title: "Paso 3: identifica el problema", text: "Comprueba si el fallo afecta a todo el equipo o a una sola aplicación. Si es una aplicación, ciérrala y ábrela otra vez; apunta el mensaje de error.", question: "¿La aplicación abre correctamente?" },
    { title: "Paso 4: espacio y actualizaciones", text: "Comprueba el espacio disponible. Elimina solo archivos que reconozcas y tengas respaldados. Instala actualizaciones desde la configuración del sistema y desde la fuente oficial de la aplicación.", question: "¿Mejoró después de actualizar y liberar espacio?" },
    { title: "Paso 5: seguridad y señales físicas", text: "Ejecuta un análisis con la herramienta de seguridad integrada. Si hay calor excesivo, ruidos extraños, alertas de cifrado o ventanas sospechosas, detente y solicita ayuda. Evita optimizadores desconocidos.", question: "¿El problema quedó resuelto?" },
    { title: "Paso 6: escalar con información", text: "Contacta soporte con el modelo del equipo, sistema operativo, aplicación afectada, mensaje exacto y cambios recientes. No envíes contraseñas ni datos privados.", question: "¿Quieres volver a elegir una guía?" }
  ]
};
const guideChat = document.querySelector("#guide-chat");
const guideOptions = document.querySelector("#guide-options");
const guideActions = document.querySelector("#guide-actions");
const guideProgress = document.querySelector("#guide-progress");
const guideProgressLabel = document.querySelector("#guide-progress-label");
const guideNote = document.querySelector("#guide-note");
let activeGuide = "";
let activeStep = 0;
const guideNames = { cuentas: "ACCESO Y CUENTAS", internet: "INTERNET Y WI-FI", equipo: "EQUIPO Y SOFTWARE" };
function addGuideMessage(text, type = "assistant") {
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${type === "user" ? "user-bubble" : "assistant-bubble"}`;
  bubble.textContent = text;
  guideChat.append(bubble);
  bubble.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function showGuideStep() {
  const steps = guideSteps[activeGuide];
  const step = steps[activeStep];
  guideChat.innerHTML = "";
  addGuideMessage(`${step.title}. ${step.text}`);
  guideProgressLabel.textContent = `${guideNames[activeGuide]} · PASO ${activeStep + 1} DE ${steps.length}`;
  guideProgress.style.width = `${((activeStep + 1) / steps.length) * 100}%`;
  guideOptions.hidden = true;
  guideActions.hidden = false;
  document.querySelector("#guide-next").textContent = activeStep === steps.length - 1 ? "Sigue igual →" : "Sigue igual →";
  document.querySelector("#guide-solved").textContent = activeStep === steps.length - 1 ? "Volver a elegir guía" : "Sí, quedó resuelto";
  guideNote.textContent = "Prueba este paso y luego indica si el problema quedó resuelto. Si sigue igual, avanzamos.";
}
function startGuide(name) {
  if (!guideSteps[name]) return;
  activeGuide = name;
  activeStep = 0;
  showGuideStep();
}
document.querySelectorAll("[data-start-guide], [data-guide]").forEach(button => button.addEventListener("click", () => startGuide(button.dataset.startGuide || button.dataset.guide)));
document.querySelector("#guide-next").addEventListener("click", () => {
  addGuideMessage("Sigue igual. Vamos al siguiente paso.", "user");
  if (activeStep < guideSteps[activeGuide].length - 1) {
    activeStep += 1;
    showGuideStep();
  } else {
    guideActions.hidden = true;
    guideOptions.hidden = false;
    guideProgressLabel.textContent = "GUÍA COMPLETADA";
    guideProgress.style.width = "100%";
    addGuideMessage("Hemos llegado al final de esta guía. Si el problema continúa, contacta al soporte oficial correspondiente o solicita ayuda a Detectik.");
    guideNote.textContent = "No compartas contraseñas, códigos de verificación ni información sensible.";
  }
});
document.querySelector("#guide-solved").addEventListener("click", () => {
  if (activeStep === guideSteps[activeGuide].length - 1) {
    guideChat.innerHTML = "";
    addGuideMessage("¡Vamos con otra guía! Elige el tema que quieras revisar.");
    activeGuide = "";
    guideActions.hidden = true;
    guideOptions.hidden = false;
    guideProgressLabel.textContent = "ELIGE UNA GUÍA";
    guideProgress.style.width = "0";
    guideNote.textContent = "El asistente funciona en tu navegador. No envía tus respuestas ni guarda información.";
    return;
  }
  addGuideMessage("Sí, quedó resuelto. ¡Excelente!", "user");
  guideChat.innerHTML = "";
  addGuideMessage("¡Perfecto! Problema resuelto. Si vuelve a ocurrir, puedes repetir esta guía. ¿Quieres revisar otro tema?");
  guideActions.hidden = true;
  guideOptions.hidden = false;
  guideProgressLabel.textContent = "PROBLEMA RESUELTO";
  guideProgress.style.width = "100%";
  guideNote.textContent = "¿Necesitas otra guía? Selecciona una categoría.";
});

# DOCUMENTO MAESTRO — PROYECTO WEB DETECTIK
**Versión:** 1.0  
**Fecha:** 2026-10-21  
**Estado:** Fase 1 — sitio institucional inicial implementado  
**Idioma principal:** Español  
**Marca:** Detectik

## 1. Propósito
Crear el centro digital de una empresa tecnológica operada inicialmente por una persona. Debe comunicar solvencia, seguridad, claridad y capacidad de construir soluciones útiles. El sitio debe funcionar en móviles y escritorio, ser fácil de mantener y permitir sumar servicios sin rehacerlo.

## 2. Propuesta de valor
“Tecnología que resuelve”: atención directa y soluciones a medida con foco en desarrollo, operación, seguridad y evolución gradual.

## 3. Capacidades comunicadas
- Sitios institucionales y plataformas web.
- Aplicaciones móviles y herramientas digitales; existe experiencia publicando aplicaciones en Google Play.
- Plataformas de gobernanza y gestión de condominios.
- Soluciones digitales para planificación, diseño, administración y seguimiento de proyectos de construcción.
- Ciberseguridad preventiva, hardening, revisión autorizada, respaldos y recomendaciones.
- IA aplicada, asistentes y automatización.
- Mantenimiento y evolución de soluciones existentes.

**Nota de precisión:** no afirmar certificaciones, auditorías formales, SLA, clientes, resultados cuantificados ni cobertura 24/7 si no están confirmados. Toda actividad de seguridad debe contar con autorización explícita y alcance escrito.

## 4. Público objetivo inicial
- Pequeñas y medianas empresas.
- Comunidades, administradores y comités de condominios.
- Instituciones y organizaciones que necesitan presencia web.
- Profesionales y emprendimientos.
- Equipos con procesos manuales que pueden automatizarse.
- Proyectos de construcción que necesitan herramientas de apoyo digital.

## 5. Identidad y experiencia
- Dirección visual: tecnológica, sobria, oscura, con acento turquesa y contraste alto.
- Interfaz: tipografía Manrope + DM Mono, tarjetas modulares, navegación sencilla, llamadas a la acción visibles.
- Responsive: puntos de quiebre principales en 900 px y 680 px.
- Accesibilidad base: HTML semántico, etiquetas de formulario, foco visible y respeto por `prefers-reduced-motion`.
- Recursos de marca: `assets/logo-detectik-oscuro.png`, `assets/logo-detectik-limpio.png`, `assets/icono-detectik.png`.

## 6. Estructura actual
1. Hero / propuesta de valor.
2. Enfoque.
3. Servicios.
4. Paquetes orientativos.
5. Método de trabajo.
6. CTA.
7. Formulario de contacto.
8. Footer.

## 7. Paquetes iniciales
### Presencia Digital
Sitio responsive, secciones y contacto, SEO inicial, publicación y orientación.
### Plataforma a Medida
Levantamiento, prototipo, flujos/formularios/paneles, roles y plan por etapas.
### Web Segura & Continua
Actualizaciones, respaldos acordados, revisión básica de configuración e informe.
Los valores no se inventan: se cotizan según alcance, complejidad, plazos y dependencias.

## 8. Arquitectura y mantenimiento
- `index.html`: estructura y contenido.
- `styles.css`: sistema visual y responsive.
- `app.js`: menú móvil, año dinámico, preselección de servicios y preparación de correo.
- `assets/`: logos e icono.
- `README.md`: guía de ejecución y publicación.
- Sin framework, base de datos ni compilación en esta fase.
- Agregar servicio: duplicar una tarjeta `.service-card` y adaptar texto/enlace.
- Agregar paquete: duplicar `.plan-card`.
- Mantener el contenido breve, comprobable y sin promesas no verificadas.

## 9. Contacto y privacidad — pendiente obligatorio
El formulario utiliza `mailto:` y no transmite datos a un servidor. En `app.js`, configurar `DETECTIK.contactEmail` con el correo real antes de publicar. No anunciar el sitio con un email de ejemplo. Si luego se conecta un backend o CRM, documentar finalidad, retención, consentimiento y controles de acceso. Evitar pedir datos sensibles por el formulario.

## 10. Fases recomendadas
### Fase 1 — Presencia institucional (implementada)
- Landing responsive, servicios, paquetes, método y contacto.
- SEO básico, metadatos y favicon.
- Archivos editables y documento maestro.

### Fase 2 — Conversión y confianza
- Incorporar casos reales autorizados, capturas de aplicaciones y testimonios verificables.
- Añadir enlaces oficiales a Google Play, LinkedIn y canales de contacto.
- Configurar dominio, correo corporativo, HTTPS y Search Console.
- Definir identidad de contacto (nombre profesional, ubicación/área de atención y horarios si se desea publicar).

### Fase 3 — Operación comercial
- Formulario con backend/servicio de formularios y protección anti-spam.
- Registro de solicitudes, consentimiento y notificación al responsable.
- Página de privacidad y condiciones.
- Métricas de conversión con enfoque de privacidad.

### Fase 4 — Centro de comandos
- Portal privado para clientes, si el modelo comercial lo justifica.
- Gestión de tickets, estado de proyectos, archivos y acuerdos.
- Autenticación segura, roles mínimos, registro de eventos, copias de seguridad y política de retención.
- Separar el portal privado del sitio público.

### Fase 5 — Catálogo escalable
- Páginas específicas por servicio y sector.
- Biblioteca de recursos, diagnóstico inicial y agenda.
- Contenido administrable si el volumen lo justifica; no incorporar CMS hasta necesitarlo.

## 11. Decisiones técnicas y seguridad
- Mantener dependencias al mínimo y preferir software libre/gratuito cuando cumpla los requisitos.
- Nunca guardar secretos, credenciales o claves API en JavaScript del navegador.
- Validar y limitar cualquier entrada al implementar backend.
- HTTPS obligatorio en producción.
- Aplicar actualizaciones, respaldos probados, MFA en proveedores y mínimo privilegio.
- Cualquier prueba de seguridad requiere autorización explícita y alcance definido.
- La web actual no contiene autenticación ni portal privado.

## 12. Lista de salida a producción
- [ ] Confirmar email real en `app.js`.
- [ ] Añadir número/enlace de WhatsApp si corresponde.
- [ ] Verificar dominio y HTTPS.
- [ ] Sustituir/confirmar logos finales y enlaces sociales.
- [ ] Confirmar textos, alcance y paquetes.
- [ ] Añadir política de privacidad si se incorporan analítica, formularios con backend o seguimiento.
- [ ] Probar anchos 320, 375, 768, 1024 y escritorio.
- [ ] Probar navegación por teclado, contraste y formulario.
- [ ] Comprobar favicon, metadatos y vista previa social.
- [ ] Verificar enlaces y revisar consola del navegador.

## 13. Instrucciones para la próxima IA o desarrollador
1. Leer este documento y `README.md` antes de cambiar archivos.
2. Mantener la arquitectura simple y no añadir frameworks sin una razón concreta.
3. Preservar el tono profesional, directo y tecnológico de Detectik.
4. No inventar precios, certificaciones, clientes, estadísticas ni testimonios.
5. Si se implementa una función nueva, actualizar este documento con fecha, decisión, archivos afectados, pruebas y pendientes.
6. Antes de reemplazar componentes, comprobar su uso en móvil y escritorio.
7. Priorizar cambios pequeños y reversibles.

## 14. Registro de cambios
- **2026-10-21 / v1.0:** primera landing responsive, seis áreas de servicio, tres paquetes orientativos, formulario `mailto:`, recursos de marca y documentación de continuidad.

# Detectik — sitio institucional

Sitio estático responsive para presentar servicios de desarrollo, aplicaciones, gobernanza, construcción, IA y ciberseguridad.

## Ejecutar localmente
Abre `index.html` en el navegador. Para desarrollo, puedes usar la extensión Live Server de VS Code o cualquier servidor estático.

## Antes de publicar
1. Edita `app.js` y confirma `DETECTIK.contactEmail`.
2. Si usarás WhatsApp, agrega el número internacional en `whatsappNumber` y define el enlace/CTA correspondiente.
3. Revisa nombres de servicios, alcance, casos de éxito y enlaces reales.
4. Confirma que los servicios de ciberseguridad ofrecidos y sus límites estén descritos con precisión.
5. Publica en cualquier hosting estático (por ejemplo, GitHub Pages, Cloudflare Pages o Netlify; sus condiciones pueden cambiar).
6. Configura dominio, HTTPS, analítica respetuosa de privacidad si se necesita, y correo corporativo.
7. Prueba móvil, teclado, formulario y enlaces antes de anunciar el sitio.

## Centro de ayuda TI
La sección `#guias-ti` incluye tres guías de solución de problemas y un asistente guiado en `app.js`. Funciona en el navegador, sin IA, backend, cuentas ni almacenamiento. Los pasos están diseñados para usuarios generales y evitan instrucciones destructivas (por ejemplo, restablecer el router de fábrica).

## Escalabilidad
- Contenido separado de estilos y comportamiento (`index.html`, `styles.css`, `app.js`).
- Para agregar un servicio, duplica una tarjeta `.service-card` en `index.html`.
- Para agregar un paquete, duplica `.plan-card`.
- El sitio no necesita base de datos para la presentación inicial.
- El formulario usa `mailto:`; no almacena ni envía datos a un servidor. Para formularios reales con seguimiento, incorporar backend o un servicio de formularios después de definir privacidad y consentimiento.

## Stack
HTML, CSS y JavaScript nativos. Sin frameworks ni dependencias de compilación. La tipografía se carga desde Google Fonts con fallback del sistema.

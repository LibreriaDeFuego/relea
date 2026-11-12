# relea
Sitio oficial de RELEA (relea.cl). HTML y CSS estáticos, sin build.

## Páginas
- `/` → `index.html`
- `/nosotros/`, `/precios/`, `/contacto/`, `/preguntas-frecuentes/` → `index.html` de cada carpeta

`styles.css` y `site.js` son compartidos. El diseño base es de 720 px: escala en proporción hasta 990 px y bajo 720 px pasa a una columna con menú colapsable.

## Imágenes provisionales
Estos archivos son sustitutos; basta reemplazarlos con el mismo nombre (y ajustar el `alt` en el HTML):
- `assets/main-hero.jpg`: foto del inicio
- `assets/faq.jpg`: foto de Preguntas frecuentes

## Formulario de contacto
No hay backend: `site.js` abre el correo del visitante con el mensaje ya escrito.

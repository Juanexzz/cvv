# Hoja de Vida - HTML + CSS

Proyecto de práctica para aprender desarrollo web: una hoja de vida construida con HTML básico y CSS básico, sin frameworks ni librerías externas, todo en un solo archivo (`hoja-de-vida.html`).

## Estructura del CV

- Foto de perfil
- Perfil
- Experiencia Laboral
- Educación
- Certificaciones
- Contacto (correo, celular)
- Redes Sociales

## Cómo usarlo

1. Guarda una foto tuya en la misma carpeta que `hoja-de-vida.html` con el nombre `foto.jpg` (o cambia el atributo `src` del `<img>` por el nombre real de tu archivo).
2. Abre `hoja-de-vida.html` directamente en el navegador, no necesita servidor ni instalación.

## Resumen de aprendizaje

Análisis de lo que se usó al construir este CV, para repasar qué hace cada cosa.

### Etiquetas HTML

| Etiqueta | Para qué sirve |
|---|---|
| `<!DOCTYPE html>` | Le dice al navegador que el documento usa HTML5 |
| `<html>` | Elemento raíz que envuelve toda la página |
| `<head>` | Metadatos: no se ve en pantalla, pero configura la página (título, charset, estilos) |
| `<meta>` | Información sobre el documento (codificación de caracteres, comportamiento en móviles) |
| `<title>` | Texto que aparece en la pestaña del navegador |
| `<style>` | Contiene el CSS directamente dentro del HTML |
| `<body>` | Todo el contenido visible de la página |
| `<header>` | Sección introductoria (aquí: foto + nombre) |
| `<main>` | Contenido principal del documento |
| `<section>` | Agrupa un bloque temático (Perfil, Educación, etc.) |
| `<div>` | Contenedor genérico, solo para agrupar y aplicar estilos |
| `<h1>` / `<h2>` | Títulos, `h1` es el más importante (el nombre), `h2` para cada sección |
| `<p>` | Párrafo de texto |
| `<img>` | Inserta una imagen |
| `<ul>` / `<li>` | Lista sin viñetas visibles (se quitaron con CSS) y cada uno de sus elementos |
| `<a>` | Enlace (correo, teléfono, GitHub) |
| `<span>` | Contenedor de texto en línea, para darle estilo a una palabra sin romper el flujo |

### Atributos

| Atributo | Para qué sirve |
|---|---|
| `lang="es"` | Indica el idioma del documento (accesibilidad y SEO) |
| `charset="UTF-8"` | Habilita tildes, ñ y demás caracteres especiales |
| `name` / `content` (en `<meta>`) | Configuran el viewport para que la página se vea bien en celulares |
| `class` | Asigna un nombre para referenciar el elemento desde el CSS |
| `src` | Ruta del archivo de imagen a mostrar |
| `alt` | Texto alternativo de la imagen (accesibilidad, y se muestra si la imagen no carga) |
| `href` | Destino de un enlace (URL, `mailto:`, `tel:`) |
| `target="_blank"` | Abre el enlace en una pestaña nueva |
| `rel="noopener"` | Seguridad al usar `target="_blank"`, evita que la nueva pestaña acceda a la página original |

### CSS

**Variables (`:root { --nombre: valor; }`)**
Guardan valores reutilizables (colores, tipografías). Se usan luego con `var(--nombre)`. Cambiar un color en un solo lugar lo actualiza en toda la página.

**Reset básico**

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
```

`box-sizing: border-box` hace que el padding y el borde se cuenten dentro del ancho del elemento, no se lo sumen. `margin/padding: 0` quita los espacios por defecto que trae cada navegador.

**Modelo de caja**

- `padding`: espacio interno entre el borde de un elemento y su contenido.
- `margin`: espacio externo entre un elemento y los demás.
- `border`: línea alrededor del elemento.
- `border-radius`: redondea las esquinas (usado para la foto circular).

**Flexbox (`display: flex`)**

Distribuye elementos en fila o columna de forma flexible. Usado en el `<header>` para poner la foto y el texto uno junto al otro.

- `align-items: center`: centra verticalmente.
- `gap`: espacio entre elementos hijos.

**Grid (`display: grid`)**

Distribuye elementos en una cuadrícula. Usado en la sección de Contacto/Redes para poner dos columnas iguales (`grid-template-columns: 1fr 1fr`).

**Tipografía**

- `font-family`: qué fuente usar (con alternativas por si el sistema no tiene la primera).
- `font-size`, `font-weight`: tamaño y grosor del texto.
- `line-height`: espacio entre líneas de texto.
- `letter-spacing`: espacio entre letras.

**Colores**

- `color`: color del texto.
- `background`: color de fondo.

**Pseudo-clases**

- `a:hover`, `a:focus`: aplican estilo cuando el mouse pasa sobre el enlace o cuando se selecciona con el teclado.
- `:last-child`: selecciona el último elemento de un grupo (usado para quitar el margen inferior sobrante).

**Media queries (`@media`)**

Aplican reglas de CSS solo bajo ciertas condiciones.

- `@media (max-width: 560px)`: en pantallas angostas (celular), apila la foto y el texto en columna, y pasa las dos columnas de contacto a una sola.
- `@media print`: al imprimir o exportar a PDF, quita el fondo y el borde para que se vea limpio en papel.

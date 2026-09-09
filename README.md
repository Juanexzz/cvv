# Repositorio de Proyectos de Desarrollo Web - Juan Esteban Vallejo

Repositorio integral que compila las diferentes actividades, talleres y proyectos prácticos de desarrollo frontend desarrollados por **Juan Esteban Vallejo**.

**Desarrollador:** Juan Esteban Vallejo  
**Correo:** juanvallejo240@gmail.com  
**GitHub:** [@Juanexzz](https://github.com/Juanexzz)  
**URL Principal de Producción:** [https://cvv-udem.vercel.app](https://cvv-udem.vercel.app)  

---

## 🌐 Módulos y Enlaces Directos en Vercel

Cada una de las actividades cuenta con su propio despliegue activo y accesible en tiempo real sin errores:

| Actividad / Proyecto | Rama de Origen | Descripción | Enlace Directo en Vercel |
| :--- | :--- | :--- | :--- |
| **Arena de Retos DOM** | `feature/retos-dom` | 4 retos interactivos de manipulación del DOM (Cambiar color, Lista dinámica, Contador con límite y Calculadora sin eval). | 🔗 [Ver Retos DOM en Vercel](https://cvv-82yz95q5x-udem.vercel.app) |
| **Sitio Web Personal & Portafolio** | `feature/sitio-web-personal` | Sitio web personal con HTML5 semántico, CSS3 responsivo, portafolio y formulario de contacto. | 🔗 [Ver Sitio Personal en Vercel](https://cvv-56jhm4w5e-udem.vercel.app) |
| **Taller de TypeScript & JS** | `feature/ejercicios-ts` | 12 ejercicios prácticos sobre arreglos, objetos, interfaces y tipado estático con dashboard interactivo en vivo. | 🔗 [Ver Taller TS en Vercel](https://cvv-o68vq475h-udem.vercel.app) |
| **Hoja de Vida Profesional (IA)** | `main` | Currículum digital interactivo con diseño moderno y adaptable. | 🔗 [Ver CV en Vercel](https://cvv-bviu1ooh7-udem.vercel.app/IA/cvv_ia.html) |

---

## 📖 Descripción de Proyectos

### 1. Arena de Retos DOM (Página Principal: `index.html`)
Aplicación web moderna que implementa en JavaScript vanilla los cuatro retos prácticos ilustrados en mockups de dispositivos móviles:

- **Nivel Básico:**
  - **🥇 Ejercicio 1 – Cambiar color:** Botón interactivo "Click" que altera dinámicamente el fondo de la pantalla mediante una paleta de colores armónicos con efecto de salpicadura, visualización hexadecimal y contador de clics.
  - **🥈 Ejercicio 2 – Lista dinámica:** Input y botón para añadir elementos a una lista interactiva. Los datos se almacenan en memoria en un arreglo JavaScript (`itemsInMemory`) y se renderizan con tarjetas de borde discontinuo (*dashed border*), incluyendo eliminación por ítem y vaciado general.

- **Nivel Pro:**
  - **🥉 Ejercicio 3 – Contador con límite:** Controles circulares de incremento y decremento con pantalla de gran formato y condicional estricto que muestra la alerta ⚠️ (`¡Límite de 10 alcanzado!`) exactamente al llegar a 10.
  - **🏆 Ejercicio 4 – Calculadora (Reto final):** Calculadora funcional desarrollada **estrictamente sin la función `eval()`**, con operadores matemáticos manuales, condicionales, arreglos para historial de operaciones, protección ante división por cero (`Error: Div 0`), cambio de signo (`+/-`), porcentaje y soporte para teclado físico.

Archivos: `index.html`, `styles.css`, `app.js`.

---

### 2. Sitio Web Personal & Portafolio (`sitio-web-personal/`)
Sitio web completo desarrollado para el reto de portafolio personal:
- Estructura HTML5 semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<aside>`, `<form>`, `<footer>`).
- Secciones: Inicio, Acerca de, Pasiones & Hobbies, Portafolio de proyectos y Contacto.
- CSS3 puro sin librerías externas: Grid, Flexbox, variables CSS y diseño adaptable para móviles y escritorio.

Archivos: `sitio-web-personal/index.html`, `sitio-web-personal/styles.css`.

---

### 3. Taller Práctico en TypeScript & JavaScript (`taller-ts/` / `ejercicios.ts` / `ejercicios.js`)
Solución a los 12 puntos de práctica académica sobre manipulación de datos con dashboard visual interactivo:
1. Ciclo de recorrido de estudiantes.
2. Conteo de elementos con `.length`.
3. Suma de arreglos numéricos con `.reduce()`.
4. Arreglo de 1500 números aleatorios con suma acumulada.
5. Cálculo de promedio.
6. Filtro de elementos mayores a 50 (`.filter()`).
7. Modelado de objeto e interfaz `Persona`.
8. Arreglo e interfaz `Producto` con formateo de precios.
9. Detección de producto de mayor precio con `.reduce()`.
10. Inventario con cálculo de subtotales y valor total.
11. Gestión académica: estudiantes, materias y cálculo de promedios.
12. Filtro de estudiantes destacados (promedio > 3.5).

Archivos: `taller-ts/index.html`, `ejercicios.ts`, `ejercicios.js`, `package.json`, `tsconfig.json`.

---

## 🚀 Estructura del Repositorio

```text
├── IA/
│   └── cvv_ia.html              Hoja de vida digital interactiva
├── sitio-web-personal/
│   ├── index.html               Sitio web personal y portafolio
│   └── styles.css               Estilos CSS3 del sitio personal
├── taller-ts/
│   └── index.html               Dashboard interactivo en vivo del taller de TypeScript
├── index.html                   Arena de retos interactivos del DOM (raíz)
├── styles.css                   Estilos CSS3 de los retos del DOM
├── app.js                       Lógica JS vanilla de los retos del DOM (sin comentarios)
├── ejercicios.ts                Taller de 12 ejercicios en TypeScript
├── ejercicios.js                Compilación ejecutable en JavaScript
├── package.json                 Configuración optimizada para Vercel
├── tsconfig.json                Configuración del compilador de TS
├── perfil.png                   Fotografía de perfil
├── vercel.json                  Configuración de despliegue estático para Vercel
└── README.md                    Documentación general del repositorio
```

---

## 💻 Instrucciones de Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Juanexzz/cvv.git
   cd cvv
   ```

2. **Visualizar las aplicaciones web:**
   - Para la **Arena de Retos DOM**: abrir `index.html` en el navegador.
   - Para el **Sitio Web Personal**: abrir `sitio-web-personal/index.html`.
   - Para el **Dashboard de TypeScript**: abrir `taller-ts/index.html`.
   - Para la **Hoja de Vida**: abrir `IA/cvv_ia.html`.

3. **Ejecutar el taller de TypeScript / JavaScript por consola:**
   ```bash
   node ejercicios.js
   ```

---

## 👤 Autor

- **Nombre:** Juan Esteban Vallejo
- **Correo:** juanvallejo240@gmail.com
- **LinkedIn:** [Juan Vallejo](https://www.linkedin.com/in/juan-vallejo-a7b177282/)
- **GitHub:** [@Juanexzz](https://github.com/Juanexzz)

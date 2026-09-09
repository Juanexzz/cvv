# Proyecto de Desarrollo Web - Juan Esteban Vallejo

Repositorio integral de prácticas y proyectos de desarrollo web frontend, que recopila talleres interactivos de manipulación del Document Object Model (DOM), hojas de vida profesionales con diseño moderno y recursos de presentación.

**Desarrollador:** Juan Esteban Vallejo  
**Correo:** juanvallejo24@gmail.com  
**GitHub:** [https://github.com/Juanexzz](https://github.com/Juanexzz)  
**Despliegue en Vercel:** [https://cvv-udem.vercel.app](https://cvv-udem.vercel.app)  

---

## Módulos y Contenido de la Rama `main`

La rama principal (`main`) contiene los siguientes componentes y proyectos:

### 1. Arena de Retos DOM (Página Principal)
Aplicación web interactiva que reúne soluciones prácticas a cuatro retos de manipulación del Document Object Model en JavaScript vanilla, HTML5 semántico y CSS3 responsivo. La interfaz está inspirada en mockups de dispositivos móviles y dividida en dos categorías:

- **Retos Nivel Básico:**
  - **🥇 Ejercicio 1 – Cambiar color:** Botón central "Click" que altera dinámicamente el fondo de la pantalla mediante una paleta de colores armónicos, mostrando el código hexadecimal, contador de clics y botón de reinicio.
  - **🥈 Ejercicio 2 – Lista dinámica:** Entrada de texto y botón interactivo para agregar elementos. Los datos se gestionan en memoria mediante un arreglo en JavaScript (`itemsInMemory`), renderizando tarjetas con borde discontinuo (*dashed border*), eliminación por ítem y vaciado general.

- **Retos Nivel Pro:**
  - **🥉 Ejercicio 3 – Contador con límite:** Controles circulares de incremento y decremento, pantalla visual de gran formato y condicional que dispara una alerta animada ⚠️ al alcanzar el valor límite de 10.
  - **🏆 Ejercicio 4 – Calculadora (Reto final):** Calculadora aritmética completa desarrollada estrictamente **sin la función `eval()`**, empleando operadores matemáticos manuales, condicionales, arreglos para historial de operaciones, validación de división por cero, porcentaje, cambio de signo (`+/-`) y soporte para teclado físico.

Archivos asociados: `index.html`, `styles.css`, `app.js`.

---

### 2. Hoja de Vida y Perfil Profesional
Versión estructurada de currículum vitae digital, diseñada con estilos CSS limpios y adaptables a dispositivos móviles y de escritorio. Contiene información académica, habilidades técnicas, metas profesionales y datos de contacto.

Archivos asociados: `IA/cvv_ia.html`, `perfil.png`.

---

### 3. Configuración y Despliegue en la Nube
El repositorio está configurado para integración y entrega continua (CI/CD) mediante Vercel, permitiendo servir todos los recursos de manera estática y con URLs limpias.

Archivos asociados: `vercel.json`.

---

## Estructura de Archivos en `main`

```text
├── IA/
│   └── cvv_ia.html      Hoja de vida interactiva con diseño estructurado
├── index.html           Aplicación principal con la arena de retos de manipulación del DOM
├── styles.css           Estilos CSS3 puros con diseño responsivo y mockups móviles
├── app.js               Lógica en JavaScript vanilla para los retos del DOM (sin comentarios)
├── perfil.png           Fotografía de perfil utilizada en el CV
├── vercel.json          Configuración de despliegue estático para Vercel
└── README.md            Documentación general del repositorio y contenidos de la rama main
```

---

## Tecnologías Utilizadas

- **HTML5 Semántico:** Estructuración accesible y moderna.
- **CSS3 Puro:** Variables CSS, Flexbox, CSS Grid, animaciones fluidas y diseño responsivo sin librerías externas.
- **JavaScript (ES6+):** Manipulación directa del DOM, manejo de eventos, condicionales, estructuras de datos en memoria (arreglos) y operadores aritméticos manuales.
- **Vercel:** Plataforma de alojamiento y despliegue continuo en la nube.

---

## Ejecución en Entorno Local

Para explorar y ejecutar el proyecto localmente:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Juanexzz/cvv.git
   cd cvv
   ```

2. Abrir cualquiera de las aplicaciones en tu navegador preferido:
   - Para la **Arena de Retos DOM**, abrir `index.html`.
   - Para la **Hoja de Vida**, abrir `IA/cvv_ia.html`.

3. Alternativamente, levantar un servidor local con Node.js:
   ```bash
   npx serve .
   ```

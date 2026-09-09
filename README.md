# Arena de Retos DOM

Solución completa del taller interactivo de manipulación del DOM (Document Object Model) con JavaScript vainilla, HTML5 semántico y estilos CSS3 modernos con diseño responsivo y mockups de dispositivos móviles.

**Desarrollador:** Juan Esteban Vallejo  
**Correo:** juanvallejo24@gmail.com  
**Repositorio:** [https://github.com/Juanexzz/cvv](https://github.com/Juanexzz/cvv)  

---

## Retos Implementados

### 1. A la arena: Retos nivel básico

#### 🥇 Ejercicio 1 – Cambiar color
- **Objetivo:** Crear un botón que cambie el color del fondo al hacer clic.
- **Implementación:**
  - Mockup interactivo de teléfono móvil con botón central estilizado.
  - Paleta de colores armónicos y vibrantes seleccionados dinámicamente.
  - Generación de salpicaduras de color visuales con transiciones suaves en CSS.
  - Indicador del código hexadecimal del color en pantalla y contador de clics.
  - Botón de reinicio al color base.

#### 🥈 Ejercicio 2 – Lista dinámica
- **Objetivo:** Mostrar elementos en una lista interactiva. Usar un arreglo para guardar los datos de los inputs en memoria.
- **Implementación:**
  - Formulario con input de texto y botón interactivo "Agregar" (con soporte para tecla Enter).
  - Almacenamiento en memoria en un arreglo JavaScript (`itemsInMemory`).
  - Renderizado dinámico de tarjetas con borde punteado (dashed border) idénticas a la ilustración.
  - Cada elemento cuenta con botón individual para eliminar del arreglo y del DOM.
  - Contador de elementos en memoria y opción de vaciado completo.

---

### 2. A la arena: Retos nivel pro

#### 🥉 Ejercicio 3 – Contador con límite
- **Objetivo:** Si el contador llega a 10, mostrar una alerta.
- **Conceptos aplicados:** `[Eventos]`, `[Condicionales]`
- **Implementación:**
  - Botones circulares para decrementar (`-`) e incrementar (`+`).
  - Visualizador de número de gran tamaño con bordes estilizados.
  - Condicional estricto que evalúa cuando el valor es igual a 10.
  - Notificación visual con ícono de advertencia ⚠️ animada en la parte superior.
  - Botón para restablecer el contador a 0.

#### 🏆 Ejercicio 4 – Calculadora (Reto final)
- **Objetivo:** Construir una calculadora funcional ¡SIN usar eval!
- **Conceptos aplicados:** `[Arreglos]`, `[Condicionales]`, `[Operadores matemáticos manuales]`
- **Implementación:**
  - Motor de cálculo aritmético 100% manual (`+`, `-`, `*`, `/`, `%`).
  - Cero uso de `eval()` ni `new Function()`.
  - Protección contra división por cero (`Error: Div 0`).
  - Control de precisión flotante para evitar errores comunes de redondeo en JavaScript.
  - Inversión de signo positivo/negativo (`+/-`) y cálculo porcentual (`%`).
  - Arreglo de registro de operaciones (`calculatorHistoryLog`).
  - Distribución tipo teclado numérico en cuadrícula CSS (Grid).
  - Soporte completo para entrada desde teclado físico (números, operadores, Enter, Escape, Backspace).

---

## Estructura del Proyecto

```text
├── index.html        Página principal con la arena de retos y mockups móviles
├── styles.css        Estilos CSS3 puros, variables y adaptabilidad responsiva
├── app.js            Lógica en JavaScript vanilla de los 4 retos (sin comentarios)
├── vercel.json       Configuración para despliegue estático optimizado en Vercel
└── README.md         Documentación del proyecto
```

---

## Ejecución Local

Para visualizar el proyecto localmente:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Juanexzz/cvv.git
   cd cvv
   ```

2. Abrir directamente `index.html` en cualquier navegador web moderno:
   - Doble clic en `index.html`, o
   - Usar una extensión como Live Server en VS Code / PyCharm, o
   - Ejecutar un servidor local simple:
     ```bash
     npx serve .
     ```

---

## Despliegue en Vercel

El proyecto está configurado para despliegue estático continuo en Vercel. Cada actualización en la rama principal desencadena una compilación automática servida en la nube con rendimiento óptimo.

# Taller de Ejercicios Prácticos en TypeScript & JavaScript

Este repositorio y rama (`feature/ejercicios-ts`) contienen la solución completa del taller de ejercicios prácticos utilizando **TypeScript (TS)** y **JavaScript (JS)**.

---

## 📋 Lista de Ejercicios Desarrollados

| # | Ejercicio / Requerimiento | Descripción |
| :---: | :--- | :--- |
| **0** | **Inicialización de Proyecto** | Configuración de `package.json` (`npm init`) y `tsconfig.json` (`tsc --init`). |
| **1** | **Lista de Estudiantes (Ciclo)** | Array con 5 nombres de estudiantes y recorrido en consola mediante un ciclo `for`. |
| **2** | **Conteo de Estudiantes** | Impresión de la cantidad total de estudiantes en el arreglo mediante `.length`. |
| **3** | **Suma de Array de Números** | Creación de un array numérico y cálculo de la suma total mediante `.reduce()`. |
| **4** | **Array de 1500 Números Aleatorios** | Generación de 1500 números con `Math.round(Math.random() * 100)` y suma acumulada. |
| **5** | **Cálculo de Promedio** | Promedio de los elementos del Punto 3 (`suma / total`). |
| **6** | **Filtro de Números > 50** | Filtrado de números mayores a 50 del Punto 3 utilizando `.filter()`. |
| **7** | **Objeto Persona** | Interfaz y objeto `Persona` con atributos `nombre`, `edad`, `ciudad` e impresión. |
| **8** | **Array de Productos** | Interfaz `Producto` (`nombre` y `precio`) e impresión formateada en moneda. |
| **9** | **Producto de Mayor Precio** | Búsqueda del producto más costoso utilizando `.reduce()`. |
| **10** | **Inventario con Cantidades** | Interfaz `ProductoInventario` (`cantidad`), cálculo de subtotales y valor total del inventario. |
| **11** | **Estudiantes, Materias y Promedios** | Interfaces `EstudianteAcademico` y `Materia`. Cálculo de promedios individuales y promedio general del grupo. |
| **12** | **Filtro de Promedio > 3.5** | Filtrado e impresión de estudiantes destacados con promedio académico superior a 3.5. |

---

## 🚀 Archivos del Proyecto

```text
cvv/
├── package.json      # Configuración de dependencias y scripts de Node.js
├── tsconfig.json     # Configuración del compilador de TypeScript
├── ejercicios.ts     # Código fuente principal con tipado estático (TypeScript)
├── ejercicios.js     # Código ejecutable JavaScript equivalente
└── README.md         # Documentación detallada del taller
```

---

## 💻 Instrucciones de Ejecución

### 1. Requisitos Previos
Tener instalado [Node.js](https://nodejs.org/) en el sistema.

### 2. Ejecutar directamente con Node.js
```bash
node ejercicios.js
```

### 3. Ejecutar con TypeScript (ts-node / tsc)
```bash
# Opción 1: Ejecutar directamente con ts-node
npx ts-node ejercicios.ts

# Opción 2: Compilar y ejecutar
npx tsc
node ejercicios.js
```

---

## 🌐 Despliegue en Vercel

El taller de ejercicios prácticos en TypeScript se encuentra desplegado y accesible en tiempo real a través de Vercel:  
🔗 **[Ver Taller de TypeScript en Vivo en Vercel](https://cvv-1dwn3u1kb-udem.vercel.app)**

---

## 👤 Autor

- **Nombre:** Juan Esteban Vallejo
- **Correo Electrónico:** juanvallejo240@gmail.com
- **LinkedIn:** [Juan Vallejo](https://www.linkedin.com/in/juan-vallejo-a7b177282/)
- **GitHub:** [@Juanexzz](https://github.com/Juanexzz)

/**
 * ============================================================================
 * TALLER DE EJERCICIOS PRÁCTICOS EN TYPESCRIPT & JAVASCRIPT
 * Autor: Juan Esteban Vallejo
 * Correo: juanvallejo240@gmail.com
 * Repositorio: https://github.com/Juanexzz/cvv
 * ============================================================================
 */

console.log("=================================================================");
console.log("       TALLER DE EJERCICIOS EN TYPESCRIPT & JAVASCRIPT           ");
console.log("                 Autor: Juan Esteban Vallejo                     ");
console.log("=================================================================\n");


// ============================================================================
// EJERCICIO 1
// Enunciado: Crear un array con 5 nombres de estudiantes y mostrar cada nombre
//            en consola usando un ciclo.
// ============================================================================
console.log("--- EJERCICIO 1: Lista de Estudiantes (Ciclo) ---");

const estudiantes: string[] = [
  "Juan Esteban Vallejo",
  "María Fernanda López",
  "Carlos Andrés Gómez",
  "Sofía Ramírez Castro",
  "Andrés Felipe Morales"
];

console.log("Recorriendo y mostrando los estudiantes:");
for (let i: number = 0; i < estudiantes.length; i++) {
  console.log(`  [${i + 1}] Estudiante: ${estudiantes[i]}`);
}
console.log();


// ============================================================================
// EJERCICIO 2
// Enunciado: Imprimir cuántos estudiantes hay en el arreglo.
// ============================================================================
console.log("--- EJERCICIO 2: Cantidad Total de Estudiantes ---");

const totalEstudiantes: number = estudiantes.length;
console.log(`Cantidad de estudiantes en el arreglo: ${totalEstudiantes}`);
console.log();


// ============================================================================
// EJERCICIO 3
// Enunciado: Crear un array de números y calcular la suma total.
// ============================================================================
console.log("--- EJERCICIO 3: Array de Números y Suma Total ---");

const numerosPunto3: number[] = [12, 45, 68, 23, 89, 54, 31, 95, 10, 72];
const sumaTotalPunto3: number = numerosPunto3.reduce(
  (acumulador: number, valorActual: number): number => acumulador + valorActual,
  0
);

console.log(`Array de números: [${numerosPunto3.join(", ")}]`);
console.log(`Suma total de los números: ${sumaTotalPunto3}`);
console.log();


// ============================================================================
// EJERCICIO 4
// Enunciado: Crear un array de números (mínimo 1500) y calcular la suma total.
//            (Usar aleatorios y Math.round).
// ============================================================================
console.log("--- EJERCICIO 4: Array de 1500 Números Aleatorios y Suma Total ---");

const CANTIDAD_ALEATORIOS: number = 1500;
const numerosAleatorios: number[] = [];

// Generación de 1500 números aleatorios entre 1 y 100 usando Math.round
for (let i: number = 0; i < CANTIDAD_ALEATORIOS; i++) {
  const numeroAleatorio: number = Math.round(Math.random() * 100);
  numerosAleatorios.push(numeroAleatorio);
}

const sumaTotalAleatorios: number = numerosAleatorios.reduce(
  (acumulador: number, valorActual: number): number => acumulador + valorActual,
  0
);

console.log(`Total de números generados: ${numerosAleatorios.length}`);
console.log(`Muestra de los primeros 10 números: [${numerosAleatorios.slice(0, 10).join(", ")}...]`);
console.log(`Suma total de los ${CANTIDAD_ALEATORIOS} números aleatorios: ${sumaTotalAleatorios}`);
console.log();


// ============================================================================
// EJERCICIO 5
// Enunciado: Calcular el promedio de los números del punto 3.
// ============================================================================
console.log("--- EJERCICIO 5: Promedio de los Números del Punto 3 ---");

const promedioPunto3: number = sumaTotalPunto3 / numerosPunto3.length;
console.log(`Suma total: ${sumaTotalPunto3}`);
console.log(`Cantidad de elementos: ${numerosPunto3.length}`);
console.log(`Promedio calculado: ${promedioPunto3.toFixed(2)}`);
console.log();


// ============================================================================
// EJERCICIO 6
// Enunciado: Imprimir los números mayor a 50 del punto 3.
// ============================================================================
console.log("--- EJERCICIO 6: Números Mayores a 50 del Punto 3 ---");

const numerosMayoresA50: number[] = numerosPunto3.filter(
  (numero: number): boolean => numero > 50
);

console.log(`Números originales: [${numerosPunto3.join(", ")}]`);
console.log(`Números mayores a 50: [${numerosMayoresA50.join(", ")}]`);
console.log();


// ============================================================================
// EJERCICIO 7
// Enunciado: Crear un objeto de persona con nombre, edad, ciudad e imprimir
//            sus valores.
// ============================================================================
console.log("--- EJERCICIO 7: Objeto Persona e Impresión de Valores ---");

interface Persona {
  nombre: string;
  edad: number;
  ciudad: string;
}

const persona: Persona = {
  nombre: "Juan Esteban Vallejo",
  edad: 20,
  ciudad: "Medellín"
};

console.log("Datos de la persona:");
console.log(`  - Nombre: ${persona.nombre}`);
console.log(`  - Edad:   ${persona.edad} años`);
console.log(`  - Ciudad: ${persona.ciudad}`);
console.log();


// ============================================================================
// EJERCICIO 8
// Enunciado: Crear un array de productos (nombre y precio) e imprimirlos.
// ============================================================================
console.log("--- EJERCICIO 8: Array de Productos (Nombre y Precio) ---");

interface Producto {
  nombre: string;
  precio: number;
}

const productos: Producto[] = [
  { nombre: "Laptop Gamer ASUS ROG", precio: 4500000 },
  { nombre: "Monitor 27'' 144Hz IPS", precio: 1100000 },
  { nombre: "Teclado Mecánico RGB", precio: 280000 },
  { nombre: "Mouse Inalámbrico Logitech", precio: 120000 },
  { nombre: "Auriculares HyperX Cloud", precio: 350000 }
];

console.log("Listado de productos:");
productos.forEach((producto: Producto, indice: number) => {
  console.log(`  [${indice + 1}] ${producto.nombre} -> $${producto.precio.toLocaleString("es-CO")} COP`);
});
console.log();


// ============================================================================
// EJERCICIO 9
// Enunciado: Encontrar el producto con mayor precio del array e imprimirlo.
// ============================================================================
console.log("--- EJERCICIO 9: Producto con Mayor Precio ---");

const productoMasCaro: Producto = productos.reduce(
  (maximo: Producto, actual: Producto): Producto => {
    return actual.precio > maximo.precio ? actual : maximo;
  },
  productos[0]
);

console.log(`El producto con mayor precio es:`);
console.log(`  Producto: ${productoMasCaro.nombre}`);
console.log(`  Precio:   $${productoMasCaro.precio.toLocaleString("es-CO")} COP`);
console.log();


// ============================================================================
// EJERCICIO 10
// Enunciado: Agregar la cantidad de unidades disponibles a cada producto y
//            calcular el valor total de mi inventario.
// ============================================================================
console.log("--- EJERCICIO 10: Inventario con Cantidades y Valor Total ---");

interface ProductoInventario extends Producto {
  cantidad: number;
}

const inventario: ProductoInventario[] = [
  { nombre: "Laptop Gamer ASUS ROG", precio: 4500000, cantidad: 4 },
  { nombre: "Monitor 27'' 144Hz IPS", precio: 1100000, cantidad: 8 },
  { nombre: "Teclado Mecánico RGB", precio: 280000, cantidad: 15 },
  { nombre: "Mouse Inalámbrico Logitech", precio: 120000, cantidad: 25 },
  { nombre: "Auriculares HyperX Cloud", precio: 350000, cantidad: 10 }
];

let valorTotalInventario: number = 0;

console.log("Detalle del inventario:");
inventario.forEach((item: ProductoInventario, indice: number) => {
  const subtotal: number = item.precio * item.cantidad;
  valorTotalInventario += subtotal;
  console.log(`  [${indice + 1}] ${item.nombre}:`);
  console.log(`      ${item.cantidad} unidades x $${item.precio.toLocaleString("es-CO")} = $${subtotal.toLocaleString("es-CO")} COP`);
});

console.log(`\nValor total acumulado del inventario: $${valorTotalInventario.toLocaleString("es-CO")} COP`);
console.log();


// ============================================================================
// EJERCICIO 11
// Enunciado: Crear un array de estudiantes donde cada estudiante tiene nombre,
//            semestre y un array de materias (cada materia tiene nombre, nota).
//            Calcular el promedio de cada estudiante y el promedio de todos
//            los estudiantes.
// ============================================================================
console.log("--- EJERCICIO 11: Estudiantes con Materias, Notas y Promedios ---");

interface Materia {
  nombre: string;
  nota: number;
}

interface EstudianteAcademico {
  nombre: string;
  semestre: number;
  materias: Materia[];
}

const estudiantesAcademicos: EstudianteAcademico[] = [
  {
    nombre: "Juan Esteban Vallejo",
    semestre: 4,
    materias: [
      { nombre: "Desarrollo Web", nota: 4.8 },
      { nombre: "Estructuras de Datos", nota: 4.5 },
      { nombre: "Bases de Datos", nota: 4.2 }
    ]
  },
  {
    nombre: "María Fernanda López",
    semestre: 3,
    materias: [
      { nombre: "Desarrollo Web", nota: 3.8 },
      { nombre: "Cálculo Integral", nota: 3.2 },
      { nombre: "Programación Orientada a Objetos", nota: 4.0 }
    ]
  },
  {
    nombre: "Carlos Andrés Gómez",
    semestre: 4,
    materias: [
      { nombre: "Desarrollo Web", nota: 3.0 },
      { nombre: "Redes de Computadores", nota: 2.8 },
      { nombre: "Bases de Datos", nota: 3.4 }
    ]
  },
  {
    nombre: "Sofía Ramírez Castro",
    semestre: 5,
    materias: [
      { nombre: "Arquitectura de Software", nota: 4.9 },
      { nombre: "Inteligencia Artificial", nota: 4.7 },
      { nombre: "Ingeniería Web", nota: 4.6 }
    ]
  },
  {
    nombre: "Andrés Felipe Morales",
    semestre: 2,
    materias: [
      { nombre: "Lógica de Programación", nota: 3.2 },
      { nombre: "Álgebra Lineal", nota: 2.9 },
      { nombre: "Introducción a Sistemas", nota: 3.5 }
    ]
  }
];

// Función auxiliar para calcular el promedio de un estudiante individual
function calcularPromedioEstudiante(estudiante: EstudianteAcademico): number {
  const sumaNotas: number = estudiante.materias.reduce(
    (acum: number, materia: Materia): number => acum + materia.nota,
    0
  );
  return Number((sumaNotas / estudiante.materias.length).toFixed(2));
}

let sumaPromediosGlobal: number = 0;

console.log("Promedio individual de cada estudiante:");
estudiantesAcademicos.forEach((estudiante: EstudianteAcademico, indice: number) => {
  const promedio: number = calcularPromedioEstudiante(estudiante);
  sumaPromediosGlobal += promedio;
  console.log(`  [${indice + 1}] ${estudiante.nombre} (Semestre ${estudiante.semestre}): Promedio = ${promedio.toFixed(2)}`);
  console.log(`      Materias: ${estudiante.materias.map((m: Materia) => `${m.nombre} (${m.nota})`).join(" | ")}`);
});

const promedioGeneralEstudiantes: number = sumaPromediosGlobal / estudiantesAcademicos.length;
console.log(`\nPromedio general de TODOS los estudiantes: ${promedioGeneralEstudiantes.toFixed(2)}`);
console.log();


// ============================================================================
// EJERCICIO 12
// Enunciado: Imprimir el nombre de los estudiantes que tienen promedio mayor
//            a 3.5.
// ============================================================================
console.log("--- EJERCICIO 12: Estudiantes con Promedio Mayor a 3.5 ---");

const estudiantesConPromedioMayorA35: EstudianteAcademico[] = estudiantesAcademicos.filter(
  (estudiante: EstudianteAcademico): boolean => {
    return calcularPromedioEstudiante(estudiante) > 3.5;
  }
);

console.log("Estudiantes que cumplen con promedio > 3.5:");
estudiantesConPromedioMayorA35.forEach((estudiante: EstudianteAcademico) => {
  const promedio: number = calcularPromedioEstudiante(estudiante);
  console.log(`  ✔ ${estudiante.nombre} -> Promedio: ${promedio.toFixed(2)} (Semestre ${estudiante.semestre})`);
});

console.log("\n=================================================================");
console.log("                     FIN DE LOS EJERCICIOS                       ");
console.log("=================================================================");

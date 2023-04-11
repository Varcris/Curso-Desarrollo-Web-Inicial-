/**
 * 5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
 * a. Obtener aquellos nombres con al menos 6 letras.
 * b. Obtener los nombres que comienzan con "M".
 * c. Ordenar alfabéticamente y mostrar por consola.
 * d. Generar un array que contenga solo las iniciales
 * Ejemplo: ["F", "L", "E", "M",... ].
 * e. Generar un array que contenga todos los nombres en mayúscula.
 * f. Queremos saber si alguno de estos nombres comienza con "J”
 */

var nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

id = (id) => document.getElementById(id);

var btn_a = id("btn_a");
var btn_b = id("btn_b");
var btn_c = id("btn_c");
var btn_d = id("btn_d");
var btn_e = id("btn_e");
var btn_f = id("btn_f");

// a. Obtener aquellos nombres con al menos 6 letras.

btn_a.addEventListener("click", () => {
    var nombres_a = nombres.filter((nombre) => nombre.length >= 6);
    console.log(nombres_a);
    let respuesta_a = id("respuesta_a");
    respuesta_a.textContent = nombres_a.join(", ");
});

// b. Obtener los nombres que comienzan con "M".

btn_b.addEventListener("click", () => {
    var nombres_b = nombres.filter((nombre) => nombre[0] == "M");
    console.log(nombres_b);
    let respuesta_b = id("respuesta_b");
    respuesta_b.textContent = nombres_b.join(", ");
});

// c. Ordenar alfabéticamente y mostrar por consola.

btn_c.addEventListener("click", () => {
    // Como el metodo sort() ordena localmente y devuelve una copia, copie el array nombres con map() para que no modifique el original.
    var nombresOrdenados = nombres.map((nombre) => nombre).sort((a,b) => a > b ? 1 : -1); 
    console.log(nombresOrdenados);
    let respuesta_c = id("respuesta_c");
    respuesta_c.textContent = nombresOrdenados.join(", ");
});

// d. Generar un array que contenga solo las iniciales
// Ejemplo: ["F", "L", "E", "M",... ].

btn_d.addEventListener("click", () => {
    var iniciales = nombres.map((nombre) => nombre[0]);
    console.log(iniciales);
    let respuesta_d = id("respuesta_d");
    respuesta_d.textContent = iniciales.join(", ");
});

// e. Generar un array que contenga todos los nombres en mayúscula.

btn_e.addEventListener("click", () => {
    var nombresMayus = nombres.map((nombre) => nombre.toUpperCase());
    console.log(nombresMayus);
    let respuesta_e = id("respuesta_e");
    respuesta_e.textContent = nombresMayus.join(", ");
});

// f. Queremos saber si alguno de estos nombres comienza con "J”

btn_f.addEventListener("click", () => {
    var valor = nombres.some((nombre) => nombre[0] == "J");
    console.log(valor);
    let respuesta_f = id("respuesta_f");
    respuesta_f.textContent = valor;
}) ;












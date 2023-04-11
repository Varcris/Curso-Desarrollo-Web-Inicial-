/**
 * 6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar
 * si un color introducido por el usuario a través de un prompt se encuentra dentro del
 * array o no.
 */

var colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

var form = document.getElementById("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let color = document.getElementById("color").value;
    let resultado = document.getElementById("resultText");
    const mensaje = (colores.includes(color))? "se encuentra en el array": "no se encuentra en el array"
    resultado.textContent = `El color ${color} ${mensaje}`;
});
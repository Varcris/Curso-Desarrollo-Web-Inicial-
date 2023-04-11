/**
 * 3. Dado un array de números, mostrar cómo quedaría si cada uno de los números es
 + elevado al cuadrado.
 */

var array = [];

var form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let inputArray = document.getElementById("input_array");
    array = inputArray.value.split(",").map(Number);
    console.log(array);
    });

var btn_potencia = document.getElementById("btn_potencia");
btn_potencia.addEventListener("click", function() {
    var arrayCuadrado = array.map(numero => numero ** 2);
    console.log(arrayCuadrado);
    let resultado = document.getElementById("resultado");
    resultado.textContent = arrayCuadrado.toString();
    });


//4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.

var array = [1, -4, 12, 0, -3, 29, -150];

var btn_suma = document.getElementById("btn_suma");
btn_suma.addEventListener("click", function() {
    var suma = array.reduce((acumulador, numero) => {
        if (numero > 0) {
            acumulador += numero;
        }
        return acumulador;
    }, 0);
    console.log(suma);
    let resultado_suma = document.getElementById("resultado_suma");
    resultado_suma.textContent = suma;
    });




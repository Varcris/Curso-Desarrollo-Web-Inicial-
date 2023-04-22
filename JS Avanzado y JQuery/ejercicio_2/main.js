/**
 * 2. Dado el array = [1,2,3,4,5,6]
 * a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos
 * en pantalla.
 * b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
 * pantalla.
 * c. Iterar por todos los elementos dentro de un array utilizando .forEach y
 * mostrarlos en pantalla.
 * d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
 * e. Generar una copia de un array pero con todos los elementos incrementados en 1.
 * f. Calcular el promedio
 */

var btn_a = document.getElementById("btn_a");
var btn_b = document.getElementById("btn_b");
var btn_c = document.getElementById("btn_c");
var btn_d = document.getElementById("btn_d");
var btn_e = document.getElementById("btn_e");
var btn_f = document.getElementById("btn_f");




array = [1,2,3,4,5,6];

// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.


btn_a.onclick = function mostrarArrayWhile(){
    var i = 0;
    var parrafo = document.getElementById("p_a");
    parrafo.textContent = "";
    while(i < array.length){
        console.log(array[i]);
        parrafo.textContent += array[i] + " ";
        i++;
    }
}

// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.

btn_b.onclick = function mostrarArrayFor(){
    var parrafo = document.getElementById("p_b");
    parrafo.textContent = "";
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        parrafo.textContent += array[i] + " ";
    }
}

// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.

btn_c.onclick = function mostrarArrayForEach(){
    var parrafo = document.getElementById("p_c");
    parrafo.textContent = "";
    array.forEach(element => {
        console.log(element);
        parrafo.textContent += element + " ";
    });
}

// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

btn_d.onclick = function mostrarArraySumaUno(){
    var parrafo = document.getElementById("p_d");
    parrafo.textContent = "";
    array.forEach(element => {
        console.log(element + 1);
        parrafo.textContent += (element + 1) + " ";
    });
}

// e. Generar una copia de un array pero con todos los elementos incrementados en 1.

btn_e.onclick = function mostrarArrayIncrementado(){
    var parrafo = document.getElementById("p_e");
    parrafo.textContent = "";
    var arrayIncrementado = array.map(element => element + 1);
    arrayIncrementado.forEach(element => {
        console.log(element);
        parrafo.textContent += element + " ";
    });
}

// f. Calcular el promedio

btn_f.onclick = function mostrarPromedio(){
    var parrafo = document.getElementById("p_f");
    parrafo.textContent = "";
    var suma = array.reduce((accumulador, current) => accumulador + current, 0)
    var promedio = suma / array.length;
    console.log(promedio);
    parrafo.textContent = promedio;
}



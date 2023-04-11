/**
 *1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista
 *desordenada. Tiene que crear la lista uno mismo. 
 */

//Funcion para generar un numero aleatorio entre un rango de numeros
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Funcion para crear un array de numeros aleatorios dado un rango de numeros y una longitud
function crearArrayNumAleatorios(longitud, min, max){
    var array = [];
    for (let index = 0; index < longitud; index++) {
        array.push(aleatorio(min,max));
    }
    return array
}

//Variables globales usadas para crear el identificador a cada lista desordenada creada
var i = 0; 
var id = "lista_" + i;
var listArea = document.getElementById("listArea");
//Funcion para crear una lista desordenada HTML a partir de un array
function crearListaDesordenada(array){
    var listaSinOrden = document.createElement('ul');
    i++;
    id = "lista_" + i;
    listaSinOrden.id = id;
    listArea.appendChild(listaSinOrden);
    listaSinOrden.textContent = id;
    array.forEach( value => {
        let elemento = document.createElement('li');
        elemento.textContent = value;
        listaSinOrden.appendChild(elemento);
    });
    return true;
}

var form= document.getElementById("form"); //Obtenemos el formulario
//Añadimos un evento al formulario para que al enviarlo se ejecute la funcion
form.addEventListener("submit", function(e){
    e.preventDefault();
    //Obtenemos los valores de los inputs
    let longitud = document.getElementById("longitud").value;
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    //Creamos el array de numeros aleatorios
    let arrayNumAleatorios = crearArrayNumAleatorios(longitud, min , max);
    //Ordenamos el array de numeros aleatorios
    let arrayNumAleatoriosOrdenado = arrayNumAleatorios.sort((a,b) => a > b ? 1 : -1 );
    //Creamos la lista desordenada HTML
    resultado = crearListaDesordenada(arrayNumAleatoriosOrdenado); 
    //Mostramos un mensaje en la consola
    mensaje = (resultado)? "Lista Creada" : "Error";
    console.log(mensaje);
});

var btn_eliminar = document.getElementById("btn_eliminarLista"); //Obtenemos el boton
//Añadimos un evento al boton para que al pulsarlo se ejecute la funcion
btn_eliminar.onclick = function eliminarLista(){
    let listaSinOrden = document.getElementById(id);
    listaSinOrden.remove();
    i--;
    id = "lista_" + i;
    console.log("Lista eliminada")
}
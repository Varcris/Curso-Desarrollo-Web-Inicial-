/**
 * 6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar
 * si un color introducido por el usuario a través de un prompt se encuentra dentro del
 * array o no.
 */

var colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

const id = (id) => document.getElementById(id);

var form_6 = id("form_6");
form_6.addEventListener("submit", (e)=>{
    e.preventDefault();
    let color = id("color").value;
    let respuesta = id("respuesta_6");
    const mensaje = (colores.includes(color))? "se encuentra en el array": "no se encuentra en el array"
    respuesta.textContent = `El color ${color} ${mensaje}.`;
});


/**
 * 7. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
 * solo los números pares
 */
var  numeros = [];
var form_7 = id("form_7");
form_7.addEventListener("submit", (e)=>{
    e.preventDefault();
    numeros = id("numeros").value.split(",").map(Number);
    console.log(numeros);
    let respuesta = id("respuesta_7");
    let newArray = numeros.filter((numero)=> numero % 2 == 0);
    respuesta.textContent = `El nuevo array es: ${newArray.join(", ")}`;
});

/**
 *8. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
 * contenga sólo las palabras que empiezan con una vocal.
 */

var palabras = [];
var form_8 = id("form_8");
form_8.addEventListener("submit", (e)=>{
    e.preventDefault();
    palabras = id("palabras").value.split(",").map(palabra => palabra.trim());
    console.log(palabras);
    let respuesta = id("respuesta_8");
    let newArray = palabras.filter((palabra)=> palabra[0].match(/[aeiou]/i));
    console.log(newArray);
    respuesta.textContent = `El nuevo array es: ${newArray.join(", ")}`;
});

 /**
  * 9. Crear un método que permite intercambiar las posiciones de dos elementos de un
  * arreglo en base a sus índices
  */

 //Intercambia las posiciones de dos elementos de un array en base a sus índices
function intercambiarPosiciones(array, indice1, indice2){
    let aux = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = aux;
    return array;
}

 //Obtiene el array según el value del select
function obtenerArray(value){
    switch(value){
        case "colores":
            return colores.slice();
        case "numeros":
            return numeros.slice();
        case "palabras":
            return palabras.slice();
    }
}
var actual = "actual";
$(document).ready(function(){
    $("#form_select").submit(function(e){
        e.preventDefault();
        var value = $("#selectArrays").val();
        var array = obtenerArray(value);
        console.log("Array seleccionado:" + value);
        console.log(array);
        if(array.length === 0){
            alert("El array está vacío");
            return;
        }
        if(actual === value){
            alert("No se puede seleccionar el mismo array");
            return;
        }

        actual = value;
        $("#form_checkbox").empty(); //Elimina los checkbox anteriores

        //Crea los checkbox según el array seleccionado
        array.forEach((element, i) => {
            $("#form_checkbox")
            .append(`<div>
                        <input type="checkbox" value="${i}" id="checkbox_${i}">
                        <label for="checkbox_${i}">${element}</label>
                    </div>`);
        });

        //Función que controla el número de checkbox seleccionados
        $("input:checkbox").change(function(){
            if($("input:checkbox:checked").length > 2){
                this.checked = false;
            }
        });

    });

    //Función que intercambia las posiciones de los elementos seleccionados
    $("#btn_intercambiar").click(function(e){
        e.preventDefault();
        var value = $("#selectArrays").val();
        var array = obtenerArray(value);
        if($("input:checkbox:checked").length < 2){
            alert("Debe seleccionar dos elementos");
            return;
        }
        var checkboxes = $("input:checkbox:checked");
        var indice1 = checkboxes[0].value;
        var indice2 = checkboxes[1].value;
        var newArray = intercambiarPosiciones(array, indice1, indice2);
        console.log(newArray);
        $("#resultado").text(`El nuevo array es: ${newArray.join(", ")}`);
       
    });
});

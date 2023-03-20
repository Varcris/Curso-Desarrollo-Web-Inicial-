/**9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
*convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
*Mostrar el resultado elemento de html.*/

var id = (id) => document.getElementById(id);
var classes = (classes) => document.getElementsByClassName(classes);
var pesos = id("pesos");
var dolares = id("dolares");

function convertirPesosADolares(pesos) {
    return  pesos / 300;
}

function convertirDolaresAPesos(dolares) {
    return  dolares * 300;
}

function aDolares(pesos){

    if(pesos.includes("$")){
        pesos = pesos.replace("$","");
    }
    if(isNaN(pesos)){
        alert("Ingrese un valor numerico");
        return;
    }
    dolares.value = `$${convertirPesosADolares(pesos)}`;
}
function aPesos(dolares){

    if (dolares.includes("$")){
        dolares = dolares.replace("$","");
    }
    if(isNaN(dolares)){
        alert("Ingrese un valor numerico");
        return;
    }
    pesos.value =`$${convertirDolaresAPesos(dolares)}`;
}

/**10. Generar la inversa del ejercicio anterior (de pesos a dólares).*/
/**9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
*convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
*Mostrar el resultado elemento de html.*/

var id = (id) => document.getElementById(id);
var classes = (classes) => document.getElementsByClassName(classes);


var dolaresConvertidos = id("dolaresInput");
var pesosConvertidos = id("pesosInput");
var pesos = id("pesos");
var btn_aPesos = id("btn_aPesos");
var btn_aDolares = id("btn_aDolares");


function convertirPesosADolares(pesos) {
    return  pesos / 300;
}

function convertirDolaresAPesos(dolares) {
    return  dolares * 300;
}

btn_aDolares.onclick= () => {
    dolaresConvertidos.value = `$${convertirPesosADolares(pesos.value)}`;
}
function aPesos(dolares){
    pesosConvertidos.value =`$${convertirDolaresAPesos(dolares)}`;
}






/**10. Generar la inversa del ejercicio anterior (de pesos a dólares).*/
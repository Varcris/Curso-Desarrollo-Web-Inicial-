/**9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
*convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
*Mostrar el resultado elemento de html.*/

var id = (id) => document.getElementById(id);
var classes = (classes) => document.getElementsByClassName(classes);


function convertirPesosADolares(pesos) {
    return  pesos / 300;
}

function convertirDolaresAPesos(dolares) {
    return  dolares * 300;

}




/**10. Generar la inversa del ejercicio anterior (de pesos a dólares).*/
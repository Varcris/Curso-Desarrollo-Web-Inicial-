/**1. Crea un array que contenga el nombre de cinco colores escritos como strings.*/
var colores = ["rojo", "amarillo", "azul", "verde", "naranja"];

/**2. Guarda en una variable el tercer elemento del array del ejercicio anterior.*/
var elem = colores[2];

/**3. Accede desde un console.log( ) a la posición 0 del string de la posición 0 del array del
ejercicio 1.*/
console.log(colores[0][0]);
console.log(colores[0].charAt(0));

/**4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
función Math.random( ).*/

console.log(Math.floor(Math.random()*(99)+1));

/**5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.*/

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros.toString());

/**6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.*/

function numerosAletorios(min, max) {
    return  Math.floor(Math.random()*(max-min+1)+min);
}

var numAleatorios = new Array();
for (let i = 0; i < 10; i++) {
    numAleatorios.push(numerosAletorios(1,99))
    console.log(numAleatorios[i]);
}
console.log(numAleatorios.toString());

/**7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
*consola.*/

var copyArray = numAleatorios.map((x) => x ); 
console.log(copyArray.toString()); 

/**8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
*Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
*medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
*luego recorriendolo para mostrar el resultado deseado del ejercicio.*/
var cadenas = "";
var arrCadenas = new Array();
var texto = prompt("Ingrese texto, para salir ingrese 'cancelar'");
while(texto !== "cancelar"){
    cadenas += " - " + texto; //concatena con guiones
    arrCadenas.push(texto); //agrega al array
    texto = prompt("Ingrese texto, para salir ingrese 'cancelar'");
}
//resultado con string
console.log(cadenas.replace(" - ", "")); //elimina el primer guion
// resultado con array y join
var newCadena = arrCadenas.join().replaceAll(",", " - "); // el array se convierte en string y se reemplaza las comas por guiones
console.log(newCadena);
// resultado con array y for
newCadena = "";
for (let i = 0; i < arrCadenas.length; i++) {
    newCadena += " - " + arrCadenas[i];
}
console.log(newCadena.replace(" - ", ""))//elimina el primer guion

// Apartir de aqui realize cada ejercicio en una carpeta diferente
// Exeptuando el ejercicio 9 y 10 que estan en la misma carpeta

/**9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
*convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
*Mostrar el resultado elemento de html.*/

//Practica5\ConvertidorPesosDolares

/**10. Generar la inversa del ejercicio anterior (de pesos a dólares).*/

//Path:Practica5\ConvertidorPesosDolares

/**11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
*ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
*son 86 grados fahrenheit.*/

//Practica5\ConvertidorGrados

/**12. Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario
podremos especificar las características de la caja. Ejemplo: */

//Practica5\FormularioEnvio

/**13. A través de un formulario, el usuario debe introducir un número secreto que estará
entre 0 y 5.
El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
juego.
Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde. */

//Practica5\JuegoAdivinarNumero

/**14. Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista
desordenada a medida que se agregan. */

//Practica5\ListarPersonas
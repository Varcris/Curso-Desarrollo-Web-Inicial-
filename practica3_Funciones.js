
// Crea un objeto tipo de UserException
function UserException(message) {
    this.message = message;
    this.name = "UserException";
  }
  
// Hacer que la excepción se convierta en una bonita cadena cuando se usa como cadena
// (por ejemplo, por la consola de errores)
UserException.prototype.toString = function () {
return `${this.name}: "${this.message}"`;
};

// Crea una instancia del tipo de objeto y tírala
throw new UserException("Valor muy alto");



/*ejercicio 1: Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
que es.
*/
//
function tipoDato(dato) {    
    console.log(`El tipo de dato de: ${dato} es ${typeof(dato)}.`);
} 
function checkType(dato){
    if(!isNaN(dato))
        dato = Number(dato);
    if(dato == "true" || dato == "false")
        dato = Boolean(dato);
    return dato;
}
tipoDato("Hola Mundo");
tipoDato(checkType(prompt("Ingrese un dato", "dato")));

/*ejercicio 2: Dado dos números ingresados por el usuario, se pide realizar una función que
devuelve la resta de ambos números. Mostrar el resultado por la consola.
*/
function restar(num1, num2){
    if(isNaN(num1) && isNaN(num2)) return console.log("Ingrese solo numeros")
    return num1 - num2;
}

var numero1 = prompt("Ingrese el primer numero", "Numero");
var numero2 = prompt("Ingrese el segundo numero", "Numero");
console.log(`La resta de ${numero1} - ${numero2} es: ${restar(numero1, numero2)}`);

/*ejercicio 3:Generar una función que le ingresen por parámetro dos valores distintos en dos
variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
Pasarlo a a y mostrarlos.
*/
function cambio(a, b){
    if( isNaN(a) && isNaN(b)) return console.log(`El valor de a y el de b deben ser numeros"`)
    if(a === b)
        return console.log("Los numeros deben ser distintos");
    let aux = a;
    a = b;
    b = aux;
    console.log(`El valor de a es: ${a} y el valor de b es: ${b}`)
}
cambio(prompt("Ingrese el valor de a", ""), prompt("Ingrese el valor de b", ""));

/*ejercicio 4:Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
calcular su perímetro, su superficie, e informar los mismos en consola.
*/
function mostrarPerimetroSuperficie(lado){
    if (isNaN(lado))
        return console.log("El lado debe ser un numero");
    if (lado <= 0)
        return console.log("El lado debe ser mayor a 0");
    console.log(`El perimetro del cuadrado es: ${lado * 4} y la superficie es ${lado * lado}`)
}

mostrarPerimetroSuperficie(prompt("Ingrese el lado del cuadrado", ""));

/*ejercicio 5:Generar una función que dada una temperatura en grados fahrenheit los convierta a
grados celsius.
*/
function toCelsius(fahrenheit){
    if(isNaN(fahrenheit)) 
        return console.log("Ingrese solo numeros")
    fahrenheit = Number(fahrenheit)
    return (fahrenheit - 32) * (5 / 9)
}
grados = prompt("Ingrese grados fahrenheit")
console.log(`Los ${grados}°F grados fahrenheit en celsius son ${toCelsius(grados).toFixed(2)}°C`)

/*ejercicio 6:Realizar una función que calcule el factorial de un número ingresado por el usuario (el
número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
consola.
*/
function factorial(num){
    if(isNaN(num))
        return console.log("Ingrese solo numeros");
    num = Number(num);
    if(num < 0) 
        return console.log("Ingrese solo numeros naturales");
    if(num > 10) 
        return console.log("El numero ingresado no puede ser mayor a 10");
    if(num === 0 || num === 1) 
        return 1;

    for(var i = num -1; i >= 1; i--){
        num *= i;
    }
    return num;
}
console.log(factorial(prompt("Ingrese un numero:","0" )));

/*ejercicio_7: Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos”.
*/

function invertirCadena(cad) {
    return cad.split("").reverse().join("");
}
function isPalidromo(texto){
    texto = texto.replace(/[….,?¿¡!\s+]/g, ''); //se eliminan los caracteres especiales y espacios en blanco
    let aux = invertirCadena(texto); //se invierte la cadena
    console.log(texto);
    console.log(aux);
    return texto.localeCompare(aux, undefined, { sensitivity: 'base' }) == 0 ; //se compara ignorando mayusculas y minusculas
}
console.log(`El texto ingresado es un palidromo: ${isPalidromo(prompt("Ingrese un palidromo:", 
"LA MAR. Ah! El anís es azul al ocaso. Claro, la canícula hará mal. Alejábase bello sol. "+
"¡Sumerge la usada roda! A remar. ¡A La Habana, bucanero Morgan! Oleaje de la mar… ¡Al remo! ¡Corre! Playas… "+
"Ay, al perro comer la rama le deja el onagro, morena cubana. ¡Bah! A la ramera adorada su alegre muslo Sol le besa. "+
"¡Bajel a la mar! ¡Ah! Alucina calor al cosaco. La luz asesina le hará mal."))} `);

/*ejercicio_8: Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
Javascript.
*/
function mayusculasMinusculas(texto){
    return console.log(`Texto en mayusculas: ${texto.toUpperCase()} y en minusculas: ${texto.toLowerCase()}`);
}
mayusculasMinusculas(prompt("Ingrese un texto", "Hola Mundo"));

/*ejercicio_9: Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
calificación resultante según la nota ingresada:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/

function calificacion(nota){
    if(isNaN(nota))
        return "Ingrese solo numeros";
    nota = Number(nota);
    if(nota < 0 || nota > 10)
        return "Ingrese una nota entre 0 y 10";
    if(nota >= 0 && nota <= 3)
        return "Muy deficiente"
    if(nota > 3 && nota <=5)
        return "Insuficiente"
    if(nota > 5 && nota <=6)
        return "Suficiente"
    if(nota > 6 && nota <=7)
        return "Bien"
    if(nota > 7 && nota <=9)
        return "Notable"
    if(nota > 9 && nota <=10)
        return "Sobresaliente"
}
var nota = prompt("Ingrese una nota de un alumno")
while(nota != "Salir"){
    console.log(`La calificaciom de ${nota} es: ${calificacion(nota)}`);
    nota = prompt("Ingrese una nota de un alumno");
}

    
/*ejercicio_10: Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
devuelve si ese mes tiene 30 o 31 días.
*/

function diasDelMesCon30o31dias(mes){
    if(isNaN(mes)) return "Ingrese solo numeros";
    if(mes < 1 || mes > 12) return "Ingrese un mes en numeros "
    var año = new Date().getFullYear();
    dias = new Date(año, mes, 0).getDate();
    if(dias == 30 || dias == 31)
        return dias
    else return "este mes no tiene 30 o 31 dias"
    
}

var mes = prompt("Ingrese un mes en muneros")
while(mes != "Salir"){
    console.log(`Dias del mes ${mes}: ${diasDelMesCon30o31dias(mes)}`)
    mes = prompt("Ingrese un mes en muneros")
}

/*ejercicio_11: Crear un script que genere una pirámide como el ejemplo con los números del 1 al
número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):
1
12
123
1234
12345
123456
……
*/
function piramide(num){
    if(isNaN(num))  
        return console.log("Ingrese solo numeros");
    if(num < 1 || num > 10)
        return console.log("Ingrese un numero de entre el 1 al 10");

    for (let i = 1; i <= num; i++){
        var cadena = ""
        for (let y = 1; y <= i ; y++) {
            cadena += y
       }
        console.log(cadena)
    }

}
piramide(prompt("Ingrese un numero"))

/*ejercicio_12: Generar una función donde ingresen dos números, el primero corresponde a la
cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola.
*/

function cajasLLenas(stockBultos,capacidadCaja){
    return Math.trunc(stockBultos / capacidadCaja);
}

function bultosSueltos(stockBultos,capacidadCaja){
    return stockBultos % capacidadCaja;
}

function mostrarCajasLlenasyBultosSueltos(stockBultos, capacidadCaja){
    if(isNaN(stockBultos) || isNaN(capacidadCaja))
        return console.log("Ingrese solo numeros");
    return console.log(`Con ${stockBultos} bultos disponibles se pueden llenar ${cajasLLenas(stockBultos, capacidadCaja)} 
        cajas y quedando ${bultosSueltos(stockBultos, capacidadCaja)} bultos sueltos`)
}
mostrarCajasLlenasyBultosSueltos(prompt("Ingrese cantidad de bultos en stock"), prompt("Ingrese cantidad de bultos que entran en una caja"))



/*ejercicio_13: Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
través de su código y el script saca el descuento correspondiente por la consola.
*/

//Falta agregar gestion de errores;
function descuento(codigo){
    var coches = [{codigo: "fiesta",nombre: "Ford Fiesta", desc: "5%"}, {codigo:"focus", nombre: "Ford Focus", desc: "10%"}];
    return coches.find(coche => coche.codigo == codigo).desc;
}
var codigo = prompt("Ingrese el codigo del coche:", "fiesta")
console.log(`El articulo con codigo ${codigo} tiene ${descuento(codigo)} de descuento`)








var btnAmarillo = document.getElementById('btnAmarillo');
var btnRojo = document.getElementById('btnRojo');
var btnAzul = document.getElementById('btnAzul');
var btnNegro = document.getElementById('btnNegro');
var btnVerde = document.getElementById('btnVerde');
var btnMarron = document.getElementById('btnMarron');
var btnBlanco = document.getElementById('btnBlanco');

btnAmarillo.onmouseover = function() {
// El contenido de esta funcion se ejecutara cuando el mouse pase por encima del cuadro
    document.getElementById("caja").style.background = "yellow";
};

btnRojo.onmouseover = function() {
// El contenido de esta funcion se ejecutara cuando el mouse pase por encima del cuadro
    document.getElementById("caja").style.background = "red";
};

btnAzul.onmouseover = function() {
// El contenido de esta funcion se ejecutara cuando el mouse pase por encima del cuadro
    document.getElementById("caja").style.background = "blue";
};

btnNegro.onmouseover = function() {
// El contenido de esta funcion se ejecutara cuando el mouse pase por encima del cuadro
    document.getElementById("caja").style.background = "black";
};

btnVerde.onmouseover = function() {
// El contenido de esta funcion se ejecutara cuando el mouse pase por encima del cuadro
    document.getElementById("caja").style.background = "green";
};

btnMarron.onmouseover = function() {
// El contenido de esta funcion se ejecutara cuando el mouse pase por encima del cuadro 
    document.getElementById("caja").style.background = "brown";
};

btnBlanco.onmouseover = function() {
// El contenido de esta funcion se ejecutara cuando el mouse pase por encima del cuadro
    document.getElementById("caja").style.background = "white";
};

function cambiarColor(){
    var color = prompt("Dime un color");
    var cuadro = document.getElementById("caja");
    cuadro.style.background = color;
}

var btnSaludar = document.getElementById('btnSaludar');
btnSaludar.onclick = function(){
    var nombre = prompt('Dime tu nombre');
    var apellido = prompt('Dime tu apellido');
    alert(`Hola ${nombre} ${apellido}`);
}
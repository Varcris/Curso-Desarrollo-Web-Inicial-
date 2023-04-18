//19. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
//cuando ingresamos con el mouse y regresar al original cuando salimos.
$(document).ready(function(){
    $("td").mouseover(function(){
        $(this).css("background-color", "red");
    })
    $("td").mouseleave(function(){
        $(this).css("background-color", "white");
    })
});
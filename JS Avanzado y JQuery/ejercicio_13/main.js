//13. Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color
//de fondo de cada fila de la primera tabla cuando sea presionada con el mouse.

$(document).ready(function(){

    $("table:first > tbody > tr").mousedown(function(){
        $(this).css("background-color", "red");
    });
    $("table:first > tbody > tr").mouseup(function(){
        $(this).css("background-color", "white");
    });
});


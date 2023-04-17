//11. Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo
//cuando sea presionada con el mouse.

$(document).ready(function(){
    
    $("tbody > tr").click(function(){
        $(this).css("background-color", "red");
    });

    $("tbody > tr").dblclick(function(){
        $(this).css("background-color", "white");
    });
});


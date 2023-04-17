//12. Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona. Para
//ocultar un elemento jQuery tiene un método llamado hide().

$(document).ready(function(){

    console.log("El DOM ha sido cargado");
    $("ul > li").click(function(){
        $(this).hide();
    });
});
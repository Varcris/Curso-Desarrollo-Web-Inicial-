//20. Disponer un div de 800 x 70 píxeles. Al hacer doble clic redimensionarlo a 250 x 250
//píxeles y si se hace doble clic nuevamente retornar al tamaño 800 x 70.
$(document).ready(function(){
    $("#div1").dblclick(function(){
        $(this).toggleClass("tamaño_800x70");
        $(this).toggleClass("tamaño_250x250");
    });
});
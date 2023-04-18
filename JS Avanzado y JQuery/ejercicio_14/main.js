/**
 * 14. Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en
 * un div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que
 * rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de
 * fuente.
 */

$(document).ready(function(){
    $("button:first").click(function(){
        $(".noticia:first > h2").css("font-size", "20px");
    }); 
    $("button:eq(1)").click(function(){
        $(".noticia:eq(1) > h2").css("font-size", "20px");
    });
    $("button:last").click(function(){
        $(".noticia:last > h2").css("font-size", "20px");
    });

});

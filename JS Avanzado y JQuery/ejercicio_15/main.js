/**
 * 15. Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto
 * en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el
 * contenido de la primera tabla, dejando intacto el de la segunda.
 */

$("document").ready(function(){
    $("button").click(function(){
        $("table:first > tbody > tr > td").text("-");
    });
})
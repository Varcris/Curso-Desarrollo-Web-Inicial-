//10. Crear dos párrafos en el body de una página. Capturar el evento click solo del primero
//utilizando la librería jQuery.

$(document).ready(function(){
    $("p:first").click(function(){
        alert("Has hecho click en el primer párrafo");
    });
});
    

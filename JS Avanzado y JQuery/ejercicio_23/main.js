//23. Hacer que un link no salga de la página al hacer click, pero mostrar el valor de la página
//referida con console.log

$(document).ready(function(){
    $("a").click(function(event){
        event.preventDefault();
        console.log($(this).attr("href"));
    });
})
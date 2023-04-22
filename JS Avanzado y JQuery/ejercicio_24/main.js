//24. Hacer que un formulario no se envíe al hacer click en "enviar", en lugar de eso mostrar
//un texto en la página que el formulario fue enviado.

$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        if($("input").toArray().every(element => element.value != "")){
            $(".respuesta").html("<h5>Formulario enviado</h5>").css("color", "green");
            return;
        }
        $(".respuesta").html("<h5>Formulario no enviado</h5>").css("color", "red");
        return;
    });

    $("input").change(function(e){
        if(e.target.value == ""){
            e.target.style.border = "1px solid red";
            e.target.placeholder = "Campo obligatorio";
            return;
        }else
            e.target.style.border = "1px solid green";
            return;
    });

});

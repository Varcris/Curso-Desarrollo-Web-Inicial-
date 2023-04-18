/**
 * 16. Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres
 * botones que permitan fijar distintos hipervínculos para la propiedad href. Además
 * actualizar el texto del hipervínculo.
 */
$(document).ready(function(){
    var a = $("a");
    $("#btn1").click(function(){
        a.attr("href", "http://www.google.com");
        a.text("Google");
    });

    $("#btn2").click(function(){
        a.attr("href", "https://getbootstrap.com/");
        a.text("Bootstrap");
    });

    $("#btn3").click(function(){
        a.attr("href", "https://www.w3schools.com/jquery/");
        a.text("W3Schools JQuery");
    });
 });

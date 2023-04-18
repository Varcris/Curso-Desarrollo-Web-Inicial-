/**
 * 17. Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego
 * cuando sean presionadas ocultarlas.
 */

$(document).ready(function () {
    $('strong').click(function () {
        $(this).hide();
    });
});




$(document).ready(function(){

    var parrafos=  $(".row > div")

    $(parrafos[1]).fadeToggle(1);
    $(parrafos[0]).mousedown(function(e){
        $(parrafos[0]).fadeToggle(5000, function(){
            $(parrafos[1]).fadeToggle(5000);

        });
    });
    $(parrafos[1]).mousedown(function(e){
        $(parrafos[1]).fadeToggle(5000, function(){
            $(parrafos[0]).fadeToggle(5000);

        });
    });
});
   

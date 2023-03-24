let id = (id) => document.getElementById(id); 
let classes = (classes) => document.getElementsByClassName(classes);
let numSecreto = Math.floor(Math.random() * 6);
let intentos = 5;
let respuesta = classes("respuestas");
let btn_adivinar = id("btn_adivinar");
let btn_reiniciar = id("btn_reiniciar");
let form = id("form");

function adivinarNumero() {
    let numero = id("numero");
    if (numero.value == numSecreto) {
        respuesta[2].innerHTML = "";
        respuesta[0].style.color = "green";
        respuesta[0].innerHTML = "¡Felicidades, has acertado el número secreto!";
        btn_adivinar.disabled = true;
        btn_reiniciar.disabled = false;
    } else {
        intentos--;
        if (intentos == 0){
            respuesta[2].innerHTML = "";
            respuesta[1].style.color = "red";
            respuesta[1].innerHTML = "Lo siento, has perdido el juego. El número secreto era " + numSecreto + ".";
            btn_adivinar.disabled = true;
            btn_reiniciar.disabled = false;
        }else{
            respuesta[2].style.color = "red";
            respuesta[2].innerHTML = "Número incorrecto. Te quedan " + intentos + " intentos.";
            numero.value = "";
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    adivinarNumero();
});


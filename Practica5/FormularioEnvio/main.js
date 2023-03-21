let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

const form = id("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombreCliente = id("nombreCliente").value;
    let error = classes("error");
    let mensaje = classes("mensaje");
    if (nombreCliente.trim() === "") {
        error[0].innerHTML = "El nombre del cliente es obligatorio";
        mensaje[0].innerHTML = "";
        return;
    }else{
        error[0].innerHTML = "";
        mensaje[0].innerHTML = "La solicitud se ha enviado correctamente";
    }
    let materialCaja = id("materialCaja").value;
    let dimension = document.querySelector('input[name="dimensiones"]:checked').value;
    let comentario = id("comentario").value;
    let respuesta = id("respuesta");
    let data = `${nombreCliente} ha pedido una caja de ${materialCaja} con dimensiones ${dimension}. ${comentario}`;
    respuesta.value = data;
   
});

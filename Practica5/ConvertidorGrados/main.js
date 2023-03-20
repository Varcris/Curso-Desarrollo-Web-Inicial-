
var id = (id) => document.getElementById(id); // Función para obtener el elemento por su id

const form = id('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const grados = id('grados').value;
    const tipo = id('tipo').value;
    const convertir = id('convertir').value;
    let resultado = 0;
    if (tipo != convertir){
    switch (convertir) {
        case '°c':
            resultado = (grados - 32) * (5/9);
            break;
        case '°f':
            resultado = (grados * (9/5)) + 32;
            break;
    }
    }else{
        resultado = grados;
    }
    id('resultado').innerHTML = resultado;
});
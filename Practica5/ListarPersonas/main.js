id = (id) => document.getElementById(id);
const form = id('form');
const listaDesordenada = id('listaDeNombres');
let msjError = id('error');
let persona = id('persona');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!isNaN(persona.value) || persona.value == ''){
        msjError.textContent = 'Debe ingresar un nombre y apellido';
        return;
    }
    else
        msjError.textContent = '';
    let li = document.createElement('li');
    li.textContent = persona.value;
    listaDesordenada.appendChild(li);
    persona.value = '';
});
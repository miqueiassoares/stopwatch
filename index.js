"use strict";
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

const iniciar = document.querySelector(".iniciar");
const exibicao = document.querySelector("#tempo");
const pausar = document.querySelector(".pausar");
const retomar = document.querySelector(".retomar");
const reiniciar = document.querySelector(".reiniciar");

function doisNumeros(numero) {
    if (numero<10) {
        return "0"+numero
    } else {
        return numero
    }
}

function exibirContador(event) {
    exibicao.innerHTML = `${doisNumeros(horas)}:${doisNumeros(minutos)}:${doisNumeros(segundos)}<span id="milisegundos">,${doisNumeros(milisegundos)}</span>`
    if (event) {
        exibicao.innerHTML = '00:00:00<span id="milisegundos">,00</span>';
    }
}

function contador() {
    milisegundos++;
    if (milisegundos === 100) {
        milisegundos = 0;
        segundos++;
        if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }
    }
    exibirContador();
}


function definirIntervalo() {
    intervalo = setInterval(contador, 10);
}

function trocarClasses(buttonPressionado) {
    if (buttonPressionado === iniciar) {
        iniciar.classList.remove("ativar");
        pausar.classList.add("ativar");
        reiniciar.classList.add("ativar");
    } else if(buttonPressionado === pausar) {
        pausar.classList.remove("ativar");
        retomar.classList.add("ativar");
    } else if(buttonPressionado === retomar) {
        retomar.classList.remove("ativar");
        pausar.classList.add("ativar");
    } else {
        retomar.classList.remove("ativar");
        pausar.classList.remove("ativar");
        reiniciar.classList.remove("ativar");
        iniciar.classList.add("ativar");
    }
}

reiniciar.addEventListener("click", (event) => {
    clearInterval(intervalo);
    exibirContador(event.target)
    trocarClasses();
    milisegundos = segundos = minutos = horas = 0;
});

retomar.addEventListener("click", (event)=> {
    definirIntervalo();
    trocarClasses(event.target)
});

pausar.addEventListener("click", (event)=> {
    clearInterval(intervalo);
    trocarClasses(event.target)
});

iniciar.addEventListener("click", (event)=> {
    trocarClasses(event.target);
    definirIntervalo();
});
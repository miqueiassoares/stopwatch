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
const milisegundosSpan = document.querySelector("#milisegundos");

function doisNumeros(numero) {
    if (numero<10) {
        return "0"+numero
    } else {
        return numero
    }
}

function exibirContador() {
    exibicao.innerHTML = `${doisNumeros(horas)}:${doisNumeros(minutos)}:${doisNumeros(segundos)}<span id="milisegundos">,${doisNumeros(milisegundos)}</span>`
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


function comecar() {
    intervalo = setInterval(contador, 10);
}

reiniciar.addEventListener("click", () => {
    clearInterval(intervalo);
    exibicao.innerHTML = '00:00:00<span id="milisegundos">,00</span>';
    retomar.classList.remove("ativar");
    pausar.classList.remove("ativar");
    reiniciar.classList.remove("ativar");
    iniciar.classList.add("ativar");
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
});

retomar.addEventListener("click", ()=> {
    comecar();
    retomar.classList.remove("ativar");
    pausar.classList.add("ativar");
});

pausar.addEventListener("click", ()=> {
    clearInterval(intervalo);
    pausar.classList.remove("ativar");
    retomar.classList.add("ativar");
});

function trocarClasses() {
    iniciar.classList.remove("ativar");
    pausar.classList.add("ativar");
    reiniciar.classList.add("ativar");
}

iniciar.addEventListener("click", ()=> {
    trocarClasses();
    comecar();
});
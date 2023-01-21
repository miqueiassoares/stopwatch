"use strict";

const tempo = {
    milisegundos: 0,
    segundos: 0,
    minutos: 0,
    horas: 0,
    intervalo: null
}

const eventos = {
    iniciar: document.querySelector(".iniciar"),
    exibicao: document.querySelector("#tempo"),
    pausar: document.querySelector(".pausar"),
    retomar: document.querySelector(".retomar"),
    reiniciar: document.querySelector(".reiniciar")
}

function doisNumeros(numero) {
    if (numero<10) {
        return "0"+numero
    } else {
        return numero
    }
}

function exibirContador(event) {
    eventos.exibicao.innerHTML = `${doisNumeros(tempo.horas)}:${doisNumeros(tempo.minutos)}:${doisNumeros(tempo.segundos)}<span id="milisegundos">,${doisNumeros(tempo.milisegundos)}</span>`
    if (event) {
        eventos.exibicao.innerHTML = '00:00:00<span id="milisegundos">,00</span>';
    }
}

function contador() {
    tempo.milisegundos++;
    if (tempo.milisegundos === 100) {
        tempo.milisegundos = 0;
        tempo.segundos++;
        if (tempo.segundos === 60) {
            tempo.segundos = 0;
            tempo.minutos++;    
            if (tempo.minutos === 60) {
                tempo.minutos = 0;
                tempo.horas++;
            }
        }
    }
    exibirContador();
}


function definirIntervalo() {
    tempo.intervalo = setInterval(contador, 10);
}

function trocarClasses(buttonPressionado) {
    if (buttonPressionado === eventos.iniciar) {
        eventos.iniciar.classList.remove("ativar");
        eventos.pausar.classList.add("ativar");
        eventos.reiniciar.classList.add("ativar");
    } else if(buttonPressionado === eventos.pausar) {
        eventos.pausar.classList.remove("ativar");
        eventos.retomar.classList.add("ativar");
    } else if(buttonPressionado === eventos.retomar) {
        eventos.retomar.classList.remove("ativar");
        eventos.pausar.classList.add("ativar");
    } else {
        eventos.retomar.classList.remove("ativar");
        eventos.pausar.classList.remove("ativar");
        eventos.reiniciar.classList.remove("ativar");
        eventos.iniciar.classList.add("ativar");
    }
}

eventos.reiniciar.addEventListener("click", (event) => {
    clearInterval(tempo.intervalo);
    exibirContador(event.target)
    trocarClasses();
    tempo.milisegundos = tempo.segundos = tempo.minutos = tempo.horas = 0; 
});

eventos.retomar.addEventListener("click", (event)=> {
    definirIntervalo();
    trocarClasses(event.target)
});

eventos.pausar.addEventListener("click", (event)=> {
    clearInterval(tempo.intervalo);
    trocarClasses(event.target)
});

eventos.iniciar.addEventListener("click", (event)=> {
    trocarClasses(event.target);
    definirIntervalo();
});
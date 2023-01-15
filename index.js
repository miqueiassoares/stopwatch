"use strict";

let segundos = 0;
let minutos = 0;
let horas = 0;

const iniciarBtn = document.querySelector("#iniciar");
const exibicao = document.querySelector("#tempo");


iniciarBtn.addEventListener("click", start);

function start() {
    console.log("logou");
    setInterval(contador(), 1000);
}

function twoNumbers(numero) {
    if (numero<10) {
        return "0"+numero
    } else {
        return numero
    }
}

function contador() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    console.log(segundos);
    exibicao.innerText = `${twoNumbers(horas)}:${twoNumbers(minutos)}:${twoNumbers(segundos)}`;
}


console.log();
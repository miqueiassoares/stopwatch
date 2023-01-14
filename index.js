"use strict";

let ligado = true;
let index = 0;

if (ligado) {
    setInterval(()=> {
        console.log(index++);
    }, 1000);
}
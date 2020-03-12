"use strict";

let $parar = 0;
let $lampada = document.getElementById("lampada");

//Lampada Ligada
const lampadaLigada = function (){
    $lampada.src = "./img/ligada.jpg";
}
$lampada.addEventListener('mouseover', lampadaLigada);

//Lampada Desligada
const lampadaDesligada = function (){
    $lampada.src = "./img/desligada.jpg";
}
$lampada.addEventListener('mouseout', lampadaDesligada);

//Lampada Piscando
let cont = true;

const piscar = function (){

    if (cont == false) {
        setTimeout (() => $lampada.src = "./img/desligada.jpg", 100);
    } else {
        setTimeout (() => $lampada.src = "./img/ligada.jpg", 100);
    }
    cont = cont? false:true;
}    

//Parar
$lampada.addEventListener('click', () => $parar = setInterval(piscar, 1000));

const $interruptor = document.getElementById("interruptor");
$interruptor.addEventListener('click', () => clearInterval($parar));



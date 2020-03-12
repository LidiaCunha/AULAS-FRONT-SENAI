"use strict";

const loadImagens = () => {
    const arrImg = [];
    for ( let i=1; i <= 5; i++){
    arrImg.push (`./img/imagem (${i}).jpg`);

    }
    return arrImg;
}

const insertImages = (imagens) => {
    const htmlImg = imagens.map (img => `<img src='${img}' class='imagens'>`).join(" ");
   
    const $container = document.getElementById('container');
    const $containerImagens = document.createElement ('div');
    const $next = document.getElementById ('next');
    $containerImagens.id = 'containerImagens';
    $containerImagens.innerHTML = htmlImg;
    $container.insertBefore ($containerImagens, $next);
}

const next = () => {
    const $img = document.querySelectorAll ('.imagens');
    const max = ($img.length -1) * (-50);
    let marginLeft = +($img[0].style.marginLeft.replace("vw", ""));

    if ( marginLeft == max) {
        marginLeft = 50;
    }

    $img[0].style.marginLeft = (marginLeft - 50) + "vw";
}

const prev = () => {
    const $img = document.querySelectorAll ('.imagens');
    const min = 0;
    let marginLeft = +($img[0].style.marginLeft.replace("vw", ""));

    if ( marginLeft == min) {
        marginLeft = -250;
    }

    $img[0].style.marginLeft = (marginLeft + 50) + "vw"; 
}

insertImages(loadImagens());

setInterval( () => next() ,1000);
document.getElementById('next').addEventListener ('click', next);
document.getElementById('prev').addEventListener ('click', prev);
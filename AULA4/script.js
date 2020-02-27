"use strict";

const frutas = ['Mamão', 'Laranja', 'Melão', 'Goiaba'];
const clientes = ['João', "Joana", "José", "Jorge"];

const card = (arr, title="Lista") => {

    //Criando uma div 
    const $card = document.createElement ('div');
    $card.classList.add ('card'); 
     
    //Escrevendo algo na card, que não está do index
    //Ou seja, criada na hora

    const elementos = arr.join('</li><li>')
    $card.innerHTML =                  
    `   <div class="card-title">${title}</div>
        <div class="card-body">
            <ul>
               <li>${elementos}</li>
            </ul>
        </div>`

    return $card;
}

const exibirCards = () =>{
    const $container = document.querySelector('.container');

    //Adicionando elemento card ao container 
    $container.appendChild(card(frutas, "Frutas"));
    $container.appendChild(card(clientes, "Clientes"));
}



"use strict";

const notas = [2,8,15,20,8];
const clientes = [
    {nome: "Lidia", idade: 17, cidade: "São Roque"},
    {nome: "Jorge", idade: 19, cidade: "Jandira"},
    {nome: "Rodrigo", idade: 18, cidade: "Osasco"},
    {nome: "Gabriel", idade: 16, cidade: "Itapevi"},
]

const nome = prompt ("Digite seu nome");
const idade = prompt ("Digite sua idade");
const cidade = prompt ("Digite sua cidade");

clientes.push ( { "nome":nome, "idade":idade, "cidade":cidade})

// notas.push ( prompt ("Digite uma nota"));

/*
    MAP - Retorna um novo array do mesmo tamanho modificado ou não;
    argumentos do callback:
        1° elemento
        2° índice
        3° array
*/
const notasAtualizadas = notas.map ( (notas) => notas * 10);

/*
    FILTER - Retorna um novo array do mesmo tamanho, modificando ou não;
    argumentos do callback:
        1° elemento
        2° índice
        3° array
*/

const notasAcimaDaMedia = notas.filter ( notas => notas >= 5);

/*
    REDUCE - Retorna um único valor;
    argumentos do callback: 
    1° acumulador
    2° elemento
    3° índice
    4° array

*/

const notasTotal = notas.reduce ( (acc, notas) => acc + notas);

const notasPares100 = notas.filter (notas => notas % 2 == 0)
                            .map (notas => notas + 100);

const exibirDados = (el, clientes, titulo="Sem título") => {
    el.innerHTML += `
        <div class="card text-white bg-secondary mb-3" style="max-width:30vw">
            <div class="card-header">
                ${titulo}
            </div>
            <div class="card-body">
                <p>${clientes.nome}</p>
                <p>${clientes.idade}</p>
                ${clientes.cidade}
            </div>
        </div>

    `;
}

const $resultados = document.getElementById('resultados');

clientes.forEach (( cliente ) => exibirDados ($resultados, cliente));

// exibirDados ($resultados, notas, "Notas Senai");
// exibirDados ($resultados, notasPares100);

console.log ( notas );
console.log (notasAtualizadas);
console.log (notasAcimaDaMedia);
console.log (notasTotal);

console.log (notasPares100);

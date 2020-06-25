"use strict";

//Pegando divs do HTML 
const $nome = document.getElementById('inputNome');
const $adicionar = document.getElementById('btnAdicionar');
const $atualizar = document.getElementById('btnAtualizar');
const $excluir = document.getElementById('btnExcluir');

//Transformando string em array e imprimindo elemento na caixa de exibição
function mostrarConteudo() {

    const $caixaNome = document.getElementById("caixaNome");
    $caixaNome.innerHTML = "";

    JSON.parse(localStorage.getItem("nome")).forEach(elemento => {
        $caixaNome.innerHTML += `<div>${elemento}</div>`    
    });
}

//Adiciona nomes em array 
function adicionarStorage (nome) {

    let arrayNomes = [];

    //Verifica se a chave existe no localStorage, ou seja, se há nomes
    if (localStorage.getItem('nome') != null) {
        arrayNomes = JSON.parse(localStorage.getItem('nome'));
    }
    
    //Adiciona no array o valor colocado na input
    arrayNomes.push(nome);
    
    let arrayNomeString = JSON.stringify(arrayNomes);
    localStorage.setItem ('nome', arrayNomeString);

    mostrarConteudo();
}

function deletarStorage(nome) {
    let arrayNomes = JSON.parse(localStorage.getItem('nome'));
    let nomeExiste = false;

    //Verifica se há algum item do array igual ao nome da input
    arrayNomes.forEach((elemento) => nomeExiste = (elemento == nome) ? true : false );

    if (!nomeExiste) {
        alert("Nome não encontrado");
    }

    //Filtra no array todos os nomes diferentes do excluido
    arrayNomes = arrayNomes.filter((elemento) => elemento != nome);

    let arrayNomeString = JSON.stringify(arrayNomes);
    localStorage.setItem ('nome', arrayNomeString);

    mostrarConteudo();
}

function atualizarStorager () {
    const nome = prompt("Qual nome você deseja atualizar?");

    let arrayNomes = JSON.parse(localStorage.getItem("nome"));

    //Verifica se se há algum item do array igual ao nome inserido e retorna na variavel arrayNomesSelecionado
    let arrayNomesSelecionado = arrayNomes.filter((elemento) => {
        if (nome == elemento) {
            return elemento;
        }
    });

    //Se array for diferente de zero, ou seja, houver o item, pergunte por qual nome deseja mudar
    if (arrayNomesSelecionado.length != 0) {
        let novoNome = prompt(`Qual o novo nome para ${arrayNomesSelecionado[0]}?`);

        //Mapeando o array para achar o item igual ao nome escolhido
        arrayNomes = arrayNomes.map((elemento) => {

            if (nome == elemento) {
                elemento = novoNome;
            }

            return elemento;
        });

        let arrayNomeString = JSON.stringify(arrayNomes);
        localStorage.setItem ('nome', arrayNomeString);

        mostrarConteudo();
    } else {
        alert("Nome não encontrado");

    }
}


$adicionar.addEventListener('click', () => adicionarStorage($nome.value));
$atualizar.addEventListener('click', () => atualizarStorager());
$excluir.addEventListener('click', () => deletarStorage($nome.value));

mostrarConteudo();
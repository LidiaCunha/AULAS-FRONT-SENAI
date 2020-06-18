
var nome = document.getElementById('inputNome');
var adicionar = document.getElementById('btnAdicionar');
var atualizar = document.getElementById('btnAtualizar');
var excluir = document.getElementById('btnExcluir');

$adicionar.addEventListener('click', ()=> adicionarNome(nome.value))



function adicionarStorage (nome) {
    nomeAtual = JSON.data.stringify (nome);
    localStorage.setItem ('nome', nomeAtual);
}
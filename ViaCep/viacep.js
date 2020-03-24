"use strict";

//Fetch - função que tem como parâmetro uma url
// Then - tem como parametro callback, neste caso função anônima
// ".Json" - para transformar em json

const encontrarCep = ( cep ) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch (url).then ( resposta => resposta.json())
                                .then ( dados => preencherFormulario ( dados ));
}

const preencherFormulario = ( endereco ) => {
    document.getElementById ('endereco').value = endereco.logradouro;
    document.getElementById ('bairro').value = endereco.bairro;
    document.getElementById ('estado').value = endereco.uf;
    document.getElementById ('cidade').value = endereco.localidade;
}

//Blur - quando sair da caixa de texto
//Target - saber qual elemento está em "cep" junto ao seu valor ".value"
document.getElementById ('cep').addEventListener ('blur', ( e ) => encontrarCep (e.target.value));

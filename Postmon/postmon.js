"use strict";
 
const verificaCep = () => document.getElementById ('cep').reportValidity();

const encontrarCep = async ( cep ) => {

    if (verificaCep ()) {
        const url = `https://api.postmon.com.br/v1/cep/${cep}`
        try {
            const getAddress = await fetch (url);
            const addres = await getAddress.json();
            preencherFormulario (addres);
        } catch (error) {
            document.getElementById ('endereco').value = "";
            document.getElementById ('bairro').value = "";
            document.getElementById ('estado').value = "";
            document.getElementById ('cidade').value = "";
            alert("CEP não encontrado");
        }
    } 
    
}

const preencherFormulario = ( endereco ) => {
    document.getElementById ('endereco').value = endereco.logradouro;
    document.getElementById ('bairro').value = endereco.bairro;
    document.getElementById ('estado').value = endereco.estado;
    document.getElementById ('cidade').value = endereco.cidade;
}

//Tratamento para números 
const maskCep = ( $el ) => {
    let aux = $el.value;
    aux = aux.replace (/[^0-9]/g, '');
    aux = aux.replace (/(.{5})(.)/,"$1-$2")
    $el.value = aux;
}

document.getElementById ('cep').addEventListener ('blur', ( e ) => encontrarCep (e.target.value));

document.getElementById ('cep').addEventListener ('keyup', ( e ) => maskCep (e.target));

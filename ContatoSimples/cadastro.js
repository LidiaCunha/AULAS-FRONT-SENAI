"use strict";

import { validator, emailValidator } from "./masks.js";

const $novo = document.getElementById('novo');
const $fechar = document.getElementById('fechar');
const $salvar = document.getElementById('salvar');

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add ('exibirModal');
const fecharModal = () => document.querySelector('.conteiner-modal').classList.remove('exibirModal');
const salvarAluno = () => {
    fecharModal();
};

validator (document.getElementById('form'));
emailValidator(document.getElementById('email'));

const loadTable = (aluno) => {
    const $registros = document.getElementById('registros');

    aluno.forEach(elemento => {
        const $tr = document.createElement('tr');
        $tr.innerHTML = `
            <td>${elemento.codigo}</td>
            <td>${elemento.aluno}</td>
            <td>${elemento.email}</td>
            <td>${elemento.celular}</td>
            <td>${elemento.cidade}</td>
            <td>${elemento.acoes}</td>
            <td>
                <button id=editar-${elemento.codigo}>editar</button>
                <button id=editar-${elemento.codigo}>excluir</button>
            </td>
        `;
        $registros.appendChild($tr);
    });
  
};

const getAlunos = async url => {
    const response = await fetch (url);
    const json = await response.json();
    return json.data;
}

const showAlunos = async () =>  {
    
    const alunos =  await getAlunos ('http://localhost/LidiaPHP/apiphp-master/alunos/');

    const formatAlunos = alunos.map ( ( {id:codigo, nome:aluno, email, celular, cidade} ) =>
                                       ({ codigo, aluno, email, celular, cidade}) );         
                                                                      
    loadTable (formatAlunos);

}

showAlunos();

$novo.addEventListener('click',exibirModal);
$fechar.addEventListener('click',fecharModal);
$salvar.addEventListener('click',salvarAluno);

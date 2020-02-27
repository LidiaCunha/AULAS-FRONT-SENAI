"use strict";

//Desestruturação de array
const alunoA = ['Ana Clara', '5', '8', '7'];

//Criei 5 variaveis e adicionei os elementos do array acima
const [nomeA, n1, n2, n3=0] = alunoA;

console.log (n3);

//Desestruturação de objetos

const aluno = {nome:"Ana Clara", nota1:"5", nota2:"8", nota3:"7", turma:"DS2M"};

const { nome, nota1, nota2} = aluno;

console.log (nota1, nota2);

const [cliente, ...valores] = alunoA;
console.log(valores);

const maior =Math.max(...valores);
console.log (maior);

const soma = (...numeros) => numeros.reduce((acc, num) => acc + num);

console.log (soma (100, 55, 1, 8, 90, 92));
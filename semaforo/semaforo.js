
//Função para trocar as imagens, recebe o parametro que vai ser guardado no nome "imagem"
const mudaImagem = function (imagem){
  $img.src = imagem;
  clearInterval(stop);
}

//Pegando os elementos do html
const $img = document.getElementById("img");
const $vermelho = document.getElementById("vermelho");
const $amarelo = document.getElementById("amarelo");
const $verde = document.getElementById("verde");
const $automatico = document.getElementById("automatico");

let cont = 0;
let stop = 0;

//Array que guarda as imagens
const imagem = ["img/vermelho.png", "img/amarelo.png", "img/verde.png"];

//Função que faz uma contagem e a partir dela mostra as imagens
const automatico = function (){
  stop = setInterval(() => {
        $img.src = imagem[cont];
        cont += 1;
        if (cont == 3) {
              cont = 0;
        }

    }, 200)
}

//Ao clicar vai chamar a função automatico
$automatico.addEventListener('click', automatico);

//Ao clicar vai chamar a função mudaImagem e o parametro dentro dela
$vermelho.addEventListener('click', () => mudaImagem(imagem[0]));
$amarelo.addEventListener('click', () => mudaImagem(imagem[1]));
$verde.addEventListener('click', () => mudaImagem(imagem[2]));
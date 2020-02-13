const $calcular = document.getElementById('calcular');
const $container = document.querySelector('.container');
const $exibir = document.querySelector('exibir');
const $ocultar = document.querySelector('ocultar');

const calcularMedia = (n1, n2) => (parseInt(n1) + parseInt(n2)) / 2

const verificaSituacao = (media) => media >= 5 ? "Aprovado" : "Reprovado";


const exibirMedia = () => {

    const $nome = document.getElementById('nome');
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');
    const $conceito = document.getElementById('conceito');

    const media = calcularMedia (nota1, nota2);
    $media.value = media;
    
    $conceito.value = defineConceito(media);
    $situacao.value = verificaSituacao (media);

}

const exibirCalculadora = ( el ) => el.classList.add ('exibir');
const exibir = (el) => el.classList.add ('exibir');
const ocultar = (el) => el.classList.remove ('exibir');

$calcular.addEventListener('click', exibirMedia);
$exibir.addEventListener('click',( ) => exibir ($container));
$ocultar.addEventListener('click',( ) => ocultar ($container));

const defineConceito = (media) => {
    if (media < 3){
        return "E"
    } else {
        if (media < 5){
            return "D"
        } else {
            if (media < 8){
                return "C"
            } else {
                if (media < 10){
                    return "B"
                } else {
                    return "A"
                }
            }
        }
    }    
}

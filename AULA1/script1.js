const $calcular = document.getElementById('calcular')

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
    
    $conceito.value = conceito(media);
    $situacao.value = verificaSituacao (media);

}

$calcular.addEventListener('click', exibirMedia);
const calcular2 = () => {

}

const conceito = (media) => {
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

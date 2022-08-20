const btnVoltar = document.getElementById('voltar');
const btnAvancar = document.getElementById('avancar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');
    cartaoSelecionado.classList.remove('selecionado');
});

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return;

    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado');
    cartaoSelecionado.classList.remove('selecionado');    
});
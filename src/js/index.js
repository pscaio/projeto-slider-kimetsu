const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.slider__cartao');
let cardAtual = 0; 

function esconderCardSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove('selecionado');
}

function mostraCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {
    if(cardAtual === cartoes.length - 1) { return };
    
    esconderCardSelecionado();

    cardAtual++;
    mostraCartao(cardAtual)
});

btnVoltar.addEventListener('click', function () {
    if(cardAtual === 0) { return };
    
    esconderCardSelecionado();
  
    cardAtual--;
    mostraCartao(cardAtual)
});



/*

oObjetivo: Quando clicarmos no boitão temos que mostrar a imagem de fundo correspondente

Passo 1 - dar um jito de pegar o elemento html  dos botoes

passo 2 - dar um jeito de identificar o click do usuariuo no botao

passo 3 - desmar o bvotao selecionado anterior

passo 4 -  marcar o botao clicando como se estivese selecionada

passo 5 - esconder a imagem de fundo anteriort

passo 6 - fazer aoarecer a imagem de fundo corresponde ao botao clicado

*/

// passo 1 - dar um  jeito de pegar o elemento html dos botoes

const botoesCarrossel = document.querySelectorAll('botao');
const imagens = document.querySelectorAll('.imagen');

// passo 2 - dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //passo 3 - desmar o bvotao selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //passo 4 -  marcar o botao clicando como se estivese selecionada
        botaoclassList.add('selecionado');

        //passo 5 - esconder a imagem de fundo anteriort
        const imagemAtiva = document.querySelectorAll(.ativa);
        imagemAtiva.classList.remove('selecionado');

        //passo 6 - fazer aoarecer a imagem de fundo corresponde ao botao clicado
        console.log(imagens);
        imagens[indice].classList.add('ativa');








        

    })
})

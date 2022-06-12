function selecionarComida(element) {
    const botaoClicado = document.querySelector(".selecionado");

    if(botaoClicado !== null) {
        botaoClicado.classList.remove("selecionado");
    }
    element.classList.add("selecionado");
    botaoVerde();
}

function selecionarBebida(element) {
    const botaoClicado = document.querySelector(".bebidas .selecionado");

    if(botaoClicado !== null) {
        botaoClicado.classList.remove("selecionado");
    }
    element.classList.add("selecionado");
    botaoVerde();
}

function selecionarSobremesa(element) {
    const botaoClicado = document.querySelector(".sobremesa .selecionado");

    if(botaoClicado !== null) {
        botaoClicado.classList.remove("selecionado");
    }
    element.classList.add("selecionado");
    botaoVerde();
}

function checkOption(element) {
    const botaoClicado = document.querySelector(".active");

    if(botaoClicado !== null) {
        botaoClicado.classList.remove("active")
        botaoClicado.classList.remove("escondido")
    }
    element.classList.add("active");
}

let comidaSelecionada;
let bebidaSelecionada;
let sobremesaSelecionada;
let mensagem;


function botaoVerde() {
    const botao = document.querySelector(".botao-confirma");

    comidaSelecionada = document.querySelector('.selecionado');
    bebidaSelecionada = document.querySelector('.bebidas .selecionado');
    sobremesaSelecionada = document.querySelector('.sobremesa .selecionado');
    mensagem = document.querySelector(".mensagem");
    
    if(comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {
        botao.classList.add("botao-verde");
        mensagem.innerHTML = "Fazer pedido";
    }
}

function fecharPedido() {
    
}
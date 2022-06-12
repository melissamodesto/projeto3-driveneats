let comidaTitle;
typeof "comidaTitle" === 'string';
let bebidaTitle;
let sobremesaTitle;

function selecionarComida(element) {

    comidaSelecionada = element.innerHTML;
    const botaoClicado = document.querySelector(".comida .selecionado");

    if(botaoClicado !== null) {
        botaoClicado.classList.remove("selecionado");
    }
    element.classList.add("selecionado");
    botaoVerde();
}

function selecionarBebida(element) {
    bebidaSelecionada = element.innerHTML;
    const botaoClicado = document.querySelector(".bebidas .selecionado");

    if(botaoClicado !== null) {
        botaoClicado.classList.remove("selecionado");
    }
    element.classList.add("selecionado");
    botaoVerde();
}

function selecionarSobremesa(element) {
    sobremesaSelecionada = element.innerHTML;
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

let pedi

/* function fecharPedido() {
    let painel = document.querySelector(".tela-confirmacao");

    painel.classList.remove("escondido"); 

    comidaTitle = document.querySelector('.title-food');
    
    let comida = document.querySelector('.pedido-comida');

    comida.innerHTML = `${comidaTitle}`;
}

function cancelar() {
    const cancelar = document.querySelector('.tela-confirmacao');

    cancelar.classList.add('escondido');
} */

let precoBebida = document.innerHTML;
let precoComida;
let precoSobremesa

function clicarBotaoEnviar() {


    let preco = precoBebida + precoComida + precoSobremesa;
    let mensagem =
      "Olá, gostaria de fazer o pedido: \n\
      - Prato: Frango Yin Yang \n\
      - Bebida: Coquinha Gelada \n\
      - Sobremesa: Pudim \n\
      Total: R$ " + preco;
    link = "https://wa.me/+5591998238160?text=" + encodeURIComponent(mensagem);
    window.open(link);
  }

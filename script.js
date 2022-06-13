let tituloBebida;
let tituloComida;
let tituloSobremesa;
let precoBebida;
let precoComida;
let precoSobremesa;
let precoTotal;

let comidaSelecionada;
let bebidaSelecionada;
let sobremesaSelecionada;

function selecionarComida(element) {
    const botaoClicado = document.querySelector('.comida .selecionado');
    const price = element.querySelector('.price').getAttribute('data-price')
    const title = element.querySelector('.title-food').innerText

    comidaSelecionada = element.innerHTML;

    if(botaoClicado !== null) {
        botaoClicado.classList.remove('selecionado');
    }

    element.classList.add('selecionado');

    tituloComida = title;
    precoComida = Number(price);
    
    botaoVerde();
}

function selecionarBebida(element) {
    const botaoClicado = document.querySelector('.bebidas .selecionado');
    const price = element.querySelector('.price').getAttribute('data-price')
    const title = element.querySelector('.title-food').innerText

    bebidaSelecionada = element.innerHTML;
    
    if(botaoClicado !== null) {
        botaoClicado.classList.remove('selecionado');
    }
    
    element.classList.add('selecionado');

    tituloBebida = title;
    precoBebida = Number(price);
    
    botaoVerde();
}

function selecionarSobremesa(element) {
    const botaoClicado = document.querySelector('.sobremesa .selecionado');
    const price = element.querySelector('.price').getAttribute('data-price')
    const title = element.querySelector('.title-food').innerText

    sobremesaSelecionada = element.innerHTML;
    
    if(botaoClicado !== null) {
        botaoClicado.classList.remove('selecionado');
    }
    
    element.classList.add('selecionado');

    tituloSobremesa = title;
    precoSobremesa = Number(price);

    botaoVerde();
}

function checkOption(element) {
    const botaoClicado = document.querySelector('.active');

    if(botaoClicado !== null) {
        botaoClicado.classList.remove('active')
        botaoClicado.classList.remove('escondido')
    }
    element.classList.add('active');
}

function botaoVerde() {
    const botao = document.querySelector('.botao-confirma');

    comidaSelecionada = document.querySelector('.selecionado');
    bebidaSelecionada = document.querySelector('.bebidas .selecionado');
    sobremesaSelecionada = document.querySelector('.sobremesa .selecionado');
    mensagem = document.querySelector('.mensagem');
    
    if(comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {
        botao.classList.add('botao-verde');
        mensagem.innerHTML = 'Fazer pedido';
    }
}

function fecharPedido() {
    const $painel = document.querySelector('.tela-confirmacao');
    const $comida = document.querySelector('.pedido-comida');
    const $bebida = document.querySelector('.pedido-bebida');
    const $sobremesa = document.querySelector('.pedido-sobremesa');
    const $precoComida = document.querySelector('.preco-comida');
    const $precoBebida = document.querySelector('.preco-bebida');
    const $precoSobremesa = document.querySelector('.preco-sobremesa');
    const $precoTotal = document.querySelector('.preco-total');

    precoTotal = precoBebida + precoComida + precoSobremesa;
    precoTotal = Number(precoTotal); 

    $painel.classList.remove('escondido'); 

    $comida.innerHTML = tituloComida;
    $bebida.innerHTML = tituloBebida;
    $sobremesa.innerHTML = tituloSobremesa;

    $precoComida.innerHTML = precoComida.toFixed(2);
    $precoBebida.innerHTML = precoBebida.toFixed(2);
    $precoSobremesa.innerHTML = precoSobremesa.toFixed(2);
    $precoTotal.innerHTML = precoTotal.toFixed(2);
}

function cancelar() {
    const cancelar = document.querySelector('.tela-confirmacao');
    cancelar.classList.add('escondido');
}

function clicarBotaoEnviar() {

    precoTotal = precoBebida + precoComida + precoSobremesa;
    let mensagem =
      `Olá, gostaria de fazer o pedido: \n
      - Prato: ${tituloComida} R$ ${precoComida.toFixed(2)}
      - Bebida: ${tituloBebida} R$ ${precoBebida.toFixed(2)}
      - Sobremesa: ${tituloSobremesa} R$ ${precoSobremesa.toFixed(2)} \n
      Total:   R$ ${precoTotal.toFixed(2)};`
    link = 'https://wa.me/+5591998238160?text=' + encodeURIComponent(mensagem);
    window.open(link);
  }

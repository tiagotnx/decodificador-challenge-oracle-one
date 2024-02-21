let textoEntrada;
let textoSaida;
let arrayEntrada = [];
let arraySaida = [];

function criptografar() {
    obterArrayEntrada();
    const codificacoes = {
        e: 'enter',
        i: 'imes',
        a: 'ai',
        o: 'ober',
        u: 'ufat',
    };
    textoSaida = arrayEntrada
        .map((caractere) => codificacoes[caractere] || caractere)
        .join('');
    inserirHtml();
    aplicarCss();
    verificarTextoCss();
    arrayEntrada = [];
    arraySaida = [];
}

function descriptografar() {
    textoEntrada = document.querySelector('textarea').value;
    const substituicoes = {
        enter: 'e',
        imes: 'i',
        ai: 'a',
        ober: 'o',
        ufat: 'u',
    };
    textoSaida = textoEntrada;
    for (const [codigo, letra] of Object.entries(substituicoes)) {
        textoSaida = textoSaida.replace(new RegExp(codigo, 'g'), letra);
    }
    inserirHtml();
    aplicarCss();
    verificarTextoCss();
}

function verificarTextoCss() {
    const imagemTexto = document.querySelector('.imagem-texto');
    const resultado = document.querySelector('#resultado');
    const mensagemBotao = document.querySelector('#mensagem-botao');
    const copiar = document.querySelector('#copiar');

    if (!textoSaida) {
        imagemTexto.removeAttribute('hidden');
        resultado.style.justifyContent = 'center';
        mensagemBotao.style.textAlign = 'center';
        mensagemBotao.innerHTML =
            '<h1>Nenhuma mensagem encontrada</h1><p>Digite um texto que você deseja criptografar ou descriptografar.</p>';
        copiar.setAttribute('hidden', 'true');
    }
}

function aplicarCss() {
    const imagemTexto = document.querySelector('.imagem-texto');
    const resultado = document.querySelector('#resultado');
    const mensagemBotao = document.querySelector('#mensagem-botao');
    const copiar = document.querySelector('#copiar');

    imagemTexto.setAttribute('hidden', 'true');
    resultado.style.justifyContent = 'space-between';
    mensagemBotao.style.textAlign = 'start';
    copiar.removeAttribute('hidden');
}

function inserirHtml() {
    let inserirTexto = document.querySelector('#mensagem-botao');
    inserirTexto.innerHTML = `<p id='mensagem'>${textoSaida}</p>`;
}

function obterArrayEntrada() {
    textoEntrada = document.querySelector('.criptografador_entrada').value;
    for (
        let textoLength = 0;
        textoLength < textoEntrada.length;
        textoLength++
    ) {
        arrayEntrada.push(textoEntrada.at(textoLength));
    }
}

async function copiarTexto() {
    try {
        const textoElemento = document.querySelector('#mensagem');
        const textoParaCopiar = textoElemento.innerHTML;
        await navigator.clipboard.writeText(textoParaCopiar);
        console.log('Texto copiado com sucesso!');
    } catch (error) {
        console.error('Falha ao copiar texto:', error);
    }
}

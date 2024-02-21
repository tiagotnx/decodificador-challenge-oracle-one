let textoEntrada = '';
let textoSaida = '';
const codificacoes = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
};

const substituicoes = {
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u',
};

function criptografar() {
    textoEntrada = document.querySelector('.criptografador_entrada').value;
    const arrayEntrada = textoEntrada.split('');
    textoSaida = arrayEntrada
        .map((caractere) => codificacoes[caractere] || caractere)
        .join('');
    atualizarInterface();
}

function descriptografar() {
    textoEntrada = document.querySelector('textarea').value;
    textoSaida = textoEntrada;
    for (const [codigo, letra] of Object.entries(substituicoes)) {
        textoSaida = textoSaida.replace(new RegExp(codigo, 'g'), letra);
    }
    atualizarInterface();
}

function atualizarInterface() {
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
    } else {
        imagemTexto.setAttribute('hidden', 'true');
        resultado.style.justifyContent = 'space-between';
        mensagemBotao.style.textAlign = 'start';
        copiar.removeAttribute('hidden');
        mensagemBotao.innerHTML = `<p id='mensagem'>${textoSaida}</p>`;
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

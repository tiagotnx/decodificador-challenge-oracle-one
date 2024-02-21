let textoEntrada;
let textoSaida;
let arrayEntrada = [];
let arraySaida = [];

function criptografar(){
    obterArrayEntrada();
    for (let arrayLength = 0; arrayLength < arrayEntrada.length; arrayLength++) { 
        switch (arrayEntrada[arrayLength]) {
            case "e":
                arraySaida.push("enter"); break;
            case "i":
                arraySaida.push("imes"); break;
            case "a":
                arraySaida.push("ai"); break;
            case "o":
                arraySaida.push("ober"); break;
            case "u":
                arraySaida.push("ufat"); break; 
            default:
                arraySaida.push(arrayEntrada.at(arrayLength));  
        }
    }
    textoSaida = arraySaida.join("");
    inserirHtml();
    aplicarCss();
    verificarTextoCss();  
    arrayEntrada =[]; arraySaida=[];
}

function descriptografar(){
    textoEntrada = document.querySelector('textarea').value;
    textoSaida = textoEntrada.replace(/enter/g, "e");
    textoSaida = textoSaida.replace(/imes/g, "i");
    textoSaida = textoSaida.replace(/ai/g, "a");
    textoSaida = textoSaida.replace(/ober/g, "o");
    textoSaida = textoSaida.replace(/ufat/g, "u");
    inserirHtml();
    aplicarCss();
    verificarTextoCss();
}
function verificarTextoCss(){
    if(textoSaida == null || textoSaida == "") {
        document.querySelector(".imagem-texto").removeAttribute("hidden");
        document.querySelector("#resultado").style.justifyContent = "center";
        document.querySelector("#mensagem-botao").style.textAlign = "center";
        document.querySelector("#mensagem-botao").innerHTML = "<h1>Nenhuma mensagem encontrada</h1><p>Digite um texto que você deseja criptografar ou descriptografar.</p>";
        document.querySelector("#copiar").setAttribute("hidden", "true");
    }
}
function aplicarCss (){
    document.querySelector(".imagem-texto").setAttribute("hidden", "true");
    document.querySelector("#resultado").style.justifyContent = "space-between";
    document.querySelector("#mensagem-botao").style.textAlign = "start";
    document.querySelector("#copiar").removeAttribute("hidden");
}
function inserirHtml(){
    let inserirTexto = document.querySelector("#mensagem-botao");
    inserirTexto.innerHTML = "<p id='mensagem'>" + textoSaida + "</p>";
}
function obterArrayEntrada(){
    textoEntrada = document.querySelector('.criptografador_entrada').value;
    for (let textoLength = 0; textoLength < textoEntrada.length; textoLength++) {
        arrayEntrada.push(textoEntrada.at(textoLength)); 
    }
}
function copiarTexto(){
    let textoCopiado = document.querySelector("#mensagem");
    navigator.clipboard.writeText(textoCopiado.innerHTML);
 
}

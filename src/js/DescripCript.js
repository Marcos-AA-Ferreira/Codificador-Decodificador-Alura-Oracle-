//Funções
function criptografar() {
    let mensagem_input = document.querySelector('textarea').value;
    if (mensagem_input !== "" ) {
        let mensagem_criptografada = mensagem_input
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        texto_output('p', mensagem_criptografada);
        ajustarAreaDeOutput()
    } else { };
}

function descriptografar() {
    let mensagem_input = document.querySelector('textarea').value;
    if (mensagem_input !== "") {
        let mensagem_descriptografada = mensagem_input
            .replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        texto_output('p', mensagem_descriptografada);
        ajustarAreaDeOutput()
    } else { };
}
    

function texto_output(tag, texto) {
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
};

function ajustarAreaDeOutput() {
    limparCampo();
    remover();
    ajustarExibicao();
    botaoCopiar();
}

function limparCampo() {
    mensagem_input = document.querySelector('textarea');
    mensagem_input.value = '';
};

function remover() {
    document.getElementById('imagem').remove();
    document.getElementById('titulo').remove();
};

function ajustarExibicao() {
    let mensagemOutput = document.querySelector('.mensagem_output');
    let areaDeOutput = document.querySelector('.Area_de_Output');
    mensagemOutput.style.textAlign = "left";
    areaDeOutput.style.justifyContent = "space-between";
};

function botaoCopiar() {
    let botao_Copiar = document.createElement('button');
    botao_Copiar.className = 'copiar botao';
    botao_Copiar.innerText = 'Copiar';
    botao_Copiar.onclick = copiarTexto;
    let areaDeOutput = document.querySelector('.Area_de_Output');
    areaDeOutput.appendChild(botao_Copiar);
};

function copiarTexto() {
    let textoParaCopiar = document.querySelector('.Area_de_Output p').innerText;
    navigator.clipboard.writeText(textoParaCopiar);
};
//

// Alternar modo noturno
document.getElementById('modoNoturno').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

let botao = document.getElementById('modoNoturno');
let imagem = botao.querySelector('.modo_Noturno');
if (imagem.src.includes('moon.png')) {
    imagem.src = './src/assets/sun.png';
} else {
    imagem.src = './src/assets/moon.png';
}
});
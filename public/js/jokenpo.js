let vitorias = 0;
let derrotas = 0;
let empates = 0;

function getEscolhaComputador() {
    escolhas = ['pedra', 'papel', 'tesoura']
    const computador = escolhas[Math.floor(Math.random() * escolhas.length)];
    return computador
}

function jogar(escolha) {
    const computador = getEscolhaComputador();

    const spanVitorias = document.querySelector('#vitorias');
    const spanDerrotas = document.querySelector('#derrotas');
    const spanEmpates = document.querySelector('#empates');
    const resultadoTexto = document.getElementById('resultado-texto');

    if (computador === escolha) {
        empates++;
        resultadoTexto.innerText = `Empate! Ambos escolheram ${escolha}`;
    } else if (
        (escolha === 'pedra' && computador === 'tesoura') ||
        (escolha === 'papel' && computador === 'pedra') ||
        (escolha === 'tesoura' && computador === 'papel')
    ) {
        vitorias++;
        resultadoTexto.innerText = `Você venceu! ${escolha} vence ${computador}`;
    } else {
        derrotas++;
        resultadoTexto.innerText = `Você perdeu! ${computador} vence ${escolha}`;
    }

    // Atualiza os valores na interface
    spanVitorias.innerText = vitorias;
    spanDerrotas.innerText = derrotas;
    spanEmpates.innerText = empates;
}
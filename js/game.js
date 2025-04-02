// Código JavaScript para o jogo Pedra, Papel e Tesoura
let choice = null; // Variável para armazenar a escolha do usuário
let computerChoice = getComputerChoice(); // Seleciona aleatoriamente a escolha do computador

// Adiciona um ouvinte de eventos para cliques no documento
document.addEventListener('click', function(event){
    const element = event.target; // Obtém o elemento clicado
    
    // Verifica se o elemento clicado tem a classe 'pedra', 'papel' ou 'tesoura'
    if (element.classList.contains('rock')) {
        choice = 'pedra'; // Usuário escolheu "pedra"
    }
    else if (element.classList.contains('paper')) {
        choice = 'papel'; // Usuário escolheu "papel"
    }
    else if (element.classList.contains('scissors')) {
        choice = 'tesoura'; // Usuário escolheu "tesoura"
    }

    // Se o usuário fez uma escolha
    if (choice) {
        // Atualiza o HTML para mostrar as escolhas do jogador e do computador
        document.querySelector('.player-choice').innerHTML = choice;
        document.querySelector('.computer-choice').innerHTML = computerChoice;

        // Verifica o resultado do jogo
        if (choice == computerChoice) {
            // Empate
            document.querySelector('.winner').innerHTML = "Empate!";
        } else if ((choice == 'pedra' && computerChoice == 'tesoura') || 
                   (choice == 'papel' && computerChoice == 'pedra') || 
                   (choice == 'tesoura' && computerChoice == 'papel')) {                
            // Usuário vence
            document.querySelector('.winner').innerHTML = "Usuário!";
        } else {             
            // Computador vence
            document.querySelector('.winner').innerHTML = "Computador!";
        }
    }
})

// Função para obter a escolha aleatória do computador
function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura']; // Opções disponíveis
    const randomIndex = Math.floor(Math.random() * choices.length); // Índice aleatório
    return choices[randomIndex]; // Retorna a escolha do computador
}
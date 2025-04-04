function verifyLogin() {
    const form = document.querySelector('form');
    
    //Verifica se o formulário existe
    if (!form) {
        console.error('Erro: Formulário não encontrado!');
        return; // Encerra a função se não houver formulário
    }

    //Adiciona o listener de submit
    form.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Impede o recarregamento da página
        console.log('Formulário interceptado!');

        //Pega os valores dos campos
        const username = document.querySelector('.username').value;
        const password = document.querySelector('.password').value;

        //Validação
        if (!username || !password) {
            console.error('Preencha todos os campos!');
            return;
        }

        //Exibe no console (apenas para teste)
        console.log('Usuário:', username);
        console.log('Senha:', password);

        // Aqui adicionar:
        // - Envio para um backend (fetch, AJAX)
        // - Redirecionamento após login
    });
}

// Espera o DOM carregar para garantir que o formulário exista
document.addEventListener('DOMContentLoaded', verifyLogin);
// Cadastro de usuário
document.getElementById("registerBtn").addEventListener("click", function() {
    const email = prompt("Digite seu e-mail:");
    if (!email) return;
    
    const password = prompt("Digite uma senha (mínimo 6 caracteres):");
    if (!password) return;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Cadastro realizado com sucesso!\nFaça login com suas credenciais.");
        })
        .catch((error) => {
            alert("Erro no cadastro: " + error.message);
        });
});

// Redefinição de senha
document.getElementById("resetBtn").addEventListener("click", function() {
    const email = prompt("Digite o e-mail cadastrado:");
    if (!email) return;

    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("E-mail de redefinição enviado!\nVerifique sua caixa de entrada.");
        })
        .catch((error) => {
            alert("Erro: " + error.message);
        });
});

// Login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    const loginBtn = document.querySelector("#loginForm button");

    // Mostra loading no botão
    loginBtn.disabled = true;
    loginBtn.textContent = "Carregando...";
    errorMessage.textContent = "";

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "painel.html"; // Redireciona após login
        })
        .catch((error) => {
            errorMessage.textContent = "Erro: " + error.message;
            loginBtn.disabled = false;
            loginBtn.textContent = "Entrar";
        });
});

// Verifica se usuário já está logado
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Se já estiver logado, redireciona para o painel
        window.location.href = "painel.html";
    }
});
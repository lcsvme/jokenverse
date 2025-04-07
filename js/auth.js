// --- Firebase Configuração ---
const firebaseConfig = {
    apiKey: "AIzaSyB86XCXgo0DVTvCeMQRr3VMk6uqUyPKh7U",
    authDomain: "jokenverse-lcsvme.firebaseapp.com",
    projectId: "jokenverse-lcsvme",
    storageBucket: "jokenverse-lcsvme.appspot.com",
    messagingSenderId: "660280808860",
    appId: "1:660280808860:web:e13d809fd80b42137ae459",
    measurementId: "G-5Q86PPP3R9"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // --- LOGIN ---
  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "painel.html";
      })
      .catch((error) => {
        alert("Erro no login: " + error.message);
      });
  }
  
  // --- REGISTRO ---
  function createAccount() {
    const email = document.getElementById("new-email").value;
    const password = document.getElementById("new-password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Conta criada com sucesso!");
        window.location.href = "painel.html";
      })
      .catch((error) => {
        alert("Erro ao criar conta: " + error.message);
      });
  }
  
  // --- LOGOUT ---
  function logout() {
    firebase.auth().signOut().then(() => {
      window.location.href = "login.html";
    });
  }
  
  // --- VERIFICAÇÃO AUTOMÁTICA DE SESSÃO NO PAINEL ---
  function verificarSessaoPainel() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = "login.html";
      }
    });
  }
  
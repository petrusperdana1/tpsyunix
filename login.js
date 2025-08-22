const firebaseConfig = {
    apiKey: "AIzaSyB099Q-MXSgZ0oPc1a4wFN7CKJOM6vY104",
    authDomain: "groupyextensionauth.firebaseapp.com",
    projectId: "groupyextensionauth",
    storageBucket: "groupyextensionauth.firebasestorage.app",
    messagingSenderId: "485883911190",
    appId: "1:485883911190:web:b64672fac6256987b0a937",
    measurementId: "G-3VND6ZWN0Z"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const messageElement = document.getElementById('message');

    const handleLogin = () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        if (!email || !password) {
            messageElement.className = 'error';
            messageElement.textContent = 'Email dan password harus diisi.';
            return;
        }
        messageElement.textContent = 'Mencoba login...';
        loginButton.disabled = true;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Jika berhasil, redirect ke halaman dashboard
                window.location.href = './dashboard.html'; 
            })
            .catch((error) => {
                messageElement.className = 'error';
                messageElement.textContent = 'Email atau password salah.';
                loginButton.disabled = false;
            });
    };

    loginButton.addEventListener('click', handleLogin);
    passwordInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    });
});

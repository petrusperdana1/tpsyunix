// Import fungsi yang kita butuhkan dari Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyB099Q-MxSGz0oPcla4wFN7CKJOm6vY104",
  authDomain: "groupyextensionauth.firebaseapp.com",
  projectId: "groupyextensionauth",
  storageBucket: "groupyextensionauth.firebasestorage.app",
  messagingSenderId: "485883911190",
  appId: "1:485883911190:web:b64672fac6256987b0a937",
  measurementId: "G-3VND6ZWN0Z"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Mengambil elemen dari halaman login.html
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Menambahkan event listener ke form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    errorMessage.textContent = '';

    // 1. Mencoba untuk login
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User signed in:', userCredential.user);
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            // 2. Jika user tidak ditemukan, coba buat akun baru
            if (error.code === 'auth/user-not-found') {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log('User created:', userCredential.user);
                        window.location.href = 'dashboard.html';
                    })
                    .catch((signUpError) => {
                        console.error('Sign up error:', signUpError);
                        errorMessage.textContent = signUpError.message;
                    });
            } else {
                // Jika error karena alasan lain (misal: password salah)
                console.error('Sign in error:', error);
                errorMessage.textContent = error.message;
            }
        });
});

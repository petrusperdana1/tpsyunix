// Import fungsi yang kita butuhkan dari Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Konfigurasi Firebase Anda (penting untuk di-copy lagi di sini)
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

// --- BAGIAN 1: AUTH GUARD (PENJAGA OTENTIKASI) ---
// Fungsi onAuthStateChanged ini seperti "mata-mata" dari Firebase.
// Ia akan otomatis berjalan saat halaman dimuat dan setiap kali status login pengguna berubah.
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Jika ada 'user' (artinya pengguna sudah login),
    // biarkan mereka tetap di halaman ini.
    console.log('User is logged in:', user);
    // Kita bisa tambahkan kode untuk menampilkan info user di sini nanti
    // Contoh: document.getElementById('user-email').textContent = user.email;
  } else {
    // Jika 'user' bernilai null (artinya tidak ada yang login),
    // paksa alihkan mereka kembali ke halaman login.
    console.log('No user is logged in. Redirecting to login page.');
    window.location.href = 'login.html';
  }
});


// --- BAGIAN 2: FUNGSI LOGOUT ---
// Kita cari tombol logout yang akan kita tambahkan di HTML nanti
const logoutButton = document.getElementById('logout-button');

// Tambahkan event listener ke tombol tersebut
logoutButton.addEventListener('click', () => {
  signOut(auth).then(() => {
    // Jika proses logout di Firebase berhasil
    console.log('User signed out successfully.');
    // Arahkan kembali ke halaman login
    window.location.href = 'login.html';
  }).catch((error) => {
    // Jika ada error saat mencoba logout
    console.error('Sign out error:', error);
    alert('Failed to log out. Please try again.');
  });
});

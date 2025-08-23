import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// Kita tidak butuh Firestore untuk langkah ini, jadi impornya bisa ditambahkan nanti

const firebaseConfig = {
  apiKey: "AIzaSyB099Q-MxSGz0oPcla4wFN7CKJOm6vY104",
  authDomain: "groupyextensionauth.firebaseapp.com",
  projectId: "groupyextensionauth",
  storageBucket: "groupyextensionauth.firebasestorage.app",
  messagingSenderId: "485883911190",
  appId: "1:485883911190:web:b64672fac6256987b0a937",
  measurementId: "G-3VND6ZWN0Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Ambil elemen untuk menampilkan email
const userEmailDisplay = document.getElementById('user-email-display');
const logoutButton = document.getElementById('logout-button');

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user);
    // BARIS BARU: Tampilkan email pengguna di header
    userEmailDisplay.textContent = user.email; 
  } else {
    console.log('No user is logged in. Redirecting to login page.');
    window.location.href = 'login.html';
  }
});

logoutButton.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('User signed out successfully.');
    window.location.href = 'login.html';
  }).catch((error) => {
    console.error('Sign out error:', error);
  });
});

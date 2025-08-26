// File: notif.js (Untuk di-host di GitHub)

(() => {
    // Mencegah skrip berjalan dua kali
    if (document.getElementById('noticeIcon')) return;

    try {
        // === 1. MEMBUAT DAN MENYISIPKAN IKON ===
        const iconContainer = document.querySelector('footer .icon-container');
        if (!iconContainer) return;

        const noticeIcon = document.createElement('i');
        noticeIcon.id = 'noticeIcon';
        noticeIcon.className = 'fas fa-bullhorn icon';
        noticeIcon.title = 'Announcement';
        iconContainer.appendChild(noticeIcon);

        // === 2. MEMBUAT MODAL (DALAM KEADAAN TERSEMBUNYI) ===
        const modalContainer = document.createElement('div');
        modalContainer.className = 'notificationModal';
        modalContainer.id = 'notification-0';
        modalContainer.style.display = 'none';

        const modalContent = document.createElement('div');
        modalContent.className = 'notificationModal-content';
        
        // Di sinilah konten notifikasi Anda berada
        modalContent.innerHTML = `
    <i class="fa fa-times close-icon" id="notification-close"></i>
    <h2>Informasi</h2>
    <p>KEMUNGKINGKAN DALAM SATU MINGGU INI AKAN ADA <b>UPDATE</b></p>
    <p>
    </p>
    <p>
    </p>
    <p>Sehingga menyebabkan error jadi mohon bersabar ya 😊🙏: <b>https://petrussiahaan.blogspot.com/</b></p>
    <button class="ud-main-btn" id="notification-ok">OK</button>
        `;

        modalContainer.appendChild(modalContent);
        document.body.appendChild(modalContainer);

        // === 3. MENAMBAHKAN SEMUA FUNGSI KLIK ===
        const closeModal = () => {
            modalContainer.style.display = 'none';
        };

        // Fungsi klik untuk ikon (untuk membuka modal)
        noticeIcon.addEventListener('click', () => {
            modalContainer.style.display = 'flex';
        });

        // Fungsi klik untuk tombol di dalam modal (untuk menutup)
        modalContent.querySelector('#notification-close').addEventListener('click', closeModal);
        modalContent.querySelector('#notification-ok').addEventListener('click', closeModal);

    } catch (error) {
        console.error('[Groupy Notif] Gagal membangun fitur notifikasi dari skrip eksternal:', error);
    }
})();

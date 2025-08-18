
// data.js (v2 - Disesuaikan untuk menghasilkan struktur HTML yang diinginkan)
// Cukup isi data di sini. Tampilan akan dibuat secara otomatis oleh groupy-extension.js

// PENTING:
// 1. "isGroup: true" akan membuat item menjadi FOLDER.
// 2. "isGroup: false" atau tidak ada sama sekali akan membuat item menjadi CARD biasa.
// 3. Isi array "cookies" untuk setiap layanan.

const servicesData = [
    // --- CONTOH LAYANAN TUNGGAL (CARD) ---
    {
        "meta": {
            "id": "131",
            "name": "Academia",
            "url": "https://www.academia.edu/",
            "category": "education",
            "icon": "https://play-lh.googleusercontent.com/EpJMVmU4FP-cAyb_KwiFohiqBL24XVtomMMQPeFKxODrunPVdqr2IYRlARJNVjIiIWQ"
        },
        "cookies": [ /* ISI COOKIE DI SINI */ ]
    },
    {
        "meta": {
            "id": "22",
            "name": "Alight Motion",
            "url": "https://alightmotion.com/",
            "category": "design",
            "icon": "https://play-lh.googleusercontent.com/OU0BlP8C9-V7ECl2crma7B48nzDbK7liSLjn0j_fpTlyWG6qyEE-mw_KFZ9aOXF0a3w"
        },
        "cookies": [ /* ISI COOKIE DI SINI */ ]
    },
    // --- CONTOH GRUP LAYANAN (FOLDER) ---
    {
        "meta": {
            "name": "Apple Music",
            "url": "https://music.apple.com/",
            "category": "music",
            "isGroup": true,
            "icon": "https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE"
        },
        "accounts": [
            { "id": "627", "name": "Apple Music 1", "cookies": [ /* ISI COOKIE AKUN 1 */ ] },
            { "id": "628", "name": "Apple Music 2", "cookies": [ /* ISI COOKIE AKUN 2 */ ] },
            { "id": "629", "name": "Apple Music 3", "cookies": [ /* ISI COOKIE AKUN 3 */ ] }
        ]
    },
    {
        "meta": {
            "name": "Apple TV+",
            "url": "https://tv.apple.com/",
            "category": "streaming",
            "isGroup": true,
            "icon": "https://play-lh.googleusercontent.com/1XBAZjSOWaVM7UDFKvzuMR-WRoR5gCnsYrw17_ihHLcJKT9Qc7hXptHwWQ3Bf83mry4"
        },
        "accounts": [
            { "id": "459", "name": "Apple TV+ 1", "cookies": [] },
            { "id": "472", "name": "Apple TV+ 2", "cookies": [] },
            { "id": "473", "name": "Apple TV+ 3", "cookies": [] },
            { "id": "474", "name": "Apple TV+ 4", "cookies": [] },
            { "id": "475", "name": "Apple TV+ 5", "cookies": [] },
            { "id": "555", "name": "Apple TV+ 6", "cookies": [] },
            { "id": "556", "name": "Apple TV+ 7", "cookies": [] },
            { "id": "557", "name": "Apple TV+ 8", "cookies": [] },
            { "id": "558", "name": "Apple TV+ 9", "cookies": [] },
            { "id": "559", "name": "Apple TV+ 10", "cookies": [] }
        ]
    },
    {
        "meta": {
            "id": "45",
            "name": "AskYourPDF",
            "url": "https://askyourpdf.com/",
            "category": "productivity",
            "icon": "https://play-lh.googleusercontent.com/WRl_6Jv1ljYKf3xiy27h3xx-ST7Kntg3mon8J53OBpjdm35jG2Mw80GZ2Qrhlau-YqI7=w240-h480-rw"
        },
        "cookies": []
    },
    {
        "meta": {
            "name": "Bein Sports",
            "url": "https://www.beinsports.com/",
            "category": "streaming",
            "isGroup": true,
            "icon": "https://play-lh.googleusercontent.com/jBDZq3aBmCXuvtuJHEasqsdYPRxMBGzYmEha4dMlgoIk19Zlh6BGQC08Zt6Ifrmzhg=w240-h480-rw"
        },
        "accounts": [
            { "id": "226", "name": "Bein Sports 1", "cookies": [] },
            { "id": "268", "name": "Bein Sports 2", "cookies": [] },
            { "id": "309", "name": "Bein Sports 3", "cookies": [] },
            { "id": "332", "name": "Bein Sports 4", "cookies": [] },
            { "id": "409", "name": "Bein Sports 5", "cookies": [] },
            { "id": "446", "name": "Bein Sports 6", "cookies": [] },
            { "id": "447", "name": "Bein Sports 7", "cookies": [] },
            { "id": "448", "name": "Bein Sports 8", "cookies": [] },
            { "id": "449", "name": "Bein Sports 9", "cookies": [] },
            { "id": "450", "name": "Bein Sports 10", "cookies": [] }
        ]
    },
    {
        "meta": {
            "name": "BLACKBOX.AI",
            "url": "https://www.blackbox.ai/",
            "category": "productivity",
            "isGroup": true,
            "icon": "https://play-lh.googleusercontent.com/Z_fquqqNzAd8FkpSjlnURnMtmLh8HRf_h_kIwhs0NbXKpO4WZ_fyZfi0f5yQsNmRL_lP"
        },
        "accounts": [
            { "id": "1", "name": "BLACKBOX.AI 1", "cookies": [] },
            { "id": "432", "name": "BLACKBOX.AI 2", "cookies": [] },
            { "id": "456", "name": "BLACKBOX.AI 3", "cookies": [] },
            { "id": "563", "name": "BLACKBOX.AI 4", "cookies": [] }
        ]
    },
    {
        "meta": {
            "id": "107",
            "name": "Blush Design",
            "url": "https://blush.design/",
            "category": "design",
            "icon": "https://assets-global.website-files.com/5f610469be9ecb5b03a480e0/5f6bd3008ad4df07bab659fc_happy.svg"
        },
        "cookies": []
    },
    {
        "meta": {
            "id": "262",
            "name": "Brain.fm",
            "url": "https://www.brain.fm/",
            "category": "music",
            "icon": "https://play-lh.googleusercontent.com/oQnd9u11H7j1g99Pzswt5LTm52g8XyMrgz0GRBX5lmzdPv2Vt7bBrOKgbVbs-gHc504=w240-h480-rw"
        },
        "cookies": []
    },
    {
        "meta": {
            "name": "ChatGPT",
            "url": "https://chat.openai.com/",
            "category": "productivity",
            "isGroup": true,
            "icon": "https://groupy.id/assets/images/services/chatgptplus.png"
        },
        "accounts": [
            { "id": "4", "name": "ChatGPT 1", "cookies": [] },
            { "id": "36", "name": "ChatGPT 2", "cookies": [] },
            { "id": "53", "name": "ChatGPT 3", "cookies": [] },
            { "id": "60", "name": "ChatGPT 4", "cookies": [] },
            { "id": "76", "name": "ChatGPT 5", "cookies": [] }
            // ...dan seterusnya hingga 50 akun
        ]
    }
    // ... Lanjutkan menambahkan semua layanan lain dengan format yang sama
];

// Baris ini penting agar data bisa diimpor oleh background.js
export { servicesData };

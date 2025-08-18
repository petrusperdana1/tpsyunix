// data.js (Versi Lengkap Berdasarkan HTML Anda)
// URL untuk setiap layanan perlu ditambahkan secara manual jika belum ada.
// PENTING: Isi array "cookies" untuk setiap layanan dan akun.

const servicesData = [
    {
        "meta": { "id": "131", "name": "Academia", "url": "https://www.academia.edu/", "category": "education", "icon": "https://play-lh.googleusercontent.com/EpJMVmU4FP-cAyb_KwiFohiqBL24XVtomMMQPeFKxODrunPVdqr2IYRlARJNVjIiIWQ" },
        "cookies": []
    },
    {
        "meta": { "id": "22", "name": "Alight Motion", "url": "https://alightmotion.com/", "category": "design", "icon": "https://play-lh.googleusercontent.com/OU0BlP8C9-V7ECl2crma7B48nzDbK7liSLjn0j_fpTlyWG6qyEE-mw_KFZ9aOXF0a3w" },
        "cookies": []
    },
    {
        "meta": { "name": "Apple Music", "url": "https://music.apple.com/", "category": "music", "isGroup": true, "icon": "https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE" },
        "accounts": [
            { "id": "627", "name": "applemusic", "cookies": [] },
            { "id": "628", "name": "applemusic2", "cookies": [] },
            { "id": "629", "name": "applemusic3", "cookies": [] }
        ]
    },
    {
        "meta": { "name": "Apple TV+", "url": "https://tv.apple.com/", "category": "streaming", "isGroup": true, "icon": "https://play-lh.googleusercontent.com/1XBAZjSOWaVM7UDFKvzuMR-WRoR5gCnsYrw17_ihHLcJKT9Qc7hXptHwWQ3Bf83mry4" },
        "accounts": [
            { "id": "459", "name": "appletv+ 1", "cookies": [] }, { "id": "472", "name": "appletv+ 2", "cookies": [] },
            { "id": "473", "name": "appletv+ 3", "cookies": [] }, { "id": "474", "name": "appletv+ 4", "cookies": [] },
            { "id": "475", "name": "appletv+ 5", "cookies": [] }, { "id": "555", "name": "appletv+ 6", "cookies": [] },
            { "id": "556", "name": "appletv+ 7", "cookies": [] }, { "id": "557", "name": "appletv+ 8", "cookies": [] },
            { "id": "558", "name": "appletv+ 9", "cookies": [] }, { "id": "559", "name": "appletv+ 10", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "45", "name": "AskYourPDF", "url": "https://askyourpdf.com/", "category": "productivity", "icon": "https://play-lh.googleusercontent.com/WRl_6Jv1ljYKf3xiy27h3xx-ST7Kntg3mon8J53OBpjdm35jG2Mw80GZ2Qrhlau-YqI7=w240-h480-rw" },
        "cookies": []
    },
    {
        "meta": { "name": "Bein Sports", "url": "https://www.beinsports.com/", "category": "streaming", "isGroup": true, "icon": "https://play-lh.googleusercontent.com/jBDZq3aBmCXuvtuJHEasqsdYPRxMBGzYmEha4dMlgoIk19Zlh6BGQC08Zt6Ifrmzhg=w240-h480-rw" },
        "accounts": [
            { "id": "226", "name": "beinsports 1", "cookies": [] }, { "id": "268", "name": "beinsports 2", "cookies": [] },
            { "id": "309", "name": "beinsports 3", "cookies": [] }, { "id": "332", "name": "beinsports 4", "cookies": [] },
            { "id": "409", "name": "beinsports 5", "cookies": [] }, { "id": "446", "name": "beinsports 6", "cookies": [] },
            { "id": "447", "name": "beinsports 7", "cookies": [] }, { "id": "448", "name": "beinsports 8", "cookies": [] },
            { "id": "449", "name": "beinsports 9", "cookies": [] }, { "id": "450", "name": "beinsports 10", "cookies": [] }
        ]
    },
    {
        "meta": { "name": "BLACKBOX.AI", "url": "https://www.blackbox.ai/", "category": "productivity", "isGroup": true, "icon": "https://play-lh.googleusercontent.com/Z_fquqqNzAd8FkpSjlnURnMtmLh8HRf_h_kIwhs0NbXKpO4WZ_fyZfi0f5yQsNmRL_lP" },
        "accounts": [
            { "id": "1", "name": "blackbox.ai 1", "cookies": [] }, { "id": "432", "name": "blackbox.ai 2", "cookies": [] },
            { "id": "456", "name": "blackbox.ai 3", "cookies": [] }, { "id": "563", "name": "blackbox.ai 4", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "107", "name": "Blush Design", "url": "https://blush.design/", "category": "design", "icon": "https://assets-global.website-files.com/5f610469be9ecb5b03a480e0/5f6bd3008ad4df07bab659fc_happy.svg" },
        "cookies": []
    },
    {
        "meta": { "id": "262", "name": "Brain.fm", "url": "https://www.brain.fm/", "category": "music", "icon": "https://play-lh.googleusercontent.com/oQnd9u11H7j1g99Pzswt5LTm52g8XyMrgz0GRBX5lmzdPv2Vt7bBrOKgbVbs-gHc504=w240-h480-rw" },
        "cookies": []
    },
    {
        "meta": { "id": "160", "name": "Brilliant", "url": "https://brilliant.org/", "category": "education", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07Aba7sYgSCOIW9P2mAWcAcO9r_tpM_svzw&s" },
        "cookies": []
    },
    {
        "meta": { "name": "Bstation", "url": "https://www.bilibili.tv/", "category": "streaming", "isGroup": true, "icon": "https://play-lh.googleusercontent.com/nug7F0n-jWMpAWLaU7Qi1kuTIYjrAtUJmZd5FW4mEyspYR7-zGa-3_fwnYkPgyzHozE3" },
        "accounts": [
            { "id": "3", "name": "bstation", "cookies": [] }, { "id": "27", "name": "bstation2", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "97", "name": "Busuu", "url": "https://www.busuu.com/", "category": "education", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfQ07W8Z1b0olxbugP-i2Hk5BJo6I-B8yKA&s" },
        "cookies": []
    },
    {
        "meta": { "id": "10", "name": "Bypass | HIX AI", "url": "https://hix.ai/hix-bypass", "category": "productivity", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXZQ0Wq17Y4CjDKiytXbd1hG39lu6u-rBsw&s" },
        "cookies": []
    },
    {
        "meta": { "id": "171", "name": "BypassGPT", "url": "https://bypassgpt.ai/", "category": "productivity", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpNp17p7NogV0-YTH9UnJYGg7IowMwYmj3w&s" },
        "cookies": []
    },
    {
        "meta": { "id": "2", "name": "Canva", "url": "https://www.canva.com/", "category": "design", "icon": "https://play-lh.googleusercontent.com/JC3HW-ps59VAEU3vuJoi3I5XB_IQ9ISuILLudUY9uLSW7eKfqtXitrB-fF865rV4TQ" },
        "cookies": []
    },
    {
        "meta": { "name": "CapCut", "url": "https://www.capcut.com/", "category": "design", "isGroup": true, "icon": "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxtHdRB6xk71KqOPxE23.XPiUcBp9_h5.Va3lapJy.K9tACxvjL4_WF3lJCLozay.Kx6V1mfBFaOOF4V5Rx4RHLY-&format=source" },
        "accounts": [
            { "id": "157", "name": "capcut 1", "cookies": [] }, { "id": "282", "name": "capcut 2", "cookies": [] },
            { "id": "394", "name": "capcut 3", "cookies": [] }, { "id": "600", "name": "capcut 4", "cookies": [] },
            { "id": "601", "name": "capcut 5", "cookies": [] }, { "id": "602", "name": "capcut 6", "cookies": [] },
            { "id": "603", "name": "capcut 7", "cookies": [] }, { "id": "604", "name": "capcut 8", "cookies": [] },
            { "id": "605", "name": "capcut 9", "cookies": [] }, { "id": "606", "name": "capcut 10", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "594", "name": "Chat | HIX AI", "url": "https://hix.ai/chat", "category": "productivity", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXZQ0Wq17Y4CjDKiytXbd1hG39lu6u-rBsw&s" },
        "cookies": []
    },
    {
        "meta": { "name": "ChatGPT", "url": "https://chat.openai.com/", "category": "productivity", "isGroup": true, "icon": "https://groupy.id/assets/images/services/chatgptplus.png" },
        "accounts": [
            { "id": "4", "name": "chatgpt 1", "cookies": [] }, { "id": "36", "name": "chatgpt 2", "cookies": [] },
            { "id": "53", "name": "chatgpt 3", "cookies": [] }, { "id": "60", "name": "chatgpt 4", "cookies": [] },
            { "id": "76", "name": "chatgpt 5", "cookies": [] }, { "id": "21", "name": "chatgpt 6", "cookies": [] },
            { "id": "77", "name": "chatgpt 7", "cookies": [] }, { "id": "78", "name": "chatgpt 8", "cookies": [] },
            { "id": "104", "name": "chatgpt 9", "cookies": [] }, { "id": "105", "name": "chatgpt 10", "cookies": [] },
            { "id": "106", "name": "chatgpt 11", "cookies": [] }, { "id": "113", "name": "chatgpt 12", "cookies": [] },
            { "id": "115", "name": "chatgpt 13", "cookies": [] }, { "id": "116", "name": "chatgpt 14", "cookies": [] },
            { "id": "117", "name": "chatgpt 15", "cookies": [] }, { "id": "128", "name": "chatgpt 16", "cookies": [] },
            { "id": "129", "name": "chatgpt 17", "cookies": [] }, { "id": "318", "name": "chatgpt 18", "cookies": [] },
            { "id": "140", "name": "chatgpt 19", "cookies": [] }, { "id": "141", "name": "chatgpt 20", "cookies": [] },
            { "id": "251", "name": "chatgpt 21", "cookies": [] }, { "id": "258", "name": "chatgpt 22", "cookies": [] },
            { "id": "259", "name": "chatgpt 23", "cookies": [] }, { "id": "260", "name": "chatgpt 24", "cookies": [] },
            { "id": "333", "name": "chatgpt 25", "cookies": [] }, { "id": "378", "name": "chatgpt 26", "cookies": [] },
            { "id": "379", "name": "chatgpt 27", "cookies": [] }, { "id": "380", "name": "chatgpt 28", "cookies": [] },
            { "id": "381", "name": "chatgpt 29", "cookies": [] }, { "id": "382", "name": "chatgpt 30", "cookies": [] },
            { "id": "385", "name": "chatgpt 31", "cookies": [] }, { "id": "386", "name": "chatgpt 32", "cookies": [] },
            { "id": "391", "name": "chatgpt 33", "cookies": [] }, { "id": "392", "name": "chatgpt 34", "cookies": [] },
            { "id": "393", "name": "chatgpt 35", "cookies": [] }, { "id": "395", "name": "chatgpt 36", "cookies": [] },
            { "id": "396", "name": "chatgpt 37", "cookies": [] }, { "id": "397", "name": "chatgpt 38", "cookies": [] },
            { "id": "465", "name": "chatgpt 39", "cookies": [] }, { "id": "466", "name": "chatgpt 40", "cookies": [] },
            { "id": "481", "name": "chatgpt 41", "cookies": [] }, { "id": "482", "name": "chatgpt 42", "cookies": [] },
            { "id": "483", "name": "chatgpt 43", "cookies": [] }, { "id": "484", "name": "chatgpt 44", "cookies": [] },
            { "id": "485", "name": "chatgpt 45", "cookies": [] }, { "id": "486", "name": "chatgpt 46", "cookies": [] },
            { "id": "487", "name": "chatgpt 47", "cookies": [] }, { "id": "488", "name": "chatgpt 48", "cookies": [] },
            { "id": "489", "name": "chatgpt 49", "cookies": [] }, { "id": "490", "name": "chatgpt 50", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "179", "name": "Codecademy", "url": "https://www.codecademy.com/", "category": "education", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4KW6CVd0xtcKjRF9GM1hzoHsYlLiYrjUTg&s" },
        "cookies": []
    },
    {
        "meta": { "id": "100", "name": "Consensus", "url": "https://consensus.app/", "category": "education", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweoQJzl9iPGJqBYN-uOcjxdcH72RA9W1PKiCmAisHjg&s" },
        "cookies": []
    },
    {
        "meta": { "id": "254", "name": "Coohom", "url": "https://www.coohom.com/", "category": "design", "icon": "https://play-lh.googleusercontent.com/HWA5QTohakrzdjQnJWyPih_CDFubc9PZi0gW1v-eoopRUAGWpHspB-NeFBH3FQnQc6kz=w240-h480-rw" },
        "cookies": []
    },
    {
        "meta": { "id": "337", "name": "Course Hero", "url": "https://www.coursehero.com/", "category": "education", "icon": "https://play-lh.googleusercontent.com/FGtdclS6wXoOO9lA-9DkK9Skis0T-tY2SCFAl7wLX4ZDFSNO3RBADCEcnCMInsZCKlc" },
        "cookies": []
    },
    {
        "meta": { "id": "124", "name": "Coursera", "url": "https://www.coursera.org/", "category": "education", "icon": "https://play-lh.googleusercontent.com/H8crzfriK6t5b0N5wXykhxMjPopyWGDZPaMJlvWlAKb7EG-26KGu15P_RnFDinBw1Jc" },
        "cookies": []
    },
    {
        "meta": { "name": "Crunchyroll", "url": "https://www.crunchyroll.com/", "category": "streaming", "isGroup": true, "icon": "https://groupy.id/assets/images/services/crunchyroll.png" },
        "accounts": [
            { "id": "6", "name": "crunchyroll 1", "cookies": [] }, { "id": "24", "name": "crunchyroll 2", "cookies": [] },
            { "id": "192", "name": "crunchyroll 3", "cookies": [] }, { "id": "64", "name": "crunchyroll 4", "cookies": [] },
            { "id": "451", "name": "crunchyroll 5", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "133", "name": "Curiosity Stream", "url": "https://curiositystream.com/", "category": "streaming", "icon": "https://play-lh.googleusercontent.com/YXqChSEFUdn1A9Jxu9sIZPwlyLYaA_sU_U_h-uW_RyXhEx1WzBNqNWcdNwC3WOGzjg" },
        "cookies": []
    },
    {
        "meta": { "id": "383", "name": "Cursor", "url": "https://cursor.sh/", "category": "productivity", "icon": "https://miro.medium.com/v2/resize:fit:800/0*zWCTHFNFdGAgSw2d" },
        "cookies": []
    },
    {
        "meta": { "id": "225", "name": "DataCamp", "url": "https://www.datacamp.com/", "category": "education", "icon": "https://yt3.googleusercontent.com/ytc/AIdro_m6psai1Pd5oG3nGbw_hVfG-qmJ8R1ntco83MTXDf5cdoo=s900-c-k-c0x00ffffff-no-rj" },
        "cookies": []
    },
    {
        "meta": { "id": "39", "name": "DeepL", "url": "https://www.deepl.com/", "category": "utilities", "icon": "https://play-lh.googleusercontent.com/0IH4L3pX-jqQXKYCDmxTM5t3Tvak2cb_zUuIs9nKCHPeOqkaRJ_bRTq1qKawsSvunw=w240-h480-rw" },
        "cookies": []
    },
    {
        "meta": { "id": "430", "name": "DeepSeek", "url": "https://www.deepseek.com/", "category": "productivity", "icon": "https://pbs.twimg.com/ext_tw_video_thumb/1875845724925206528/pu/img/4T7PkBumsEAjZeO9.jpg" },
        "cookies": []
    },
    {
        "meta": { "id": "178", "name": "Duolingo", "url": "https://www.duolingo.com/", "category": "education", "icon": "https://www.langoly.com/wp-content/uploads/2020/03/Duolingo-app-icon.png" },
        "cookies": []
    },
    {
        "meta": { "id": "630", "name": "Educative", "url": "https://www.educative.io/", "category": "education", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHav_EAmaStXwVlYg4pL5sFbdOyKcRKefbg&s" },
        "cookies": []
    },
    {
        "meta": { "id": "452", "name": "Elicit", "url": "https://elicit.com/", "category": "productivity", "icon": "https://yt3.googleusercontent.com/ksfLLIjvy8Y5vvtAmnSzIeF-svAUzrZyJBs-YwCVZUZGct8XNDb6-KJSepMwCrcuFkb6b8oCczo=s900-c-k-c0x00ffffff-no-rj" },
        "cookies": []
    },
    {
        "meta": { "id": "7", "name": "Envato Elements", "url": "https://elements.envato.com/", "category": "design", "icon": "https://elements.envato.com/favicon.svg" },
        "cookies": []
    },
    {
        "meta": { "name": "Epidemic Sound", "url": "https://www.epidemicsound.com/", "category": "music", "isGroup": true, "icon": "https://groupy.id/assets/images/services/epidemicsound.jpg" },
        "accounts": [
            { "id": "8", "name": "epidemicsound 1", "cookies": [] },
            { "id": "340", "name": "epidemicsound 2", "cookies": [] },
            { "id": "534", "name": "epidemicsound 3", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "111", "name": "Everand", "url": "https://www.everand.com/", "category": "music", "icon": "https://play-lh.googleusercontent.com/i6RqZKwmmgvCq8FGoGewoEDWYq8Q2ghi8gUnWLBlPHmYCyRM4bl39YZTAoHu7mzU8vN7" },
        "cookies": []
    },
    {
        "meta": { "id": "291", "name": "Figma", "url": "https://www.figma.com/", "category": "design", "icon": "https://play-lh.googleusercontent.com/hoVBnPBRehmXsCqESLXRH2E3OTxklkwKZlb1psn7imm0VUSobn2nevS9RRFWb9GM4-o" },
        "cookies": []
    },
    {
        "meta": { "name": "Flaticon", "url": "https://www.flaticon.com/", "category": "design", "isGroup": true, "icon": "https://groupy.id/assets/images/services/flaticon.png" },
        "accounts": [
            { "id": "9", "name": "flaticon 1", "cookies": [] },
            { "id": "62", "name": "flaticon 2", "cookies": [] }
        ]
    },
    {
        "meta": { "name": "Freepik", "url": "https://www.freepik.com/", "category": "design", "isGroup": true, "icon": "https://groupy.id/assets/images/services/freepik.png" },
        "accounts": [
            { "id": "11", "name": "freepik 1", "cookies": [] },
            { "id": "361", "name": "freepik 2", "cookies": [] },
            { "id": "362", "name": "freepik 3", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "95", "name": "Gamma", "url": "https://gamma.app/", "category": "productivity", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRM9dtIK5wd1yJAH0qg6ytSsgMzrNx-cvlK78QZqzzTejsr0qtC9Kgj_i1&s=10" },
        "cookies": []
    },
    {
        "meta": { "id": "12", "name": "Grammarly", "url": "https://www.grammarly.com/", "category": "productivity", "icon": "https://groupy.id/assets/images/services/grammarly.png" },
        "cookies": []
    },
    {
        "meta": { "id": "440", "name": "Ground News", "url": "https://ground.news/", "category": "productivity", "icon": "https://play-lh.googleusercontent.com/61Y1REKFBgC1C6YxQwZA56516gR1zCw-HIaNyP_WV_MnR6Fuofzd8-uWBHzKxZP7mwM" },
        "cookies": []
    },
    {
        "meta": { "id": "153", "name": "GuitarTricks", "url": "https://www.guitartricks.com/", "category": "productivity", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrIfBbD7fof4ZwKxkeWgU0t2u1lK7x_nPrA&s" },
        "cookies": []
    },
    {
        "meta": { "name": "HBO Max", "url": "https://www.hbo.com/", "category": "streaming", "isGroup": true, "icon": "https://play-lh.googleusercontent.com/bvyVXgpxu65YO3PNeVhNM9Y7ao7g7FnnKdoNXcwqO48aOlVvnH_b2O9rcZzgEFHzHtI" },
        "accounts": [
            { "id": "170", "name": "hbomax 1", "cookies": [] },
            { "id": "344", "name": "hbomax 2", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "161", "name": "Humata AI", "url": "https://www.humata.ai/", "category": "productivity", "icon": "https://www.humata.ai/favicon.ico" },
        "cookies": []
    },
    {
        "meta": { "id": "103", "name": "iflix", "url": "https://www.iflix.com/", "category": "streaming", "icon": "https://play-lh.googleusercontent.com/_j_9jVM50j43oII8sejBsK4DkHXxFw_MYUQOcHNjgX7SgJMQiLUsa8BuKWGK_84H_OE" },
        "cookies": []
    },
    {
        "meta": { "id": "227", "name": "iLoveIMG", "url": "https://www.iloveimg.com/", "category": "utilities", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjyJOS7PN-2Xh37-pXo0aOghZLt45Fa2UBw&s" },
        "cookies": []
    },
    {
        "meta": { "id": "199", "name": "iLovePDF", "url": "https://www.ilovepdf.com/", "category": "utilities", "icon": "https://play-lh.googleusercontent.com/I5yxs1Pspu1rB3NPfqnoX2NscvfzAW7e3Zq5GGhXcr2g207X9-npiuP48Ys7107M1VvA" },
        "cookies": []
    },
    {
        "meta": { "id": "37", "name": "InvestingPro", "url": "https://www.investing.com/pro", "category": "utilities", "icon": "https://pbs.twimg.com/profile_images/1108338370026053632/JrSrbA-c_400x400.png" },
        "cookies": []
    },
    {
        "meta": { "id": "14", "name": "iQIYI", "url": "https://www.iq.com/", "category": "streaming", "icon": "https://groupy.id/assets/images/services/iqiyi.png" },
        "cookies": []
    },
    {
        "meta": { "id": "283", "name": "Jenni AI", "url": "https://jenni.ai/", "category": "education", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzHV0xQOmnu0xowDdW71mIklQHOJ7RjdzHg&s" },
        "cookies": []
    },
    {
        "meta": { "id": "535", "name": "Leonardo AI", "url": "https://leonardo.ai/", "category": "design", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJztEc1YalQNx74GGv9upR6MXHYGO4H0ejqg&s" },
        "cookies": []
    },
    {
        "meta": { "id": "142", "name": "LinkedIn Learning", "url": "https://www.linkedin.com/learning/", "category": "education", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fcdsIUPUgmbvGaP-RC4RbHYdVtoN_fM8aya_8gOXI2BRtClESO-0_jgWTtKtIVmOQKs&usqp=CAU" },
        "cookies": []
    },
    {
        "meta": { "name": "LokLok", "url": "https://www.loklok.com/", "category": "streaming", "isGroup": true, "icon": "https://play-lh.googleusercontent.com/SoElTraQPu-MmE_lTOiFC089smV9XzoiZNbiiuWMa4tu4edi4RMqLRe9TS5VenRJoU4M" },
        "accounts": [
            { "id": "415", "name": "loklok 1", "cookies": [] }, { "id": "416", "name": "loklok 2", "cookies": [] },
            { "id": "417", "name": "loklok 3", "cookies": [] }, { "id": "418", "name": "loklok 4", "cookies": [] },
            { "id": "571", "name": "loklok 5", "cookies": [] }, { "id": "572", "name": "loklok 6", "cookies": [] },
            { "id": "573", "name": "loklok 7", "cookies": [] }, { "id": "574", "name": "loklok 8", "cookies": [] },
            { "id": "575", "name": "loklok 9", "cookies": [] }, { "id": "576", "name": "loklok 10", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "313", "name": "Marvel Unlimited", "url": "https://www.marvel.com/unlimited", "category": "utilities", "icon": "https://play-lh.googleusercontent.com/ikcy-XJG8_oFwVztH9vK3y--_mUcRu5zyco7d4FqugxzSkX9wMo63oBDPLWZnUsYDg" },
        "cookies": []
    },
    {
        "meta": { "id": "159", "name": "MasterClass", "url": "https://www.masterclass.com/", "category": "education", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoBuunz4xK_-2t35N6astSudIfb7Bnr0R6HDcwoqbzmzOcuNpiZdiRFRv&s=10" },
        "cookies": []
    },
    {
        "meta": { "id": "110", "name": "Medium", "url": "https://medium.com/", "category": "education", "icon": "https://miro.medium.com/v2/resize:fill:128:128/1*sHhtYhaCe2Uc3IU0IgKwIQ.png" },
        "cookies": []
    },
    {
        "meta": { "name": "Merlin AI", "url": "https://merlin.foyer.work/", "category": "productivity", "isGroup": true, "icon": "https://play-lh.googleusercontent.com/8XoSS1Jn3qHfm8cB4gq6YMQAWv_PIRCUtH2r5RiDq0s05QM47JtwEjs6V_aFh_SmOZ0" },
        "accounts": [
            { "id": "207", "name": "merlinai 1", "cookies": [] },
            { "id": "308", "name": "merlinai 2", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "49", "name": "Mimo", "url": "https://mimo.org/", "category": "productivity", "icon": "https://play-lh.googleusercontent.com/qPfmmEDFhGVmIXIKpmfbQeH6vXygXotzj6ied-j2el0YIB36fApN32XoVDrGoMQZ11Q" },
        "cookies": []
    },
    {
        "meta": { "id": "42", "name": "Motion Array", "url": "https://motionarray.com/", "category": "design", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBk2ILWzq3dr3k_4NTRQL194UdsBthjyPTLQ&s" },
        "cookies": []
    },
    {
        "meta": { "id": "177", "name": "Musicbed", "url": "https://www.musicbed.com/", "category": "music", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRzHPEXnSURkOyU9StcI8BZPOTeqzvcJP_A&s" },
        "cookies": []
    },
    {
        "meta": { "name": "Netflix", "url": "https://www.netflix.com/", "category": "streaming", "isGroup": true, "icon": "https://groupy.id/assets/images/services/netflix.png" },
        "accounts": [
            { "id": "85", "name": "netflix 1", "cookies": [] }, { "id": "56", "name": "netflix 2", "cookies": [] },
            { "id": "55", "name": "netflix 3", "cookies": [] }
            // ...dan seterusnya
        ]
    },
    {
        "meta": { "id": "252", "name": "NoteGPT", "url": "https://notegpt.io/", "category": "productivity", "icon": "https://10web.io/wp-content/uploads/2024/08/NoteGPT_logo.jpg" },
        "cookies": []
    },
    {
        "meta": { "id": "137", "name": "Notion", "url": "https://www.notion.so/", "category": "productivity", "icon": "https://play-lh.googleusercontent.com/vy-9s86d-81wk1acsXvAxN1xV5Y-doJdgbskG3GonOerbUwUtvNXk_XSRHoraaXZcX4" },
        "cookies": []
    },
    {
        "meta": { "id": "255", "name": "Pacdora", "url": "https://www.pacdora.com/", "category": "design", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9l1bvE2alHZrnR4bmSsbK2KjHemNk_p4Dsf-GVh6-5hFtZgugYYNfQfo0L3CQxZqdLC4&usqp=CAU" },
        "cookies": []
    },
    {
        "meta": { "name": "Perplexity", "url": "https://www.perplexity.ai/", "category": "productivity", "isGroup": true, "icon": "https://play-lh.googleusercontent.com/6STp0lYx2ctvQ-JZpXA1LeAAZIlq6qN9gpy7swLPlRhmp-hfvZePcBxqwVkqN2BH1g" },
        "accounts": [
            { "id": "239", "name": "perplexity 1", "cookies": [] }, { "id": "272", "name": "perplexity 2", "cookies": [] },
            { "id": "406", "name": "perplexity 3", "cookies": [] }, { "id": "441", "name": "perplexity 4", "cookies": [] }
        ]
    },
    {
        "meta": { "name": "Picsart", "url": "https://picsart.com/", "category": "design", "isGroup": true, "icon": "https://play-lh.googleusercontent.com/1JMJ518jogwPeaD0pYn2mBu1cRLD0xRi45wNbtTIRvam1_xx-y3KJOjRAx-W9P4Lf0U=s256-rw" },
        "accounts": [
            { "id": "284", "name": "picsart 1", "cookies": [] }, { "id": "412", "name": "picsart 2", "cookies": [] },
            { "id": "413", "name": "picsart 3", "cookies": [] }, { "id": "414", "name": "picsart 4", "cookies": [] },
            { "id": "513", "name": "picsart 5", "cookies": [] }, { "id": "514", "name": "picsart 6", "cookies": [] },
            { "id": "515", "name": "picsart 7", "cookies": [] }, { "id": "516", "name": "picsart 8", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "125", "name": "Prezi AI", "url": "https://prezi.com/", "category": "productivity", "icon": "https://play-lh.googleusercontent.com/3rVZ7Lc7-bxsALDo0nWOcuojR9ISxlhO20KnVM3uP00drxIXXt7ATM0V5-YjfM0pPtA" },
        "cookies": []
    },
    {
        "meta": { "name": "Prime Video", "url": "https://www.primevideo.com/", "category": "streaming", "isGroup": true, "icon": "https://groupy.id/assets/images/services/primevideo.png" },
        "accounts": [
            { "id": "16", "name": "primevideo 1", "cookies": [] }, { "id": "35", "name": "primevideo 2", "cookies": [] },
            { "id": "38", "name": "primevideo 3", "cookies": [] }
            // ...dan seterusnya
        ]
    },
    {
        "meta": { "id": "233", "name": "ProductionCrate", "url": "https://www.productioncrate.com/", "category": "design", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_sbW5wMx4hP2Y8wrJkjxjlSbrpy5f1Zgbw&s" },
        "cookies": []
    },
    {
        "meta": { "name": "QuillBot", "url": "https://quillbot.com/", "category": "productivity", "isGroup": true, "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtqcA6rvxqQHSb14wu157jMKqBtXRNJ5-1lcBbxf4JzQt7vwDhlmbpnnH&s=10" },
        "accounts": [
            { "id": "109", "name": "quillbot 1", "cookies": [] },
            { "id": "32", "name": "quillbot 2", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "138", "name": "Quizlet", "url": "https://quizlet.com/", "category": "education", "icon": "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/szx9duflfycmltpnvcvw" },
        "cookies": []
    },
    {
        "meta": { "id": "108", "name": "Rawpixel", "url": "https://www.rawpixel.com/", "category": "design", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1xJnAZa_h6WueAi4mr73cH3K7_pGeTz6Gw&s" },
        "cookies": []
    },
    {
        "meta": { "id": "83", "name": "Relume", "url": "https://www.relume.io/", "category": "design", "icon": "https://yt3.googleusercontent.com/MGRbvVhtCttJ7i2qW3igFxIJSkeoaRln_mIAFAfDgZIFD1yNUQC5mn1a5VqXKzcqRmAuDswu=s900-c-k-c0x00ffffff-no-rj" },
        "cookies": []
    },
    {
        "meta": { "id": "215", "name": "Scholarcy", "url": "https://scholarcy.com/", "category": "education", "icon": "https://yt3.googleusercontent.com/ytc/AIdro_kqv2zcFC4lZDK0qSXEbuI1Kcs5wYJoLmONwCf9QX3Qoc4=s900-c-k-c0x00ffffff-no-rj" },
        "cookies": []
    },
    {
        "meta": { "id": "101", "name": "SciSpace", "url": "https://typeset.io/", "category": "education", "icon": "https://assets-global.website-files.com/648302318a1143aaf5e78dfa/662e79fc151538445a578869_d3JYR823QfSPL1DkKG6V_6b34N9K4AGMJ21jH.png" },
        "cookies": []
    },
    {
        "meta": { "name": "Scite", "url": "https://scite.ai/", "category": "productivity", "isGroup": true, "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHo4BcTYbuMiQFR7oUYKZy6zjOgzEORDrzeie96OS1sj3Ur0LpoCPV_ts&s=10" },
        "accounts": [
            { "id": "33", "name": "scite 1", "cookies": [] },
            { "id": "288", "name": "scite 2", "cookies": [] },
            { "id": "285", "name": "scite 3", "cookies": [] }
        ]
    },
    {
        "meta": { "name": "Scribd", "url": "https://www.scribd.com/", "category": "utilities", "isGroup": true, "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebq-8lrzgXjVWMvUDApp_q1MhiL5eSyO15VAHMuNaE4RbrPi-f7c2NMc&s=10" },
        "accounts": [
            { "id": "26", "name": "scribd 1", "cookies": [] },
            { "id": "269", "name": "scribd 2", "cookies": [] },
            { "id": "270", "name": "scribd 3", "cookies": [] }
        ]
    },
    {
        "meta": { "name": "Semrush", "url": "https://www.semrush.com/", "category": "utilities", "isGroup": true, "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TPtYsfoyLxuSORs6sqgApBGYHOx1aZ43ra1DqBNb8BRYz4ciWF4Mg9uR&s=10" },
        "accounts": [
            { "id": "387", "name": "semrush 1", "cookies": [] },
            { "id": "335", "name": "semrush 2", "cookies": [] },
            { "id": "410", "name": "semrush 3", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "182", "name": "Sider AI", "url": "https://sider.ai/", "category": "productivity", "icon": "https://play-lh.googleusercontent.com/VghuZRn0-oLvbaGqptsM-9Qr6Ka7Pmw7lfmu6_UQ56mZS6bsXbET9Uf0wF0FECP8lEM" },
        "cookies": []
    },
    {
        "meta": { "id": "17", "name": "Skillshare", "url": "https://www.skillshare.com/", "category": "education", "icon": "https://groupy.id/assets/images/services/skillshare.png" },
        "cookies": []
    },
    {
        "meta": { "name": "Slidesgo", "url": "https://slidesgo.com/", "category": "design", "isGroup": true, "icon": "https://cdn-icons-png.flaticon.com/512/14649/14649063.png" },
        "accounts": [
            { "id": "407", "name": "slidesgo 1", "cookies": [] }, { "id": "560", "name": "slidesgo 2", "cookies": [] },
            { "id": "596", "name": "slidesgo 3", "cookies": [] }, { "id": "597", "name": "slidesgo 4", "cookies": [] },
            { "id": "598", "name": "slidesgo 5", "cookies": [] }, { "id": "599", "name": "slidesgo 6", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "112", "name": "Slideshare", "url": "https://www.slideshare.net/", "category": "productivity", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFu2smlszvneX1otpsXxgwhKyPha7Boi8VJg&s" },
        "cookies": []
    },
    {
        "meta": { "id": "158", "name": "Sololearn", "url": "https://www.sololearn.com/", "category": "education", "icon": "https://play-lh.googleusercontent.com/zxbe_H6JVg6ZnIeA1xorxxXr416kKdShmyonBzi5Qe28-GNdczX-NST_ul0AQJ007OA" },
        "cookies": []
    },
    {
        "meta": { "name": "Sora", "url": "https://openai.com/sora", "category": "productivity", "isGroup": true, "icon": "https://groupy.id/assets/images/services/chatgptplus.png" },
        "accounts": [
            { "id": "488888", "name": "sora 1", "cookies": [] },
            { "id": "3688888", "name": "sora 2", "cookies": [] }
            // ...dan seterusnya
        ]
    },
    {
        "meta": { "id": "220", "name": "Speechify", "url": "https://speechify.com/", "category": "productivity", "icon": "https://play-lh.googleusercontent.com/W0GcGHbSPEA2VBf8CM-SoRG9yYS2RwxgPM9Q25MmhmU6YzJ2t8lHIAnejL0nL9LvYwMx" },
        "cookies": []
    },
    {
        "meta": { "id": "123", "name": "Studocu", "url": "https://www.studocu.com/", "category": "education", "icon": "https://play-lh.googleusercontent.com/20ssDWF3SWEXIFYy8iFwXjomuIqtuHjGc3OxIWqVojIaeo_9_XxUZEDdmm5YPreLucij" },
        "cookies": []
    },
    {
        "meta": { "id": "338", "name": "Symbolab", "url": "https://www.symbolab.com/", "category": "education", "icon": "https://play-lh.googleusercontent.com/DKlax_iJQtJOKJlIPDSS7DZpbm9gCkHh3vWgrj8BOMRwDPDVKXdTQf9sV4cRuXSdRA" },
        "cookies": []
    },
    {
        "meta": { "id": "453", "name": "The Wall Street Journal", "url": "https://www.wsj.com/", "category": "productivity", "icon": "https://play-lh.googleusercontent.com/eksxaPfxbTVb6VTl5aj1sXLpKc_N9Z6AZ3_5Oq6JhTXmgEQza-1v58a66p_ID0phE2Zv" },
        "cookies": []
    },
    {
        "meta": { "id": "19", "name": "TradingView", "url": "https://www.tradingview.com/", "category": "utilities", "icon": "https://groupy.id/assets/images/services/tradingview.png" },
        "cookies": []
    },
    {
        "meta": { "name": "Turnitin", "url": "https://www.turnitin.com/", "category": "productivity", "isGroup": true, "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrf73LGu_mACI2Mc_jdghOV02eXRocoXKo0o3qZHFjGgJMUr5M_v8uwap&s=10" },
        "accounts": [
            { "id": "34", "name": "turnitin 1", "cookies": [] }, { "id": "84", "name": "turnitin 2", "cookies": [] },
            { "id": "175", "name": "turnitin 3", "cookies": [] }, { "id": "209", "name": "turnitin 4", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "229", "name": "Udemy", "url": "https://www.udemy.com/", "category": "education", "icon": "https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" },
        "cookies": []
    },
    {
        "meta": { "id": "82", "name": "Vectorizer AI", "url": "https://vectorizer.ai/", "category": "design", "icon": "https://cdn.prod.website-files.com/648e04d4bbae7004f1b35f15/65de13535268a099387a6f60_vectorizer-ai-icon.png" },
        "cookies": []
    },
    {
        "meta": { "id": "612", "name": "Virtual Threads", "url": "https://www.virtual-threads.com/", "category": "productivity", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zqaiVJeMxFHsHmHsk8ViZdV3v-nd11cpPw&s" },
        "cookies": []
    },
    {
        "meta": { "name": "Viu", "url": "https://www.viu.com/", "category": "streaming", "isGroup": true, "icon": "https://groupy.id/assets/images/services/viu.png" },
        "accounts": [
            { "id": "18", "name": "viu 1", "cookies": [] }, { "id": "41", "name": "viu 2", "cookies": [] },
            { "id": "46", "name": "viu 3", "cookies": [] }, { "id": "52", "name": "viu 4", "cookies": [] },
            { "id": "435", "name": "viu 5", "cookies": [] }, { "id": "642", "name": "viu 6", "cookies": [] },
            { "id": "643", "name": "viu 7", "cookies": [] }, { "id": "644", "name": "viu 8", "cookies": [] },
            { "id": "645", "name": "viu 9", "cookies": [] }, { "id": "646", "name": "viu 10", "cookies": [] }
        ]
    },
    {
        "meta": { "name": "WeTV", "url": "https://wetv.vip/", "category": "streaming", "isGroup": true, "icon": "https://groupy.id/assets/images/services/wetv.png" },
        "accounts": [
            { "id": "13", "name": "wetv 1", "cookies": [] }, { "id": "102", "name": "wetv 2", "cookies": [] },
            { "id": "286", "name": "wetv 3", "cookies": [] }, { "id": "287", "name": "wetv 4", "cookies": [] },
            { "id": "458", "name": "wetv 5", "cookies": [] }, { "id": "586", "name": "wetv 6", "cookies": [] },
            { "id": "587", "name": "wetv 7", "cookies": [] }, { "id": "588", "name": "wetv 8", "cookies": [] },
            { "id": "589", "name": "wetv 9", "cookies": [] }, { "id": "590", "name": "wetv 10", "cookies": [] }
        ]
    },
    {
        "meta": { "id": "120", "name": "WolframAlpha", "url": "https://www.wolframalpha.com/", "category": "productivity", "icon": "https://play-lh.googleusercontent.com/OceHg5bH7EsTRwl-lD7jjV9WM0mpj0oH4YfA-CSbjvfa7NCLQBu5-4cLwNlDvCUp5Q4" },
        "cookies": []
    },
    {
        "meta": { "id": "181", "name": "WriteHuman", "url": "https://writehuman.ai/", "category": "utilities", "icon": "https://earlyshark.com/wp-content/uploads/2024/01/writehuman-logo-1024x1024.png" },
        "cookies": []
    },
    {
        "meta": { "id": "211", "name": "YouTube NoAds", "url": "https://www.youtube.com/", "category": "streaming", "icon": "https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc" },
        "cookies": []
    }
];

// Baris ini penting agar file bisa dibaca dengan benar
export { servicesData };

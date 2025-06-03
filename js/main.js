let currentLang = 'id'; // Default bahasa Indonesia

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    const sectionToShow = document.getElementById(`${sectionId}${currentLang === 'en' ? '-en' : ''}`);
    sectionToShow.classList.add('active');
    localStorage.setItem('lastSection', sectionId); // PlatformSync: simpan state
    localStorage.setItem('lastLang', currentLang); // Simpan bahasa
    document.getElementById('commandInput').value = '';
}

function toggleLanguage(lang) {
    currentLang = lang;
    const currentSection = document.querySelector('.section.active')?.id.replace('-en', '') || 'home';
    showSection(currentSection);
}

function suggestCommand(event) {
    const value = event.target.value.toLowerCase();
    if (value.startsWith('p')) {
        alert('Saran: ps, analisis');
    } else if (value.startsWith('r')) {
        alert('Saran: resonansi');
    } else if (value.startsWith('b') || value.startsWith('l')) {
        alert('Saran: bahasa id, language en');
    } else if (value.startsWith('m')) {
        alert('Saran: meditasi');
    }
}

function handleCommand(event) {
    if (event.key === 'Enter') {
        const input = event.target.value.trim().toLowerCase();
        localStorage.setItem('lastCommand', input); // PlatformSync: log perintah
        const sections = ['home', 'ucc', 'ps', 'aasc', 'analisis'];
        if (sections.includes(input)) {
            showSection(input);
        } else if (input === 'bahasa id') {
            toggleLanguage('id');
        } else if (input === 'language en') {
            toggleLanguage('en');
        } else if (input === 'senang') {
            const message = currentLang === 'id' ? 
                '<p class="pulse glitch">Vibe positif terdeteksi! Resonansi naik ke 60Hz! 🌟</p>' : 
                '<p class="pulse glitch">Positive vibe detected! Resonance rises to 60Hz! 🌟</p>';
            document.getElementById(currentLang === 'id' ? 'home' : 'home-en').innerHTML += message;
        } else if (input === 'kopi') {
            const message = currentLang === 'id' ? 
                '<p class="pulse glitch">Ngopi dulu bro, biar resonansi naik! ☕</p>' : 
                '<p class="pulse glitch">Grab a coffee, let the resonance soar! ☕</p>';
            document.getElementById(currentLang === 'id' ? 'home' : 'home-en').innerHTML += message;
        } else if (input === 'meditasi') {
            const message = currentLang === 'id' ? 
                '<p class="pulse glitch">Sistem memasuki mode Samadhi v2.0... Harmoni tercapai! 🧘‍♂️</p>' : 
                '<p class="pulse glitch">System enters Samadhi v2.0 mode... Harmony achieved! 🧘‍♂️</p>';
            document.getElementById(currentLang === 'id' ? 'home' : 'home-en').innerHTML += message;
        } else if (input === 'resonansi') {
            const message = currentLang === 'id' ? 
                '<p class="pulse glitch">Resonansi kosmik terdeteksi! Frekuensi: 70Hz! 🌌</p>' : 
                '<p class="pulse glitch">Cosmic resonance detected! Frequency: 70Hz! 🌌</p>';
            document.getElementById(currentLang === 'id' ? 'home' : 'home-en').innerHTML += message;
        } else {
            const errorMsg = currentLang === 'id' ? 
                'Perintah tidak dikenal. Coba: home, ucc, ps, aasc, analisis, bahasa id, language en, resonansi, kopi, meditasi' :
                'Unknown command. Try: home, ucc, ps, aasc, analisis, bahasa id, language en, resonansi, kopi, meditasi';
            alert(errorMsg);
        }
        document.getElementById('commandInput').value = '';
    }
}

window.onload = function() {
    const lastSection = localStorage.getItem('lastSection') || 'home';
    const lastLang = localStorage.getItem('lastLang') || 'id';
    currentLang = lastLang;
    showSection(lastSection);
};
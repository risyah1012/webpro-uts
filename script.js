document.addEventListener('DOMContentLoaded', () => {
    // Mengecek halaman yang sedang dibuka
    const page = location.pathname.split('/').pop() || 'index.html';
    
    // Mengambil semua link menu navigasi
    document.querySelectorAll('.main-nav a').forEach(a => {
        
        // Menambahkan class 'active' jika link cocok dengan halaman
        if (a.getAttribute('href') === page) {
            a.classList.add('active');
        }
    });
});
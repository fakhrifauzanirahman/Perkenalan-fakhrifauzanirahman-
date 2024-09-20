// Fungsi untuk menampilkan alert saat pesan dikirim
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Anda telah terkirim!');
});

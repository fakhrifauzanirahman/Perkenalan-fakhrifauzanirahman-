document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Ambil data formulir
    const form = event.target; // Referensi ke formulir
    const name = document.querySelector('input[placeholder="Nama"]').value.trim();
    const email = document.querySelector('input[placeholder="Email"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Pesan"]').value.trim();

    // Validasi form
    if (!name || !email || !message) {
        alert('Harap isi semua kolom sebelum mengirim pesan.');
        return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Masukkan alamat email yang valid.');
        return;
    }

    // Data untuk dikirim
    const botToken = "7562177121:AAFcX-DtpyRRR4MfEnLeKMSEUVmTs4CdeJM"; //ganti ku bot token maneh
    const chatId = 6528641319; 
    const text = `Pesan Baru:\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`;

    try {
        // ngirim pesan ka Telegram
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text
            })
        });

        if (response.ok) {
            alert('Pesan Anda telah terkirim!');

            // reset data formulir
            form.reset(); // Mereset semua input ke nilai default
        } else {
            const errorMessage = await response.text();
            console.error('Response Error:', errorMessage);
            alert('Terjadi kesalahan saat mengirim pesan. Coba lagi.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim pesan. Coba lagi.');
    }
});

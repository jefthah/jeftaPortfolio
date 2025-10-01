# Setup EmailJS untuk Contact Form

## Langkah-langkah Setup EmailJS:

### 1. Daftar/Login ke EmailJS
- Buka https://www.emailjs.com/
- Daftar akun baru atau login jika sudah punya akun

### 2. Buat Email Service
- Di dashboard EmailJS, klik "Add New Service"  
- Pilih email provider Anda (Gmail, Outlook, dll)
- Ikuti instruksi untuk menghubungkan email Anda
- Catat **Service ID** yang diberikan

### 3. Buat Email Template
- Klik "Create New Template"
- Buat template dengan variabel berikut:
  ```
  Subject: {{subject}}
  
  Pesan baru dari website portfolio:
  
  Nama: {{name}}
  Email: {{email}}
  Subject: {{subject}}
  
  Pesan:
  {{message}}
  
  ---
  Pesan ini dikirim dari contact form website portfolio Jefta Supraja.
  ```
- Catat **Template ID** yang diberikan

### 4. Dapatkan Public Key
- Di dashboard, buka "Account" → "General"
- Catat **Public Key** Anda

### 5. Update Konfigurasi di script.js
- Buka file `assets/javascript/script.js`
- Ganti nilai berikut dengan kredensial EmailJS Anda:
  ```javascript
  var EMAILJS_PUBLIC_KEY = 'GANTI_DENGAN_PUBLIC_KEY_ANDA';
  var EMAILJS_SERVICE_ID = 'GANTI_DENGAN_SERVICE_ID_ANDA'; 
  var EMAILJS_TEMPLATE_ID = 'GANTI_DENGAN_TEMPLATE_ID_ANDA';
  ```

### 6. Test Email
- Buka website Anda
- Isi form contact dan tekan "Send Message"
- Cek email Anda apakah pesan masuk

## Fitur yang Sudah Diimplementasi:

✅ **Form Validation**: Validasi semua field wajib dan format email
✅ **Loading State**: Button menampilkan loading saat mengirim
✅ **Success/Error Messages**: Feedback visual untuk user
✅ **Fallback**: Jika EmailJS gagal, akan buka email client
✅ **Responsive Design**: Button dan messages responsive di semua device
✅ **Custom Styling**: Button dengan gradient dan hover effects

## Styling Button:
- Gradient background (merah-biru) 
- Hover effect dengan transform dan shadow
- Loading animation dengan spinner
- Icon arrow yang bergerak saat hover
- Responsive untuk mobile

## Troubleshooting:
1. **Email tidak terkirim**: Pastikan kredensial EmailJS benar
2. **Button tidak responsive**: Clear browser cache
3. **Template error**: Pastikan variabel di template sesuai dengan yang dikirim dari form

## Kustomisasi Lebih Lanjut:
- Ubah warna gradient di CSS section `#sendBtn`
- Modifikasi template email di dashboard EmailJS
- Tambah field baru di form dan update template accordingly
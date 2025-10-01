# 📧 EmailJS Configuration Guide

Untuk mengaktifkan fitur email di portfolio Jefta Supraja, ikuti langkah-langkah berikut:

## 1. Daftar di EmailJS
1. Buka https://www.emailjs.com/
2. Daftar akun baru atau login
3. Buat service email baru (Gmail, Outlook, dll)

## 2. Setup Service
1. Pilih **Add New Service**
2. Pilih provider email Anda (Gmail recommended)
3. Connect akun email jefta.supraja@gmail.com
4. Catat **Service ID** (contoh: service_abc123)

## 3. Buat Email Template
1. Buka **Email Templates**
2. Klik **Create New Template**
3. Gunakan template ini:

```
Subject: Portfolio Contact - {{subject}}

Halo Jefta,

Anda menerima pesan baru dari portfolio website:

Nama: {{name}}
Email: {{email}}
Subject: {{subject}}

Pesan:
{{message}}

---
Pesan ini dikirim dari portfolio website Jefta Supraja
```

4. Set template variables:
   - name
   - email  
   - subject
   - message

5. Catat **Template ID** (contoh: template_xyz789)

## 4. Dapatkan Public Key
1. Buka **Account** > **General**
2. Catat **Public Key** (contoh: user_abcdef123456)

## 5. Update Environment Variables
Edit file `.env` dengan nilai yang benar:

```
EMAILJS_PUBLIC_KEY=your_actual_public_key
EMAILJS_SERVICE_ID=your_actual_service_id
EMAILJS_TEMPLATE_ID=your_actual_template_id
```

## 6. Test Email
1. Jalankan `npm run build`
2. Buka website
3. Isi form contact dan test kirim email

## Troubleshooting
- Error 400: Cek Service ID dan Template ID
- Error 401: Cek Public Key
- Error 404: Pastikan service dan template aktif
- Email tidak terkirim: Cek spam folder dan email settings

## Alternatif: Mode Fallback
Jika EmailJS tidak bekerja, sistem akan otomatis menggunakan mailto: link yang membuka email client default.
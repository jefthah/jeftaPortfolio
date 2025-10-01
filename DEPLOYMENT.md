# Portfolio Website - Jefta Supraja

## 🚀 Deploy to Netlify

### Step 1: Persiapan Production Credentials

1. **Buat EmailJS Service Baru untuk Production:**
   - Buka https://emailjs.com/
   - Login ke akun Anda
   - Buat service baru: `portfolio-production`
   - Buat template baru dengan ID yang berbeda
   - Catat credentials baru:
     ```
     EMAILJS_PUBLIC_KEY=your_new_production_key
     EMAILJS_SERVICE_ID=your_new_production_service
     EMAILJS_TEMPLATE_ID=your_new_production_template
     ```

### Step 2: Deploy ke Netlify

#### Option A: GitHub Integration (Recommended)

1. **Setup Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect ke Netlify:**
   - Buka https://netlify.com/
   - Login dan klik "New site from Git"
   - Pilih GitHub repository Anda
   - Build settings sudah otomatis dari `netlify.toml`

3. **Set Environment Variables di Netlify:**
   - Go to Site Settings → Environment Variables
   - Add variables:
     ```
     EMAILJS_PUBLIC_KEY = your_production_key
     EMAILJS_SERVICE_ID = your_production_service  
     EMAILJS_TEMPLATE_ID = your_production_template
     ```

#### Option B: Drag & Drop Deploy

1. **Build Production Version:**
   ```bash
   npm run build
   ```

2. **Upload ke Netlify:**
   - Buka https://netlify.com/
   - Drag & drop folder `dist/` ke dashboard
   - Set environment variables di Site Settings

### Step 3: Domain Configuration

1. **Custom Domain (Optional):**
   - Go to Site Settings → Domain management
   - Add custom domain: `jeftasupraja.com`
   - Configure DNS records

2. **HTTPS:**
   - Otomatis enabled oleh Netlify
   - Certificate akan di-provision otomatis

### Step 4: Post-Deploy Testing

1. **Test Email Functionality:**
   - Coba submit contact form
   - Check EmailJS dashboard untuk delivery
   - Test fallback mailto system

2. **Performance Check:**
   - Test di Google PageSpeed Insights
   - Check responsive design di berbagai device

### Step 5: Production Security

1. **EmailJS Domain Restrictions:**
   - Di EmailJS dashboard, set allowed domains
   - Add: `yourdomain.netlify.app` dan custom domain

2. **Rate Limiting:**
   - Set EmailJS rate limits per user
   - Monitor usage di dashboard

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Test production build locally
npm run serve
```

## 📂 Project Structure

```
dist/                 # Production build output
├── index.html       # Main HTML file
├── assets/          # Static assets
│   ├── css/         # Stylesheets
│   ├── javascript/  # Scripts with injected env vars
│   └── images/      # Images and media
└── netlify.toml     # Netlify configuration
```

## 🌐 Environment Variables

### Development (.env)
```
EMAILJS_PUBLIC_KEY=0S__LEFgdWu7Y6NY1
EMAILJS_SERVICE_ID=service_11b82rf
EMAILJS_TEMPLATE_ID=template_agyaenb
```

### Production (Netlify Dashboard)
```
EMAILJS_PUBLIC_KEY=your_production_key
EMAILJS_SERVICE_ID=your_production_service
EMAILJS_TEMPLATE_ID=your_production_template
```

## 🛡️ Security Features

- ✅ Content Security Policy headers
- ✅ XSS protection
- ✅ HTTPS automatic redirect
- ✅ Domain restrictions on EmailJS
- ✅ Rate limiting on contact form
- ✅ Fallback mailto system

## 📈 Performance Optimizations

- ✅ Minified CSS/JS
- ✅ Optimized images
- ✅ CDN delivery via Netlify
- ✅ Gzip compression
- ✅ Browser caching headers

---

**Status:** Ready for production deployment 🚀
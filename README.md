# 🚀 Portfolio Jefta Supraja - V2.0

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Portfolio profesional dengan integrasi EmailJS dan sistem deployment modern**

## 🌟 **Live Demo**
- **Development:** [Local Preview](http://localhost:8090)
- **Production:** [Coming Soon - Deploy to Netlify]

## ✨ **Fitur Utama**

### 🎨 **Design & UI**
- ✅ Responsive design untuk semua device
- ✅ Modern minimalis interface
- ✅ Smooth animations dengan GSAP
- ✅ Mobile-first approach
- ✅ Dark theme dengan accent colors

### 📧 **Contact System**
- ✅ EmailJS integration untuk contact form
- ✅ Environment variables untuk credential security
- ✅ Fallback mailto system untuk reliability
- ✅ Form validation dan error handling
- ✅ Success/error message feedback

### 🛡️ **Security & Performance**
- ✅ Content Security Policy (CSP) headers
- ✅ Environment variables protection
- ✅ XSS dan clickjacking protection
- ✅ Optimized assets dan lazy loading
- ✅ CDN delivery via Netlify

### 🚀 **Deployment Ready**
- ✅ Netlify configuration (`netlify.toml`)
- ✅ Auto-build system dengan environment injection
- ✅ GitHub integration untuk auto-deploy
- ✅ Production dan development environments

## 🛠️ **Tech Stack**

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styles + Bootstrap
- **JavaScript ES6+** - Modern JS features
- **GSAP** - Animations
- **Slick** - Carousel/slider

### Integration & Services
- **EmailJS** - Email service integration
- **Netlify** - Hosting dan CDN
- **GitHub** - Version control
- **Node.js** - Build tools

### Build Tools
- **Environment Variables** - Secure credential management
- **Build Scripts** - Asset optimization
- **Git Workflow** - Branch-based development

## 📦 **Quick Start**

### Prerequisites
- Node.js 18+ installed
- Git installed
- EmailJS account (free)

### Installation
```bash
# Clone repository (branch ini)
git clone -b portfolio-v2-netlify https://github.com/jefthah/jeftaPortfolio.git
cd jeftaPortfolio

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env dengan EmailJS credentials Anda

# Build dan run development server
npm run dev
```

### Development Commands
```bash
# Build project
npm run build

# Run development server dengan live reload
npm run dev

# Serve production build locally
npm run serve

# Deploy to Netlify
npm run deploy
```

## ⚙️ **Configuration**

### Environment Variables
```bash
# .env file
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

### EmailJS Setup
1. Buat akun di https://emailjs.com/
2. Create email service (Gmail/Outlook)
3. Create email template
4. Copy credentials ke `.env` file
5. Test contact form

## 🚀 **Deployment**

### Option 1: Netlify (Recommended)
```bash
# Deploy to Netlify
npm run deploy

# Deploy preview
npm run deploy:preview
```

### Option 2: GitHub Pages
```bash
# Deploy to GitHub Pages
npm run deploy:github
```

### Option 3: Manual Upload
1. Run `npm run build`
2. Upload `dist/` folder ke hosting provider

## 📁 **Project Structure**

```
portfolio-v2-netlify/
├── 📂 assets/                 # Static assets
│   ├── 📂 css/               # Stylesheets
│   ├── 📂 javascript/        # Scripts
│   ├── 📂 images/            # Images & media
│   └── 📂 pdf/               # Documents
├── 📂 scripts/               # Build scripts
├── 📂 dist/                  # Production build
├── 📄 index.html            # Main HTML file
├── 📄 netlify.toml          # Netlify config
├── 📄 package.json          # Dependencies
├── 📄 .env.example          # Environment template
└── 📄 DEPLOYMENT.md         # Deployment guide
```

## 🔄 **Branch Strategy**

- **`main`** - Original portfolio (stable)
- **`portfolio-v2-netlify`** - Updated version dengan EmailJS ✨ **CURRENT**

> Branch ini tidak mengganggu main branch yang sudah ada!

## 📈 **Features Breakdown**

### Contact Form Features
- [x] Real-time form validation
- [x] EmailJS integration
- [x] Fallback mailto system
- [x] Copy-to-clipboard functionality
- [x] Success/error notifications
- [x] Rate limiting protection

### Performance Optimizations
- [x] Minified CSS/JS assets
- [x] Optimized images
- [x] Lazy loading implementation
- [x] CDN delivery
- [x] Browser caching headers
- [x] Gzip compression

### Security Features
- [x] Content Security Policy
- [x] XSS protection headers
- [x] Environment variables
- [x] Input sanitization
- [x] HTTPS enforcement
- [x] Domain restrictions

## 🎯 **Next Steps**

1. **Setup Production EmailJS:**
   - Create new EmailJS service untuk production
   - Update environment variables di Netlify
   - Test email delivery

2. **Custom Domain (Optional):**
   - Purchase domain: `jeftasupraja.com`
   - Configure DNS settings
   - Enable SSL certificate

3. **Analytics & Monitoring:**
   - Google Analytics integration
   - Performance monitoring
   - Error tracking

## 📞 **Contact & Support**

- **Email:** jefta.supraja@gmail.com
- **GitHub:** [@jefthah](https://github.com/jefthah)
- **Portfolio:** [Live Website]

## 📄 **License**

MIT License - feel free to use for your own projects!

---

**Status:** ✅ Ready for Production Deployment

> **Note:** Branch ini menggunakan teknologi terbaru dan best practices untuk deployment modern. Original portfolio di main branch tetap tidak terganggu!
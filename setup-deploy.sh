#!/bin/bash

# Setup script untuk deployment Netlify
# Jalankan: chmod +x setup-deploy.sh && ./setup-deploy.sh

echo "🚀 Setting up Portfolio Deployment..."

# Step 1: Install Netlify CLI jika belum ada
echo "📦 Installing Netlify CLI..."
npm install -g netlify-cli

# Step 2: Build project
echo "🔨 Building project..."
npm run build

# Step 3: Initialize Git repository
echo "📂 Setting up Git repository..."
git init
git add .
git commit -m "feat: Initial portfolio setup with secure EmailJS integration

- Complete portfolio website for Jefta Supraja
- EmailJS contact form with fallback system
- Responsive design with mobile optimization
- Environment variables for secure credential management
- Netlify deployment configuration
- Security headers and CSP implementation"

# Step 4: Setup remote repository (user needs to create GitHub repo first)
echo "⚠️  IMPORTANT: Create a GitHub repository first, then run:"
echo "   git remote add origin https://github.com/yourusername/portfolio.git"
echo "   git branch -M main"
echo "   git push -u origin main"

# Step 5: Netlify setup instructions
echo ""
echo "🌐 NETLIFY DEPLOYMENT STEPS:"
echo ""
echo "1. Create production EmailJS service:"
echo "   - Go to https://emailjs.com/"
echo "   - Create new service: 'portfolio-production'"
echo "   - Note down new credentials"
echo ""
echo "2. Deploy to Netlify:"
echo "   a) GitHub Integration (Recommended):"
echo "      - Connect GitHub repo at https://netlify.com/"
echo "      - Auto-deploy on push enabled"
echo ""
echo "   b) Manual Deploy:"
echo "      netlify deploy --prod --dir=dist"
echo ""
echo "3. Set Environment Variables in Netlify Dashboard:"
echo "   Site Settings → Environment Variables:"
echo "   - EMAILJS_PUBLIC_KEY=your_production_key"
echo "   - EMAILJS_SERVICE_ID=your_production_service"
echo "   - EMAILJS_TEMPLATE_ID=your_production_template"
echo ""
echo "4. Configure EmailJS Domain Restrictions:"
echo "   - Add your Netlify domain: *.netlify.app"
echo "   - Add custom domain if using one"
echo ""
echo "✅ Ready for deployment!"
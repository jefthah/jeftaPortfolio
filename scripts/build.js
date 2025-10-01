const fs = require('fs-extra');
const path = require('path');
require('dotenv').config();

const sourceDir = path.join(__dirname, '..');
const distDir = path.join(__dirname, '..', 'dist');

async function build() {
  try {
    console.log('🚀 Starting build process...');
    
    // Clean dist directory
    await fs.remove(distDir);
    await fs.ensureDir(distDir);
    
    // Copy specific files and directories to dist
    const filesToCopy = [
      'index.html',
      'assets',
      'netlify.toml',
      'vercel.json',
      'sitemap.xml',
      'robots.txt',
      'google1d194bff08215c4d.html'
    ];
    
    for (const file of filesToCopy) {
      const srcPath = path.join(sourceDir, file);
      const destPath = path.join(distDir, file);
      
      if (await fs.pathExists(srcPath)) {
        await fs.copy(srcPath, destPath);
      }
    }
    
    // Read index.html
    const indexPath = path.join(distDir, 'index.html');
    let indexHtml = await fs.readFile(indexPath, 'utf8');
    
    // Inject environment variables as meta tags
    const envMeta = `
    <!-- Environment Variables -->
    <meta name="emailjs-public-key" content="${process.env.EMAILJS_PUBLIC_KEY || ''}">
    <meta name="emailjs-service-id" content="${process.env.EMAILJS_SERVICE_ID || ''}">
    <meta name="emailjs-template-id" content="${process.env.EMAILJS_TEMPLATE_ID || ''}">`;
    
    // Insert meta tags before closing head tag
    indexHtml = indexHtml.replace('</head>', `${envMeta}\n  </head>`);
    
    // Write updated index.html
    await fs.writeFile(indexPath, indexHtml);
    
    // Update config.js to prioritize meta tags
    const configPath = path.join(distDir, 'assets', 'javascript', 'config.js');
    let configJs = await fs.readFile(configPath, 'utf8');
    
    // Replace fallback values with production values
    configJs = configJs.replace(
      /EMAILJS_PUBLIC_KEY: 'template_agyaenb'/,
      `EMAILJS_PUBLIC_KEY: '${process.env.EMAILJS_PUBLIC_KEY || 'template_agyaenb'}'`
    );
    configJs = configJs.replace(
      /EMAILJS_SERVICE_ID: 'service_11b82rf'/,
      `EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID || 'service_11b82rf'}'`
    );
    configJs = configJs.replace(
      /EMAILJS_TEMPLATE_ID: 'template_contact'/,
      `EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID || 'template_contact'}'`
    );
    
    await fs.writeFile(configPath, configJs);
    
    console.log('✅ Build completed successfully!');
    console.log(`📁 Built files are in: ${distDir}`);
    
    // Validate environment variables
    const requiredEnvs = ['EMAILJS_PUBLIC_KEY', 'EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID'];
    const missing = requiredEnvs.filter(env => !process.env[env]);
    
    if (missing.length > 0) {
      console.warn('⚠️  Missing environment variables:', missing.join(', '));
      console.warn('   Make sure to set these in your deployment platform');
    } else {
      console.log('✅ All environment variables are set');
    }
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
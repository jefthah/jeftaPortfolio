// Environment Configuration
// This file handles environment variables for different deployment environments

class Config {
  constructor() {
    // Try to get environment variables from different sources
    this.env = this.getEnvironmentVariables();
  }

  getEnvironmentVariables() {
    // For client-side applications, we need to inject these at build time
    // or use a build process that replaces these placeholders
    
    // Method 1: From window object (injected by build process)
    if (typeof window !== 'undefined' && window.ENV) {
      return {
        EMAILJS_PUBLIC_KEY: window.ENV.EMAILJS_PUBLIC_KEY,
        EMAILJS_SERVICE_ID: window.ENV.EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID: window.ENV.EMAILJS_TEMPLATE_ID
      };
    }
    
    // Method 2: From meta tags (injected by server)
    const publicKey = this.getMetaContent('emailjs-public-key');
    const serviceId = this.getMetaContent('emailjs-service-id');
    const templateId = this.getMetaContent('emailjs-template-id');
    
    if (publicKey && serviceId && templateId) {
      return {
        EMAILJS_PUBLIC_KEY: publicKey,
        EMAILJS_SERVICE_ID: serviceId,
        EMAILJS_TEMPLATE_ID: templateId
      };
    }
    
    // Method 3: Fallback to development values (will be replaced by build process)
    return {
      EMAILJS_PUBLIC_KEY: 'sWiQn0p5H1v3vVGNB',
      EMAILJS_SERVICE_ID: 'service_0pu6zik', 
      EMAILJS_TEMPLATE_ID: 'template_eul4w5g'
    };
  }

  getMetaContent(name) {
    const meta = document.querySelector(`meta[name="${name}"]`);
    return meta ? meta.getAttribute('content') : null;
  }

  get(key) {
    return this.env[key];
  }

  // Validate that all required environment variables are present
  validateConfig() {
    const required = ['EMAILJS_PUBLIC_KEY', 'EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID'];
    const invalid = ['YOUR_PUBLIC_KEY_HERE', 'YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', 
                     'DISABLED'];
    
    const missing = required.filter(key => 
      !this.env[key] || 
      this.env[key] === 'your_' + key.toLowerCase() + '_here' ||
      invalid.includes(this.env[key])
    );
    
    if (missing.length > 0) {
      console.warn('EmailJS configuration not set or invalid:', missing);
      console.warn('Please check EMAILJS_SETUP.md for setup instructions');
      return false;
    }
    
    console.log('✅ EmailJS configuration is valid');
    return true;
  }
}

// Export for use in other files
window.AppConfig = new Config();
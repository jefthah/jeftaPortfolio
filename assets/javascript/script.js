// Contact form EmailJS integration
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  // Wait for config to be available
  if (!window.AppConfig) {
    console.error('Config not loaded. Make sure config.js is included before script.js');
    return;
  }

  // Get EmailJS configuration from environment
  var EMAILJS_PUBLIC_KEY = window.AppConfig.get('EMAILJS_PUBLIC_KEY');
  var EMAILJS_SERVICE_ID = window.AppConfig.get('EMAILJS_SERVICE_ID');
  var EMAILJS_TEMPLATE_ID = window.AppConfig.get('EMAILJS_TEMPLATE_ID');
  
  // Debug: Log credentials
  console.log('EmailJS Debug:', {
    publicKey: EMAILJS_PUBLIC_KEY,
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
    emailjsAvailable: !!window.emailjs
  });

  // Validate configuration
  if (!window.AppConfig.validateConfig()) {
    console.warn('EmailJS configuration incomplete. Email sending will use fallback mode (mailto).');
    console.warn('To enable direct email sending, please setup EmailJS credentials in .env file');
  }

  // Initialize EmailJS when available
  if (window.emailjs && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var sendBtn = document.getElementById('sendBtn');
    var messageContainer = document.getElementById('messageContainer') || createMessageContainer();
    
    // Clear previous messages
    clearMessages();
    
    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.classList.add('loading');
      sendBtn.innerHTML = 'Mengirim... <img src="assets/images/svg/right-arrow.svg" alt="right-arrow" />';
    }

    var formData = {
      name: document.getElementById('contact-name')?.value.trim() || '',
      email: document.getElementById('contact-email')?.value.trim() || '',
      subject: document.getElementById('contact-subject')?.value.trim() || '',
      message: document.getElementById('contact-message')?.value.trim() || ''
    };

    // Enhanced validation
    if (!formData.name) {
      showMessage('Nama wajib diisi.', 'error');
      resetButton();
      return;
    }
    
    if (!formData.email) {
      showMessage('Email wajib diisi.', 'error');
      resetButton();
      return;
    }
    
    // Email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showMessage('Format email tidak valid.', 'error');
      resetButton();
      return;
    }
    
    if (!formData.subject) {
      showMessage('Subject wajib diisi.', 'error');
      resetButton();
      return;
    }
    
    if (!formData.message) {
      showMessage('Pesan wajib diisi.', 'error');
      resetButton();
      return;
    }

    // Check if EmailJS is properly configured
    var emailjsConfigured = window.emailjs && 
                           EMAILJS_PUBLIC_KEY && 
                           EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY' && 
                           EMAILJS_SERVICE_ID && 
                           EMAILJS_SERVICE_ID !== 'YOUR_EMAILJS_SERVICE_ID' && 
                           EMAILJS_TEMPLATE_ID && 
                           EMAILJS_TEMPLATE_ID !== 'YOUR_EMAILJS_TEMPLATE_ID';

    if (emailjsConfigured) {
      // Try EmailJS first
      console.log('Sending email with EmailJS...');
      
      var templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'jefta.supraja@gmail.com'
      };

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function (response) {
          console.log('Email sent successfully:', response);
          showMessage('✅ Pesan berhasil terkirim secara otomatis! Terima kasih sudah menghubungi saya.', 'success');
          form.reset();
          resetButton();
        })
        .catch(function (err) {
          console.error('EmailJS error:', err);
          showMessage('❌ EmailJS tidak dapat mengirim email. Menggunakan alternatif...', 'warning');
          
          // Fallback to mailto after 2 seconds
          setTimeout(function() {
            openEmailClient();
          }, 2000);
        });
    } else {
      // EmailJS not configured, use direct email client
      console.log('EmailJS not configured, opening email client...');
      showMessage('📧 Membuka email client untuk mengirim pesan...', 'info');
      setTimeout(function() {
        openEmailClient();
      }, 1000);
    }

    function openEmailClient() {
      var subject = encodeURIComponent('Portfolio Contact: ' + formData.subject);
      var body = encodeURIComponent(
        'Halo Jefta,\n\n' +
        'Saya ingin menghubungi Anda melalui portfolio website.\n\n' +
        'Detail pesan:\n' +
        'Nama: ' + formData.name + '\n' +
        'Email: ' + formData.email + '\n' +
        'Subject: ' + formData.subject + '\n\n' +
        'Pesan:\n' + formData.message + '\n\n' +
        'Terima kasih,\n' + formData.name
      );
      
      var mailtoLink = 'mailto:jefta.supraja@gmail.com?subject=' + subject + '&body=' + body;
      
      try {
        window.open(mailtoLink, '_blank');
        showMessage('✅ Email client terbuka! Silakan klik Send untuk mengirim pesan.', 'success');
        form.reset();
      } catch (error) {
        console.error('Mailto error:', error);
        showMessage('⚠️ Tidak dapat buka email client. Silakan kirim manual ke: jefta.supraja@gmail.com', 'warning');
        showContactInfo();
      }
      
      resetButton();
    }

    function showContactInfo() {
      var contactDiv = document.createElement('div');
      contactDiv.className = 'contact-info-message';
      contactDiv.innerHTML = `
        <div style="background: #f0f8ff; padding: 20px; border-radius: 10px; margin: 15px 0; border-left: 4px solid #007bff;">
          <strong>📧 Kontak Manual:</strong><br><br>
          <strong>Email:</strong> jefta.supraja@gmail.com<br>
          <strong>Subject:</strong> ${formData.subject}<br><br>
          <strong>Data Anda:</strong><br>
          Nama: ${formData.name}<br>
          Email: ${formData.email}<br><br>
          <strong>Pesan:</strong><br>${formData.message.replace(/\n/g, '<br>')}<br><br>
          <button onclick="copyContactData()" style="background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
            📋 Copy Email & Data
          </button>
        </div>
      `;
      
      messageContainer.appendChild(contactDiv);
      
      // Auto remove after 60 seconds
      setTimeout(function() {
        if (contactDiv.parentNode) {
          contactDiv.remove();
        }
      }, 60000);
    }
    
    function resetButton() {
      if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.classList.remove('loading');
        sendBtn.innerHTML = 'Send Message <img src="assets/images/svg/right-arrow.svg" alt="right-arrow" />';
      }
    }
    
    function createMessageContainer() {
      var container = document.createElement('div');
      container.id = 'messageContainer';
      container.style.position = 'relative';
      form.parentNode.insertBefore(container, form.nextSibling);
      return container;
    }
    
    function showMessage(message, type) {
      var messageDiv = document.createElement('div');
      var className = 'success-message';
      
      if (type === 'error') className = 'error-message';
      else if (type === 'warning') className = 'warning-message';
      else if (type === 'info') className = 'info-message';
      
      messageDiv.className = className;
      messageDiv.textContent = message;
      messageContainer.appendChild(messageDiv);
      
      // Auto hide message after 5 seconds
      setTimeout(function() {
        if (messageDiv.parentNode) {
          messageDiv.style.animation = 'slideOut 0.5s ease';
          setTimeout(function() {
            if (messageDiv.parentNode) {
              messageDiv.remove();
            }
          }, 500);
        }
      }, 5000);
    }
    
    function clearMessages() {
      if (messageContainer) {
        messageContainer.innerHTML = '';
      }
    }

  });
});

// Global function for copying contact data
function copyContactData() {
  var contactInfo = `Email: jefta.supraja@gmail.com

Subject: Portfolio Contact

Silakan copy informasi di bawah ini dan kirim via email:

${document.querySelector('.contact-info-message').textContent.replace('📋 Copy Email & Data', '').trim()}`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(contactInfo).then(function() {
      alert('✅ Data berhasil di-copy! Silakan paste di email client Anda.');
    });
  } else {
    // Fallback for older browsers
    var textArea = document.createElement('textarea');
    textArea.value = contactInfo;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('✅ Data berhasil di-copy! Silakan paste di email client Anda.');
  }
}

// Typing Text Js
$(document).on('DOMContentLoaded', function () {
    window.ityped.init(document.querySelector('.ityped'), {
        strings: ['HI THERE!', 'I’M Jefta Supraja', 'Full Stack Developer', 'Based in Jakarta, Indonesia'],
        loop: true
    });
});
/*------------------------------------- Whole Page Scrolling Animation -------------------------------------*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
        target.classList.toggle('show', isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down');

document.addEventListener('DOMContentLoaded', () => {
    hiddenElements.forEach((el) => observer.observe(el));
});
/*------------------------------------- Preloader -------------------------------------*/
(function ($) {
    $(window).on('load', function () {
        const svg = document.getElementById("loade-svg");
        const tl = gsap.timeline();

        const shapes = {
            start: "M0 502S175 272 500 272s500 230 500 230V0H0Z",
            end: "M0 2S175 1 500 1s500 1 500 1V0H0Z"
        };

        tl.to(".loading", {
            delay: 1.2,
            y: -50,
            opacity: 0,
            duration: 0.6
        })
            .to(svg, {
                duration: 0.6,
                attr: { d: shapes.start },
                ease: "power1.easeIn"
            })
            .to(svg, {
                duration: 0.6,
                attr: { d: shapes.end },
                ease: "power1.easeOut"
            })
            .to(".preloader", {
                y: -1000,
                duration: 0.8
            })
            .set(".preloader", {
                zIndex: -1,
                display: "none"
            });
    });
}(jQuery));
/*------------------------------------- Menu Toggle -------------------------------------*/
$(document).ready(function () {
    const $menuToggle = $('#menu-toggle');
    const $sideMenu = $('.side-menu-main');
    const $hamburger = $('.hamburger');

    $(document).on('click', '.menu-list-main li', function (e) {
        e.preventDefault();

        const $link = $(this).find('a');
        const targetId = $link.attr('href') ? $link.attr('href').substring(1) : null;

        if (targetId && $('#' + targetId).length) {
            $('#' + targetId)[0].scrollIntoView({ behavior: 'smooth' });
        }

        $sideMenu.removeClass('show');
        $hamburger.removeClass('is-active');
    });

    $menuToggle.on('click', function () {
        $sideMenu.toggleClass('show');
        $hamburger.toggleClass('is-active', $sideMenu.hasClass('show'));
    });

    new MutationObserver(() => {
        if (!$sideMenu.hasClass('show')) {
            $hamburger.removeClass('is-active');
        }
    }).observe($sideMenu[0], { attributes: true, attributeFilter: ['class'] });
});

/*------------------------------------- Scroll counter -------------------------------------*/
var counted = 0;
$(window).on('scroll', function () {
    var oTop = $('.counter').offset()?.top - window.innerHeight;
    if (counted === 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 800,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });
        counted = 1;
    }
});

/*------------------------------------- Tabs -------------------------------------*/
$(function () {
    $(document).on('click', '.tab-btn-main a', function (e) {
        e.preventDefault();
        const tabId = $(this).data('tab');
        $('.tab-btn-main a, .Tabcondent').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('#' + tabId).addClass('tab-active');
    });
});

/*------------------------------------- Pop Videos -------------------------------------*/
$(document).ready(function () {
    $('.vimeo').magnificPopup({
        items: {
            src: 'https://vimeo.com/259411563'
        },
        type: 'iframe'
    });

    $('.youtube').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=PavYAOpVpJI'
        },
        type: 'iframe'
    });

    $('.soundcloud').magnificPopup({
        type: 'soundcloud',
        items: {
            src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        type: 'iframe',
    });
});

/*------------------------------------- Testimonial Slider -------------------------------------*/
$(document).ready(function () {
    $('.testimonial').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 1000,
    });
});
/*------------------------------------- Infinite Marquee -------------------------------------*/
document.querySelectorAll('.logos').forEach(function (logosContainer) {
    const copy = logosContainer.querySelector('.logos-slide').cloneNode(true);
    logosContainer.appendChild(copy);
});

/*------------------------------------- Skill Bar Circular -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const progressItems = document.querySelectorAll(".progress-item");
    const colors = ['#bce70c', '#ff759c', '#00cc97', '#ffdb59', '#6f39fd'];

    // Add skill labels and initialize colors
    progressItems.forEach((item, index) => {
        const skillName = item.getAttribute("data-skill");
        const skillLabel = document.createElement("div");
        skillLabel.className = "skill-label";
        skillLabel.textContent = skillName;

        item.appendChild(skillLabel);

        const color = colors[index % colors.length];
        item.style.background = `conic-gradient(${color} 0%, #000000 0%)`;
    });

    const progressSection = document.querySelector("#progress");
    const observerOptions = { threshold: 0.3 };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                progressItems.forEach((item, index) => {
                    const skillValue = parseInt(item.getAttribute("data-value"));
                    const color = colors[index % colors.length];
                    let count = 0;
                    const interval = setInterval(() => {
                        if (count >= skillValue) {
                            clearInterval(interval);
                        } else {
                            count++;
                            item.style.background = `conic-gradient(${color} ${count}%, #000000 ${count}%)`;
                            item.setAttribute("data-value", count);
                        }
                    }, 20);
                });
                observer.unobserve(progressSection);
            }
        });
    }, observerOptions);
    observer.observe(progressSection);
});
/*------------------------------------- Bottom To Top Button -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.bottom-top-button');
    window.addEventListener('scroll', () => {
        button.style.display = window.pageYOffset > 100 ? 'block' : 'none';
    });
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/*------------------------------------- Fix Header Add Class -------------------------------------*/
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/*------------------------------------- Menu active button  -------------------------------------*/
const li = document.querySelectorAll(".menu-btn");
const sec = document.querySelectorAll(".active_menus");

function activeMenu() {
    let len = sec.length;
    while (len--) {
        if (window.scrollY + 97 >= sec[len].offsetTop) {
            li.forEach(ltx => ltx.classList.remove("active"));
            li[len].classList.add("active");
            break;
        }
    }
}
activeMenu();
window.addEventListener("scroll", activeMenu);

/*------------------------------------- Fancybox Initialization for Certificates -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Fancybox for certificates
    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind("[data-fancybox='certificates']", {
            Thumbs: {
                autoStart: false,
            },
            Toolbar: {
                display: [
                    { id: "prev", position: "center" },
                    { id: "counter", position: "center" },
                    { id: "next", position: "center" },
                    "zoom",
                    "slideshow",
                    "fullscreen",
                    "download",
                    "thumbs",
                    "close",
                ],
            },
        });
    }
});

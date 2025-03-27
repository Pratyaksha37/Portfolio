// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
      
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
          const icon = toggle.querySelector('i');
          icon.textContent = nav.classList.contains('show') ? '✕' : '☰';
        });
      }
    };
    
    showMenu('nav-toggle', 'nav-menu');
    
    // Scroll sections active link
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
      const scrollY = window.pageYOffset;
      
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active');
        } else {
          document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active');
        }
      });
    }
    
    window.addEventListener('scroll', scrollActive);
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('nav-menu').classList.remove('show');
        document.querySelector('#nav-toggle i').textContent = '☰';
      });
    });
    
    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize ScrollReveal for animations
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: false
    });
    
    // Apply animations to different sections
    sr.reveal('.hero-text', { origin: 'left' });
    sr.reveal('.hero-image', { origin: 'right', delay: 400 });
    sr.reveal('#about h2', { origin: 'top' });
    sr.reveal('.about-text', { delay: 300 });
    sr.reveal('.skill-card', { interval: 100 });
    sr.reveal('#projects h2', { origin: 'top' });
    // Project cards have their own CSS animations
    sr.reveal('#contact h2', { origin: 'top' });
    sr.reveal('.contact-info', { origin: 'left', delay: 300 });
    sr.reveal('.contact-form', { origin: 'right', delay: 300 });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.querySelector('.success-message');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
          name: this.elements.name.value,
          email: this.elements.email.value,
          message: this.elements.message.value
        };
        
        // Log form data (in a real app, you would send this to a server)
        console.log('Form submitted:', formData);
        
        // Show success message
        for (const element of this.elements) {
          if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.value = '';
          }
        }
        
        successMessage.style.display = 'block';
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 3000);
      });
    }
  
    // Enhanced project cards animation on hover with tilt effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        const img = this.querySelector('.project-image img');
        if (img) img.style.transform = 'scale(1.05)';
        
        // Add subtle tilt effect based on mouse position
        card.addEventListener('mousemove', handleTilt);
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
        const img = this.querySelector('.project-image img');
        if (img) img.style.transform = '';
        
        // Remove tilt effect
        card.removeEventListener('mousemove', handleTilt);
        this.style.transform = 'translateY(-10px)';
      });
      
      // Tilt effect function
      function handleTilt(e) {
        const cardRect = this.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;
        const tiltX = (mouseY / cardRect.height * 10) * -1; // Reversed for natural tilt
        const tiltY = (mouseX / cardRect.width * 10);
        
        this.style.transform = `translateY(-10px) perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
    });
  });
  
  // Function to handle smooth scrolling when clicking on navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
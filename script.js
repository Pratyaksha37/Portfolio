document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const showMenu = (toggleId, navId) =>{
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show')
            })
        }
    }
    showMenu('nav-toggle','nav-menu')

    // Remove menu mobile
    const navLink = document.querySelectorAll('.nav-link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav-link, we remove the show-menu class
        navMenu.classList.remove('show')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    // Scroll sections active link
    const sections = document.querySelectorAll('section[id]')

    const scrollActive = () =>{
        const scrollDown = window.scrollY

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav-links a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active')
            }else{
                sectionsClass.classList.remove('active')
            }                                                    
        })
    }
    window.addEventListener('scroll', scrollActive)

    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    });

    // Apply reveal animations
    sr.reveal('.home__data, .about-text, .skills__subtitle, .skills__text',{}); 
    sr.reveal('.hero-image, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
    sr.reveal('.social-links a',{ interval: 200}); 
    sr.reveal('.skill-card',{interval: 200}); 
    sr.reveal('.project-card',{interval: 200}); 
    sr.reveal('.contact-form, .contact-info',{interval: 200}); 

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);

            // Clear form
            this.reset();

            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
        });
    }

    // Skill cards hover effect
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
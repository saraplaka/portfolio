// JavaScript for Portfolio Website



// Form submission logic
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

      
        alert('Thank you for your message! We will get back to you soon.');

        
        contactForm.reset();
    });
}



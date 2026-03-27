// Top of script.js
import { initAboutLogic } from './about.js';

// Initialize everything
lucide.createIcons();
initAboutLogic();

// ... rest of your existing main script logic ...



// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Logic
const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
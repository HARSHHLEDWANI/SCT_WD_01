// JavaScript to change navbar color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// JavaScript to change link color on hover (optional since CSS :hover is used)
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.background = '#555';
        link.style.color = '#fff';
    });
    link.addEventListener('mouseout', () => {
        link.style.background = '';
        link.style.color = '';
    });
});

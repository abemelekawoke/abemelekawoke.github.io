// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    document.body.appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
});
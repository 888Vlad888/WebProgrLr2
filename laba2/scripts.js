const imageFrame = document.querySelector('.image-frame');
const image = imageFrame.querySelector('img');

imageFrame.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.05)'; /* Менше збільшення для плавності */
    image.style.transition = 'transform 0.3s ease-in-out';
});

imageFrame.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.3s ease-in-out';
});

const navLinks = document.querySelectorAll('.main-nav a, .sidebar a, .footer-nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('hovered');
    });
});
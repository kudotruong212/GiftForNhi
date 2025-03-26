// script.js
document.getElementById('noBtn').addEventListener('mouseover', function() {
    const btn = this;
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    btn.style.position = 'absolute';
    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
    btn.style.transition = 'all 0.2s ease';
});

// Thêm decorations
function addDecorations() {
    const decorations = document.querySelector('.decorations');
    
    // Thêm 10 trái tim
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDelay = Math.random() * 5 + 's';
        decorations.appendChild(heart);
    }
    
    // Thêm 5 con vịt
    for (let i = 0; i < 5; i++) {
        const duck = document.createElement('i');
        duck.className = 'fas fa-duck duck';
        duck.style.top = Math.random() * 80 + 10 + 'vh';
        duck.style.animationDelay = Math.random() * 10 + 's';
        decorations.appendChild(duck);
    }
}

document.addEventListener('DOMContentLoaded', addDecorations);

// gallery.js
const images = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.image-container');
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        container.appendChild(img);
    });
    addDecorations();
});
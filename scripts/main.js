document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт полностью загружен');
    
    // Анимация для карточек
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Форма отправлена! (Это демо, данные никуда не отправляются)');
        this.reset();
    });
}

const galleryContainer = document.querySelector(‘.gallery-container’);

const images = document.querySelectorAll(‘.gallery-image’);

const prevButton = document.getElementById(‘prev-btn’);

const nextButton = document.getElementById(‘next-btn’);

let currentImageIndex = 0;


function showImage(index) {

images.forEach((image, i) => {

if (i === index) {

image.style.transform = ‘scale(1)’;

} else {

image.style.transform = ‘scale(0)’;

}

});

}


function showPreviousImage() {

currentImageIndex = (currentImageIndex — 1 + images.length) % images.length;

showImage(currentImageIndex);

}


function showNextImage() {

currentImageIndex = (currentImageIndex + 1) % images.length;

showImage(currentImageIndex);

}


prevButton.addEventListener(‘click’, showPreviousImage);

nextButton.addEventListener(‘click’, showNextImage);


showImage(currentImageIndex);

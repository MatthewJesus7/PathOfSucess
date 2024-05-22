let currentSlideIndex = 0;

function showInfo(card) {
    const info = card.querySelector('.info');
    info.style.opacity = '1';
    info.style.backdropFilter = 'blur(5px)';
}

function hideInfo(card) {
    const info = card.querySelector('.info');
    info.style.opacity = '0';
    info.style.backdropFilter = 'none';
}

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    currentSlideIndex = (currentSlideIndex + direction + items.length) % items.length;
    updateCarousel();
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    updateCarousel();
}

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-post-inner');
    const dots = document.querySelectorAll('.dot');
    carouselInner.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

// Set the first dot as active initially
document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
});

// arrumar daqui pra cima

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorDots = document.querySelectorAll('.indicator-dot');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < 2) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

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

function updateCarousel(carouselSelector, dotsSelector, currentSlideIndex) {
    const carouselInner = document.querySelector(carouselSelector);
    const dots = document.querySelectorAll(dotsSelector);
    carouselInner.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

UpdateCarousel('.carousel-post', '.dot-post', 1);
UpdateCarousel('.carousel-item', '.indicator-dot', 1);
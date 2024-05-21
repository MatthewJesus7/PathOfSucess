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

indicatorDots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateCarousel();
    });
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicatorDots.forEach(dot => dot.classList.remove('active'));
    indicatorDots[currentIndex].classList.add('active');
}

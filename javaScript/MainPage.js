let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-post-item');

function showInfo(element) {
    // Implemente a lógica para mostrar informações sobre o cartão
}

function darkenBackground(element) {
    element.style.filter = 'brightness(70%)';
}

function lightenBackground(element) {
    element.style.filter = 'brightness(100%)';
}

function moveCarousel(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlideIndex) ? 'block' : 'none';
    });
    // Atualize os indicadores de navegação (pontos)
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    updateCarousel();
}

// Adicione um temporizador para mudar automaticamente os cartões a cada 5 segundos
setInterval(() => {
    moveCarousel(1);
}, 5000);
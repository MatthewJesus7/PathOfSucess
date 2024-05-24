// Variável global para armazenar o índice do slide atual
let currentSlideIndex = {
    carouselPost: 0,
    carouselBuy: 0
};

// Função para mover o carrossel para a esquerda ou direita
function moveCarousel(carouselName, direction) {
    if (!currentSlideIndex.hasOwnProperty(carouselName)) {
        console.error(`Invalid carouselName: ${carouselName}`);
        return;
    }
    
    const items = document.querySelectorAll(`#${carouselName} .carousel-item`);
    if (items.length === 0) {
        console.error(`No items found for carousel: ${carouselName}`);
        return;
    }
    
    currentSlideIndex[carouselName] = (currentSlideIndex[carouselName] + direction + items.length) % items.length;
    updateCarousel(carouselName, currentSlideIndex[carouselName]);
}

// Função para definir o slide atual do carrossel
function currentSlide(carouselName, index) {
    if (!currentSlideIndex.hasOwnProperty(carouselName)) {
        console.error(`Invalid carouselName: ${carouselName}`);
        return;
    }
    
    currentSlideIndex[carouselName] = index - 1;
    updateCarousel(carouselName, currentSlideIndex[carouselName]);
}

// Função para atualizar o carrossel com o novo índice do slide atual
function updateCarousel(carouselName, currentIndex) {
    const carouselInner = document.querySelector(`#${carouselName}`);
    if (!carouselInner) {
        console.error(`No carousel inner found for: ${carouselName}`);
        return;
    }
    
    const dots = document.querySelectorAll(`#${carouselName}-dots .dot`);
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Chamadas para atualizar os dois carrosséis com o primeiro slide
document.addEventListener("DOMContentLoaded", () => {
    updateCarousel('carousel-post-inner', 0);
    updateCarousel('carouselBuy', 0);
});

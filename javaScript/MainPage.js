// Guarda os índices dos slides atuais para cada carrossel
let currentSlideIndices = {
    carousel1: 0,
    carousel2: 0
};

// Função para atualizar o carrossel
function updateCarousel(carouselId) {
    const carouselInner = document.querySelector(`#${carouselId} .carousel-inner`);
    const dots = document.querySelectorAll(`#${carouselId} .dot`);
    const currentIndex = currentSlideIndices[carouselId];

    // Atualiza a posição do carrossel
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza os indicadores de pontos
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Função para mover o carrossel para um slide específico
function currentSlide(index, carouselId) {
    currentSlideIndices[carouselId] = index;
    updateCarousel(carouselId);
}

// Função para mover o carrossel para frente ou para trás
function moveCarousel(direction, carouselId) {
    const items = document.querySelectorAll(`#${carouselId} .carousel-item`);
    currentSlideIndices[carouselId] = (currentSlideIndices[carouselId] + direction + items.length) % items.length;
    updateCarousel(carouselId);
}

// Inicializa os carrosseis no slide 0
updateCarousel('carousel1');
updateCarousel('carousel2');




/*
currentSlideIndices: Um objeto para armazenar os índices dos slides atuais para cada carrossel.
updateCarousel: Atualiza a posição do carrossel e os indicadores de pontos com base no índice atual.
currentSlide: Move o carrossel para um slide específico.
moveCarousel: Move o carrossel para frente ou para trás, ajustando o índice do slide atual e chamando updateCarousel.
Inicializa ambos os carrosseis no slide 0 chamando updateCarousel para cada carrossel.
Essa lógica permite que você controle dois carrosseis de forma independente, garantindo que cada carrossel funcione corretamente com seus próprios indicadores de pontos e itens.
*/

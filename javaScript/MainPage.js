document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.carousel-post-inner');
    const slides = document.querySelectorAll('.carousel-post-item');
    const dots = document.querySelectorAll('.dot');
    const cardPosts = document.querySelectorAll('.card-post');

    function showInfo(event) {
        const cardPost = event.currentTarget;
        const info = cardPost.querySelector('.info');
        info.classList.add('show-info');
        // some após 5 segundos
        setTimeout(function() {
            info.classList.remove('show-info');
        }, 8000);
    }
    cardPosts.forEach(function(cardPost) {
        cardPost.addEventListener('click', showInfo);
    });


    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let currentIndex = 0;
  
    function getSlideWidth() {
      return slides[0].clientWidth;
    }
  
    slidesContainer.addEventListener('mousedown', startDrag);
    slidesContainer.addEventListener('touchstart', startDrag);
  
    slidesContainer.addEventListener('mouseup', endDrag);
    slidesContainer.addEventListener('mouseleave', endDrag);
    slidesContainer.addEventListener('touchend', endDrag);
  
    slidesContainer.addEventListener('mousemove', drag);
    slidesContainer.addEventListener('touchmove', drag);
  
    window.addEventListener('resize', setPositionByIndex);
  
    function startDrag(event) {
      isDragging = true;
      startPos = getPositionX(event);
      animationID = requestAnimationFrame(animation);
      slidesContainer.classList.add('grabbing');
    }
  
    function endDrag() {
      isDragging = false;
      cancelAnimationFrame(animationID);
  
      const movedBy = currentTranslate - prevTranslate;
      const slideWidth = getSlideWidth();
  
      if (movedBy < -slideWidth / 4 && currentIndex < slides.length -1) {
        currentIndex += 1;
      }
  
      if (movedBy > slideWidth / 4 && currentIndex > 0) {
        currentIndex -= 1;
      }
  
      setPositionByIndex();
      slidesContainer.classList.remove('grabbing');
    }
  
    function drag(event) {
      if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    }
  
    function getPositionX(event) {
      return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }
  
    function animation() {
      setSliderPosition();
      if (isDragging) requestAnimationFrame(animation);
    }
  
    function setSliderPosition() {
      slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
      activateDot(currentIndex);
    }
  
    function setPositionByIndex() {
      const slideWidth = getSlideWidth();
      currentTranslate = currentIndex * -slideWidth;
      prevTranslate = currentTranslate;
      setSliderPosition();
    }
  
    setPositionByIndex(); // Inicializa a posição do carrossel corretamente

    const prevButton = document.querySelector('.prev')
    const nextButton = document.querySelector('.next')
  
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
          currentIndex = 0;
        }
        setPositionByIndex();
    }
      
  
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = slides.length - 1;
        }
        setPositionByIndex();
    }
      
  
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  
    setPositionByIndex(); // Exibe o slide inicial

    // Funcão de ativar os pontos de acordo com o slide atual


    function activateDot(currentIndex) {
        dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.style.background = '#3c7ad8';
        } else {
            dot.style.background = '#424242';
        }
        });
    }
});
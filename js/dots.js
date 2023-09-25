const sliderContainer = document.querySelector('.slider-container');
    const slider1 = sliderContainer.querySelector('.slider');
    const prevButton1 = sliderContainer.querySelector('.prev-button');
    const nextButton1 = sliderContainer.querySelector('.next-button');
    const sliderDots = sliderContainer.querySelector('.slider-dots');
  
    // Получаем все изображения в слайдере
    const slides1 = slider1.querySelectorAll('img');
  
    // Создаем точки для каждого слайда
    for (let i = 0; i < slides1.length; i++) {
      const dot = document.createElement('span');
      dot.classList.add('slider-dot');
      sliderDots.appendChild(dot);
    }
  
    // Получаем все точки
    const dots = sliderDots.querySelectorAll('.slider-dot');
  
    // Устанавливаем начальный индекс активной точки
    let currentSlideIndex = 0;
  
    // Функция для обновления активной точки
    function updateDots() {
      dots.forEach((dot, index) => {
        if (index === currentSlideIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    // Функция для отображения слайда по его индексу
    function showSlide(index) {
      if (index < 0) {
        currentSlideIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentSlideIndex = 0;
      }
  
      slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
      updateDots();
    }
  
    // Обработчики событий для кнопок "Предыдущий" и "Следующий"
    prevButton.addEventListener('click', () => {
      currentSlideIndex--;
      showSlide(currentSlideIndex);
    });
  
    nextButton.addEventListener('click', () => {
      currentSlideIndex++;
      showSlide(currentSlideIndex);
    });
  
    // Обработчики событий для точек
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlideIndex = index;
        showSlide(currentSlideIndex);
      });
    });
  
    // Показываем начальный слайд
    showSlide(currentSlideIndex);
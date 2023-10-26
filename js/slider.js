const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img')); // Выбираем все элементы с классом "slide"
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1 + slideCount) % slideCount;
  slide();
});

const slide = () => {
  const slideOffset = -slideIndex * slider.clientWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});

// Get elements
const carousel = document.querySelector('.carousel');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Initialize current slide index
let currentIndex = 0;

// Set initial position
const setPosition = () => {
  slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// Move to previous slide
const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  setPosition();
};

// Move to next slide
const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  setPosition();
};

// Attach click event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
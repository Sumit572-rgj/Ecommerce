const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let currentIndex = 0;
const cardWidth = 270; // card width + margin

nextBtn.addEventListener('click', () => {
  currentIndex++;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});
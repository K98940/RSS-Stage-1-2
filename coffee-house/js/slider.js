export const initSlider = () => {
  const dots = document.querySelectorAll('.slider-dots-item');
  const slider = document.querySelector('.slider');
  const countSlides = dots.length;

  const animationEndHandle = (e) => {
    const currentSlide = parseInt(e.target.parentElement.attributes.slide.value);
    let nextSlide = currentSlide + 1 > countSlides
      ? 1
      : currentSlide + 1;
    const nextDot = document.querySelector(`[slide="${nextSlide}"]`);
    const currDot = document.querySelector(`[slide="${currentSlide}"]`);

    slider.style.setProperty('--currentSlide', `-${(nextSlide - 1) * 100}%`);
    currDot.removeAttribute('pointer');
    nextDot.setAttribute('pointer', '');
  }

  dots.forEach(dot => { dot.addEventListener('animationend', animationEndHandle) });
}
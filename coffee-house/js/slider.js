export const initSlider = () => {
  const DIRECTION_SLIDE = {
    'left': 1,
    'rigth': -1,
  };
  const dots = document.querySelectorAll('.slider-dots-item');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider-btn-left');
  const btnRight = document.querySelector('.slider-btn-right');
  const countSlides = dots.length;

  const doSlide = (_, direction = DIRECTION_SLIDE.left) => {
    const pointer = document.querySelector('.slider-dots-item[pointer]');
    const currentSlide = parseInt(pointer.attributes.slide.value);
    const getIndexNextSlide = () => {
      let index = currentSlide + direction;
      if (index > countSlides) {
        index = 1;
      } else if (index < 1) {
        index = countSlides;
      }
      return index;
    }

    const nextSlide = getIndexNextSlide();
    const nextDot = document.querySelector(`[slide="${nextSlide}"]`);
    const currDot = document.querySelector(`[slide="${currentSlide}"]`);

    slider.style.setProperty('--currentSlide', `-${(nextSlide - 1) * 100}%`);
    currDot.removeAttribute('pointer');
    nextDot.setAttribute('pointer', '');
  }

  try {
    dots.forEach(dot => { dot.addEventListener('animationend', (e) => doSlide(e)) });
    btnLeft.addEventListener('click', (e) => doSlide(e, DIRECTION_SLIDE.left));
    btnRight.addEventListener('click', (e) => doSlide(e, DIRECTION_SLIDE.rigth));
  } catch (error) {
    console.error(error);
  }
}
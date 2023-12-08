export const initSlider = () => {
  const DIRECTION_SLIDE = {
    'left': 1,
    'rigth': -1,
  };
  const touch = {
    startX: null,
    startY: null,
    endX: null,
    endY: null,
    sensetive: 20,
  };

  // ToDo сделать инициализацию как - то так:
  // initSlider(
  //   container,
  //  {
  //    paths: [path - 1, path - 2, ...path - n],
  //    autoslide: true,
  //  }
  //  )

  const dots = document.querySelectorAll('.slider-dots-item');
  if (dots.length < 1) return;
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

  const touchStart = (e) => {
    touch.startX = e.changedTouches[0].pageX
    touch.startY = e.changedTouches[0].pageY
  }

  const touchEnd = (e) => {
    touch.endX = e.changedTouches[0].pageX
    touch.endY = e.changedTouches[0].pageY
    const directionX = touch.startX - touch.endX
    if (Math.abs(directionX) < touch.sensetive) return
    if (directionX > 0) {
      doSlide(null, DIRECTION_SLIDE.left);
    } else {
      doSlide(null, DIRECTION_SLIDE.rigth);
    }
  }

  try {
    dots.forEach(dot => { dot.addEventListener('animationend', (e) => doSlide(e), { passive: true }) });
    btnLeft.addEventListener('click', (e) => doSlide(e, DIRECTION_SLIDE.rigth), { passive: true });
    btnRight.addEventListener('click', (e) => doSlide(e, DIRECTION_SLIDE.left), { passive: true });
    slider.addEventListener('touchstart', touchStart, { passive: true });
    slider.addEventListener('touchend', touchEnd, { passive: true });
  } catch (error) {
    console.error(error);
  }
}
export class Slider {
  constructor({
    container = null,
    sensitive = 20,
    direction = 'left',
    autoslide = true,
    animationDuration = '7s',
  }) {
    if (!container) return;

    this.DIRECTION_SLIDE = {
      'left': 1,
      'rigth': -1,
    };
    this.touch = {
      startX: null,
      endX: null,
    };
    this.container = container;
    this.sensitive = sensitive;
    this.direction = direction;
    this.autoslide = autoslide;
    this.animationDuration = animationDuration;
    this.renderSlider(container)
      .then(count => {
        try {
          if (!count) return;
          this.countSlides = count
          this.slider = document.querySelector('.slider');
          this.slider.style.setProperty('--animation-duration', this.animationDuration);
          this.dots = document.querySelectorAll('.slider-dots-item');
          this.btnLeft = document.querySelector('.slider-btn-left');
          this.btnRight = document.querySelector('.slider-btn-right');
          if (this.autoslide) {
            this.dots.forEach(dot => {
              dot.addEventListener('animationend', (e) => {
                this.doSlide(e, this.DIRECTION_SLIDE[this.direction])
              }, { passive: true })
            });
          }
          this.btnLeft.addEventListener('click', (e) => this.doSlide(e, this.DIRECTION_SLIDE.rigth), { passive: true });
          this.btnRight.addEventListener('click', (e) => this.doSlide(e, this.DIRECTION_SLIDE.left), { passive: true });
          this.slider.addEventListener('touchstart', this.touchStart, { passive: true });
          this.slider.addEventListener('touchend', this.touchEnd, { passive: true });
        } catch (error) {
          console.error(error);
        }
      });
  }

  async renderSlider() {

    const getSlidersData = async () => {
      try {
        const request = await fetch('./components/slider/slides.json');
        return await request.json();
      } catch (error) {
        console.error(error);
      }
    }

    const makeSlidersHtml = (sliders) => {
      return sliders.reduce((html, slide) => html + `
      <div class="slide">
        <div class="slide-content">
          <div class="slide-content-img">
            <img src="${slide.path}" alt="">
          </div>
          <div class="slide-description">
            <h3 class="slide-description-title">${slide.title}</h3>
            <p class="slide-description-content">${slide.text}</p>
            <span class="slide-description-price">${slide.price}</span>
          </div>
        </div>
      </div>
      `, '')
    }

    const makeSliderDotsHtml = (sliders) => {
      return sliders.reduce((html, _, i) => html + `
      <div class="slider-dots-item" slide="${i + 1}" ${i === 0 ? 'pointer' : ''}>
        <div class="dot-bar"></div>
      </div>
      `, '')
    }

    const slidersData = await getSlidersData();
    const slidersHtml = makeSlidersHtml(slidersData);
    const sliderDotsHtml = makeSliderDotsHtml(slidersData);
    const html = `
    <div class="slider-main">
      <div class="slider-btn-left">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke-linecap=" round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="slider-viewport">
        ${slidersHtml}
      </div>
      <div class="slider-btn-right">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </div>
    </div>
    <div class="slider-dots">
      ${sliderDotsHtml}
    </div>
    `;
    this.container.innerHTML = html;
    return slidersData.length;
  }

  doSlide(_, direction = DIRECTION_SLIDE.left) {
    const pointer = document.querySelector('.slider-dots-item[pointer]');
    const currentSlide = parseInt(pointer.attributes.slide.value);
    const getIndexNextSlide = () => {
      let index = currentSlide + direction;
      if (index > this.countSlides) {
        index = 1;
      } else if (index < 1) {
        index = this.countSlides;
      }
      return index;
    }
    const nextSlide = getIndexNextSlide(this.countSlides);
    const nextDot = document.querySelector(`[slide="${nextSlide}"]`);
    const currDot = document.querySelector(`[slide="${currentSlide}"]`);

    this.slider.style.setProperty('--currentSlide', `-${(nextSlide - 1) * 100}%`);
    currDot.removeAttribute('pointer');
    nextDot.setAttribute('pointer', '');
  }

  touchStart = (e) => {
    this.touch.startX = e.changedTouches[0].pageX
  }

  touchEnd = (e) => {
    this.touch.endX = e.changedTouches[0].pageX
    const directionX = this.touch.startX - this.touch.endX
    if (Math.abs(directionX) < this.sensitive) return
    if (directionX > 0) {
      this.doSlide(null, this.DIRECTION_SLIDE.left);
    } else {
      this.doSlide(null, this.DIRECTION_SLIDE.rigth);
    }
  }
}
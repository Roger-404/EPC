class Slider {
  selectors = {
    root: '[data-js-slider]',
    buttonPrev: '[data-js-slider-button-prev]',
    buttonNext: '[data-js-slider-button-next]'
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.buttonPrevElement = document.querySelector(this.selectors.buttonPrev)
    this.buttonNextElement = document.querySelector(this.selectors.buttonNext)
    this.bindEvents()
  }

  onButtonPrevClick = () => {
    this.rootElement.scrollBy({
      left: -290,
      behavior: 'smooth'
    })
  }

  onButtonNextClick = () => {
    this.rootElement.scrollBy({
      left: 290,
      behavior: 'smooth'
    })
  }

  bindEvents() {
    this.buttonPrevElement.addEventListener('click', this.onButtonPrevClick)
    this.buttonNextElement.addEventListener('click', this.onButtonNextClick)
  }
}

export default Slider
//burger menu
const headerOpen = document.querySelector('.header__inner')
const cross = document.querySelector('.cross-button')
const burger = document.querySelector('.burger-button')
const overlay = document.querySelector('.overlay')


burger.addEventListener('click', openMenu)
cross.addEventListener('click', closeMenu)

function openMenu(){
  headerOpen.style.setProperty(
    '--translate', 
    'translateY(-60%)'
  )
  overlay.classList.toggle('overlay--show')
}

function closeMenu(){
  headerOpen.style.setProperty(
    '--translate', 
    'translateY(-100%)'
  )
  overlay.classList.toggle('overlay--show')
}

//slider
const nextSlid = document.querySelector('.button-right')
const prevSlid = document.querySelector('.button-left')
const sliderInner = document.querySelector('.main__slider-inner')
const sliderCards = document.querySelectorAll('.main__slider-card')

let sliderCount = 0
let sliderWidth = window.innerWidth
let cardWidth = sliderCards.offsetwidth

sliderInner.style.width = `${window.innerWidth*6}px`

nextSlid.addEventListener('click', sliderNext)
prevSlid.addEventListener('click', sliderPrev)

function sliderNext(){
  sliderCount++
  windowWidth = window.innerWidth
  if(sliderCount > sliderCards.length - 1 ){
    sliderCount = 0
  }
  rollSlider();
}

function sliderPrev(){
  sliderCount--
  windowWidth = window.innerWidth

  if(sliderCount <0  ){
    sliderCount = sliderCards.length - 1
  }
  rollSlider();
}

function rollSlider(){
  sliderInner.style.transform = `translateX(${-sliderCount * (sliderWidth)}px)`
}

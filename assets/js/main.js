// МЕНЮ
let menuBtn = document.querySelector('.menu__btn');
let menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menuList.classList.toggle('opened');
})


// СЛАЙДЕР НА ГОЛОВНІЙ СТОРІНЦІ

function slider() {
  const sliderHeader = document.querySelectorAll('.slider__header')
  const sliderNote = document.querySelectorAll('.slider__note')
  const sliderIndicator = document.querySelectorAll('.slider__indicator')
  let couner = 0;

  function goToSlide(numb) {
    sliderNote.forEach(el => {
      el.classList.remove('active')
    })
    sliderNote[numb].classList.add('active')

    sliderHeader.forEach(el => {
      el.classList.remove('active')
    })
    sliderHeader[numb].classList.add('active')

    sliderIndicator.forEach(el => {
      el.classList.remove('active')
    })
    sliderIndicator[numb].classList.add('active')
  }

  function nextSlide() {
    couner++
    if (couner >= sliderHeader.length) {
      couner = 0
    }
    goToSlide(couner)
  }

  let interval = setInterval(nextSlide, 5000);

  sliderHeader.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      numb = index
      goToSlide(numb)
      clearInterval(interval)
      interval = setInterval(nextSlide, 5000)
    })
  })
}

slider()

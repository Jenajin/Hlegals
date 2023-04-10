// МЕНЮ
function menuHome() {
  let menuBtn = document.querySelector('.menu__btn');
  let menuList = document.querySelector('.menu__list');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('opened');
  })
}
menuHome()



// СЛАЙДЕР НА ГОЛОВНІЙ СТОРІНЦІ (SERVICES)
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



// СЛАЙДЕР НА ГОЛОВНІЙ СТОРІНЦІ (TEAM)
function sliderSelfWorkers() {

  const team = [
    {
      name: 'Олександр Олександровський',
      post: 'Керуючий партнер',
      href: 'images/page__team/олександр_олександровський.png'
    },
    {
      name: 'Анджеліка Романівна',
      post: 'Equity partner, Attorney-at-law',
      href: "images/page__team/анжеліка_романівна.png"
    },
    {
      name: 'Владислав Мельник',
      post: 'Associate',
      href: "images/page__team/владислав_мельник.png"
    },
    {
      name: 'Оксана Кобзар',
      post: 'Associate',
      href: "images/page__team/оксана_кобзар.png"
    },
    {
      name: 'Анатолій Олегович',
      post: 'Equity partner, Attorney-at-law',
      href: "images/page__team/анатолій_олегович.png"
    },
    {
      name: 'Юлія Гудименко',
      post: 'Associate, Attorney-at-law',
      href: "images/page__team/юлія_гудименко.png"
    },
  ]

  const roundaboutImage = document.querySelector('.roundabout__image')
  const roundaboutExcerptionWorker = document.querySelector('.roundabout-excerption__worker')
  const representationSliderІndicators = document.querySelector('.representation__slider-indicators')
  const roundaboutExcerptionPicture = document.querySelector('.roundabout-excerption__picture')


  team.forEach((el) => {
    const img = document.createElement('img')
    img.src = el.href
    img.classList.add('roundabout__picture')
    roundaboutImage.appendChild(img)

    const imgSmall = document.createElement('img')
    imgSmall.src = el.href
    imgSmall.classList.add('roundabout-excerption__image')
    roundaboutExcerptionPicture.appendChild(imgSmall)

    const name = document.createElement('div')
    name.innerText = el.name
    name.classList.add('roundabout-excerption__worker-name')
    roundaboutExcerptionWorker.appendChild(name)

    const post = document.createElement('div')
    post.innerText = el.post
    post.classList.add('roundabout-excerption__worker-post')
    roundaboutExcerptionWorker.appendChild(post)

    const dote = document.createElement('div')
    dote.classList.add('representation__slider-indicator')
    representationSliderІndicators.appendChild(dote)
  })


  const images = document.querySelectorAll('.roundabout__picture')
  const workersName = document.querySelectorAll('.roundabout-excerption__worker-name')
  const workersPost = document.querySelectorAll('.roundabout-excerption__worker-post')
  const indicators = document.querySelectorAll('.representation__slider-indicator')
  const imagesSmall = document.querySelectorAll('.roundabout-excerption__image')
  let counter = 0


  images[0].classList.add('active')
  workersName[0].classList.add('active')
  workersPost[0].classList.add('active')
  indicators[0].classList.add('active')
  imagesSmall[0].classList.add('active')


  function goToSlide(counter) {
    images.forEach(el => { el.classList.remove('active') })
    images[counter].classList.add('active')

    imagesSmall.forEach(el => { el.classList.remove('active') })
    imagesSmall[counter].classList.add('active')

    workersName.forEach(el => { el.classList.remove('active') })
    workersName[counter].classList.add('active')

    workersPost.forEach(el => { el.classList.remove('active') })
    workersPost[counter].classList.add('active')

    indicators.forEach(el => { el.classList.remove('active') })
    indicators[counter].classList.add('active')
  }

  function nextSlide() {
    counter++
    if (counter >= team.length) {
      counter = 0
    }
    goToSlide(counter)
  }

  indicators.forEach((el, index) => {
    el.addEventListener('click', () => {
      counter = index
      goToSlide(counter)
      clearInterval(interval)
      interval = setInterval(nextSlide, 5000)
    })
  })

  let interval = setInterval(nextSlide, 5000)
}
sliderSelfWorkers()



// MORE
function morePublication() {
  const button = document.querySelector('.publications-grid__more-button')
  const hide = document.querySelector('.publications-grid__more')
  const elChangeHight = document.querySelector('.publications-grid')
  const hFieldOfView = document.querySelector('.publications-grid').clientHeight
  let counter = hFieldOfView

  function openMorePublications() {
    const hFull = document.querySelector('.publications-grid').scrollHeight
   
    window.scrollBy(
      {
        left: 0,
        top: counter,
        behavior: "smooth"
      })

    counter += 300
    elChangeHight.style.height = counter + `px`

    if (counter >= hFull) {
      hide.style.display = "none"
      elChangeHight.style.height = "auto"
    }
  }

  button.addEventListener('click', () => { openMorePublications() })
}
morePublication()



// SCROLL
function scrollHomePage() {
  const button = document.querySelector('.page-header__button-image')
  const anchor = document.querySelector('section[data-action="anchor"]')

  button.addEventListener('click', (e) => {
    e.preventDefault()

    anchor.scrollIntoView({
      behavior: 'smooth',
      block: "start"
    })

  })
}
scrollHomePage()
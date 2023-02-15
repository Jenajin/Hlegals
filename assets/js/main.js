let menuBtn = document.querySelector('.menu__btn');
let menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menuList.classList.toggle('opened');
})

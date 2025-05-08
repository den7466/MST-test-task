const topMenuStatic = document.querySelector('.top-menu-container');
const topMenuFixed = document.querySelector('.top-menu-fixed');
const mobileMenuButton = document.querySelector('.mobile-menu__button');
const mobileTopMenuFixed = document.querySelector('.top-menu-fixed');
const mobileTopMenuListFixed = document.querySelector('.menu__list-fixed');

function fixedMenu() {
  if (window.scrollY > topMenuFixed.clientHeight) {
    topMenuStatic.classList.add('top-menu-container_disabled');
    topMenuFixed.classList.add('top-menu-fixed_fixed');
  } else {
    topMenuStatic.classList.remove('top-menu-container_disabled');
    topMenuFixed.classList.remove('top-menu-fixed_fixed');
  }
}

window.addEventListener('scroll', fixedMenu);
mobileMenuButton?.addEventListener('click', () => {
  mobileTopMenuFixed?.classList.toggle('mobile-top-menu-fixed_open');
  mobileTopMenuListFixed?.classList.toggle('menu__list-fixed_open');
  mobileMenuButton?.classList.toggle('mobile-menu__button_close');
});




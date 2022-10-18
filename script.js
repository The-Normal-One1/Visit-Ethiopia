const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navi-menu');
const nav = document.querySelector('.nav');

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  nav.classList.toggle('active');
}
hamburger.addEventListener('click', mobileMenu);

const naviLink = document.querySelectorAll('.navi-link');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  nav.classList.remove('active');
}

naviLink.forEach((n) => n.addEventListener('click', closeMenu));
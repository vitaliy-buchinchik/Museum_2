'use strict';

const nav = document.querySelector('.header__nav');
const icon = document.querySelector('.header__right-part-menu');
const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
  nav.classList.toggle('header__nav--active');
});

icon.addEventListener('click', () => {
  icon.classList.toggle('header__right-part-menu--active');
});

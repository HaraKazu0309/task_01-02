'use strict';
{
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.hamburgerNav');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });
}

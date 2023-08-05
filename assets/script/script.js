const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.burger-icon');

burgerIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
});
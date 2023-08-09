const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.burger-icon');

burgerIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
});

const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const main = document.querySelector('.main');
window.addEventListener('scroll', () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add('fixed');
    main.style.marginTop = `${headerHeight}px`;
  } else {
    header.classList.remove('fixed');
    main.style.marginTop = 0;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const decoration = document.querySelector(".decoration");
  const images = decoration.querySelectorAll("img");

  function parallaxScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const speed = parseFloat(image.getAttribute("data-speed")) || 0.2;
      const translateY = -scrollTop * speed;

      image.style.transform = `translate3d(0, ${translateY}px, 0)`;
    }
  }

  window.addEventListener("scroll", parallaxScroll);
  parallaxScroll(); // Вызываем функцию для применения эффекта при загрузке страницы
});
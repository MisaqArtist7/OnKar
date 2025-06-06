const burgerBtn = document.getElementById('burgerBtn');
const closeMenu = document.getElementById('closeMenu');
const menuMobile = document.getElementById('menuMobile');
const overlay = document.getElementById('overlay');

window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
})

burgerBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('-translate-x-full');
  overlay.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
  menuMobile.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 640) {
    menuMobile.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
});

const header = document.querySelector('header');
const initialHeight = header.offsetHeight;
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.position = 'sticky';
    header.style.top = '0';
    header.style.width = '100%';
    header.style.height = '66px'; 
    header.style.transition = 'height 0.3s ease';
  } else {
    header.style.position = 'relative';
    header.style.height = `${initialHeight}px`;
  }
});

  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

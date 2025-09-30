const dropdownMenu = document.querySelector('.dropdown__menu');
const dropdownItem = document.querySelector('.dropdown__item');
const burgerMenuOpen = document.querySelector('.burgerMenu-open')
const burgerMenuClose = document.querySelector('.burgerMenu-close')
const mobileMenu = document.querySelector('.mobileMenu')

burgerMenuOpen.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full')
  mobileMenu.classList.add('translate-x-0')
})
burgerMenuClose.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full')
  mobileMenu.classList.remove('translate-x-0')
})

let hideTimeout;

dropdownMenu.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
  dropdownItem.style.visibility = 'visible';
  dropdownItem.style.opacity = '1';
  dropdownItem.style.transform = 'translateY(0)';
  dropdownItem.style.pointerEvents = 'auto';
});

dropdownMenu.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    dropdownItem.style.visibility = 'hidden';
    dropdownItem.style.opacity = '0';
    dropdownItem.style.transform = 'translateY(-10px)';
    dropdownItem.style.pointerEvents = 'none';
  }, 369); 
});




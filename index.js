// Модальне вікно
const modalOverlay = document.querySelector('.modalOverlay');
const modal = document.querySelector('.js-modal');
const openModalButton = document.querySelector('.js-open-modal');
const closeModalButton = document.querySelector('.js-close-modal');

// Мобільне меню
const mobileMenu = document.querySelector('.js-menu');
const openMenuButton = document.querySelector('.js-open-menu');
const closeMenuButton = document.querySelector('.js-close-menu');

// *** Модальне вікно ***
// Відкрити модальне вікно
openModalButton?.addEventListener('click', () => {
  modalOverlay.classList.add('is-open');
  modal.classList.add('is-open');
});

// Закрити модальне вікно
closeModalButton?.addEventListener('click', () => {
  modalOverlay.classList.remove('is-open');
  modal.classList.remove('is-open');
});

// Закрити модальне вікно при кліку на overlay
modalOverlay?.addEventListener('click', event => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('is-open');
    modal.classList.remove('is-open');
  }
});

// *** Мобільне меню ***
// Відкрити мобільне меню
openMenuButton?.addEventListener('click', () => {
  mobileMenu.classList.add('menu-is-open');
});

// Закрити мобільне меню
closeMenuButton?.addEventListener('click', () => {
  mobileMenu.classList.remove('menu-is-open');
});

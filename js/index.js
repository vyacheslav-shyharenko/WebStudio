// *** МОДАЛЬНЕ ВІКНО ***
const modalOverlay = document.querySelector('.modalOverlay');
const modal = document.querySelector('.js-modal');
const openModalButton = document.querySelector('.js-open-modal');
const closeModalButton = document.querySelector('.js-close-modal');

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

// *** МОБІЛЬНЕ МЕНЮ ***
const mobileMenu = document.querySelector('.js-menu');
const openMenuButton = document.querySelector('.js-open-menu');
const closeMenuButton = document.querySelector('.js-close-menu');
const links = document.querySelectorAll('.mobile-menu-list .header-link');

// Відкрити мобільне меню
openMenuButton?.addEventListener('click', () => {
  mobileMenu.classList.add('menu-is-open');
});

// Закрити мобільне меню
closeMenuButton?.addEventListener('click', () => {
  mobileMenu.classList.remove('menu-is-open');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-is-open'); // Закрытие меню
  });
});

// *** АКТИВНЕ МЕНЮ ***
const menuLinks = document.querySelectorAll('.js-active');

// Функция для добавления класса active к текущему пункту меню
function setActiveLink() {
  // Убираем класс "active" у всех элементов
  menuLinks.forEach(link => {
    link.parentElement.classList.remove('active');
  });

  // Добавляем класс "active" текущему пункту
  this.parentElement.classList.add('active');
}

// Добавляем обработчик события на каждый пункт меню
menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // Останавливаем переход по ссылке, чтобы можно было отследить клик
    e.preventDefault();

    // Устанавливаем активный класс
    setActiveLink.call(link);

    // Переходим по ссылке после добавления класса (если необходимо)
    window.location.href = link.href;
  });
});

// Устанавливаем активный класс для первого пункта меню при загрузке страницы
document.querySelector('.header-item:first-child').classList.add('active');

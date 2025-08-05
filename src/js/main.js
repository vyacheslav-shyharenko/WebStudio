import '../scss/index.scss';

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  {
    threshold: 0.1,
  }
);

window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  }, 500);
});

document
  .querySelectorAll('.observer-target')
  .forEach(el => observer.observe(el));

const btnOpen = document.querySelector('.js-open-menu');
const btnClose = document.querySelector('.js-close-menu');
const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.modal__close-btn');

const mobileOvarlay = document.querySelector('.mobile-menu-overlay');
const modalOvarlay = document.querySelector('.modal-overlay');

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

btnOpenModal.addEventListener('click', openModalMenu);
btnCloseModal.addEventListener('click', closeModalMenu);

function openMobileMenu(event) {
  const burgerMenu = event.target;

  if (burgerMenu) {
    mobileOvarlay.classList.add('menu-is-open');
  }
}

function closeMobileMenu(event) {
  const exit = event.target;

  if (exit) {
    mobileOvarlay.classList.remove('menu-is-open');
  }
}

function openModalMenu(event) {
  const button = event.target;

  if (button) {
    modalOvarlay.classList.add('is-open');
  }
}
function closeModalMenu(event) {
  const exit = event.target;

  if (exit) {
    modalOvarlay.classList.remove('is-open');
  }
}

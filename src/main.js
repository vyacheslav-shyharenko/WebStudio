import './scss/main.scss';

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // Якщо хочеш, щоб зникало при скролі вгору
      }
    });
  },
  {
    threshold: 0.2, // Скільки % елемента має з’явитись, щоб спрацювало
  }
);

const targets = document.querySelectorAll('.observer-target');
targets.forEach(el => observer.observe(el));

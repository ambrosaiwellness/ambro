const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });
}

const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

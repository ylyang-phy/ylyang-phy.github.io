const root = document.documentElement;

const getStoredTheme = () => {
  try {
    return localStorage.getItem('theme');
  } catch (_) {
    return null;
  }
};

const setTheme = (theme, persist = true) => {
  root.dataset.theme = theme;
  if (persist) {
    try {
      localStorage.setItem('theme', theme);
    } catch (_) {}
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.nav');
  const themeToggle = document.querySelector('.theme-toggle');
  const dropdownToggles = document.querySelectorAll('.nav__dropdown-toggle');

  menuToggle?.addEventListener('click', () => {
    const open = navigation.classList.toggle('nav--open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      dropdownToggles.forEach((other) => other.setAttribute('aria-expanded', 'false'));
      toggle.setAttribute('aria-expanded', String(!open));
    });
  });

  themeToggle?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav__dropdown')) {
      dropdownToggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
    }
  });

  const colorPreference = window.matchMedia('(prefers-color-scheme: dark)');
  colorPreference.addEventListener('change', (event) => {
    if (!getStoredTheme()) setTheme(event.matches ? 'dark' : 'light', false);
  });
});

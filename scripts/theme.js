(() => {
  'use strict';

  const STORAGE_KEY = 'preferredTheme';
  const root = document.documentElement;
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function resolveTheme() {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }
    return mediaQuery.matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    root.style.colorScheme = isDark ? 'dark' : 'light';
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(isDark));
      button.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      button.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    });
  }

  function setTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  }

  function toggleTheme() {
    const activeTheme = root.getAttribute('data-theme') || resolveTheme();
    setTheme(activeTheme === 'dark' ? 'light' : 'dark');
  }

  applyTheme(resolveTheme());

  document.addEventListener('click', event => {
    const toggle = event.target.closest('[data-theme-toggle]');
    if (!toggle) return;
    event.preventDefault();
    toggleTheme();
  });

  mediaQuery.addEventListener('change', event => {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') return;
    applyTheme(event.matches ? 'dark' : 'light');
  });
})();

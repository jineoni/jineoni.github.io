const themeToggle = document.querySelector('.theme-toggle');
let selectedTheme;

try {
  selectedTheme = localStorage.getItem('portfolio-theme');
} catch {
  // The toggle still works when browser storage is unavailable.
}

function updateTheme() {
  const dark = selectedTheme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.firstElementChild.textContent = dark ? '☀' : '☾';
}

themeToggle.addEventListener('click', () => {
  selectedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  updateTheme();
  try {
    localStorage.setItem('portfolio-theme', selectedTheme);
  } catch {
    // Keep the selected theme for the current page.
  }
});

updateTheme();
themeToggle.hidden = false;

const obs = new IntersectionObserver(
  entries => entries.forEach(x => { if (x.isIntersecting) x.target.classList.add('in'); }),
  { threshold: 0.08 }
);
document.querySelectorAll('.fade').forEach(el => obs.observe(el));

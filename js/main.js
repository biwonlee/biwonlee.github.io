// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Highlight active nav link
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === current || (current === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// Abstract toggles
document.querySelectorAll('.abstract-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = body.classList.contains('open');
    body.classList.toggle('open');
    btn.classList.toggle('open');
    btn.querySelector('.toggle-label').textContent = isOpen ? 'Abstract' : 'Hide abstract';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const normalized = new URL(link.getAttribute('href'), window.location.origin).pathname;
    const current = window.location.pathname;
    if (normalized === current || (normalized === '/index.html' && (current === '/' || current.endsWith('/index.html')))) {
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const loading = document.getElementById('loadingScreen');
  if (loading) {
    window.addEventListener('load', () => {
      setTimeout(() => loading.classList.add('is-hidden'), 150);
    });
  }

  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('pointerdown', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 560);
    });
  });

  document.querySelectorAll('.project-card, .info-card, .contact-card, .gallery-card, .case-section, .panel-card, .timeline-item').forEach((el, idx) => {
    el.classList.add('reveal');
    el.style.animationDelay = `${Math.min(idx * 35, 220)}ms`;
  });
});

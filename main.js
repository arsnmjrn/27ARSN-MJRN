// ===== NAV SCROLL EFFECT =====
const nav = document.getElementById('topNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===== MOBILE NAV TOGGLE =====
function toggleNav() {
  const mNav = document.getElementById('mobileNav');
  if (mNav) mNav.classList.toggle('open');
}

// ===== FADE-IN ON SCROLL =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));
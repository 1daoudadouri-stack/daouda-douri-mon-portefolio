// YEAR
  document.getElementById('year').textContent = new Date().getFullYear();

  // CURSOR GLOW
  const glow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // SCROLL REVEAL
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // SYNC EMAIL BUTTON
  const emailField = document.getElementById('emailField');
  const emailBtn = document.getElementById('emailBtn');
  if (emailField && emailBtn) {
    emailField.addEventListener('blur', () => {
      const val = emailField.textContent.trim();
      if (val) emailBtn.href = 'mailto:' + val;
    });
  }

  // ACTIVE NAV HIGHLIGHT
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
  });

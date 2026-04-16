/* ============================================================
   DR. KHOOSHBOO AGARWAL - Global JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ============ NAVBAR SCROLL ============
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ============ HAMBURGER MENU ============
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ============ FAQ ACCORDION ============
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('active');
      // close all
      faqQuestions.forEach(q => {
        q.classList.remove('active');
        if (q.nextElementSibling) q.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('active');
        answer.classList.add('open');
      }
    });
  });

  // ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ============ ACTIVE NAV LINK ============
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ============ SCROLL ANIMATIONS ============
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.card, .blog-card, .service-item, .testimonial-card, .credential-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ============ APPOINTMENT FORM ============
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate form submission
      setTimeout(() => {
        btn.textContent = 'Request Sent!';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        const successMsg = document.getElementById('formSuccess');
        if (successMsg) successMsg.style.display = 'block';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.background = '';
          this.reset();
          if (successMsg) successMsg.style.display = 'none';
        }, 4000);
      }, 1500);
    });
  }

  // ============ COUNTER ANIMATION ============
  const counters = document.querySelectorAll('.stat-number[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current >= target) clearInterval(timer);
        }, 25);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => countObserver.observe(el));

});

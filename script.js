// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  htmlElement.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  htmlElement.setAttribute('data-theme', newTheme);
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate Elements on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Calculator Function
function calculateTax() {
  const income = parseFloat(document.getElementById('income').value);
  const deductions = parseFloat(document.getElementById('deductions').value);
  
  if (isNaN(income) || income < 0 || isNaN(deductions) || deductions < 0) {
    alert('الرجاء إدخال قيم صحيحة');
    return;
  }

  const taxableIncome = income - deductions;
  const tax = taxableIncome > 0 ? taxableIncome * 0.15 : 0;
  
  document.getElementById('calcResult').style.display = 'block';
  document.getElementById('calcResult').innerHTML = `<strong>الضريبة المحسوبة: ${tax.toFixed(2)} جنيه</strong>`;
}

// Portfolio Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('شكراً على تواصلك معي! سيتم الرد عليك قريباً.');
      this.reset();
    });
  }
});

// Skills Animation
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.skill-progress');
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight && !skill.style.width) {
      const percent = skill.getAttribute('data-width');
      skill.style.width = percent + '%';
    }
  });
});

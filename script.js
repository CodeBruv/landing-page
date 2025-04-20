// Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Carousel
const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}, 5000);

showSlide(currentIndex);

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (email) {
    alert('Thank you for subscribing!');
    newsletterForm.reset();
  } else {
    alert('Please enter a valid email address.');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('back-to-top');
  console.log('Back to Top Button:', backToTopButton); // Should log the button element
  if (!backToTopButton) {
    console.error('Button not found!');
    return;
  }

  window.addEventListener('scroll', () => {
    console.log('Scroll position:', window.scrollY);
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      backToTopButton.classList.add('show');
      console.log('Showing button');
    } else {
      backToTopButton.classList.remove('show');
      console.log('Hiding button');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Dynamic Copyright Year
document.getElementById('copyright-year').textContent = new Date().getFullYear();
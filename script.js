document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const hireBtn = document.querySelector('.hire-btn');
if (hireBtn) {
  hireBtn.addEventListener('mouseover', () => {
    hireBtn.style.boxShadow = '0 0 35px #00aaff';
  });
  hireBtn.addEventListener('mouseout', () => {
    hireBtn.style.boxShadow = '0 0 20px skay';
  });
}


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.style.background = 'gray';
    navbar.style.transition = '0.3s';
  } else {
    navbar.style.background = '#333';
  }
})

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
  });
}

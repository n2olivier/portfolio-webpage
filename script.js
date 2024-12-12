// Toggle Menu Icon and Navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Spy and Sticky Navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.onscroll = () => {
    let top = window.scrollY;

    // Sticky Navbar
    header.classList.toggle('sticky', top > 100);

    // Scroll Spy
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Remove Toggle Icon and Navbar on Scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


const toggle = document.getElementById('darkModeToggle');

// Load dark mode state from localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggle.textContent = '☀️ Light Mode';
}

// Toggle dark mode on button click
toggle.addEventListener('click', () => {
  const darkModeEnabled = document.body.classList.toggle('dark-mode');
  toggle.textContent = darkModeEnabled ? '☀️ Light Mode' : '🌙 Dark Mode';

  // Save user preference to localStorage
  localStorage.setItem('dark-mode', darkModeEnabled ? 'enabled' : 'disabled');
});

const toggButton = document.getElementById('toggButton');
const navLinks = document.getElementById('navLinks');

toggButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

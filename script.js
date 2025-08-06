const mobileBtn = document.querySelector('.mobile-navbar-btn');
const nav = document.querySelector('nav');
const openIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-xmark');

mobileBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    openIcon.style.display = openIcon.style.display === 'none' ? 'inline' : 'none';
    closeIcon.style.display = closeIcon.style.display === 'inline' ? 'none' : 'inline';
});
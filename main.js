// Para hacer click abrir y cerrar una ventana flotante DESKTOP
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}


// Para hacer click abrir y cerrar una ventana flotante MOBILE
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}
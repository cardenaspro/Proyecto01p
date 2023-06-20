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
    const isCarritoMenuClose = carritoMenu.classList.contains('inactive');

    if (!isCarritoMenuClose) {
        carritoMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

// Para hacer click abrir y cerrar una ventana flotante del CARRITO DE COMPRAS
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');

carritoIcon.addEventListener('click', toggleCarritoMenu);

// Condicion para cerrar el otro menu Mobile
function toggleCarritoMenu(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    // Si damos click al menu carrito vamos a cerrar el menu mobileMenu
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }

    carritoMenu.classList.toggle('inactive');
}
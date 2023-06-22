/* Para hacer click abrir y cerrar una ventana flotante DESKTOP */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}


/* Para hacer click abrir y cerrar una ventana flotante MOBILE */
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isCarritoMenuClose = carritoMenu.classList.contains('inactive');

    if (!isCarritoMenuClose) {
        carritoMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

/* Para hacer click abrir y cerrar una ventana flotante del CARRITO DE COMPRAS */
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('#cartContainer');

carritoIcon.addEventListener('click', toggleCarritoMenu);

// Condicion para cerrar el otro menu Mobile
function toggleCarritoMenu() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    // Si damos click al menu carrito vamos a cerrar el menu mobileMenu
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }

    carritoMenu.classList.toggle('inactive');
}


/* PARTE DE LA PAGINA PRINCIPAL */

// Para crear un contructor de productos automaticamente en JS
const cardsContainer = document.querySelector('.cards-container')

const productList = [];
productList.push({
    name: 'Bike',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Pantalla',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Computadora',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


// Forma para insertar al HTML
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // product = {name, price,image} -> product.image

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');


        const productDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productDiv.appendChild(productPrice);
        productDiv.appendChild(productName);


        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './img/icons/bt_add_to_cart.svg');

        productFigure.appendChild(productImgCart);

        productInfo.appendChild(productDiv);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard)
        /*  
        < div class="product-card" >
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 alt="">
            <div class="product-info">
                <div>
                    <p>S/. 120.00</p>
                    <p>Bike</p>
                </div>
                <figure>
                    <img src="./img/icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
    
        </div> 
        */
    }
}

renderProducts(productList);
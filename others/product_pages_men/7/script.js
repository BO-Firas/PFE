function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

function addToCart() {
    const item = {
        name: 'Pull-Over',
        price: '29,99 TND',
        color: document.getElementById('color').value,
        size: document.getElementById('size').value,
        quantity: document.getElementById('quantity').value,
        image: document.getElementById('main-image').src
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = '../cart/index.html';
}

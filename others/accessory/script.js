const products = [
    {price: 19.99, name: "Bucket Hat", img: "./images/cap1.webp"},
    {price: 19.99, name: "Cap", img: "./images/cap2.webp"},
    {price: 19.99, name: "Watch", img: "./images/cap3.webp"},
    {price: 49.99, name: "Watch", img: "./images/cap4.webp"},
    {price: 9.99, name: "Cap", img: "./images/cap5.webp"},
    {price: 29.99, name: "Cap", img: "./images/cap6.webp"},
    {price: 29.99, name: "Cap", img: "./images/cap7.webp"},
    {price: 29.99, name: "Braclet", img: "./images/cap8.jpg"},
    {price: 29.99, name: "Cap", img: "./images/cap9.webp"},
    {price: 29.99, name: "Watch", img: "./images/cap10.jpg"},
    {price: 29.99, name: "glasses", img: "./images/cap11.jpg"},
    {price: 29.99, name: "glasses", img: "./images/cap12.jpg"},
    // Add more products similarly
    // ...
];

let currentPage = 1;
const itemsPerPage = 12;

function renderProducts() {
    const productList = document.getElementById('product-listing');
    productList.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.setAttribute('data-price', product.price);
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <p>${product.name}</p>
            <p class="price">${product.price} TND</p>
        `;
        productList.appendChild(productDiv);
    });

    document.getElementById('page-info').innerText = `Page ${currentPage} of ${Math.ceil(products.length / itemsPerPage)}`;
}

function sortProducts() {
    const sortValue = document.getElementById('sort').value;

    products.sort((a, b) => {
        if (sortValue === 'price-asc') {
            return a.price - b.price;
        } else if (sortValue === 'price-desc') {
            return b.price - a.price;
        } else if (sortValue === 'name-asc') {
            return a.name.localeCompare(b.name);
        } else if (sortValue === 'name-desc') {
            return b.name.localeCompare(a.name);
        }
    });

    renderProducts();
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
    }
}

function nextPage() {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
        currentPage++;
        renderProducts();
    }
}

// Initial render
renderProducts();

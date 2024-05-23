const products = [
    {price: 29.99, name: "Pull-Over", img: "./images/men1-f.jpg"},
    {price: 29.99, name: "Pull-Over", img: "./images/men2-b.png"},
    {price: 29.99, name: "Pull-Over", img: "./images/men3-f.jpg"},
    {price: 29.99, name: "Pull-Over", img: "./images/men4-f.jpg"},
    {price: 29.99, name: "Pull-Over", img: "./images/men5-f.jpg"},
    {price: 29.99, name: "Pull-Over", img: "./images/men6-f.jpg"},
    {price: 29.99, name: "Pull-Over", img: "./images/men7-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/men8-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/men9-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/men10-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/men11-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/men12-f.jpg"},
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

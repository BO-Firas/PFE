const products = [
    {price: 29.99, name: "Pull-Over", img: "./images/woman1-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman2-f.jpg"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman3-f.jpg"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman4-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman5-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman6-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman7-f.jpeg"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman8-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman9-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman10-f.jpeg"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman11-f.webp"},
    {price: 29.99, name: "Pull-Over", img: "./images/woman12-f.webp"},
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

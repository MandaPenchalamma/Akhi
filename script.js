document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    // Sample product data
    const products = [
        { id: 1, name: 'Product 1', price: 19.99, image: 'https://res.cloudinary.com/dzqlr0sqn/image/upload/v1720676471/images_1_eotga5.jpg' },
        { id: 2, name: 'Product 2', price: 29.99, image: 'https://res.cloudinary.com/dzqlr0sqn/image/upload/v1720676802/bags_vpiyzu.jpg' },
        { id: 3, name: 'Product 3', price: 39.99, image: 'https://res.cloudinary.com/dzqlr0sqn/image/upload/v1720677491/accessaries_vmjv0j.jpg' },
    ];

    function renderProducts() {
        const productGrid = document.querySelector('.product-grid');
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button data-id="${product.id}">Add to Cart</button>
            `;
            productGrid.appendChild(productDiv);
        });

        // Attach event listeners to buttons
        document.querySelectorAll('.product button').forEach(button => {
            button.addEventListener('click', () => {
                cartCount++;
                cartCountElement.textContent = cartCount;
                alert('Product added to cart!');
            });
        });
    }

    renderProducts();
});

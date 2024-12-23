// Cart functionality
let cart = [];

// Function to update the cart count in the header
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Function to handle adding a product to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    const productPrice = button.getAttribute('data-price');
    
    // Add the product to the cart
    cart.push({ name: productName, price: parseInt(productPrice) });

    // Update the cart count
    updateCartCount();

    // Optional: Notify user that the product has been added
    alert(`${productName} has been added to your cart!`);
  });
});

// Initialize the cart count on page load
updateCartCount();

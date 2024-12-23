// Simulating cart data
let cart = [];

// Example products added to cart (normally you'd retrieve this from localStorage or backend)
cart.push({ name: 'Cotton Kurti 1', price: 799, img: 'images/kurti1.jpg' });
cart.push({ name: 'Silk Kurti 1', price: 1299, img: 'images/kurti2.jpg' });

// Function to update cart display
function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';  // Clear the current cart items

  // Add each cart item to the page
  cart.forEach((item, index) => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');

    cartItemDiv.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="item-details">
        <h3>${item.name}</h3>
        <p class="price">₹${item.price}</p>
      </div>
      <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItemDiv);
  });

  updateTotalPrice();
  updateCartCount();
}

// Function to remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Function to update total price
function updateTotalPrice() {
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  document.getElementById('total-amount').textContent = totalAmount;
}

// Function to update cart count in header
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Function to handle checkout (you can redirect or add more functionality here)
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Proceeding to checkout...");
    // Here you can redirect to checkout page or add further functionality
    // For example: window.location.href = 'checkout.html';
  }
}

// Initialize the cart display when the page loads
window.onload = updateCart;

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Kurti Collection</title>
  <link rel="stylesheet" href="homepagecss.css">
</head>
<body>
  <header>
    <div class="logo">
      <h1>Kurti Collection</h1>
    </div>
    <nav>
      <ul>
        <li><a href="homepage.html">Home</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    
    <nav>
        <ul>
          <li><a href="">Fresh </a></li>
          <li><a href="">MX Player</a></li>
          <li><a href="">Sell</a></li>
          <li><a href="">Best Seller</a></li>
          <li><a href="">Today's Deals</a></li>
          <li><a href="">Mobiles</a></li>
          <li><a href="">Customer Service</a></li>
          <li><a href="">New Releases</a></li>
          <li><a href="">Fashion</a></li>
          
        </ul>
      </nav>
  </section>

  <section class="product-gallery">
    <div class="product-card">
      <img src="kurti1.jpg" alt="Kurti 1">
      <h3>Elegant Red Kurti</h3>
      <p>Price: ₹1,200</p>
      <button class="buy-button">Buy Now</button>
    </div>
    <div class="product-card">
      <img src="kurti2.jpg" alt="Kurti 2">
      <h3>Blue Floral Kurti</h3>
      <p>Price: ₹1,500</p>
      <button class="buy-button">Buy Now</button>
    </div>
    <div class="product-card">
      <img src="kurti3.jpg" alt="Kurti 3">
      <h3>Green A-Line Kurti</h3>
      <p>Price: ₹1,000</p>
      <button class="buy-button">Buy Now</button>
    </div>
  </section>

  <!-- New Arrivals Section -->
<section class="new-arrivals">
    <h2>New Arrivals</h2>
    <p>Check out our latest collection of Kurtis!</p>
    
    <div class="new-arrivals-container">
      <!-- Product Card 1 -->
      <div class="product-card">
        <img src="kurti1.jpg" alt="Elegant Red Kurti">
        <h3><a href=""></a> Red Kurti</h3>
        <p>Price: ₹1,200</p>
        <button class="buy-button">Buy Now</button>
      </div>
  
      <!-- Product Card 2 -->
      <div class="product-card">
        <img src="kurti2.jpg" alt="Blue Floral Kurti">
        <h3>Blue Floral Kurti</h3>
        <p>Price: ₹1,500</p>
        <button class="buy-button">Buy Now</button>
      </div>
  
      <!-- Product Card 3 -->
      <div class="product-card">
        <img src="kurti3.jpg" alt="Green A-Line Kurti">
        <h3>Green A-Line Kurti</h3>
        <p>Price: ₹1,000</p>
        <button class="buy-button">Buy Now</button>
      </div>
  
      <!-- Product Card 4 -->
      <div class="product-card">
        <img src="kurti4.jpg" alt="Pink Cotton Kurti">
        <h3>Pink Cotton Kurti</h3>
        <p>Price: ₹1,350</p>
        <button class="buy-button">Buy Now</button>
      </div>
    </div>
  </section>
  

  <footer>
    <p>&copy; 2024 Kurti Collection. All rights reserved.</p>
  </footer>

  <script>
    // Example of adding a simple click event for the "Buy Now" button
document.querySelectorAll('.buy-button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Added to cart!');
  });
});

  </script>
</body>
</html>

var cart = [];


var addToCartButtons = document.querySelectorAll('button');


for (var i = 0; i < addToCartButtons.length; i++) {

if (addToCartButtons[i].textContent.includes("next page")) continue;

addToCartButtons[i].onclick = function() {

var product = this.parentElement;
var name = product.querySelector('h3').textContent;
var price = product.querySelector('p').textContent;


cart.push({ name: name, price: price });
alert(name + " has been added to your cart.");
};
}


function checkout() {
if (cart.length === 0) {
alert("Your cart is empty!");
return;
}


var cartSummary = "Your Cart:\n";
var total = 0;
for (var j = 0; j < cart.length; j++) {
cartSummary += cart[j].name + " - " + cart[j].price + "\n";
total += parseInt(cart[j].price.replace("Rs.", ""));
}
cartSummary += "\nTotal: Rs." + total;


var proceed = confirm(cartSummary + "\n\nProceed to payment?");

}
var checkoutButton = document.createElement('button');
 checkoutButton.textContent = "Checkout";
 checkoutButton.style.display = "block";
 checkoutButton.style.margin = "20px auto";
 document.body.appendChild(checkoutButton);


 checkoutButton.onclick = checkout;

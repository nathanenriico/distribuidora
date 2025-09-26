// Variável cart já declarada em add-buttons.js
let totalPrice = 0;

document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (window.innerWidth > 768) {
                addToCart(this);
            }
        });
    });
});

function addToCart(productCard) {
    try {
        const productName = productCard.querySelector('h4').textContent;
        const priceText = productCard.querySelector('.current-price').textContent;
        const price = parseFloat(priceText.replace('R$ ', '').replace(',', '.'));
        
        cart.push({
            name: productName,
            price: price
        });
        
        totalPrice += price;
        updateCartBar();
        showCartBar();
        
        console.log('Produto adicionado:', productName, price);
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
    }
}

function updateCartBar() {
    const cartItemsCount = document.getElementById('cartItemsCount');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    
    if (cartItemsCount && cartTotalPrice) {
        const itemCount = cart.length;
        cartItemsCount.textContent = itemCount === 1 ? '1 produto' : `${itemCount} produtos`;
        cartTotalPrice.textContent = totalPrice.toFixed(2).replace('.', ',');
    }
}

function showCartBar() {
    const cartBottomBar = document.getElementById('cartBottomBar');
    if (cartBottomBar) {
        cartBottomBar.style.display = 'flex';
    }
}

function openCart() {
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (cartModal && cartItems && cartTotalElement) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Seu carrinho está vazio</p>
                </div>
            `;
        } else {
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <h5>${item.name}</h5>
                        <div class="cart-item-price">
                            <span class="current-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                        </div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItems.appendChild(cartItem);
            });
        }
        
        cartTotalElement.textContent = totalPrice.toFixed(2).replace('.', ',');
        cartModal.classList.add('active');
    }
}

function closeCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.remove('active');
    }
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    
    updateCartBar();
    
    if (cart.length === 0) {
        const cartBottomBar = document.getElementById('cartBottomBar');
        if (cartBottomBar) {
            cartBottomBar.style.display = 'none';
        }
    }
    
    openCart();
}

function finalizeOrder() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    let orderMessage = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
    
    cart.forEach(item => {
        orderMessage += `• ${item.name} - R$ ${item.price.toFixed(2).replace('.', ',')}\n`;
    });
    
    orderMessage += `\nTotal: R$ ${totalPrice.toFixed(2).replace('.', ',')}\n\n`;
    orderMessage += 'Obrigado!';
    
    const whatsappNumber = '5511999999999';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
    
    window.open(whatsappUrl, '_blank');
}

window.addToCart = addToCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.removeFromCart = removeFromCart;
window.finalizeOrder = finalizeOrder;
let cartItems = [];

// Carregar carrinho do localStorage ao inicializar
function loadCartFromStorage() {
    const saved = localStorage.getItem('cartItems');
    if (saved) {
        cartItems = JSON.parse(saved);
    }
}

function saveCartToStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Carregar ao inicializar
loadCartFromStorage();

// Inicializar barra do carrinho quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    updateCartBottomBar();
});

function showCartNotification() {
    let notification = document.getElementById('cartNotification');
    
    if (!notification) {
        notification = createCartNotification();
        document.body.appendChild(notification);
    }
    
    updateCartNotificationContent(notification);
    notification.classList.add('show');
    
    setTimeout(() => {
        hideCartNotification();
    }, 5000);
}

function updateCartNotificationContent(notification) {
    const itemsList = notification.querySelector('.cart-items-list');
    const totalElement = notification.querySelector('.cart-total-price');
    
    itemsList.innerHTML = '';
    let total = 0;
    
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        itemElement.innerHTML = `
            <img class="cart-item-image" src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-quantity">${item.quantity} produto${item.quantity > 1 ? 's' : ''}</span>
            </div>
            <div class="cart-item-price">R$ ${itemTotal.toFixed(2).replace('.', ',')}</div>
        `;
        
        itemsList.appendChild(itemElement);
    });
    
    totalElement.textContent = `${total.toFixed(2).replace('.', ',')}`;
}

function createCartNotification() {
    const notification = document.createElement('div');
    notification.id = 'cartNotification';
    notification.className = 'cart-notification';
    
    notification.innerHTML = `
        <div class="cart-items-list"></div>
        <div class="cart-total">
            <span class="cart-total-price">R$ 0,00</span>
        </div>
        <button class="view-cart-btn" onclick="openCart(); hideCartNotification();">
            Veja meu pedido
        </button>
    `;
    
    return notification;
}

function addToCartWithNotification(productCard) {
    const img = productCard.querySelector('img');
    const name = productCard.querySelector('h4').textContent;
    const priceText = productCard.querySelector('.current-price').textContent;
    const price = parseFloat(priceText.replace('R$ ', '').replace(',', '.'));
    
    const product = {
        name: name,
        price: price,
        image: img.src,
        brand: productCard.dataset.brand,
        volume: productCard.dataset.volume,
        quantity: 1
    };
    
    const existingItem = cartItems.find(item => 
        item.name === product.name && item.brand === product.brand
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push(product);
    }
    
    saveCartToStorage();
    showCartNotification();
    updateCartBottomBar();
}

function addToCartFromModalWithNotification() {
    if (!currentProduct) return;
    
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    const comments = document.getElementById('productComments').value;
    
    const product = {
        ...currentProduct,
        quantity: quantity,
        comments: comments
    };
    
    const existingItem = cartItems.find(item => 
        item.name === product.name && item.brand === product.brand
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
        if (comments) existingItem.comments = comments;
    } else {
        cartItems.push(product);
    }
    
    saveCartToStorage();
    showCartNotification();
    closeProductModal();
    updateCartBottomBar();
}

function hideCartNotification() {
    const notification = document.getElementById('cartNotification');
    if (notification) {
        notification.classList.remove('show');
    }
}

function openCart() {
    const modal = document.getElementById('cartModal');
    const itemsContainer = document.getElementById('cartItems');
    const totalElement = document.getElementById('cartTotal');
    
    // Se os elementos não existem, criar modal dinamicamente ou redirecionar
    if (!modal || !itemsContainer || !totalElement) {
        // Redirecionar para página de carrinho ou criar modal
        window.location.href = 'cart.html';
        return;
    }
    
    // Limpar container
    itemsContainer.innerHTML = '';
    
    if (cartItems.length === 0) {
        itemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        totalElement.textContent = '0,00';
    } else {
        let total = 0;
        
        cartItems.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item-full';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="remove-item" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                    <div class="quantity-controls">
                        <span class="quantity">${item.quantity}</span>
                        <button class="add-more" onclick="addMoreToCart(${index})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            
            itemsContainer.appendChild(itemElement);
        });
        
        totalElement.textContent = total.toFixed(2).replace('.', ',');
    }
    
    modal.style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
    updateCartBottomBar();
}

function updateCartBottomBar() {
    const bottomBar = document.getElementById('cartBottomBar');
    const itemsCount = document.getElementById('cartItemsCount');
    const totalPrice = document.getElementById('cartTotalPrice');
    
    // Verificar se os elementos existem (página do carrinho não tem esses elementos)
    if (!bottomBar || !itemsCount || !totalPrice) {
        return;
    }
    
    if (cartItems.length > 0) {
        let total = 0;
        let totalItems = 0;
        
        cartItems.forEach(item => {
            total += item.price * item.quantity;
            totalItems += item.quantity;
        });
        
        itemsCount.textContent = `${totalItems} produto${totalItems > 1 ? 's' : ''}`;
        totalPrice.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        bottomBar.style.display = 'block';
    } else {
        bottomBar.style.display = 'none';
    }
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    saveCartToStorage();
    updateCartBottomBar();
    openCart(); // Reabrir para atualizar
}

function addMoreToCart(index) {
    cartItems[index].quantity += 1;
    saveCartToStorage();
    updateCartBottomBar();
    openCart(); // Reabrir para atualizar
}


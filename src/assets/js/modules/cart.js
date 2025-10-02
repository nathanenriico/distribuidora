// Carrinho de compras
let cart = [];

// Função para adicionar produto ao carrinho
window.addToCart = function(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h4').textContent;
    const productPrice = parseFloat(productCard.getAttribute('data-price'));
    const productImage = productCard.querySelector('img').src;
    const productBrand = productCard.getAttribute('data-brand');
    const productVolume = productCard.getAttribute('data-volume');
    
    // Capturar preço antigo se existir
    const oldPriceElement = productCard.querySelector('.old-price');
    const oldPrice = oldPriceElement ? parseFloat(oldPriceElement.textContent.replace('R$ ', '').replace(',', '.')) : null;

    // Verificar se o produto já existe no carrinho
    const existingItem = cart.find(item => 
        item.name === productName && 
        item.brand === productBrand && 
        item.volume === productVolume
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            oldPrice: oldPrice,
            image: productImage,
            brand: productBrand,
            volume: productVolume,
            quantity: 1
        });
    }

    updateCartUI();
    showAddedToCartAnimation(button);
}

// Função para mostrar animação de produto adicionado
function showAddedToCartAnimation(button) {
    button.style.transform = 'scale(1.3)';
    button.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
}

// Função para atualizar a interface do carrinho
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartBottomBar = document.getElementById('cartBottomBar');
    const cartItemsCount = document.getElementById('cartItemsCount');
    const cartTotalPrice = document.getElementById('cartTotalPrice');

    // Atualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Mostrar/ocultar barra inferior
    if (totalItems > 0) {
        cartBottomBar.style.display = 'flex';
        cartItemsCount.textContent = totalItems === 1 ? '1 produto' : `${totalItems} produtos`;
    } else {
        cartBottomBar.style.display = 'none';
    }

    // Atualizar itens do carrinho
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => {
            const hasDiscount = item.oldPrice && item.oldPrice > item.price;
            const discountPercent = hasDiscount ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100) : 0;
            
            return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <div class="cart-item-price">
                        <span class="current-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                        ${hasDiscount ? `<span class="old-price">R$ ${item.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
                        ${hasDiscount ? `<span class="discount">-${discountPercent}%</span>` : ''}
                    </div>
                </div>
                <div class="cart-item-actions">
                    <button class="remove-item" onclick="removeFromCart('${item.name}', '${item.brand}', '${item.volume}')">
                        <i class="fas fa-trash"></i>
                    </button>
                    <div class="quantity-controls">
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="increaseQuantity('${item.name}', '${item.brand}', '${item.volume}')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `}).join('');
    }

    // Atualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2).replace('.', ',');
    if (cartTotalPrice) {
        cartTotalPrice.textContent = total.toFixed(2).replace('.', ',');
    }
}

// Função para aumentar quantidade
function increaseQuantity(name, brand, volume) {
    const item = cart.find(item => 
        item.name === name && 
        item.brand === brand && 
        item.volume === volume
    );
    if (item) {
        item.quantity += 1;
        updateCartUI();
    }
}

// Função para diminuir quantidade
function decreaseQuantity(name, brand, volume) {
    const item = cart.find(item => 
        item.name === name && 
        item.brand === brand && 
        item.volume === volume
    );
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCartUI();
    }
}

// Função para remover item do carrinho
function removeFromCart(name, brand, volume) {
    cart = cart.filter(item => 
        !(item.name === name && 
          item.brand === brand && 
          item.volume === volume)
    );
    updateCartUI();
}

// Função para abrir o carrinho
function openCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('active');
    updateCartUI();
}

// Função para fechar o carrinho
function closeCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.remove('active');
}

// Função para finalizar pedido
function finalizeOrder() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    // Abrir modal de cadastro do cliente
    openCustomerModal();
}

// Função para abrir modal de cadastro
function openCustomerModal() {
    const customerModal = document.getElementById('customerModal');
    customerModal.classList.add('active');
}

// Função para fechar modal de cadastro
function closeCustomerModal() {
    const customerModal = document.getElementById('customerModal');
    customerModal.classList.remove('active');
}

// Função para processar pedido final
function processOrder() {
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const customerCep = document.getElementById('customerCep').value;
    
    if (!customerName || !customerPhone || !customerAddress || !customerCep) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderSummary = cart.map(item => 
        `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`
    ).join('\n');

    const message = `🛒 *NOVO PEDIDO - VF DISTRIBUIDORA*\n\n👤 *Cliente:* ${customerName}\n📞 *Telefone:* ${customerPhone}\n🏠 *Endereço:* ${customerAddress}\n📍 *CEP:* ${customerCep}\n\n*PRODUTOS:*\n${orderSummary}\n\n💰 *Total: R$ ${total.toFixed(2).replace('.', ',')}*`;
    
    // Aqui você pode integrar com WhatsApp ou outro sistema
    alert('Pedido finalizado!\n\n' + message);
    
    // Limpar carrinho e fechar modais
    cart = [];
    updateCartUI();
    closeCustomerModal();
    closeCart();
}

// Fechar modal clicando fora dele
document.addEventListener('click', function(event) {
    const cartModal = document.getElementById('cartModal');
    if (event.target === cartModal) {
        closeCart();
    }
});

// Event delegation para botões de adicionar ao carrinho
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-btn') || event.target.closest('.add-btn')) {
        const button = event.target.classList.contains('add-btn') ? event.target : event.target.closest('.add-btn');
        addToCart(button);
    }
});

// Event listener para formulário de cadastro
document.addEventListener('DOMContentLoaded', function() {
    const customerForm = document.getElementById('customerForm');
    if (customerForm) {
        customerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processOrder();
        });
    }
    
    updateCartUI();
});
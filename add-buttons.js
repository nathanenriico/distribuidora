// Carrinho de compras
let cart = [];

// Função para adicionar produto ao carrinho
function addToCart(button) {
    console.log('addToCart chamado com:', button);
    
    const productCard = button.closest('.product-card');
    if (!productCard) {
        console.error('Product card não encontrado');
        return;
    }
    
    const productName = productCard.querySelector('h4').textContent;
    const productPrice = parseFloat(productCard.getAttribute('data-price'));
    const productImage = productCard.querySelector('img').src;
    const productBrand = productCard.getAttribute('data-brand');
    const productVolume = productCard.getAttribute('data-volume');
    
    console.log('Dados do produto:', {
        name: productName,
        price: productPrice,
        brand: productBrand,
        volume: productVolume
    });
    
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
        console.log('Produto já existe, aumentando quantidade');
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
        console.log('Novo produto adicionado ao carrinho');
    }

    updateCartUI();
}



// Função para atualizar a interface do carrinho
function updateCartUI() {
    console.log('Atualizando UI do carrinho');
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
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="decreaseQuantity('${item.name}', '${item.brand}', '${item.volume}')">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="increaseQuantity('${item.name}', '${item.brand}', '${item.volume}')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.name}', '${item.brand}', '${item.volume}')">
                        <i class="fas fa-trash"></i>
                    </button>
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



// Executar quando DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    updateCartUI();
    
    // Event listener único para botões de adicionar
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-btn') || e.target.closest('.add-btn')) {
            e.preventDefault();
            e.stopPropagation();
            const button = e.target.classList.contains('add-btn') ? e.target : e.target.closest('.add-btn');
            addToCart(button);
        }
    }, { once: false });
});

// Funções do carrinho
function openCart() {
    document.getElementById('cartModal').classList.add('active');
    updateCartUI();
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

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

function decreaseQuantity(name, brand, volume) {
    const item = cart.find(item => 
        item.name === name && 
        item.brand === brand && 
        item.volume === volume
    );
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCartUI();
    } else if (item && item.quantity === 1) {
        removeFromCart(name, brand, volume);
    }
}

function removeFromCart(name, brand, volume) {
    cart = cart.filter(item => 
        !(item.name === name && 
          item.brand === brand && 
          item.volume === volume)
    );
    updateCartUI();
}

function finalizeOrder() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    // Abrir modal de informações do cliente
    document.getElementById('customerModal').classList.add('active');
}

// Funções do modal de cliente
function closeCustomerModal() {
    document.getElementById('customerModal').classList.remove('active');
}

function sendOrderWithCustomerInfo() {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const cep = document.getElementById('customerCep').value;
    
    if (!name || !phone || !address || !cep) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderSummary = cart.map(item => 
        `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`
    ).join('\n');

    const message = `🦄 *NOVO PEDIDO - VF DISTRIBUIDORA*\n\n*PRODUTOS:*\n${orderSummary}\n\n💰 *Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n*DADOS DO CLIENTE:*\n👤 Nome: ${name}\n📞 Telefone: ${phone}\n🏠 Endereço: ${address}\n📍 CEP: ${cep}\n\n🚚 Delivery solicitado!`;
    
    const whatsappNumber = '5511941716617';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let whatsappUrl;
    if (isMobile) {
        whatsappUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    } else {
        whatsappUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    }
    
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário e carrinho
    document.getElementById('customerForm').reset();
    cart = [];
    updateCartUI();
    closeCart();
    closeCustomerModal();
}

// Event listener para o formulário
document.addEventListener('DOMContentLoaded', function() {
    const customerForm = document.getElementById('customerForm');
    if (customerForm) {
        customerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendOrderWithCustomerInfo();
        });
    }
});
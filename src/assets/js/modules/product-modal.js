let currentProduct = null;

function openProductModal(productCard) {
    const modal = document.getElementById('productModal');
    const img = productCard.querySelector('img');
    const name = productCard.querySelector('h4').textContent;
    const currentPrice = productCard.querySelector('.current-price').textContent;
    const oldPrice = productCard.querySelector('.old-price');
    const discount = productCard.querySelector('.discount');
    
    // Preencher dados do modal
    document.getElementById('modalProductImage').src = img.src;
    document.getElementById('modalProductImage').alt = img.alt;
    document.getElementById('modalProductName').textContent = name;
    document.getElementById('modalCurrentPrice').textContent = currentPrice;
    
    // Preço antigo e desconto (se existir)
    const modalOldPrice = document.getElementById('modalOldPrice');
    const modalDiscount = document.getElementById('modalDiscount');
    
    if (oldPrice) {
        modalOldPrice.textContent = oldPrice.textContent;
        modalOldPrice.style.display = 'inline';
    } else {
        modalOldPrice.style.display = 'none';
    }
    
    if (discount) {
        modalDiscount.textContent = discount.textContent;
        modalDiscount.style.display = 'inline';
    } else {
        modalDiscount.style.display = 'none';
    }
    
    // Resetar quantidade
    document.getElementById('modalQuantity').value = 1;
    document.getElementById('productComments').value = '';
    
    // Armazenar produto atual
    currentProduct = {
        name: name,
        price: parseFloat(currentPrice.replace('R$ ', '').replace(',', '.')),
        image: img.src,
        brand: productCard.dataset.brand,
        volume: productCard.dataset.volume
    };
    
    updateModalTotal();
    modal.style.display = 'block';
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    currentProduct = null;
}

function increaseQuantity() {
    const input = document.getElementById('modalQuantity');
    input.value = parseInt(input.value) + 1;
    updateModalTotal();
}

function decreaseQuantity() {
    const input = document.getElementById('modalQuantity');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        updateModalTotal();
    }
}

function updateModalTotal() {
    if (!currentProduct) return;
    
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    const total = (currentProduct.price * quantity).toFixed(2).replace('.', ',');
    document.getElementById('modalTotalPrice').textContent = `R$ ${total}`;
}

function addToCartFromModal() {
    if (typeof addToCartFromModalWithNotification === 'function') {
        addToCartFromModalWithNotification();
    } else {
        console.log('Função addToCartFromModalWithNotification não encontrada');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar event listener para todos os produtos
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Se clicou no botão +, adicionar ao carrinho
            if (e.target.classList.contains('add-btn')) {
                e.stopPropagation();
                addToCartWithNotification(this);
                return;
            }
            // Caso contrário, abrir modal
            openProductModal(this);
        });
    });
    
    // Event listener específico para botões +
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            addToCartWithNotification(this.parentElement);
        });
    });
    
    // Fechar modal ao clicar fora
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProductModal();
            }
        });
    }
    
    // Atualizar total quando quantidade mudar
    const modalQuantity = document.getElementById('modalQuantity');
    if (modalQuantity) {
        modalQuantity.addEventListener('input', updateModalTotal);
    }
});
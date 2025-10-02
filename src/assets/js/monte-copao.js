// Monte o Seu Copão - JavaScript
class CopaoBuilder {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.selectedIngredients = {
            base: null,
            flavors: [],
            complements: [],
            size: null,
            name: ''
        };
        this.basePrice = 0;
        this.sizeMultiplier = 1;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateDisplay();
    }
    
    setupEventListeners() {
        // Navegação
        document.getElementById('nextBtn').addEventListener('click', () => this.nextStep());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevStep());
        
        // Seleção de ingredientes
        document.querySelectorAll('.ingredient-card').forEach(card => {
            card.addEventListener('click', () => this.selectIngredient(card));
        });
        
        // Seleção de tamanho
        document.querySelectorAll('.size-card').forEach(card => {
            card.addEventListener('click', () => this.selectSize(card));
        });
        
        // Nome do drink
        document.getElementById('drinkName').addEventListener('input', (e) => {
            this.selectedIngredients.name = e.target.value;
        });
        
        // Adicionar ao carrinho
        document.getElementById('addCustomDrink').addEventListener('click', () => this.addToCart());
    }
    
    selectIngredient(card) {
        const type = card.dataset.type;
        const name = card.dataset.name;
        let price = 0;
        
        // Para bases alcoólicas, usar preço baseado no tamanho
        if (type === 'base') {
            if (this.selectedIngredients.size) {
                const size = this.selectedIngredients.size.size;
                if (size === '500') {
                    price = parseFloat(card.getAttribute('data-price-500'));
                } else if (size === '700') {
                    price = parseFloat(card.getAttribute('data-price-700'));
                }
            } else {
                price = parseFloat(card.getAttribute('data-price-500'));
            }
            if (isNaN(price)) price = 0;
        } else {
            price = parseFloat(card.dataset.price) || 0;
        }
        
        console.log('Selecting ingredient:', name, 'type:', type, 'price:', price);
        
        const color = card.dataset.color || '#ffffff';
        
        if (type === 'base') {
            document.querySelectorAll('[data-type="base"]').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            this.selectedIngredients.base = { name, price, color };
        } else {
            if (card.classList.contains('selected')) {
                card.classList.remove('selected');
                this.selectedIngredients[type + 's'] = this.selectedIngredients[type + 's'].filter(item => item.name !== name);
            } else {
                card.classList.add('selected');
                this.selectedIngredients[type + 's'].push({ name, price, color });
            }
        }
        
        console.log('Selected ingredients:', this.selectedIngredients);
        this.updatePrice();
        this.updateGlass();
        this.updateDisplay();
    }
    
    selectSize(card) {
        document.querySelectorAll('.size-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        
        const size = card.dataset.size;
        this.sizeMultiplier = parseFloat(card.dataset.multiplier);
        if (isNaN(this.sizeMultiplier)) this.sizeMultiplier = 1;
        this.selectedIngredients.size = { size, multiplier: this.sizeMultiplier };
        
        // Atualizar preços dos ingredientes baseado no volume
        this.updateIngredientPrices(size);
        
        // Atualizar preço da base se já selecionada
        if (this.selectedIngredients.base) {
            const selectedBaseCard = document.querySelector('[data-type="base"].selected');
            if (selectedBaseCard) {
                let newPrice = 0;
                if (size === '500') {
                    newPrice = parseFloat(selectedBaseCard.getAttribute('data-price-500'));
                } else if (size === '700') {
                    newPrice = parseFloat(selectedBaseCard.getAttribute('data-price-700'));
                }
                if (isNaN(newPrice)) newPrice = 0;
                this.selectedIngredients.base.price = newPrice;
            }
        }
        
        this.updatePrice();
        this.updateGlass();
        this.updateDisplay();
    }
    
    updateIngredientPrices(size) {
        const baseIngredients = document.querySelectorAll('#baseIngredients .ingredient-card');
        
        baseIngredients.forEach(card => {
            const priceElement = card.querySelector('.ingredient-price');
            let price;
            
            if (size === '500') {
                price = card.dataset.price500 || card.dataset.price;
            } else if (size === '700') {
                price = card.dataset.price700 || card.dataset.price;
            }
            
            if (price) {
                priceElement.textContent = `R$ ${parseFloat(price).toFixed(2)}`;
                card.dataset.price = price;
                

            }
        });
    }
    
    updatePrice() {
        let total = 0;
        
        console.log('=== UPDATE PRICE ===');
        console.log('Current ingredients:', this.selectedIngredients);
        
        // Base alcoólica - usar preço atual baseado no volume
        if (this.selectedIngredients.base) {
            let basePrice = this.selectedIngredients.base.price;
            console.log('Raw base price:', basePrice, 'type:', typeof basePrice);
            basePrice = parseFloat(basePrice);
            if (isNaN(basePrice)) basePrice = 0;
            total += basePrice;
            console.log('Base price added:', basePrice, 'total now:', total);
        } else {
            console.log('No base selected');
        }
        
        // Sabores
        this.selectedIngredients.flavors.forEach(flavor => {
            let flavorPrice = parseFloat(flavor.price);
            if (isNaN(flavorPrice)) flavorPrice = 0;
            total += flavorPrice;
            console.log('Flavor price:', flavorPrice);
        });
        
        // Complementos
        this.selectedIngredients.complements.forEach(complement => {
            let complementPrice = parseFloat(complement.price);
            if (isNaN(complementPrice)) complementPrice = 0;
            total += complementPrice;
            console.log('Complement price:', complementPrice);
        });
        
        console.log('FINAL Total calculated:', total);
        
        const totalElement = document.getElementById('totalPrice');
        if (totalElement) {
            totalElement.textContent = total.toFixed(2);
            totalElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                totalElement.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    updateGlass() {
        const liquidLayers = document.getElementById('liquidLayers');
        liquidLayers.innerHTML = '';
        
        let totalHeight = 0;
        const maxHeight = 180; // Altura máxima do copo
        
        // Calcular altura total baseada nos ingredientes
        const totalIngredients = 1 + this.selectedIngredients.flavors.length + this.selectedIngredients.complements.length;
        const layerHeight = Math.min(maxHeight / totalIngredients, 40);
        
        // Base alcoólica
        if (this.selectedIngredients.base) {
            const layer = document.createElement('div');
            layer.className = 'liquid-layer';
            layer.style.height = layerHeight + 'px';
            layer.style.backgroundColor = this.selectedIngredients.base.color;
            layer.style.bottom = totalHeight + 'px';
            liquidLayers.appendChild(layer);
            totalHeight += layerHeight;
        }
        
        // Sabores
        this.selectedIngredients.flavors.forEach(flavor => {
            const layer = document.createElement('div');
            layer.className = 'liquid-layer';
            layer.style.height = layerHeight + 'px';
            layer.style.backgroundColor = flavor.color;
            layer.style.bottom = totalHeight + 'px';
            layer.style.opacity = '0.8';
            liquidLayers.appendChild(layer);
            totalHeight += layerHeight;
        });
        
        // Complementos
        this.selectedIngredients.complements.forEach(complement => {
            const layer = document.createElement('div');
            layer.className = 'liquid-layer';
            layer.style.height = layerHeight + 'px';
            layer.style.backgroundColor = complement.color;
            layer.style.bottom = totalHeight + 'px';
            layer.style.opacity = '0.6';
            liquidLayers.appendChild(layer);
            totalHeight += layerHeight;
        });
        
        // Ajustar altura do container
        liquidLayers.style.height = totalHeight + 'px';
    }
    
    nextStep() {
        if (this.currentStep < this.totalSteps && this.canProceed()) {
            this.currentStep++;
            this.updateDisplay();
        }
    }
    
    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateDisplay();
        }
    }
    
    canProceed() {
        switch (this.currentStep) {
            case 1:
                return this.selectedIngredients.size !== null; // Etapa 1 agora é volume
            case 2:
                return this.selectedIngredients.base !== null; // Etapa 2 agora é base
            case 3:
                return true; // Sabores são opcionais
            case 4:
                return true; // Complementos são opcionais
            case 5:
                return true;
            default:
                return true;
        }
    }
    
    updateDisplay() {
        // Atualizar etapas
        document.querySelectorAll('.step').forEach((step, index) => {
            step.classList.toggle('active', index + 1 === this.currentStep);
        });
        
        // Atualizar indicadores
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index + 1 <= this.currentStep);
        });
        
        // Atualizar botões de navegação
        document.getElementById('prevBtn').disabled = this.currentStep === 1;
        
        const nextBtn = document.getElementById('nextBtn');
        if (this.currentStep === this.totalSteps) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'flex';
            // Para etapa 1, só habilita se tiver volume selecionado
            // Para etapa 2, só habilita se tiver base selecionada
            // Outras etapas sempre habilitadas
            if (this.currentStep === 1) {
                nextBtn.disabled = this.selectedIngredients.size === null;
            } else if (this.currentStep === 2) {
                nextBtn.disabled = this.selectedIngredients.base === null;
            } else {
                nextBtn.disabled = false;
            }
        }
    }
    
    addToCart() {
        if (!this.selectedIngredients.base || !this.selectedIngredients.size) {
            alert('Por favor, selecione pelo menos uma base alcoólica e o tamanho do copão!');
            return;
        }
        
        const drinkName = this.selectedIngredients.name || 'Meu Copão Personalizado';
        const totalPrice = parseFloat(document.getElementById('totalPrice').textContent);
        
        // Criar descrição do drink
        let description = `Base: ${this.selectedIngredients.base.name}`;
        
        if (this.selectedIngredients.flavors.length > 0) {
            description += `\nSabores: ${this.selectedIngredients.flavors.map(f => f.name).join(', ')}`;
        }
        
        if (this.selectedIngredients.complements.length > 0) {
            description += `\nComplementos: ${this.selectedIngredients.complements.map(c => c.name).join(', ')}`;
        }
        
        description += `\nTamanho: ${this.selectedIngredients.size.size}ml`;
        
        // Criar produto personalizado
        const customDrink = {
            id: 'custom_' + Date.now(),
            name: drinkName,
            description: description,
            price: totalPrice,
            size: this.selectedIngredients.size.size,
            type: 'custom',
            image: '../assets/images/logos/logo_adega.jpg',
            category: 'drinks'
        };
        
        // Adicionar ao carrinho usando o sistema existente
        this.addToExistingCart(customDrink);
        
        // Mostrar confirmação
        alert(`"${drinkName}" foi adicionado ao seu carrinho!\nPreço: R$ ${totalPrice.toFixed(2)}`);
        
        // Resetar formulário
        this.resetBuilder();
    }
    
    addToExistingCart(product) {
        // Obter carrinho atual do localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Verificar se o produto já existe no carrinho
        const existingIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingIndex > -1) {
            // Se existe, aumentar quantidade
            cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
        } else {
            // Se não existe, adicionar novo
            product.quantity = 1;
            cart.push(product);
        }
        
        // Salvar carrinho atualizado
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Atualizar display do carrinho se existir
        if (typeof updateCartDisplay === 'function') {
            updateCartDisplay();
        }
        
        // Disparar evento personalizado para notificar outras partes do sistema
        window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart } }));
    }
    
    resetBuilder() {
        this.currentStep = 1;
        this.selectedIngredients = {
            base: null,
            flavors: [],
            complements: [],
            size: null,
            name: ''
        };
        
        // Limpar seleções visuais
        document.querySelectorAll('.ingredient-card, .size-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Limpar nome
        document.getElementById('drinkName').value = '';
        
        // Resetar display
        this.updateDisplay();
        this.updatePrice();
        this.updateGlass();
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new CopaoBuilder();
});
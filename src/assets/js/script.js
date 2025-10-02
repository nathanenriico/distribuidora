// Funcionalidade das abas de navegação
document.addEventListener('DOMContentLoaded', function() {
    const navCategories = document.querySelectorAll('.nav-category');
    const sectionTitle = document.querySelector('.section-title');
    let currentCategoryIndex = 0;
    
    // Função para ativar uma categoria
    function activateCategory(index) {
        // Remove active class de todas as categorias
        navCategories.forEach(c => {
            c.style.borderBottomColor = 'transparent';
            c.style.background = 'transparent';
            c.querySelector('.nav-icon i').style.color = '#6c757d';
        });
        
        // Adiciona active na categoria clicada
        const activeCategory = navCategories[index];
        activeCategory.style.borderBottomColor = '#007bff';
        activeCategory.style.background = '#f8f9fa';
        activeCategory.querySelector('.nav-icon i').style.color = '#007bff';
        
        // Atualiza o título da seção
        const categoryName = activeCategory.dataset.category;
        sectionTitle.textContent = categoryName;
        
        // Atualiza o breadcrumb
        const currentCategory = document.querySelector('.current-category');
        if (currentCategory) {
            currentCategory.textContent = categoryName;
        }
        
        // Carrega produtos da categoria
        loadProducts(categoryName);
        
        // Scroll para mostrar a categoria ativa
        activeCategory.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
    
    // Funcionalidade das categorias com ícones
    navCategories.forEach((category, index) => {
        category.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove classe active de todos
            navCategories.forEach(c => c.classList.remove('active'));
            
            // Adiciona classe active no clicado
            category.classList.add('active');
            
            // Scroll para mostrar o item clicado
            const container = navCategoriesContainer;
            const categoryRect = category.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const scrollLeft = container.scrollLeft + categoryRect.left - containerRect.left - (containerRect.width / 2) + (categoryRect.width / 2);
            
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
            
            // Mapeamento de páginas
            const pageMap = {
                '* CERVEJA *': 'index.html',
                '* DRINKS *': 'drinks.html',
                '* MONTE SEU COPÃO *': 'monte-copao.html',
                '* SEM ÁLCOOL *': 'sem-alcool.html',
                '* COPÃO *': 'copao.html',
                '* WHISKYS *': 'whiskys.html',
                '* DOSES *': 'doses.html',
                '* SALGADINHOS *': 'salgadinhos.html'
            };
            
            const categoryName = category.dataset.category;
            
            // Se tem página correspondente, navega
            if (pageMap[categoryName]) {
                setTimeout(() => {
                    window.location.href = pageMap[categoryName];
                }, 200);
            } else {
                // Senão, ativa categoria na mesma página
                currentCategoryIndex = index;
                activateCategory(index);
            }
        });
    });
    
    // Ativar categoria ativa existente
    const activeCategory = document.querySelector('.nav-category.active');
    if (activeCategory) {
        const index = Array.from(navCategories).indexOf(activeCategory);
        if (index !== -1) {
            currentCategoryIndex = index;
        }
    }
    
    // Funcionalidade de arrastar menu horizontal
    const navCategoriesContainer = document.querySelector('.nav-categories');
    
    if (navCategoriesContainer) {
        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;
        
        // Mouse events
        navCategoriesContainer.addEventListener('mousedown', function(e) {
            isDragging = true;
            startX = e.pageX - navCategoriesContainer.offsetLeft;
            scrollLeft = navCategoriesContainer.scrollLeft;
            navCategoriesContainer.style.cursor = 'grabbing';
            e.preventDefault();
        });
        
        navCategoriesContainer.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - navCategoriesContainer.offsetLeft;
            const walk = (x - startX) * 2;
            navCategoriesContainer.scrollLeft = scrollLeft - walk;
        });
        
        navCategoriesContainer.addEventListener('mouseup', function() {
            isDragging = false;
            navCategoriesContainer.style.cursor = 'grab';
        });
        
        navCategoriesContainer.addEventListener('mouseleave', function() {
            isDragging = false;
            navCategoriesContainer.style.cursor = 'grab';
        });
        
        // Touch events
        navCategoriesContainer.addEventListener('touchstart', function(e) {
            startX = e.touches[0].pageX - navCategoriesContainer.offsetLeft;
            scrollLeft = navCategoriesContainer.scrollLeft;
        });
        
        navCategoriesContainer.addEventListener('touchmove', function(e) {
            const x = e.touches[0].pageX - navCategoriesContainer.offsetLeft;
            const walk = (x - startX) * 2;
            navCategoriesContainer.scrollLeft = scrollLeft - walk;
        });
        
        // Estilo inicial
        navCategoriesContainer.style.cursor = 'grab';
        navCategoriesContainer.style.userSelect = 'none';
    }
    
    // Funcionalidade dos filtros
    const brandFilter = document.getElementById('brandFilter');
    const volumeFilter = document.getElementById('volumeFilter');
    const priceFilter = document.getElementById('priceFilter');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    function applyFilters() {
        const products = document.querySelectorAll('.product-card');
        const brandValue = brandFilter.value;
        const volumeValue = volumeFilter.value;
        const priceValue = priceFilter.value;
        
        let visibleCount = 0;
        
        products.forEach(product => {
            let show = true;
            
            // Filtro por marca
            if (brandValue && product.dataset.brand !== brandValue) {
                show = false;
            }
            
            // Filtro por volume
            if (volumeValue && product.dataset.volume !== volumeValue) {
                show = false;
            }
            
            // Filtro por preço
            if (priceValue) {
                const price = parseFloat(product.dataset.price);
                const [min, max] = priceValue.split('-').map(p => p === '+' ? Infinity : parseFloat(p));
                
                if (priceValue === '100+') {
                    if (price <= 100) show = false;
                } else {
                    if (price < min || price > max) show = false;
                }
            }
            
            if (show) {
                product.style.display = 'block';
                visibleCount++;
            } else {
                product.style.display = 'none';
            }
        });
        
        // Atualizar contador
        const visibleCountEl = document.getElementById('visible-count');
        if (visibleCountEl) {
            visibleCountEl.textContent = visibleCount;
        }
    }
    
    // Event listeners para os filtros
    if (brandFilter) brandFilter.addEventListener('change', applyFilters);
    if (volumeFilter) volumeFilter.addEventListener('change', applyFilters);
    if (priceFilter) priceFilter.addEventListener('change', applyFilters);
    
    // Limpar filtros
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            brandFilter.value = '';
            volumeFilter.value = '';
            priceFilter.value = '';
            applyFilters();
        });
    }
    

    

    

    

    

    

    

    
    // Carregar copões personalizados
    loadCustomDrinks();
});

// Função para carregar produtos de uma categoria
function loadProducts(category) {
    const productsGrid = document.querySelector('.products-grid');
    
    if (!productsGrid) return;
    
    // Adiciona efeito de loading
    productsGrid.style.opacity = '0.5';
    
    setTimeout(() => {
        // Carrega produtos da categoria se existir na base de dados
        if (typeof carregarProdutosPorCategoria === 'function') {
            const novosProduos = carregarProdutosPorCategoria(category);
            if (novosProduos) {
                productsGrid.innerHTML = novosProduos;
                
                // Os botões já funcionam com event delegation
            }
        }
        
        // Remove efeito de loading
        productsGrid.style.opacity = '1';
    }, 300);
}



// Sistema de carrinho para copões personalizados
function loadCustomDrinks() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const customDrinks = cart.filter(item => item.type === 'custom');
    
    if (customDrinks.length > 0) {
        displayCustomDrinks(customDrinks);
    }
}

function displayCustomDrinks(customDrinks) {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    // Criar seção para copões personalizados
    let customSection = document.querySelector('.custom-drinks-section');
    if (!customSection) {
        customSection = document.createElement('div');
        customSection.className = 'brand-section custom-drinks-section';
        customSection.innerHTML = `
            <h3 class="brand-title">COPÕES PERSONALIZADOS</h3>
            <div class="brand-products custom-drinks-grid"></div>
        `;
        productsGrid.insertBefore(customSection, productsGrid.firstChild);
    }
    
    const customGrid = customSection.querySelector('.custom-drinks-grid');
    customGrid.innerHTML = '';
    
    customDrinks.forEach(drink => {
        const drinkCard = document.createElement('div');
        drinkCard.className = 'product-card';
        drinkCard.innerHTML = `
            <button class="delete-btn" onclick="event.stopPropagation(); deleteCustomDrink('${drink.id}')" style="position: absolute; top: 5px; right: 5px; background: #dc3545; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; font-size: 12px; cursor: pointer; z-index: 10;">×</button>
            <img src="${drink.image}" alt="${drink.name}">
            <div class="product-info">
                <h4>${drink.name}</h4>
                <div class="product-note">${drink.description}</div>
                <div class="price-section">
                    <span class="current-price">R$ ${drink.price.toFixed(2)}</span>
                </div>
            </div>
            <button class="add-btn" onclick="addCustomToCart('${drink.id}')">+</button>
        `;
        drinkCard.style.position = 'relative';
        customGrid.appendChild(drinkCard);
    });
}

function addCustomToCart(drinkId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const drink = cart.find(item => item.id === drinkId);
    
    if (drink) {
        drink.quantity = (drink.quantity || 1) + 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Mostrar notificação
        alert(`${drink.name} adicionado ao carrinho!`);
        
        // Atualizar display do carrinho se existir
        if (typeof updateCartDisplay === 'function') {
            updateCartDisplay();
        }
    }
}

function deleteCustomDrink(drinkId) {
    if (confirm('Tem certeza que deseja excluir este copão personalizado?')) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== drinkId);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Recarregar a exibição dos copões personalizados
        loadCustomDrinks();
        
        // Remover seção se não há mais copões personalizados
        const customSection = document.querySelector('.custom-drinks-section');
        if (customSection && cart.filter(item => item.type === 'custom').length === 0) {
            customSection.remove();
        }
        
        // Atualizar display do carrinho se existir
        if (typeof updateCartDisplay === 'function') {
            updateCartDisplay();
        }
    }
}

// Carregar copões personalizados quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    loadCustomDrinks();
    
    // Escutar atualizações do carrinho
    window.addEventListener('cartUpdated', function(event) {
        loadCustomDrinks();
    });
});
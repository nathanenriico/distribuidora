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
            currentCategoryIndex = index;
            activateCategory(index);
        });
    });
    
    // Ativar primeira categoria por padrão
    if (navCategories.length > 0) {
        activateCategory(0);
    }
    
    // Funcionalidade do menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            
            if (sidebar && overlay) {
                sidebar.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    // Funcionalidade da busca
    const searchToggle = document.querySelector('.search-toggle');
    if (searchToggle) {
        searchToggle.addEventListener('click', function() {
            const searchTerm = prompt('Digite o produto que deseja buscar:');
            if (searchTerm) {
                console.log(`Buscando por: ${searchTerm}`);
            }
        });
    }
    
    // Funcionalidade de busca e menu lateral
    const searchIcon = document.querySelector('.fa-search');
    const menuIcon = document.querySelector('.fa-bars');
    
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const searchTerm = prompt('Digite o produto que deseja buscar:');
            if (searchTerm) {
                console.log(`Buscando por: ${searchTerm}`);
            }
        });
    }
    
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            
            if (sidebar && overlay) {
                sidebar.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    // Event listeners para fechar o menu
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Funcionalidade dos itens do menu lateral
    const menuItems = document.querySelectorAll('.menu-item');
    const iconMenu = document.querySelector('.icon-menu');
    
    // Adicionar funcionalidade de scroll suave
    if (iconMenu) {
        iconMenu.addEventListener('wheel', function(e) {
            e.preventDefault();
            this.scrollTop += e.deltaY;
        });
        
        // Touch/drag functionality para mobile
        let isScrolling = false;
        let startY = 0;
        let scrollTop = 0;
        
        iconMenu.addEventListener('touchstart', function(e) {
            isScrolling = true;
            startY = e.touches[0].pageY - iconMenu.offsetTop;
            scrollTop = iconMenu.scrollTop;
        });
        
        iconMenu.addEventListener('touchmove', function(e) {
            if (!isScrolling) return;
            e.preventDefault();
            const y = e.touches[0].pageY - iconMenu.offsetTop;
            const walk = (y - startY) * 2;
            iconMenu.scrollTop = scrollTop - walk;
        });
        
        iconMenu.addEventListener('touchend', function() {
            isScrolling = false;
        });
        
        // Drag functionality para desktop
        let isDragging = false;
        let startMouseY = 0;
        let startScrollTop = 0;
        
        iconMenu.addEventListener('mousedown', function(e) {
            isDragging = true;
            startMouseY = e.pageY - iconMenu.offsetTop;
            startScrollTop = iconMenu.scrollTop;
            iconMenu.style.cursor = 'grabbing';
            iconMenu.style.userSelect = 'none';
        });
        
        iconMenu.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            e.preventDefault();
            const y = e.pageY - iconMenu.offsetTop;
            const walk = (y - startMouseY) * 1.5;
            iconMenu.scrollTop = startScrollTop - walk;
        });
        
        iconMenu.addEventListener('mouseup', function() {
            isDragging = false;
            iconMenu.style.cursor = 'default';
            iconMenu.style.userSelect = 'auto';
        });
        
        iconMenu.addEventListener('mouseleave', function() {
            isDragging = false;
            iconMenu.style.cursor = 'default';
            iconMenu.style.userSelect = 'auto';
        });
    }
    
    // Menu lateral - sincronizar com menu principal
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const categoryName = this.dataset.category;
            
            // Remove active de todos os itens
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Adiciona active no item clicado
            this.classList.add('active');
            
            // Encontra o índice da categoria no menu principal
            let categoryIndex = -1;
            navCategories.forEach((navCat, index) => {
                if (navCat.dataset.category === categoryName) {
                    categoryIndex = index;
                }
            });
            
            // Ativa a categoria correspondente no menu principal
            if (categoryIndex !== -1) {
                activateCategory(categoryIndex);
            }
            
            // Fecha o menu lateral
            closeSidebar();
        });
    });
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

// Fechar menu lateral
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}


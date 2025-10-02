// Fix para garantir que o menu mobile funcione
(function() {
    'use strict';
    
    function initMobileMenu() {
        console.log('Initializing mobile menu fix...');
        
        // Verificar se o menu toggle existe
        const menuToggle = document.querySelector('.menu-toggle');
        if (!menuToggle) {
            console.log('Menu toggle not found');
            return;
        }
        
        console.log('Menu toggle found:', menuToggle);
        
        // Garantir que o menu toggle seja visível no mobile
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'flex';
            menuToggle.style.alignItems = 'center';
            menuToggle.style.justifyContent = 'center';
            
            // Esconder categorias de navegação
            const navCategories = document.querySelector('.nav-categories');
            if (navCategories) {
                navCategories.style.display = 'none';
            }
        }
        
        // Verificar se os elementos do menu mobile existem
        let mobileMenu = document.querySelector('.mobile-menu');
        let mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
        
        if (!mobileMenu || !mobileMenuOverlay) {
            console.log('Creating mobile menu elements...');
            createMobileMenuElements();
            
            // Reselecionar após criação
            mobileMenu = document.querySelector('.mobile-menu');
            mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
        }
        
        // Adicionar event listeners
        setupMenuEvents(menuToggle, mobileMenu, mobileMenuOverlay);
    }
    
    function createMobileMenuElements() {
        // Criar overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        
        // Criar menu
        const menu = document.createElement('div');
        menu.className = 'mobile-menu';
        
        // Header do menu
        const header = document.createElement('div');
        header.className = 'mobile-menu-header';
        header.innerHTML = `
            <div class="mobile-menu-title">Menu</div>
            <button class="close-mobile-menu">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Conteúdo do menu
        const content = document.createElement('div');
        content.className = 'mobile-menu-content';
        
        // Itens do menu
        const menuItems = [
            { icon: 'fas fa-beer', text: 'CERVEJA', href: 'index.html' },
            { icon: 'fas fa-wine-bottle', text: 'DRINKS', href: 'drinks.html' },
            { icon: 'fas fa-cocktail', text: 'MONTE SEU COPÃO', href: 'monte-copao.html' },
            { icon: 'fas fa-tint', text: 'SEM ÁLCOOL', href: 'sem-alcool.html' },
            { icon: 'fas fa-cocktail', text: 'COPÃO', href: 'copao.html' },
            { icon: 'fas fa-wine-glass', text: 'WHISKYS', href: 'whiskys.html' },
            { icon: 'fas fa-wine-glass-alt', text: 'DOSES', href: 'doses.html' },
            { icon: 'fas fa-cookie-bite', text: 'SALGADINHOS', href: 'salgadinhos.html' }
        ];
        
        menuItems.forEach(item => {
            const menuItem = document.createElement('a');
            menuItem.className = 'mobile-menu-item';
            menuItem.href = item.href;
            menuItem.innerHTML = `
                <i class="${item.icon}"></i>
                <span>${item.text}</span>
            `;
            content.appendChild(menuItem);
        });
        
        // Montar menu
        menu.appendChild(header);
        menu.appendChild(content);
        
        // Adicionar ao body
        document.body.appendChild(overlay);
        document.body.appendChild(menu);
        
        console.log('Mobile menu elements created');
    }
    
    function setupMenuEvents(menuToggle, mobileMenu, mobileMenuOverlay) {
        if (!menuToggle || !mobileMenu || !mobileMenuOverlay) {
            console.log('Missing menu elements for event setup');
            return;
        }
        
        const closeMobileMenu = document.querySelector('.close-mobile-menu');
        
        // Abrir menu
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Opening mobile menu');
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Fechar menu
        function closeMenu() {
            console.log('Closing mobile menu');
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        if (closeMobileMenu) {
            closeMobileMenu.addEventListener('click', closeMenu);
        }
        
        mobileMenuOverlay.addEventListener('click', closeMenu);
        
        // Fechar com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
        
        console.log('Mobile menu events setup complete');
    }
    
    // Inicializar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
    
    // Reinicializar no resize da janela
    window.addEventListener('resize', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navCategories = document.querySelector('.nav-categories');
        
        if (window.innerWidth <= 768) {
            if (menuToggle) {
                menuToggle.style.display = 'flex';
            }
            if (navCategories) {
                navCategories.style.display = 'none';
            }
        } else {
            if (menuToggle) {
                menuToggle.style.display = 'none';
            }
            if (navCategories) {
                navCategories.style.display = 'flex';
            }
        }
    });
    
})();
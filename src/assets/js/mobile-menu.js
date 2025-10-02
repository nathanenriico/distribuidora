// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing mobile menu...');
    
    // Criar elementos do menu mobile
    createMobileMenu();
    
    // Aguardar um pouco para garantir que os elementos foram criados
    setTimeout(function() {
        setupMobileMenuEvents();
    }, 100);
});

function setupMobileMenuEvents() {
    // Event listeners
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeMobileMenu = document.querySelector('.close-mobile-menu');
    
    console.log('Menu elements:', { menuToggle, mobileMenu, mobileMenuOverlay, closeMobileMenu });
    
    // Abrir menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Menu toggle clicked');
            if (mobileMenu && mobileMenuOverlay) {
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    // Fechar menu
    function closeMenu() {
        console.log('Closing menu');
        if (mobileMenu && mobileMenuOverlay) {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', closeMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMenu);
    }
    
    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
}

function createMobileMenu() {
    // Verificar se já existe
    if (document.querySelector('.mobile-menu')) return;
    
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
}
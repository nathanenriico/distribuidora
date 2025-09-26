// Script universal para garantir que todos os botões de "+" funcionem
document.addEventListener('DOMContentLoaded', function() {
    // Função para adicionar event listeners aos botões
    function attachAddButtonListeners() {
        const addButtons = document.querySelectorAll('.add-btn');
        addButtons.forEach(button => {
            // Remove listeners existentes para evitar duplicação
            button.removeEventListener('click', handleAddToCart);
            // Adiciona o listener
            button.addEventListener('click', handleAddToCart);
        });
    }

    // Handler para o clique no botão de adicionar
    function handleAddToCart(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (typeof addToCart === 'function') {
            addToCart(this);
        } else {
            console.error('Função addToCart não encontrada');
        }
    }

    // Observador para detectar mudanças no DOM (quando produtos são carregados dinamicamente)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Verifica se foram adicionados novos produtos
                const hasNewProducts = Array.from(mutation.addedNodes).some(node => 
                    node.nodeType === 1 && (
                        node.classList?.contains('product-card') || 
                        node.querySelector?.('.product-card')
                    )
                );
                
                if (hasNewProducts) {
                    // Aguarda um pouco para garantir que o DOM foi atualizado
                    setTimeout(attachAddButtonListeners, 100);
                }
            }
        });
    });

    // Inicia a observação
    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) {
        observer.observe(productsGrid, {
            childList: true,
            subtree: true
        });
    }

    // Adiciona listeners iniciais
    attachAddButtonListeners();

    // Event delegation global como backup
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-btn') || e.target.closest('.add-btn')) {
            const button = e.target.classList.contains('add-btn') ? e.target : e.target.closest('.add-btn');
            
            // Verifica se o evento já foi tratado
            if (!e.defaultPrevented) {
                e.preventDefault();
                e.stopPropagation();
                
                if (typeof addToCart === 'function') {
                    addToCart(button);
                }
            }
        }
    });
});
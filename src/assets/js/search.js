// Dados dos produtos para busca
const products = [
    // Cervejas
    { name: 'Itaipava 350ml', price: 'R$ 4,49', image: '../assets/images/products/cervejas/itaipava.png' },
    { name: 'Amstel 350ml', price: 'R$ 10,90', image: '../assets/images/products/cervejas/amstel.png' },
    { name: 'Heineken 350ml', price: 'R$ 5,10', image: '../assets/images/products/cervejas/heineken.png' },
    { name: 'Original 350ml', price: 'R$ 4,80', image: '../assets/images/products/cervejas/original.png' },
    { name: 'Skol 350ml', price: 'R$ 4,49', image: '../assets/images/products/cervejas/skol.png' },
    { name: 'Império 350ml', price: 'R$ 4,29', image: '../assets/images/products/cervejas/imperio.png' },
    { name: 'Brahma 350ml', price: 'R$ 4,99', image: '../assets/images/products/cervejas/brahma.png' },
    
    // Doses
    { name: 'Dose Brahma', price: 'R$ 7,90', image: '../assets/images/products/cervejas/brahma.png' },
    { name: 'Dose Heineken', price: 'R$ 8,50', image: '../assets/images/products/cervejas/heineken.png' },
    { name: 'Dose Skol', price: 'R$ 5,90', image: '../assets/images/products/cervejas/skol.png' },
    { name: 'Dose Itaipava', price: 'R$ 6,90', image: '../assets/images/products/cervejas/itaipava.png' },
    { name: 'Dose Amstel', price: 'R$ 6,90', image: '../assets/images/products/cervejas/amstel.png' },
    { name: 'Dose Original', price: 'R$ 6,90', image: '../assets/images/products/cervejas/original.png' },
    
    // Drinks
    { name: 'Caipirinha', price: 'R$ 15,90', image: '../assets/images/products/drinks/Caipirinha.png' },
    { name: 'Caipivodka', price: 'R$ 15,90', image: '../assets/images/products/drinks/caipivodka.png' },
    { name: 'Gin Tônica', price: 'R$ 15,90', image: '../assets/images/products/drinks/gin tonica.png' },
    { name: 'Cuba', price: 'R$ 16,00', image: '../assets/images/products/drinks/cuba.png' },
    { name: 'Bubbalo', price: 'R$ 15,90', image: '../assets/images/products/drinks/bubbalo drink.png' },
    { name: 'Espanhola', price: 'R$ 15,90', image: '../assets/images/products/drinks/espanhola.png' },
    
    // Whiskys
    { name: 'Ballantines', price: 'R$ 89,90', image: '../assets/images/products/whisks/Ballantines.png' },
    { name: 'Jack Daniels', price: 'R$ 149,90', image: '../assets/images/products/whisks/jack daniels.webp' },
    { name: 'Jim Beam Apple', price: 'R$ 79,90', image: '../assets/images/products/whisks/jim bean apple.png' },
    { name: 'Old Parr', price: 'R$ 119,90', image: '../assets/images/products/whisks/old par.png' },
    { name: 'Passport', price: 'R$ 59,90', image: '../assets/images/products/whisks/passport.png' },
    { name: 'Red Label', price: 'R$ 99,90', image: '../assets/images/products/whisks/red label.png' },
    { name: 'White Horse', price: 'R$ 69,90', image: '../assets/images/products/whisks/white horse.png' },
    { name: 'Gin', price: 'R$ 49,90', image: '../assets/images/products/whisks/gin.png' },
    
    // Sem Álcool
    { name: 'Água 2 Litros', price: 'R$ 3,50', image: '../assets/images/products/sem alcool/2 litros.png' },
    { name: 'Água 200ml', price: 'R$ 1,50', image: '../assets/images/products/sem alcool/200 ml.webp' },
    { name: 'Água', price: 'R$ 2,00', image: '../assets/images/products/sem alcool/agua.png' },
    { name: 'Cerveja Sem Álcool', price: 'R$ 4,90', image: '../assets/images/products/sem alcool/cerveja sem alcool.png' },
    
    // Salgadinhos
    { name: 'Salgadinho Cebola', price: 'R$ 5,90', image: '../assets/images/products/salgadinhos/cebola.jpeg' },
    { name: 'Salgadinho Churrasco', price: 'R$ 5,90', image: '../assets/images/products/salgadinhos/churrasco.png' },
    { name: 'Salgadinho Presunto', price: 'R$ 5,90', image: '../assets/images/products/salgadinhos/presunto.png' },
    { name: 'Salgadinho Queijo', price: 'R$ 5,90', image: '../assets/images/products/salgadinhos/queijo.jpeg' },
    { name: 'Salgadinho Requeijão', price: 'R$ 5,90', image: '../assets/images/products/salgadinhos/requeijao.webp' },
    
    // Doses (Cachaça, Vodka, etc)
    { name: 'Dose Cachaça', price: 'R$ 4,90', image: '../assets/images/products/doses/cachaça.png' },
    { name: 'Dose Gin', price: 'R$ 7,90', image: '../assets/images/products/doses/gin.png' },
    { name: 'Dose São Francisco', price: 'R$ 5,90', image: '../assets/images/products/doses/sao francisco.png' },
    { name: 'Dose Vodka', price: 'R$ 6,90', image: '../assets/images/products/doses/vodka.png' }
];

function toggleSearch(event) {
    if (event) event.preventDefault();
    const container = document.getElementById('searchContainer');
    const input = document.getElementById('searchInput');
    
    if (container.classList.contains('active')) {
        container.classList.remove('active');
        input.value = '';
        document.getElementById('searchResults').innerHTML = '';
    } else {
        container.classList.add('active');
        input.focus();
    }
}

function closeSearch() {
    document.getElementById('searchContainer').classList.remove('active');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

function performSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (!query.trim()) {
        resultsContainer.innerHTML = '';
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredProducts.length === 0) {
        resultsContainer.innerHTML = '<div class="search-no-results">Produto não encontrado</div>';
        return;
    }

    resultsContainer.innerHTML = filteredProducts.map(product => `
        <div class="search-result-item">
            <img src="${product.image}" alt="${product.name}" class="search-result-image">
            <div class="search-result-info">
                <div class="search-result-name">${product.name}</div>
                <div class="search-result-price">
                    ${product.oldPrice ? `<span class="search-result-discount">${product.oldPrice}</span>` : ''}
                    ${product.price}
                    ${product.discount ? ` <span style="color: #e74c3c; font-size: 0.8rem;">${product.discount}</span>` : ''}
                </div>
            </div>
            <button class="search-result-add" onclick="addToCart('${product.name}')">+</button>
        </div>
    `).join('');
}

function addToCart(productName) {
    console.log('Adicionado ao carrinho:', productName);
    // Implementar lógica do carrinho aqui
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    const searchModal = document.getElementById('searchModal');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            performSearch(e.target.value);
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', closeSearch);
    }
    
    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        const container = document.getElementById('searchContainer');
        if (e.key === 'Escape' && container.classList.contains('active')) {
            closeSearch();
        }
    });
    
    // Fechar ao clicar fora
    document.addEventListener('click', function(e) {
        const container = document.getElementById('searchContainer');
        const toggle = document.querySelector('.search-toggle');
        
        if (!container.contains(e.target) && !toggle.contains(e.target) && container.classList.contains('active')) {
            closeSearch();
        }
    });
});




// Senha do admin (em produção, use um sistema mais seguro)
const ADMIN_PASSWORD = 'admin123';

// Produtos armazenados localmente
let products = JSON.parse(localStorage.getItem('adminProducts')) || [];

// Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('adminPassword').value;
    
    if (password === ADMIN_PASSWORD) {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'flex';
        loadProducts();
    } else {
        alert('Senha incorreta!');
    }
});

// Logout
function logout() {
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('adminPassword').value = '';
}

// Carregar produtos na tabela
function loadProducts() {
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = '';
    
    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${product.id}</td>
            <td>${product.name}</td>
            <td>${product.stock}</td>
            <td><button class="edit-btn" onclick="editProduct(${index})"><i class="fas fa-edit"></i></button></td>
            <td><button class="delete-btn" onclick="deleteProduct(${index})"><i class="fas fa-trash"></i></button></td>
        `;
        tbody.appendChild(row);
    });
}

// Abrir modal de adicionar
function openAddModal() {
    document.getElementById('addModal').classList.add('active');
}

// Fechar modal de adicionar
function closeAddModal() {
    document.getElementById('addModal').classList.remove('active');
    document.getElementById('addProductForm').reset();
}

// Adicionar produto
document.getElementById('addProductForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const product = {
        id: Date.now().toString().slice(-8),
        name: document.getElementById('productName').value,
        brand: document.getElementById('productBrand').value,
        volume: document.getElementById('productVolume').value,
        price: parseFloat(document.getElementById('productPrice').value),
        stock: parseInt(document.getElementById('productStock').value),
        category: document.getElementById('productCategory').value
    };
    
    products.push(product);
    localStorage.setItem('adminProducts', JSON.stringify(products));
    
    loadProducts();
    closeAddModal();
    
    // Adicionar ao site principal
    addProductToMainSite(product);
    
    alert('Produto adicionado com sucesso!');
});

// Deletar produto
function deleteProduct(index) {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
        products.splice(index, 1);
        localStorage.setItem('adminProducts', JSON.stringify(products));
        loadProducts();
        alert('Produto deletado com sucesso!');
    }
}

// Editar produto (simplificado)
function editProduct(index) {
    const product = products[index];
    const newStock = prompt('Novo estoque:', product.stock);
    
    if (newStock !== null && !isNaN(newStock)) {
        products[index].stock = parseInt(newStock);
        localStorage.setItem('adminProducts', JSON.stringify(products));
        loadProducts();
        alert('Estoque atualizado!');
    }
}

// Adicionar produto ao site principal
function addProductToMainSite(product) {
    // Esta função integraria com o sistema principal
    // Por enquanto, apenas salva no localStorage para demonstração
    let mainProducts = JSON.parse(localStorage.getItem('mainSiteProducts')) || [];
    mainProducts.push(product);
    localStorage.setItem('mainSiteProducts', JSON.stringify(mainProducts));
}

// Busca
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#productsTableBody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Navegação do menu
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active de todos
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        
        // Adiciona active no clicado
        this.classList.add('active');
        
        // Atualiza título
        const section = this.dataset.section;
        document.querySelector('.admin-header h1').textContent = 
            section.charAt(0).toUpperCase() + section.slice(1);
    });
});

// Inicializar com alguns produtos de exemplo
if (products.length === 0) {
    products = [
        {
            id: '12345678',
            name: 'Skol 350ml',
            brand: 'skol',
            volume: '350',
            price: 34.80,
            stock: 1245,
            category: '* CERVEJAS 1 *'
        },
        {
            id: '87654321',
            name: 'Brahma 600ml',
            brand: 'brahma',
            volume: '600',
            price: 144.00,
            stock: 987,
            category: '* CERVEJAS 1 *'
        }
    ];
    localStorage.setItem('adminProducts', JSON.stringify(products));
}
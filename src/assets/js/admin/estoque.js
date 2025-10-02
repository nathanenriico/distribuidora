// Sistema de Controle Financeiro - VF Distribuidora

// Dados simulados
let transactions = [
    {
        id: 1,
        date: '2024-01-15',
        time: '10:30',
        type: 'compra',
        productCode: 'SKL269',
        productName: 'Skol 269ml - 15 unidades',
        quantity: 20,
        unitPrice: 25.00,
        total: 500.00
    },
    {
        id: 2,
        date: '2024-01-15',
        time: '14:20',
        type: 'venda',
        productCode: 'SKL269',
        productName: 'Skol 269ml - 15 unidades',
        quantity: 5,
        unitPrice: 29.40,
        total: 147.00
    }
];

let products = {
    'SKL269': { name: 'Skol 269ml - 15 unidades', stock: 50 },
    'SKL350': { name: 'Skol 350ml - 12 unidades', stock: 30 }
};

let profitChart;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initTransactionForm();
    loadTransactions();
    updateReports();
    initChart();
});

// Sistema de abas
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            // Remove active de todas as abas
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Ativa a aba clicada
            btn.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
            
            // Atualiza gráfico se for a aba de relatórios
            if (targetTab === 'relatorios') {
                setTimeout(() => updateChart(), 100);
            }
        });
    });
}

// Modal de transação
function openTransactionModal() {
    document.getElementById('transactionModal').classList.add('active');
}

function closeTransactionModal() {
    document.getElementById('transactionModal').classList.remove('active');
    document.getElementById('transactionForm').reset();
    document.getElementById('totalValue').value = '';
}

// Transação rápida
function quickTransaction(productCode, type) {
    document.getElementById('productCode').value = productCode;
    document.getElementById('transactionType').value = type;
    openTransactionModal();
}

// Formulário de transação
function initTransactionForm() {
    const form = document.getElementById('transactionForm');
    const quantityInput = document.getElementById('quantity');
    const unitPriceInput = document.getElementById('unitPrice');
    const totalInput = document.getElementById('totalValue');

    // Calcular total automaticamente
    function calculateTotal() {
        const quantity = parseFloat(quantityInput.value) || 0;
        const unitPrice = parseFloat(unitPriceInput.value) || 0;
        const total = quantity * unitPrice;
        totalInput.value = total.toFixed(2);
    }

    quantityInput.addEventListener('input', calculateTotal);
    unitPriceInput.addEventListener('input', calculateTotal);

    // Submissão do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const transaction = {
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            type: document.getElementById('transactionType').value,
            productCode: document.getElementById('productCode').value,
            productName: products[document.getElementById('productCode').value].name,
            quantity: parseInt(document.getElementById('quantity').value),
            unitPrice: parseFloat(document.getElementById('unitPrice').value),
            total: parseFloat(document.getElementById('totalValue').value)
        };

        // Adicionar transação
        transactions.unshift(transaction);
        
        // Atualizar estoque
        updateStock(transaction);
        
        // Recarregar dados
        loadTransactions();
        updateReports();
        updateChart();
        
        closeTransactionModal();
        
        // Feedback visual
        showNotification('Transação registrada com sucesso!', 'success');
    });
}

// Atualizar estoque
function updateStock(transaction) {
    const product = products[transaction.productCode];
    if (transaction.type === 'compra') {
        product.stock += transaction.quantity;
    } else {
        product.stock -= transaction.quantity;
    }
    
    // Atualizar display do estoque
    const productItem = document.querySelector(`[data-code="${transaction.productCode}"]`);
    if (productItem) {
        const stockQty = productItem.querySelector('.stock-qty');
        stockQty.textContent = `Estoque: ${product.stock} unidades`;
        
        // Alerta de estoque baixo
        if (product.stock < 10) {
            stockQty.style.color = '#dc3545';
            showNotification(`Estoque baixo para ${product.name}!`, 'warning');
        }
    }
}

// Carregar transações
function loadTransactions() {
    const tbody = document.getElementById('transactionsBody');
    tbody.innerHTML = '';

    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(transaction.date)} ${transaction.time}</td>
            <td><span class="transaction-type ${transaction.type}">${transaction.type.toUpperCase()}</span></td>
            <td>${transaction.productName}</td>
            <td>${transaction.quantity}</td>
            <td>R$ ${transaction.unitPrice.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${transaction.total.toFixed(2).replace('.', ',')}</td>
        `;
        tbody.appendChild(row);
    });
}

// Atualizar relatórios
function updateReports() {
    const sales = transactions.filter(t => t.type === 'venda');
    const purchases = transactions.filter(t => t.type === 'compra');
    
    const totalSales = sales.reduce((sum, t) => sum + t.total, 0);
    const totalPurchases = purchases.reduce((sum, t) => sum + t.total, 0);
    const grossProfit = totalSales - totalPurchases;
    
    document.getElementById('totalSales').textContent = formatCurrency(totalSales);
    document.getElementById('totalPurchases').textContent = formatCurrency(totalPurchases);
    document.getElementById('grossProfit').textContent = formatCurrency(grossProfit);
    
    // Cor do lucro
    const profitElement = document.getElementById('grossProfit');
    profitElement.style.color = grossProfit >= 0 ? '#28a745' : '#dc3545';
}

// Inicializar gráfico
function initChart() {
    const ctx = document.getElementById('profitChart').getContext('2d');
    
    profitChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Vendas',
                data: [],
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                tension: 0.4
            }, {
                label: 'Compras',
                data: [],
                borderColor: '#dc3545',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                tension: 0.4
            }, {
                label: 'Lucro',
                data: [],
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Evolução Financeira'
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toFixed(0);
                        }
                    }
                }
            }
        }
    });
    
    updateChart();
}

// Atualizar gráfico
function updateChart() {
    if (!profitChart) return;
    
    // Agrupar transações por data
    const dailyData = {};
    
    transactions.forEach(transaction => {
        const date = transaction.date;
        if (!dailyData[date]) {
            dailyData[date] = { sales: 0, purchases: 0 };
        }
        
        if (transaction.type === 'venda') {
            dailyData[date].sales += transaction.total;
        } else {
            dailyData[date].purchases += transaction.total;
        }
    });
    
    // Preparar dados para o gráfico
    const dates = Object.keys(dailyData).sort();
    const salesData = dates.map(date => dailyData[date].sales);
    const purchasesData = dates.map(date => dailyData[date].purchases);
    const profitData = dates.map(date => dailyData[date].sales - dailyData[date].purchases);
    
    profitChart.data.labels = dates.map(date => formatDate(date));
    profitChart.data.datasets[0].data = salesData;
    profitChart.data.datasets[1].data = purchasesData;
    profitChart.data.datasets[2].data = profitData;
    
    profitChart.update();
}

// Funções utilitárias
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

function formatCurrency(value) {
    return 'R$ ' + value.toFixed(2).replace('.', ',');
}

function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'warning' ? 'exclamation-triangle' : 'info'}"></i>
        ${message}
    `;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'warning' ? '#fff3cd' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'warning' ? '#856404' : '#0c5460'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
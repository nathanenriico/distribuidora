// Adiciona botões apenas no mobile
document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach(button => {
        button.remove();
    });
    
    // Adiciona botões mobile
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const button = document.createElement('button');
        button.className = 'mobile-add-btn';
        button.innerHTML = '+';
        button.onclick = function(e) {
            e.stopPropagation();
            addToCart(card);
        };
        card.appendChild(button);
    });
});
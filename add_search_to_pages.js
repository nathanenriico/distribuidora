// Script para adicionar campo de busca em todas as páginas
const fs = require('fs');
const path = require('path');

const pages = [
    'whiskys.html',
    'sem-alcool.html', 
    'salgadinhos.html',
    'doses.html'
];

const searchHTML = `            <div class="search-container" id="searchContainer">
                <div class="search-input-box">
                    <i class="fas fa-search search-icon"></i>
                    <input type="text" id="searchInput" placeholder="Digite o produto que deseja buscar">
                    <button class="search-btn">Fechar</button>
                </div>
                <div class="search-results" id="searchResults"></div>
            </div>
            <div class="search-toggle" onclick="toggleSearch(event)">
                <i class="fas fa-search"></i>
            </div>`;

const searchScript = `    <script src="../assets/js/search.js"></script>`;

pages.forEach(page => {
    const filePath = path.join(__dirname, 'src', 'pages', page);
    
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Substituir o search-toggle antigo
        content = content.replace(
            /            <div class="search-toggle">\s*<i class="fas fa-search"><\/i>\s*<\/div>/g,
            searchHTML
        );
        
        // Adicionar script antes do </body>
        if (!content.includes('search.js')) {
            content = content.replace(
                '</body>',
                searchScript + '\n</body>'
            );
        }
        
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${page}`);
    }
});

console.log('All pages updated with search functionality!');
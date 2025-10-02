# Estrutura do Projeto - Site Moderno

## 📁 Estrutura de Pastas

```
adega/
├── src/                          # Código fonte principal
│   ├── pages/                    # Páginas HTML (estáticas e dinâmicas)
│   ├── components/               # Componentes reutilizáveis
│   │   ├── common/              # Componentes comuns (header, footer, nav)
│   │   └── admin/               # Componentes específicos do admin
│   ├── assets/                   # Recursos estáticos
│   │   ├── css/                 # Estilos CSS
│   │   ├── js/                  # Scripts JavaScript
│   │   │   ├── modules/         # Módulos JS reutilizáveis
│   │   │   └── admin/           # Scripts específicos do admin
│   │   ├── images/              # Imagens (logos, ícones, fotos)
│   │   └── fonts/               # Fontes personalizadas
│   └── utils/                    # Utilitários e helpers
├── public/                       # Arquivos públicos (build final)
├── tests/                        # Testes automatizados
│   ├── unit/                    # Testes unitários
│   └── integration/             # Testes de integração
├── docs/                         # Documentação
│   └── api/                     # Documentação da API
├── config/                       # Arquivos de configuração
└── README.md                     # Documentação principal
```

## 📋 Função de Cada Pasta

### **src/** - Código Fonte
- **pages/**: Páginas HTML do site (index.html, admin.html, estoque.html)
- **components/**: Componentes reutilizáveis (modais, cards, formulários)
- **assets/css/**: Estilos organizados por funcionalidade
- **assets/js/**: Scripts organizados por módulos e funcionalidades
- **assets/images/**: Imagens otimizadas para web
- **assets/fonts/**: Fontes customizadas
- **utils/**: Funções auxiliares e utilitários

### **public/** - Build Final
- Arquivos processados e otimizados para produção

### **tests/** - Testes
- **unit/**: Testes de funções individuais
- **integration/**: Testes de fluxos completos

### **docs/** - Documentação
- Guias, APIs e documentação técnica

### **config/** - Configurações
- Arquivos de configuração do projeto (webpack, babel, etc.)

## 🎯 Benefícios da Estrutura

- **Escalável**: Fácil adicionar novos módulos e componentes
- **Manutenível**: Código organizado por responsabilidade
- **Reutilizável**: Componentes e módulos independentes
- **Testável**: Estrutura preparada para testes automatizados
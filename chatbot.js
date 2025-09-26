// Configuração da API do ChatGPT
const OPENAI_API_KEY = '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';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Contexto da adega para o ChatGPT
const ADEGA_CONTEXT = `
Você é o assistente virtual da VF Distribuidora de Bebidas. Responda sempre em português brasileiro de forma amigável e profissional.

INFORMAÇÕES DA EMPRESA:
- Nome: VF Distribuidora de Bebidas
- Entrega gratuita a partir de R$ 1.500,00
- Status atual: Fechado
- Redes sociais: WhatsApp, Instagram, Facebook

PRODUTOS DISPONÍVEIS:
CERVEJAS:
- Skol (269ml, 350ml, 550ml, 600ml, 1L, 300ml) - Preços de R$ 29,40 a R$ 132,00
- Itaipava (269ml, 350ml, 300ml, 473ml, 600ml, 1L) - Preços de R$ 23,40 a R$ 120,00
- Brahma (Duplo Malte e Chopp em vários tamanhos) - Preços de R$ 32,25 a R$ 144,00
- Budweiser (269ml, 350ml, Long Neck 330ml) - Preços de R$ 20,40 a R$ 108,00
- Amstel (269ml, 350ml, 473ml) - Preços de R$ 30,00 a R$ 43,99
- Império (269ml, 350ml) - Preços de R$ 28,80 a R$ 29,85

DESTILADOS:
- Vodkas: Smirnoff, Absolut (vários sabores)
- Whiskys: Jack Daniel's, Johnnie Walker, Chivas
- Cachaças: 51, Pitu, Velho Barreiro
- Gins: Rocks, Eternity

OUTRAS BEBIDAS:
- Refrigerantes: Coca-Cola, Pepsi, Guaraná Antarctica, Fanta, Sprite
- Energéticos: Red Bull, Monster
- Águas: Crystal, Kero Coco
- Cigarros: Marlboro, Lucky Strike
- Essências e carvão para narguile
- Mercearia: Balas, chocolates

Ajude os clientes com:
- Informações sobre produtos e preços
- Recomendações de bebidas
- Condições de entrega
- Horários de funcionamento
- Como fazer pedidos
- Promoções disponíveis
`;

class Chatbot {
    constructor() {
        this.chatContainer = document.getElementById('chatbotContainer');
        this.chatFloatBtn = document.getElementById('chatFloatBtn');
        this.chatClose = document.getElementById('chatbotClose');
        this.chatInput = document.getElementById('chatbotInput');
        this.chatSend = document.getElementById('chatbotSend');
        this.chatMessages = document.getElementById('chatbotMessages');
        this.notification = document.querySelector('.chat-notification');
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        // Abrir/fechar chat
        this.chatFloatBtn.addEventListener('click', () => this.toggleChat());
        this.chatClose.addEventListener('click', () => this.closeChat());
        
        // Enviar mensagem
        this.chatSend.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Remover notificação ao abrir chat
        this.chatFloatBtn.addEventListener('click', () => {
            this.notification.style.display = 'none';
        });
    }
    
    toggleChat() {
        if (this.chatContainer.classList.contains('active')) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }
    
    openChat() {
        this.chatContainer.style.display = 'flex';
        setTimeout(() => {
            this.chatContainer.classList.add('active');
            this.chatInput.focus();
        }, 10);
    }
    
    closeChat() {
        this.chatContainer.classList.remove('active');
        setTimeout(() => {
            if (!this.chatContainer.classList.contains('active')) {
                this.chatContainer.style.display = 'none';
            }
        }, 300);
    }
    
    async sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;
        
        // Adicionar mensagem do usuário
        this.addMessage(message, 'user');
        this.chatInput.value = '';
        
        // Mostrar indicador de digitação
        this.showTypingIndicator();
        
        try {
            // Enviar para ChatGPT
            const response = await this.callOpenAI(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'bot');
        } catch (error) {
            this.hideTypingIndicator();
            this.addMessage('Desculpe, ocorreu um erro. Tente novamente em alguns instantes.', 'bot');
            console.error('Erro no chatbot:', error);
        }
    }
    
    async callOpenAI(message) {
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: ADEGA_CONTEXT
                    },
                    {
                        role: 'user',
                        content: message
                    }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });
        
        if (!response.ok) {
            throw new Error('Erro na API do OpenAI');
        }
        
        const data = await response.json();
        return data.choices[0].message.content;
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const now = new Date();
        const timeStr = now.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
            </div>
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${timeStr}</span>
            </div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-message';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        this.chatMessages.appendChild(typingDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    hideTypingIndicator() {
        const typingMessage = this.chatMessages.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }
}

// Inicializar chatbot quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});

// Respostas rápidas para casos offline
const QUICK_RESPONSES = {
    'horario': 'Nosso horário de funcionamento é de segunda a sábado, das 8h às 18h.',
    'entrega': 'Fazemos entrega gratuita para pedidos acima de R$ 1.500,00. Para valores menores, consulte nossa taxa de entrega.',
    'pagamento': 'Aceitamos dinheiro, cartão de débito, crédito e PIX.',
    'contato': 'Entre em contato conosco pelo WhatsApp, Instagram ou Facebook.',
    'promocao': 'Temos várias promoções! Confira nossos produtos com desconto na página.',
    'cerveja': 'Temos cervejas Skol, Itaipava, Brahma, Budweiser, Amstel e Império em diversos tamanhos.',
    'whisky': 'Nossos whiskys incluem Jack Daniel\'s, Johnnie Walker e Chivas Regal.',
    'vodka': 'Trabalhamos com vodkas Smirnoff e Absolut em vários sabores.'
};
// Mobile Features and Enhancements
document.addEventListener('DOMContentLoaded', function() {
    initMobileFeatures();
});

function initMobileFeatures() {
    // Search Modal
    initSearchModal();
    
    // Floating Action Buttons
    initFloatingButtons();
    
    // Touch Gestures
    initTouchGestures();
    
    // Scroll Enhancements
    initScrollEnhancements();
    
    // Toast Notifications
    initToastSystem();
}

// Search Modal - Disabled
function initSearchModal() {
    // Funcionalidade removida - usando search.js
    return;
}



// Floating Action Buttons
function initFloatingButtons() {
    if (window.innerWidth > 768) return;
    
    const fabContainer = document.createElement('div');
    fabContainer.className = 'fab-container';
    fabContainer.innerHTML = `
        <button class="fab scroll-top" title="Voltar ao topo">
            <i class="fas fa-arrow-up"></i>
        </button>
    `;
    
    document.body.appendChild(fabContainer);
    
    // Scroll to top functionality
    const scrollTopBtn = fabContainer.querySelector('.scroll-top');
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Show/hide based on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        
        if (window.scrollY > 300) {
            fabContainer.style.opacity = '1';
            fabContainer.style.visibility = 'visible';
        } else {
            fabContainer.style.opacity = '0';
            fabContainer.style.visibility = 'hidden';
        }
        
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 300) {
                fabContainer.style.opacity = '0.7';
            }
        }, 2000);
    });
}

// Touch Gestures
function initTouchGestures() {
    const navCategories = document.querySelector('.nav-categories');
    if (!navCategories) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    navCategories.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - navCategories.offsetLeft;
        scrollLeft = navCategories.scrollLeft;
        navCategories.style.cursor = 'grabbing';
    });
    
    navCategories.addEventListener('mouseleave', () => {
        isDown = false;
        navCategories.style.cursor = 'grab';
    });
    
    navCategories.addEventListener('mouseup', () => {
        isDown = false;
        navCategories.style.cursor = 'grab';
    });
    
    navCategories.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - navCategories.offsetLeft;
        const walk = (x - startX) * 2;
        navCategories.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events
    let touchStartX = 0;
    let touchScrollLeft = 0;
    
    navCategories.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchScrollLeft = navCategories.scrollLeft;
    });
    
    navCategories.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].clientX;
        const walk = (touchStartX - touchX) * 1.5;
        navCategories.scrollLeft = touchScrollLeft + walk;
    });
}

// Scroll Enhancements
function initScrollEnhancements() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Toast Notification System
function initToastSystem() {
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
    
    window.showToast = function(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        toastContainer.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Remove toast
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, duration);
    };
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
const debouncedResize = debounce(() => {
    // Handle resize events
    if (window.innerWidth > 768) {
        const fabContainer = document.querySelector('.fab-container');
        if (fabContainer) {
            fabContainer.style.display = 'none';
        }
    } else {
        const fabContainer = document.querySelector('.fab-container');
        if (fabContainer) {
            fabContainer.style.display = 'flex';
        }
    }
}, 250);

window.addEventListener('resize', debouncedResize);

// Prevent zoom on double tap (iOS Safari)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Add loading states for better UX
document.addEventListener('click', function(e) {
    if (e.target.matches('.add-btn')) {
        const btn = e.target;
        const originalContent = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.disabled = false;
            showToast('Produto adicionado ao carrinho!', 'success');
        }, 800);
    }
});
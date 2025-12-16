// ===== CONFIGURAÇÕES =====
const CONFIG = {
    whatsapp: "5555999162729"
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    console.log('🌺 Floricultura Embeleze');
    
    initNavigation();
    initMobileMenu();
    initScrollEffects();
    initWhatsAppButtons();
    initContactForms();
    initFAQ();
}

// ===== NAVEGAÇÃO =====
function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ===== MENU MOBILE =====
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    const header = document.querySelector('header');
    const scrollTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header?.classList.add('header-scrolled');
        } else {
            header?.classList.remove('header-scrolled');
        }

        if (scrollTopBtn) {
            scrollTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ===== WHATSAPP =====
function initWhatsAppButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-comprar')) {
            const botao = e.target.closest('.btn-comprar');
            const nome = botao.getAttribute('data-nome');
            const valor = botao.getAttribute('data-valor');
            
            if (nome && valor) {
                const mensagem = `🌸 *Floricultura Embeleze* 🌸\n\nQuero comprar:\n*${nome}*\n💲 Valor: R$ ${valor.replace('.', ',')}`;
                window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`, '_blank');
            }
        }
    });
}

// ===== FORMULÁRIOS =====
function initContactForms() {
    const contactForm = document.getElementById('contato-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome-contato')?.value;
            const tipo = document.getElementById('tipo-contato')?.value;
            const mensagem = document.getElementById('mensagem-contato')?.value;
            
            const msg = `🌸 *Floricultura Embeleze* 🌸\n\n*Contato via site:*\n👤 Nome: ${nome}\n📋 Assunto: ${tipo}\n💬 Mensagem: ${mensagem}`;
            
            window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
        });
    }
}

// ===== FAQ =====
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.querySelector('.faq-pergunta').addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// ===== FILTROS (simples) =====
window.filtrarProdutos = function(categoria) {
    const produtos = document.querySelectorAll('.produto-card');
    
    produtos.forEach(produto => {
        if (categoria === 'todos' || produto.getAttribute('data-category') === categoria) {
            produto.style.display = 'flex';
        } else {
            produto.style.display = 'none';
        }
    });
};
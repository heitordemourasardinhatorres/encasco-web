

// Efeito de scroll no cabeçalho
const cabecalho = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        cabecalho.classList.add('rolado');
    } else {
        cabecalho.classList.remove('rolado');
    }
});

// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function (e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Manipulação do formulário de contato
const formularioContato = document.getElementById('formularioContato');
if (formularioContato) {
    formularioContato.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obter dados do formulário
        const dadosFormulario = new FormData(this);
        const nome = dadosFormulario.get('nome');
        const email = dadosFormulario.get('email');
        const mensagem = dadosFormulario.get('mensagem');

        // Validação simples
        if (!nome || !email || !mensagem) {
            mostrarNotificacao('Por favor, preencha todos os campos.', 'erro');
            return;
        }

        if (!validarEmail(email)) {
            mostrarNotificacao('Por favor, insira um e-mail válido.', 'erro');
            return;
        }

        // Simular envio do formulário
        mostrarNotificacao('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'sucesso');
        this.reset();
    });
}

// Função de validação de email
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// Sistema de notificações
function mostrarNotificacao(mensagem, tipo = 'info') {
    // Remover notificações existentes
    const notificacaoExistente = document.querySelector('.notificacao');
    if (notificacaoExistente) {
        notificacaoExistente.remove();
    }

    // Criar elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao notificacao-${tipo}`;
    notificacao.innerHTML = `
        <div class="conteudo-notificacao">
            <span class="mensagem-notificacao">${mensagem}</span>
            <button class="fechar-notificacao">&times;</button>
        </div>
    `;

    // Adicionar estilos
    notificacao.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${tipo === 'sucesso' ? '#10b981' : tipo === 'erro' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

    // Adicionar à página
    document.body.appendChild(notificacao);

    // Animar entrada
    setTimeout(() => {
        notificacao.style.transform = 'translateX(0)';
    }, 100);

    // Funcionalidade do botão fechar
    const botaoFechar = notificacao.querySelector('.fechar-notificacao');
    botaoFechar.addEventListener('click', () => {
        notificacao.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notificacao.remove();
        }, 300);
    });

    // Remover automaticamente após 5 segundos
    setTimeout(() => {
        if (notificacao.parentNode) {
            notificacao.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notificacao.remove();
            }, 300);
        }
    }, 5000);
}

// Observador de Intersecção para animações
const opcoesObservador = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = '1';
            entrada.target.style.transform = 'translateY(0)';
        }
    });
}, opcoesObservador);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const elementosAnimados = document.querySelectorAll('.card-servico, .card-aplicacao, .card-testemunho, .item-valor, .item-beneficio');

    elementosAnimados.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(30px)';
        elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observador.observe(elemento);
    });
});

// Efeitos de clique nos botões
document.querySelectorAll('.btn').forEach(botao => {
    botao.addEventListener('click', function (e) {
        // Criar efeito de ondulação
        const ondulacao = document.createElement('span');
        const retangulo = this.getBoundingClientRect();
        const tamanho = Math.max(retangulo.width, retangulo.height);
        const x = e.clientX - retangulo.left - tamanho / 2;
        const y = e.clientY - retangulo.top - tamanho / 2;

        ondulacao.style.cssText = `
            position: absolute;
            width: ${tamanho}px;
            height: ${tamanho}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ondulacao 0.6s linear;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ondulacao);

        setTimeout(() => {
            ondulacao.remove();
        }, 600);
    });
});

// Adicionar animação de ondulação ao CSS
const estilo = document.createElement('style');
estilo.textContent = `
    @keyframes ondulacao {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(estilo);



// Efeito parallax para seção hero
window.addEventListener('scroll', () => {
    const scrollado = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const taxa = scrollado * -0.5;
        hero.style.transform = `translateY(${taxa}px)`;
    }
});

// Animação de contador para estatísticas (se necessário)
function animarContador(elemento, alvo, duracao = 2000) {
    let inicio = 0;
    const incremento = alvo / (duracao / 16);

    function atualizarContador() {
        inicio += incremento;
        if (inicio < alvo) {
            elemento.textContent = Math.floor(inicio);
            requestAnimationFrame(atualizarContador);
        } else {
            elemento.textContent = alvo;
        }
    }

    atualizarContador();
}

// Carregamento preguiçoso para imagens com efeitos visuais
function carregarImagensPreguicosamente() {
    const imagens = document.querySelectorAll('img[data-src]');

    // Adicionar classe inicial para efeito de carregamento
    imagens.forEach(img => {
        img.classList.add('imagem-preguicosa');
    });

    const observadorImagem = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                const img = entrada.target;

                // Carregar a imagem
                img.src = img.dataset.src;

                // Adicionar evento para quando a imagem carregar
                img.addEventListener('load', () => {
                    img.classList.add('carregada');
                    img.classList.remove('imagem-preguicosa');
                });

                // Adicionar evento para erro de carregamento
                img.addEventListener('error', () => {
                    img.style.display = 'none';
                    console.warn('Erro ao carregar imagem:', img.dataset.src);
                });

                observadorImagem.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px 0px'
    });

    imagens.forEach(img => observadorImagem.observe(img));
}

// Inicializar carregamento preguiçoso
document.addEventListener('DOMContentLoaded', carregarImagensPreguicosamente);

// Adicionar estado de carregamento ao envio do formulário
if (formularioContato) {
    const botaoEnviar = formularioContato.querySelector('button[type="submit"]');
    const textoOriginal = botaoEnviar.textContent;

    formularioContato.addEventListener('submit', function () {
        botaoEnviar.textContent = 'Enviando...';
        botaoEnviar.disabled = true;

        // Simular chamada de API
        setTimeout(() => {
            botaoEnviar.textContent = textoOriginal;
            botaoEnviar.disabled = false;
        }, 2000);
    });
}

// Adicionar efeitos hover para cards
document.querySelectorAll('.card-servico, .card-aplicacao, .card-testemunho').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Adicionar indicador de progresso de scroll
const barraProgresso = document.createElement('div');
barraProgresso.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #1d4ed8);
    z-index: 10001;
    transition: width 0.3s ease;
`;
document.body.appendChild(barraProgresso);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const alturaDocumento = document.body.offsetHeight - window.innerHeight;
    const percentualScroll = (scrollTop / alturaDocumento) * 100;
    barraProgresso.style.width = percentualScroll + '%';
});



// Adicionar gerenciamento de foco para acessibilidade
document.querySelectorAll('a, button, input, textarea').forEach(elemento => {
    elemento.addEventListener('focus', function () {
        this.style.outline = '2px solid #2563eb';
        this.style.outlineOffset = '2px';
    });

    elemento.addEventListener('blur', function () {
        this.style.outline = 'none';
    });
});

console.log('Website da Encasco carregado com sucesso! 🚀');

//*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-


// ===== CARROSSEL DE IMAGENS - SEÇÃO SOBRE =====

class CarrosselImagens {
    constructor() {
        this.slideAtual = 0;
        this.slides = document.querySelectorAll('.slide');
        this.indicadores = document.querySelectorAll('.indicador');
        this.totalSlides = this.slides.length;
        this.autoplayAtivo = true;
        this.intervalId = null;
        this.tempoAutoplay = 5000; // 5 segundos

        // Verificar se o carrossel existe na página
        if (this.slides.length > 0) {
            this.iniciarAutoplay();
            this.adicionarEventListeners();
        }
    }

    iniciarAutoplay() {
        if (this.autoplayAtivo && this.totalSlides > 1) {
            this.intervalId = setInterval(() => {
                this.proximoSlide();
            }, this.tempoAutoplay);
        }
    }

    pararAutoplay() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    toggleAutoplay() {
        const botaoStatus = document.querySelector('.status-carrossel i');

        if (!botaoStatus) return;

        if (this.autoplayAtivo) {
            this.pararAutoplay();
            this.autoplayAtivo = false;
            botaoStatus.className = 'fas fa-play';
        } else {
            this.autoplayAtivo = true;
            this.iniciarAutoplay();
            botaoStatus.className = 'fas fa-pause';
        }
    }

    atualizarSlide() {
        // Remover classes ativas
        this.slides.forEach((slide, index) => {
            slide.classList.remove('ativo', 'saindo');
            if (index === this.slideAtual) {
                slide.classList.add('ativo');
            }
        });

        // Atualizar indicadores
        this.indicadores.forEach((indicador, index) => {
            indicador.classList.toggle('ativo', index === this.slideAtual);
        });
    }

    irParaSlide(indice) {
        if (indice !== this.slideAtual && indice >= 0 && indice < this.totalSlides) {
            this.slides[this.slideAtual].classList.add('saindo');
            this.slideAtual = indice;

            setTimeout(() => {
                this.atualizarSlide();
            }, 100);
        }
    }

    proximoSlide() {
        const proximoIndice = (this.slideAtual + 1) % this.totalSlides;
        this.irParaSlide(proximoIndice);
    }

    slideAnterior() {
        const indiceAnterior = (this.slideAtual - 1 + this.totalSlides) % this.totalSlides;
        this.irParaSlide(indiceAnterior);
    }

    adicionarEventListeners() {
        const container = document.querySelector('.carrossel-container');

        if (!container) return;

        // Pausar autoplay no hover
        container.addEventListener('mouseenter', () => {
            if (this.autoplayAtivo) {
                this.pararAutoplay();
            }
        });

        // Retomar autoplay ao sair do hover
        container.addEventListener('mouseleave', () => {
            if (this.autoplayAtivo) {
                this.iniciarAutoplay();
            }
        });

        // Suporte para touch/swipe em dispositivos móveis
        let startX = 0;
        let endX = 0;

        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });

        // Suporte para teclado (apenas quando o carrossel está em foco)
        container.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.slideAnterior();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.proximoSlide();
                    break;
                case ' ': // Espaço
                    e.preventDefault();
                    this.toggleAutoplay();
                    break;
            }
        });

        // Tornar o container focalizável
        container.setAttribute('tabindex', '0');
    }

    handleSwipe() {
        const diferenca = startX - endX;
        const minimoSwipe = 50;

        if (Math.abs(diferenca) > minimoSwipe) {
            if (diferenca > 0) {
                // Swipe para esquerda - próximo slide
                this.proximoSlide();
            } else {
                // Swipe para direita - slide anterior
                this.slideAnterior();
            }
        }
    }

    // Método para destruir o carrossel (limpeza)
    destruir() {
        this.pararAutoplay();
        const container = document.querySelector('.carrossel-container');
        if (container) {
            container.removeEventListener('mouseenter', () => { });
            container.removeEventListener('mouseleave', () => { });
            container.removeEventListener('touchstart', () => { });
            container.removeEventListener('touchend', () => { });
            container.removeEventListener('keydown', () => { });
        }
    }
}

// Variável global para o carrossel
let carrosselSobre = null;

// Funções globais para os controles
function mudarSlide(direcao) {
    if (carrosselSobre) {
        if (direcao === 1) {
            carrosselSobre.proximoSlide();
        } else {
            carrosselSobre.slideAnterior();
        }
    }
}

function irParaSlide(indice) {
    if (carrosselSobre) {
        carrosselSobre.irParaSlide(indice);
    }
}

function toggleAutoplay() {
    if (carrosselSobre) {
        carrosselSobre.toggleAutoplay();
    }
}

// Integrar com o sistema de carregamento preguiçoso existente
function carregarImagensCarrossel() {
    const imagensCarrossel = document.querySelectorAll('.slide img[data-src]');

    const observadorImagemCarrossel = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                const img = entrada.target;

                // Adicionar classe de carregamento
                img.classList.add('carregando');

                // Carregar a imagem
                img.src = img.dataset.src;

                // Adicionar evento para quando a imagem carregar
                img.addEventListener('load', () => {
                    img.classList.remove('carregando');
                    img.classList.add('carregada');
                });

                // Adicionar evento para erro de carregamento
                img.addEventListener('error', () => {
                    img.style.display = 'none';
                    console.warn('Erro ao carregar imagem do carrossel:', img.dataset.src);
                });

                observadorImagemCarrossel.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px 0px'
    });

    imagensCarrossel.forEach(img => observadorImagemCarrossel.observe(img));
}

// Inicialização do carrossel após o DOM ser carregado
document.addEventListener('DOMContentLoaded', () => {
    // Aguardar um pequeno delay para garantir que todos os elementos estejam prontos
    setTimeout(() => {
        const containerCarrossel = document.querySelector('.carrossel-container');
        if (containerCarrossel) {
            carrosselSobre = new CarrosselImagens();
            carregarImagensCarrossel();
            console.log('Carrossel da seção Sobre inicializado com sucesso! 🎠');
        }
    }, 100);
});

// Limpeza ao sair da página
window.addEventListener('beforeunload', () => {
    if (carrosselSobre) {
        carrosselSobre.destruir();
    }
});
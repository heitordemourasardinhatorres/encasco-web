# Encasco - Website Oficial

Site oficial da Encasco, empresa com mais de 20 anos de experiência especializada na aplicação de cromo duro para peças industriais no Vale do Paraíba. O projeto apresenta serviços, benefícios do cromo duro, casos de uso e informações de contato, com foco em qualidade, durabilidade e inovação no setor industrial.

## 🚀 Características Principais

- **Design Responsivo Moderno**: Interface profissional que se adapta perfeitamente a dispositivos mobile, tablet e desktop
- **Navegação Intuitiva**: Scroll suave entre seções com animações fluidas e feedback visual
- **Carrossel de Imagens Interativo**: Sistema avançado de carrossel com autoplay, controles touch/swipe e indicadores
- **Cards Flip 3D**: Seção de serviços com efeito de virada interativa para visualização detalhada
- **Vídeo Hero**: Apresentação visual impactante com vídeo em loop na página inicial
- **Lazy Loading**: Carregamento otimizado de imagens para melhor performance
- **Animações CSS Avançadas**: Efeitos visuais profissionais em toda a experiência do usuário
- **Otimização SEO**: Estrutura semântica HTML5 e meta tags apropriadas
- **Acessibilidade**: Suporte a navegação por teclado, foco visual e leitores de tela
- **Barra de Progresso**: Indicador visual de scroll da página

## 📁 Estrutura do Projeto

```
encasco-web/
├── index.html              # Página principal
├── styles.css              # Estilos globais do site
├── script.js               # Funcionalidades JavaScript principais
├── servicos/
│   ├── index.html          # Página de serviços detalhados
│   ├── styles-servicos.css # Estilos específicos da página de serviços
│   └── servicos.js         # Scripts da página de serviços
├── images/
│   ├── logo_misto.png      # Logo principal
│   ├── logo_simbolico.png  # Favicon
│   ├── images1.jpg - images9.jpg  # Galeria de imagens
│   ├── recuperacao_rolo.mp4       # Vídeo hero
│   └── images-servicos/    # Imagens dos serviços
└── README.md               # Documentação do projeto
```

## 🎨 Seções do Website

### 🏠 Home (Hero Section)
- Vídeo demonstrativo em loop de recuperação de rolos
- Título impactante sobre soluções em cromo duro
- Descrição dos principais benefícios e diferenciais
- CTA principal para navegação aos serviços
- Design responsivo com grid adaptável

### 📋 Sobre
- História da empresa (20+ anos de experiência)
- **Carrossel de Imagens Automático**:
  - 9 slides com imagens de processos e resultados
  - Autoplay com intervalo de 5 segundos
  - Controles de navegação (anterior/próximo)
  - Suporte a touch/swipe em dispositivos móveis
  - Indicadores visuais de posição
  - Pausa automática ao hover
- Missão e valores corporativos (3 pilares principais)
- Compromisso com qualidade e satisfação do cliente

### 🔧 Serviços
- **Card Grid Responsivo** com 5 serviços principais:
  1. Recuperação de Hastes de Cilindros Hidráulicos
  2. Recuperação de Cremalheiras de Caixas de Direção
  3. Aplicação de Cromo Duro de Alta Especialização
  4. Fabricação e Reforma de Cilindros Hidráulicos
  5. Recuperação de Eixos e Pistões
- **Página de Serviços Detalhados** (`/servicos/`):
  - Cards com efeito flip 3D interativo
  - Frente: Imagem, título e descrição resumida
  - Verso: Descrição completa com lista detalhada de processos
  - Ativação por click/tap ou navegação por teclado
  - Layout responsivo adaptável
- Grade de benefícios do cromo duro (6 características técnicas)
- Ícones profissionais Font Awesome

### 💬 Testemunhos (Feedback)
- 3 depoimentos de clientes reais
- Cards com hover effect e sombras
- Informações de cargo e empresa dos depoentes

### 📞 Contato
- Endereço completo com link para Google Maps
- **Botão WhatsApp Estilizado**:
  - Integração direta com WhatsApp Business
  - Design em verde WhatsApp com ícone e texto
  - Hover effects e transições suaves
- E-mail de contato
- Informações acessíveis e visualmente organizadas

### 🦶 Footer
- Logo e branding da empresa
- Informações de contato completas
- Mapa do site com links de navegação
- **Links para redes sociais**:
  - Facebook: `https://www.facebook.com/encascocromoduro`
  - Instagram: `https://www.instagram.com/encascocromoduro/`
- Links para políticas (Privacidade e Termos de Serviço)
- Copyright © 2025

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Variáveis CSS personalizadas
  - Flexbox e CSS Grid
  - Animações e transições avançadas
  - Media queries para responsividade
  - Transform 3D para efeitos flip
- **JavaScript (ES6+)**:
  - Classes e orientação a objetos
  - Intersection Observer API
  - Event Listeners e manipulação DOM
  - Promises e async/await
  - Touch events para mobile

### Bibliotecas Externas
- **Font Awesome 6.0.0**: Ícones profissionais
- **Google Fonts (Inter)**: Tipografia moderna e legível
- **CDN Cloudflare**: Entrega rápida de assets

## 🎯 Funcionalidades JavaScript Avançadas

### Sistema de Carrossel (`CarrosselImagens`)
```javascript
class CarrosselImagens {
  - Autoplay configurável (5 segundos)
  - Navegação por botões (anterior/próximo)
  - Navegação por indicadores
  - Suporte touch/swipe para mobile
  - Navegação por teclado (setas e espaço)
  - Pausa automática no hover
  - Transições suaves com CSS
  - Gerenciamento de memória (cleanup)
}
```

### Outros Recursos
- **Lazy Loading de Imagens**: Carregamento progressivo com Intersection Observer
- **Scroll Suave**: Navegação animada entre seções
- **Header Fixo Dinâmico**: Efeito de shrink ao rolar a página
- **Sistema de Notificações**: Feedback visual para ações do usuário
- **Barra de Progresso de Scroll**: Indicador visual do progresso de leitura
- **Animações de Entrada**: Fade-in ao entrar no viewport
- **Efeitos Ripple**: Ondulação nos botões ao clicar
- **Validação de Formulário**: Em tempo real com feedback visual

## 🎨 Paleta de Cores e Design System

```css
/* Cores Principais */
--cor-primaria: #2563eb (Azul vibrante)
--cor-primaria-escura: #1d4ed8 (Azul escuro)
--cor-primaria-mais-escura: #1e40af (Azul profundo)

/* Cores de Texto */
--texto-escuro: #1e293b (Cinza escuro)
--texto-base: #333333 (Cinza base)
--texto-medio: #64748b (Cinza médio)
--texto-claro: #94a3b8 (Cinza claro)

/* Cores de Fundo */
--fundo-claro: #f8fafc (Cinza muito claro)
--fundo-medio: #e2e8f0 (Cinza claro)
--fundo-branco: #ffffff (Branco puro)

/* Sombras */
--sombra-sm: 0 2px 10px rgba(0,0,0,0.1)
--sombra-md: 0 5px 15px rgba(0,0,0,0.08)
--sombra-lg: 0 10px 25px rgba(37,99,235,0.3)

/* Border Radius */
--borda-raio-sm: 6px
--borda-raio-md: 12px
--borda-raio-lg: 16px
```

## 📞 Informações de Contato

- **Endereço**: Av Prof Escolástica Maria de Jesus 1504, Belem, Taubaté - SP
- **Telefone/WhatsApp**: (12) 98207-0800
- **Telefone Fixo**: (12) 3624-2186
- **E-mail**: encasco@gmailcom.br
- **Website**: www.encasco.com.br
- **Facebook**: [facebook.com/encascocromoduro](https://www.facebook.com/encascocromoduro)
- **Instagram**: [@encascocromoduro](https://www.instagram.com/encascocromoduro/)

## 📈 SEO e Performance

### Otimizações Implementadas
- ✅ Meta tags otimizadas (title, description)
- ✅ Estrutura semântica HTML5 (header, nav, section, article, footer)
- ✅ Alt text em todas as imagens
- ✅ Lazy loading de imagens
- ✅ Compression de assets (recomendado para produção)
- ✅ Minificação CSS/JS (recomendado para produção)
- ✅ Links canônicos
- ✅ Open Graph tags (recomendado adicionar)
- ✅ Schema.org markup (recomendado adicionar)

## 🌐 Navegadores Suportados

- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)
- ✅ Opera (últimas 2 versões)
- ✅ Navegadores mobile (iOS Safari, Chrome Android)

## 📱 Responsividade

### Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

### Adaptações Mobile
- Menu de navegação horizontal compacto
- Cards em coluna única
- Imagens e vídeos redimensionados
- Touch gestures no carrossel
- Botões maiores para melhor usabilidade
- Espaçamentos ajustados



## 👥 Créditos

- **Desenvolvimento e Design**: Heitor de Moura Sardinha Torres
- **Empresa**: Encasco - Cromo Duro Industrial
- **Ano**: 2025

## 📝 Changelog

### v1.0.0 (Inicial)
- 🎉 Lançamento inicial do website

### v2.0.0 (2025)
- ✨ Implementação do carrossel de imagens interativo
- ✨ Página de serviços detalhados com cards flip 3D
- ✨ Vídeo hero na página inicial
- ✨ Botão WhatsApp estilizado
- ✨ Sistema de lazy loading de imagens
- ✨ Barra de progresso de scroll
- 🎨 Redesign completo do layout
- 📱 Melhorias na responsividade mobile
- ♿ Implementação de recursos de acessibilidade
- 🐛 Correções de bugs diversos

---

**© 2025 Encasco - Todos os direitos reservados.**

*Desenvolvido com ❤️ por Heitor de Moura*
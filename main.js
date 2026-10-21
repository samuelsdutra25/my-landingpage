/* ==========================================================================
   1. SITE: everything Samuel replaces lives here. Edit this object only.
   ========================================================================== */
const SITE = {
  // Public address of the site, with the final slash. Canonical links, share previews, the sitemap and the
  // structured data are built from it (npm run build). The Portuguese page lives at url + 'pt/'.
  url: 'https://samueldutra.com.br/',

  // Shown in the About section until a photo exists.
  initials: 'SD',
  photo: 'assets/samuel-dutra.avif', // square, 800x800 (the build writes these sizes into the <img>)

  // The e-mail is temporary (Samuel has no professional address yet).
  links: {
    github: 'https://github.com/samuelsdutra25',
    instagram: 'https://www.instagram.com/sdutra404/',
    // Country code + number, digits only. The build adds the ready message ('whatsapp.message') in each language.
    whatsapp: 'https://wa.me/5551989602193',
    email: 'mailto:samuelsdutra25@gmail.com',
  },

  // Contact form, sent in the background to Formspree (form "Portfolio contact form").
  // Set action to '' to fall back to opening the visitor's email app with the message ready (mailto).
  // turnstile: the Cloudflare Turnstile *site* key (public by design). Its secret key goes only in the
  // Formspree dashboard (form settings > CAPTCHA), never here. Empty: no captcha widget.
  // Limits match the maxlength attributes in index.html; the counter shows when countFrom characters are left.
  form: {
    action: 'https://formspree.io/f/xqpewovl',
    turnstile: '0x4AAAAAAFeG7w3pbl0AkULA',
    messageMin: 10,
    countFrom: 300,
  },

  // Analytics. gtm is the Google Tag Manager container ID (looks like 'GTM-XXXXXXX', public by design). The GA4
  // tag lives inside that container, so no GA4 ID goes here. Empty: no cookie notice and nothing is loaded.
  // Tag Manager only loads after the visitor accepts the notice (LGPD).
  tracking: {
    gtm: 'GTM-5B9PSTB3',
  },

  stack: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'GSAP', 'React'],

  // Lighthouse scores of THIS page (mobile, 0 to 100). Measured 2026-10-20 on the live site
  // (https://samueldutra.com.br/ and /pt/) with Lighthouse 13.5.0, mobile preset with its default throttling,
  // headless Chrome, as a first-time visitor (the cookie notice appears after the load that is measured).
  // 12 runs: performance 92 to 98, median 97 (EN 97 to 98, PT 92 to 98; FCP 1.7 s, LCP 1.7 to 2.1 s, TBT 0 to 20 ms,
  // CLS 0), so 97 is shown. Accessibility 100 and SEO 100 in every run; best practices 100 in the last two runs.
  // null shows "--" and leaves the ring empty.
  scores: { performance: 97, accessibility: 100, seo: 100 },

  // Project 1 (website) is real: a concept project built from a Figma design, live on GitHub Pages.
  // TODO: the online store and the dashboard. Their texts below say what each one will prove. Replace titles,
  // text and url when the project exists, set placeholder to false and uncomment its card in index.html.
  projects: [
    {
      placeholder: false,
      image: 'assets/project-website-figma.avif', // AVIF, about 1600px wide
      imageSize: [1600, 900], // width and height of the file, so the layout doesn't jump
      url: 'https://samuelsdutra25.github.io/figma-project/',
      type: { en: 'Website, concept project', pt: 'Site, projeto conceitual' },
      title: { en: 'Website built from a Figma design', pt: 'Site feito a partir de um design no Figma' },
      text: {
        en: 'A pixel-perfect build of a Figma project: spacing, type and colors match the design, on every screen size.',
        pt: 'Uma implementação pixel a pixel de um projeto do Figma: espaçamentos, tipografia e cores iguais ao design, em qualquer tela.',
      },
      // Shown when the card is opened
      details: {
        about: {
          en: 'A concept website, with no client behind it, built to match a Figma file exactly. The goal is to show that the page you approve in the design is the page you get in the browser.',
          pt: 'Um site conceitual, sem cliente por trás, construído para ficar igual a um arquivo do Figma. A ideia é mostrar que a página que você aprova no design é a que você recebe no navegador.',
        },
        role: {
          en: 'I turned the Figma design into responsive HTML, CSS and JavaScript, checking every detail against the original.',
          pt: 'Transformei o design do Figma em HTML, CSS e JavaScript responsivos, conferindo cada detalhe com o original.',
        },
        stack: ['HTML', 'Tailwind', 'JavaScript'],
      },
    },
    {
      placeholder: true,
      image: '',
      url: '#',
      type: { en: 'Online store', pt: 'Loja virtual' },
      title: { en: 'Online store in React', pt: 'Loja virtual em React' },
      text: {
        en: 'A store front end in React, with product pages, a cart and a checkout flow.',
        pt: 'O front end de uma loja em React, com páginas de produto, carrinho e fluxo de compra.',
      },
      // Shown when the card is opened. TODO: real overview and what Samuel did.
      details: {
        about: {
          en: 'A store interface where the cart, filters and checkout share a lot of state, which is where React pays off.',
          pt: 'Uma interface de loja em que carrinho, filtros e compra compartilham muito estado, que é onde o React compensa.',
        },
        role: {
          en: 'I built the screens as React components and styled them with Tailwind.',
          pt: 'Construí as telas como componentes React e estilizei com Tailwind.',
        },
        stack: ['React', 'Tailwind', 'JavaScript'],
      },
    },
    {
      placeholder: true,
      image: '',
      url: '#',
      type: { en: 'Dashboard', pt: 'Dashboard' },
      title: { en: 'Dashboard in React', pt: 'Dashboard em React' },
      text: {
        en: 'A data dashboard in React, with charts, tables and filters that update together.',
        pt: 'Um dashboard de dados em React, com gráficos, tabelas e filtros que se atualizam juntos.',
      },
      // Shown when the card is opened. TODO: real overview and what Samuel did.
      details: {
        about: {
          en: 'A dashboard where one filter changes every chart and table on the screen, so the state has to be organized well.',
          pt: 'Um dashboard em que um filtro altera todos os gráficos e tabelas da tela, então o estado precisa estar bem organizado.',
        },
        role: {
          en: 'I built the interface as React components and styled it with Tailwind.',
          pt: 'Construí a interface como componentes React e estilizei com Tailwind.',
        },
        stack: ['React', 'Tailwind', 'JavaScript'],
      },
    },
  ],
};

/* ==========================================================================
   2. TRANSLATIONS: all site text, English first. Keys match data-i18n in
   index.html. The project texts live in SITE.projects above.
   ========================================================================== */
const TRANSLATIONS = {
  en: {
    'meta.title': 'Samuel Dutra, freelance front-end developer',
    'meta.description':
      'Front-end developer for websites, online stores and dashboards. Fast, responsive and accessible, with a clear estimate and two weeks of support after delivery.',
    'meta.jobTitle': 'Front-end developer',
    // Describes the share image (assets/og-image-en.png), which has this text baked in
    'meta.ogAlt': 'Samuel Dutra. Freelance front-end developer. Websites, online stores and dashboards.',
    'intro.welcome': 'Welcome',
    skip: 'Skip to content',

    // 404 page (404.html)
    'notfound.meta': 'Page not found | Samuel Dutra',
    'notfound.title': 'Page not found',
    'notfound.text': 'The address may have a typo, or the page may have moved. The home page has everything you need.',
    'notfound.cta': 'Go to the home page',
    'notfound.jump': 'Or go straight to',

    'nav.label': 'Main',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process': 'How it works',
    'nav.contact': 'Contact',
    'nav.talk': 'Talk to me',
    'nav.menu': 'Menu',
    'lang.label': 'Language',

    'hero.title': 'I build the websites, stores and dashboards your customers use.',
    'hero.text':
      'They load fast, work on every screen and are easy to use. You get a clear estimate before we start and two weeks of support after delivery.',
    'hero.cta': 'Tell me about your project',
    'hero.projects': 'See my work',
    'hero.stack': 'Built with HTML, Tailwind, JavaScript and GSAP.',
    'hero.mockLabel': 'Your site',
    'hero.mockAria': 'Illustration of a small website being built',

    'included.title': 'What you get',
    'included.lead':
      "Every project meets the same standard. The scores below come from Lighthouse, Google's auditing tool, and were measured on this very page.",
    'included.report': 'Measured with Lighthouse on this page',
    'included.outOf': 'out of 100',
    'included.performance.title': 'Performance',
    'included.performance.text':
      'Fast loading on a phone and smooth interactions.',
    'included.accessibility.title': 'Accessibility',
    'included.accessibility.text':
      'Keyboard navigation, screen reader support and enough contrast between text and background.',
    'included.seo.title': 'SEO',
    'included.seo.text':
      'Titles, descriptions and page structure ready for search engines.',
    'included.responsive.title': 'Responsive',
    'included.responsive.text':
      'Layouts that adapt to phones, tablets and large screens, checked at every size before delivery.',
    'included.clean.title': 'Clean, maintainable code',
    'included.clean.text':
      'Organized, consistent code that is easy to maintain or hand over to another developer.',
    'included.support.title': 'Delivery with support',
    'included.support.text':
      'Two weeks of support after delivery are included in the project price. After that, fixes and small changes are agreed separately.',

    'services.title': 'Services',
    'services.lead':
      'Front end for small and mid-size projects, with back-end integration when the project needs it.',
    'services.1.title': 'Websites and landing pages',
    'services.1.text':
      'Company and lead-generation pages that match the approved layout, with well-crafted animations, SEO done right and analytics already set up.',
    'services.2.title': 'Online stores',
    'services.2.text':
      'Storefront, product pages, cart and checkout designed for shopping on any device.',
    'services.3.title': 'Dashboards and web apps',
    'services.3.text':
      'Dashboards with charts, tables and filters that update together, so you can follow your business data on one screen.',
    'services.4.title': 'Tweaks and maintenance',
    'services.4.text':
      'Fixes for specific problems in existing sites and systems, or ongoing maintenance to keep them up to date, stable and always improving.',

    'projects.title': 'Projects',
    'projects.lead':
      'Each project shows a different kind of work, and you can open it and try it yourself.',
    'projects.placeholder':
      'Example',
    'projects.image': 'Project image',
    'projects.view': 'View project online',
    'projects.details': 'Details',
    'projects.about': 'About the project',
    'projects.role': 'What I did',
    'projects.stack': 'Stack',
    'projects.cta': 'Like what you see? Tell me about yours.',

    'process.title': 'How it works',
    'process.lead':
      "Four steps, and you're kept in the loop from start to finish.",
    'process.1.title': 'Briefing',
    'process.1.text':
      'A chat by message or call to understand your goal and scope, followed by an estimate. Once you approve it, a contract sets the scope, price, deadline and number of revision rounds.',
    'process.2.title': 'Layout',
    'process.2.text':
      'The layout starts from your Figma file or the references you send. You review it and ask for changes within the agreed rounds.',
    'process.3.title': 'Development',
    'process.3.text':
      'Code in HTML, CSS and JavaScript, with React when the interface handles a lot of data and interaction at once. Regular updates let you follow the progress and ask for changes early.',
    'process.4.title': 'Delivery',
    'process.4.text':
      'The finished project is delivered along with the source code. The two weeks of support start on the delivery date. If you want, I can also keep maintaining it after that.',

    'about.title': 'About',
    'about.text1':
      "I'm Samuel, a front-end developer. I'm the link between your system and your customer, making sure they get a great experience and everything works smoothly.",
    'about.text2':
      'To get there, I use current technologies and aim for efficiency. Not every project needs complex tools, which only raise the cost and stretch the timeline. I also aim for excellence, down to the details that make the difference in the end.',
    'about.text3':
      "Liked what you saw? Get in touch and let's talk about your project.",
    'about.stack': 'Tech stack',
    'about.photoAlt':
      'Portrait of Samuel Dutra: a smiling man with short curly dark hair, round glasses and a mustache, in a beige linen shirt, outdoors in a forest at golden hour.',

    'contact.title': "Let's talk?",
    'contact.text':
      'Describe what you need and get an estimate. A short message is enough.',
    'contact.cta': 'Send me a message',
    'contact.direct': 'Prefer another contact channel?',

    'form.name': 'Name',
    'form.email': 'Email',
    'form.type': 'Type of project (optional)',
    'form.type.website': 'Website or landing page',
    'form.type.store': 'Online store',
    'form.type.dashboard': 'Dashboard or web app',
    'form.type.tweaks': 'Changes to an existing project',
    'form.type.unsure': 'Not sure yet',
    'form.message': 'Your message',
    'form.messageHint': 'What you need, what already exists and when you need it.',
    'form.error.name': 'Enter your name.',
    'form.error.email': 'Enter a valid email address.',
    'form.error.message': 'Write a short message.',
    'form.error.messageShort': 'Write at least 10 characters.',
    'form.privacy':
      "Your message reaches my email through Formspree and goes through Cloudflare's anti-bot check, both US services. I use it only to reply to you. To delete it, just ask by email.",
    'form.noscript': 'The form needs JavaScript. Write to',
    'form.count': '{n} characters left',
    'form.countOne': '1 character left',
    'form.sending': 'Sending...',
    'form.sent': 'Message sent. I will reply by email.',
    'form.mailto': 'Your email app should open with the message ready. If it does not, write to',
    'form.failed': 'The message could not be sent. Write to',
    'form.mailSubject': 'New project from',

    'footer.tagline': 'Front-end for websites, online stores and dashboards.',
    'footer.menu': 'Menu',
    'footer.menuLabel': 'Footer',
    'footer.top': 'Back to top',
    'footer.github': 'GitHub',
    'footer.instagram': 'Instagram',
    'footer.whatsapp': 'WhatsApp',
    'footer.a11y': 'I aim for this site to meet WCAG 2.2 level AA. If something is hard to use, write to',
    'footer.a11yEnd': " and I'll fix it.",
    'footer.cookies': 'Cookie settings',
    'consent.label': 'Cookies',
    'consent.text':
      'I use Google Analytics to see how many people visit this site and which parts they use. It sets cookies and sends usage data to Google. Nothing is measured unless you accept. You can change your mind in the footer.',
    'consent.details': 'Details',
    'consent.who': 'Responsible: Samuel Dutra.',
    'consent.what': 'Google Analytics records the pages you visit, your device type and approximate location.',
    'consent.keep': 'The cookie lasts up to 2 years and the data stays 2 months in reports.',
    'consent.abroad': 'Google may process this data in other countries.',
    'consent.rights':
      'You can ask for access to or deletion of your data, and withdraw consent at any time in “Cookie settings” in the footer. You can also block cookies in your browser.',
    'consent.contact': 'To ask, write to',
    'consent.accept': 'Accept',
    'consent.decline': 'Decline',
    'whatsapp.message': "Hi, I saw your website and I'd like to talk about a project.",
  },

  pt: {
    'meta.title': 'Samuel Dutra, programador front-end freelancer',
    'meta.description':
      'Desenvolvedor front-end de sites, lojas virtuais e dashboards. Rápidos, responsivos e acessíveis, com orçamento claro e duas semanas de suporte depois da entrega.',
    'meta.jobTitle': 'Desenvolvedor front-end',
    'meta.ogAlt': 'Samuel Dutra. Desenvolvedor front-end freelancer. Sites, lojas virtuais e dashboards.',
    'intro.welcome': 'Seja bem-vindo',
    skip: 'Pular para o conteúdo',

    // Página 404 (404.html)
    'notfound.meta': 'Página não encontrada | Samuel Dutra',
    'notfound.title': 'Página não encontrada',
    'notfound.text': 'O endereço pode ter um erro de digitação, ou a página pode ter mudado de lugar. A página inicial tem tudo o que você precisa.',
    'notfound.cta': 'Ir para a página inicial',
    'notfound.jump': 'Ou vá direto para',

    'nav.label': 'Principal',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.process': 'Como funciona',
    'nav.contact': 'Contato',
    'nav.talk': 'Fale comigo',
    'nav.menu': 'Menu',
    'lang.label': 'Idioma',

    'hero.title': 'Eu construo os sites, lojas e painéis que os seus clientes usam.',
    'hero.text':
      'Abrem rápido, funcionam em qualquer tela e são fáceis de usar. Você conhece custo e prazo antes de começar e conta com suporte depois da entrega.',
    'hero.cta': 'Conte sobre o seu projeto',
    'hero.projects': 'Ver meus trabalhos',
    'hero.stack': 'Feito com HTML, Tailwind, JavaScript e GSAP.',
    'hero.mockLabel': 'Seu site',
    'hero.mockAria': 'Ilustração de um site pequeno sendo montado',

    'included.title': 'O que você recebe',
    'included.lead':
      'Todo projeto segue o mesmo padrão de qualidade. As notas abaixo vêm do Lighthouse, ferramenta de auditoria do Google, e foram medidas nesta página.',
    'included.report': 'Medido com o Lighthouse nesta página',
    'included.outOf': 'de 100',
    'included.performance.title': 'Desempenho',
    'included.performance.text':
      'Carregamento rápido no celular e interações sem travamentos.',
    'included.accessibility.title': 'Acessibilidade',
    'included.accessibility.text':
      'Navegação por teclado, compatibilidade com leitores de tela e contraste adequado entre texto e fundo.',
    'included.seo.title': 'SEO',
    'included.seo.text':
      'Títulos, descrições e estrutura de página preparados para os mecanismos de busca.',
    'included.responsive.title': 'Responsividade',
    'included.responsive.text':
      'Layout que se adapta a celulares, tablets e telas grandes, conferido em cada tamanho antes da entrega.',
    'included.clean.title': 'Código limpo e fácil de manter',
    'included.clean.text':
      'Código organizado e padronizado, fácil de manter ou de ser assumido por outro desenvolvedor.',
    'included.support.title': 'Entrega com suporte',
    'included.support.text':
      'Duas semanas de suporte após a entrega estão incluídas no valor do projeto. Depois disso, correções e pequenos ajustes são combinados à parte.',

    'services.title': 'Serviços',
    'services.lead':
      'Front end de projetos pequenos e médios, com integração ao back end quando o projeto exige.',
    'services.1.title': 'Sites e landing pages',
    'services.1.text':
      'Páginas institucionais e de captação de clientes, fiéis ao layout aprovado, com animações bem trabalhadas, SEO otimizado e medição de acessos configurada.',
    'services.2.title': 'Lojas virtuais',
    'services.2.text':
      'Vitrine, páginas de produto, carrinho e checkout pensados para compras em qualquer dispositivo.',
    'services.3.title': 'Dashboards e aplicações web',
    'services.3.text':
      'Painéis com gráficos, tabelas e filtros que se atualizam juntos, para acompanhar os dados do negócio em uma só tela.',
    'services.4.title': 'Ajustes e manutenção',
    'services.4.text':
      'Correção de problemas pontuais em sites e sistemas já existentes, ou manutenção recorrente para mantê-los atualizados, estáveis e em constante evolução.',

    'projects.title': 'Projetos',
    'projects.lead':
      'Cada projeto mostra um tipo de trabalho diferente e pode ser aberto e testado.',
    'projects.placeholder': 'Exemplo',
    'projects.image': 'Imagem do projeto',
    'projects.view': 'Ver projeto online',
    'projects.details': 'Detalhes',
    'projects.about': 'Sobre o projeto',
    'projects.role': 'O que fiz',
    'projects.stack': 'Tecnologias',
    'projects.cta': 'Gostou do que viu? Vamos conversar sobre o seu projeto.',

    'process.title': 'Como funciona',
    'process.lead':
      'Quatro etapas, com acompanhamento do início ao fim.',
    'process.1.title': 'Briefing',
    'process.1.text':
      'Conversa por mensagem ou reunião para entender o objetivo e o escopo, seguida do orçamento. Aprovado o orçamento, um contrato define escopo, valor, prazo e número de rodadas de ajustes.',
    'process.2.title': 'Layout',
    'process.2.text':
      'O layout parte do seu arquivo do Figma ou das referências que você enviar. Você revisa e pede ajustes dentro das rodadas combinadas.',
    'process.3.title': 'Desenvolvimento',
    'process.3.text':
      'Código em HTML, CSS e JavaScript, com React quando a interface tem muitos dados e interações ao mesmo tempo. Atualizações periódicas permitem acompanhar o andamento e pedir mudanças cedo.',
    'process.4.title': 'Entrega',
    'process.4.text':
      'Entrega do projeto finalizado junto com o código-fonte. As duas semanas de suporte começam na data da entrega. Se você quiser, também posso continuar fazendo a manutenção depois disso.',

    'about.title': 'Sobre',
    'about.text1':
      'Sou o Samuel, desenvolvedor front-end. Sou o responsável pela ponte entre o sistema e o seu cliente, garantindo que ele tenha uma ótima experiência e que tudo funcione bem.',
    'about.text2':
      'Para isso, trabalho com as tecnologias mais atuais e busco o máximo de eficiência. Nem todo projeto precisa de ferramentas complexas, que acabam encarecendo o projeto e aumentando o tempo de produção. Além disso, busco sempre a excelência, entregando os detalhes que fazem a diferença no final.',
    'about.text3': 'Se você gostou do que viu, entre em contato comigo e vamos conversar sobre seu projeto.',
    'about.stack': 'Tecnologias',
    'about.photoAlt':
      'Retrato de Samuel Dutra: um homem sorrindo, de cabelo escuro curto e cacheado, óculos redondos e bigode, com camisa de linho bege, ao ar livre numa floresta na hora dourada.',

    'contact.title': 'Vamos conversar?',
    'contact.text':
      'Descreva o que você precisa e receba um orçamento. Uma mensagem curta é suficiente.',
    'contact.cta':
      'Enviar mensagem',
    'contact.direct': 'Prefere outro canal de contato?',

    'form.name': 'Nome',
    'form.email': 'E-mail',
    'form.type': 'Tipo de projeto (opcional)',
    'form.type.website': 'Site ou landing page',
    'form.type.store': 'Loja virtual',
    'form.type.dashboard': 'Dashboard ou aplicação web',
    'form.type.tweaks': 'Ajustes em um projeto existente',
    'form.type.unsure': 'Ainda não sei',
    'form.message': 'Sua mensagem',
    'form.messageHint': 'O que você precisa, o que já existe e para quando.',
    'form.error.name': 'Informe seu nome.',
    'form.error.email': 'Informe um e-mail válido.',
    'form.error.message': 'Escreva uma mensagem curta.',
    'form.error.messageShort': 'Escreva pelo menos 10 caracteres.',
    'form.privacy':
      'Sua mensagem chega ao meu e-mail pelo Formspree e passa pela verificação anti-robô do Cloudflare, dois serviços dos EUA. Uso só para responder você. Para apagar, é só pedir por e-mail.',
    'form.noscript': 'O formulário precisa de JavaScript. Escreva para',
    'form.count': 'Restam {n} caracteres',
    'form.countOne': 'Resta 1 caractere',
    'form.sending': 'Enviando...',
    'form.sent': 'Mensagem enviada. Respondo por e-mail.',
    'form.mailto': 'Seu app de e-mail deve abrir com a mensagem pronta. Se não abrir, escreva para',
    'form.failed': 'Não foi possível enviar a mensagem. Escreva para',
    'form.mailSubject': 'Novo projeto de',

    'footer.tagline': 'Front-end para sites, lojas virtuais e painéis.',
    'footer.menu': 'Menu',
    'footer.menuLabel': 'Rodapé',
    'footer.top': 'Voltar ao topo',
    'footer.github': 'GitHub',
    'footer.instagram': 'Instagram',
    'footer.whatsapp': 'WhatsApp',
    'footer.a11y': 'Busco que este site atenda ao WCAG 2.2 nível AA. Se algo for difícil de usar, escreva para',
    'footer.a11yEnd': ' e eu corrijo.',
    'footer.cookies': 'Configurar cookies',
    'consent.label': 'Cookies',
    'consent.text':
      'Uso o Google Analytics para ver quantas pessoas visitam este site e quais partes elas usam. Ele grava cookies e envia dados de uso ao Google. Nada é medido se você não aceitar. Você pode mudar de ideia no rodapé.',
    'consent.details': 'Detalhes',
    'consent.who': 'Responsável: Samuel Dutra.',
    'consent.what': 'O Google Analytics registra as páginas que você visita, o tipo de aparelho e a localização aproximada.',
    'consent.keep': 'O cookie dura até 2 anos e os dados ficam 2 meses nos relatórios.',
    'consent.abroad': 'O Google pode tratar esses dados fora do Brasil.',
    'consent.rights':
      'Você pode pedir acesso ou exclusão dos seus dados e retirar o consentimento a qualquer momento em “Configurar cookies”, no rodapé. Também pode bloquear cookies no navegador.',
    'consent.contact': 'Para pedir, escreva para',
    'consent.accept': 'Aceitar',
    'consent.decline': 'Recusar',
    'whatsapp.message': 'Olá! Vi seu site e gostaria de conversar sobre um projeto.',
  },
};

/* ==========================================================================
   3. Behavior. Nothing below needs editing to change content.
   scripts/build-html.mjs reads everything above this banner (SITE and
   TRANSLATIONS) and writes the text into the HTML (npm run build).
   ========================================================================== */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Calls callback once, the first time element reaches the screen. Every scroll-triggered
// animation on the page uses it. Without IntersectionObserver it runs right away.
function onceVisible(element, callback, options) {
  if (!('IntersectionObserver' in window)) return callback();
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    callback();
  }, options);
  observer.observe(element);
}

// Runs render(progress) from 0 to 1 with an ease-out. With reduced motion it jumps straight to the end.
// Used by the counters in the hero and in "What you get".
function animateProgress(duration, render) {
  if (reducedMotion) return render(1);
  const start = performance.now();
  const tick = (now) => {
    const linear = Math.min((now - start) / duration, 1);
    render(1 - (1 - linear) ** 3);
    if (linear < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---- Language ----
   Each language is its own page, / (English) and /pt/ (Portuguese), and the build has already written the
   text into it. main.js only needs the translations for what it shows later (form messages, the intro). */
const LANG = document.documentElement.lang.slice(0, 2); // 'en', or 'pt' from 'pt-BR'
const T = TRANSLATIONS[LANG];

// The EN/PT switch is two links. On a click the thumb slides to the new language, then the other page opens
// (keeping the section in the address). Ctrl/Cmd/Shift-click opens it the browser's way.
$$('[data-lang]').forEach((link) => {
  // Opened straight from the folder (file://), "pt/" would list the folder instead of opening the page
  if (location.protocol === 'file:' && link.getAttribute('href').endsWith('/')) link.href += 'index.html';

  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    if (link.getAttribute('aria-current') === 'true') return; // already on this language
    $('[data-lang-switch]').setAttribute('data-animate', '');
    $$('[data-lang]').forEach((a) => a.setAttribute('aria-current', String(a === link)));
    setTimeout(() => window.location.assign(link.href + location.hash), reducedMotion ? 0 : 250);
  });
});

/* ---- Project cards: click anywhere on a card to open or close its details ---- */
$$('[data-project]').forEach((card) => {
  const toggle = $('[data-project-toggle]', card);
  toggle.addEventListener('click', () => {
    const open = !card.hasAttribute('data-open');
    card.toggleAttribute('data-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
});

const emailAddress = SITE.links.email.replace(/^mailto:/, '');

/* ---- Contact form ----
   Validation is ours (the form has novalidate) so the messages are in the language of the page.
   The length limits are maxlength attributes in index.html (name 100, email 254, message 3000). */
const form = $('[data-contact-form]');
const formStatus = $('[data-form-status]', form); // role="status": always in the page, so screen readers announce changes
const formSubmit = $('[data-form-submit]', form);
const message = $('#f-message');

// Fills el with the translation of key ({n} replaced by n), or empties it
function setI18n(el, key, n) {
  if (key) {
    el.dataset.i18n = key;
    el.textContent = T[key].replace('{n}', n);
  } else {
    delete el.dataset.i18n;
    el.textContent = '';
  }
}

function setFieldError(input, key, n) {
  setI18n($(`#${input.id}-error`), key, n);
  if (key) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');
}

function showStatus(key, withEmail = false) {
  setI18n($('[data-form-status-text]', form), key);
  $('[data-form-status-email]', form).hidden = !withEmail;
}

// name@domain.tld. The browser's own check (typeMismatch) accepts "name@domain", so this adds the dot and a 2+ letter ending.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@.]{2,}$/;

// Returns true when every field is valid; otherwise shows the errors and focuses the first invalid field
function validateForm() {
  const checks = [
    [$('#f-name'), (value) => (value ? '' : 'form.error.name')],
    [$('#f-email'), (value, input) => (EMAIL.test(value) && !input.validity.typeMismatch ? '' : 'form.error.email')],
    [message, (value) => {
      if (!value) return 'form.error.message';
      return value.length < SITE.form.messageMin ? 'form.error.messageShort' : '';
    }],
  ];
  let firstInvalid = null;
  checks.forEach(([input, check]) => {
    const errorKey = check(input.value.trim(), input);
    setFieldError(input, errorKey, SITE.form.messageMin);
    if (errorKey && !firstInvalid) firstInvalid = input;
  });
  firstInvalid?.focus();
  return !firstInvalid;
}

/* Characters left in the message, shown once SITE.form.countFrom or fewer are left.
   The visible counter changes on every key; screen readers get the same text in a separate
   live region only after a pause in typing, so they are not interrupted on each character. */
const count = $('[data-count]', form);
const countLive = $('[data-count-live]', form);
let countTimer;

function updateCount() {
  const left = message.maxLength - message.value.length;
  const shown = left <= SITE.form.countFrom;
  const text = shown ? (left === 1 ? T['form.countOne'] : T['form.count'].replace('{n}', left)) : '';
  count.textContent = text;
  count.hidden = !shown;
  count.toggleAttribute('data-full', left === 0);
  clearTimeout(countTimer);
  countTimer = setTimeout(() => { countLive.textContent = text; }, 1000);
}

form.addEventListener('input', (event) => {
  if (event.target.hasAttribute('aria-invalid')) setFieldError(event.target, '');
  if (event.target === message) updateCount();
});

/* Turnstile (Cloudflare's captcha), only when SITE.form.turnstile has a site key. Its script loads when
   the form comes near the screen, so it never weighs on the first load or the Lighthouse scores.
   The widget stays invisible unless Cloudflare needs the visitor to click it. Formspree checks the token
   (sent as cf-turnstile-response) with the secret key kept in its dashboard. */
const captcha = $('[data-turnstile]', form);
let captchaWidget = null;
let captchaToken = '';
let captchaFailed = false;
let captchaWaiter = null; // set while a submit waits for a token: { resolve, reject }

function captchaSettled(token) {
  captchaToken = token || '';
  if (!token) captchaFailed = true;
  if (captchaWaiter) (token ? captchaWaiter.resolve : captchaWaiter.reject)();
  captchaWaiter = null;
}

function loadTurnstile() {
  window.onTurnstileLoad = () => {
    captchaWidget = window.turnstile.render(captcha, {
      sitekey: SITE.form.turnstile,
      appearance: 'interaction-only',
      theme: 'light',
      language: document.documentElement.lang.toLowerCase(), // 'en' or 'pt-br'
      size: captcha.clientWidth < 300 ? 'compact' : 'flexible', // flexible needs 300px; a phone form is narrower
      callback: (token) => { captchaFailed = false; captchaSettled(token); },
      'expired-callback': () => { captchaToken = ''; }, // it renews by itself
      'error-callback': () => { captchaSettled(''); return true; },
      'timeout-callback': () => captchaSettled(''),
      // The container only takes space (its top margin) while the widget is actually showing
      'before-interactive-callback': () => captcha.setAttribute('data-interactive', ''),
      'after-interactive-callback': () => captcha.removeAttribute('data-interactive'),
    });
  };
  const script = document.createElement('script');
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad';
  script.onerror = () => captchaSettled(''); // blocked or offline: the visitor gets the email link instead
  document.head.append(script);
}

// Resolves once there is a token (right away if there is no captcha); rejects if Turnstile failed
function captchaReady() {
  if (!SITE.form.turnstile || captchaToken) return Promise.resolve();
  if (captchaFailed && !captchaWidget) return Promise.reject(new Error('captcha'));
  if (captchaFailed) window.turnstile.reset(captchaWidget); // try once more
  captchaFailed = false;
  return new Promise((resolve, reject) => { captchaWaiter = { resolve, reject }; });
}

// A token works once, so get a fresh one after each send
function resetCaptcha() {
  captchaToken = '';
  if (captchaWidget !== null) window.turnstile.reset(captchaWidget);
}

if (SITE.form.action && SITE.form.turnstile) onceVisible(form, loadTurnstile, { rootMargin: '400px 0px' });

function sendByMailto(data) {
  const chip = $('input[name="type"]:checked', form);
  const body = [
    `${T['form.name']}: ${data.get('name')}`,
    `${T['form.email']}: ${data.get('email')}`,
    ...(chip ? [`${T['form.type']}: ${chip.nextElementSibling.textContent}`] : []),
    '',
    data.get('message'),
  ].join('\n');
  const subject = `${T['form.mailSubject']} ${data.get('name')}`;
  window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showStatus('form.mailto', true);
}

// While sending, the button is aria-disabled rather than disabled: a disabled button drops keyboard focus to the page
let sending = false;

function setSending(on) {
  sending = on;
  if (on) formSubmit.setAttribute('aria-disabled', 'true');
  else formSubmit.removeAttribute('aria-disabled');
}

async function sendToEndpoint(data) {
  data.set('_subject', `${T['form.mailSubject']} ${data.get('name')}`); // Formspree uses this as the email subject
  setSending(true);
  showStatus('form.sending');
  try {
    await captchaReady();
    if (captchaToken) data.set('cf-turnstile-response', captchaToken);
    const response = await fetch(SITE.form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error(String(response.status));
    form.reset();
    updateCount();
    showStatus('form.sent');
    track('generate_lead', { form_name: 'contact' }); // defined in the analytics part at the end
  } catch {
    showStatus('form.failed', true);
  } finally {
    if (SITE.form.turnstile) resetCaptcha();
    setSending(false);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (sending || !validateForm()) return;
  const data = new FormData(form);
  if (data.get('_gotcha')) return; // the hidden field is filled in: a bot (Formspree also drops these)
  if (SITE.form.action) sendToEndpoint(data);
  else sendByMailto(data);
});

/* ---- Mobile menu (below 64rem = 1024px, the lg: breakpoint used by the header) ---- */
const menuButton = $('[data-menu-button]');
const menu = $('#mobile-menu');

function setMenu(open) {
  menu.toggleAttribute('data-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
}

menuButton.addEventListener('click', () => setMenu(!menu.hasAttribute('data-open')));
menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.hasAttribute('data-open')) {
    setMenu(false);
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 64rem)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

/* ---- Buttons: hop on hover, landing with a GSAP bounce (transform only, skipped for reduced motion). The form submit button stays still. ---- */
if (window.gsap && !reducedMotion) {
  $$('.btn:not([data-form-submit])').forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.killTweensOf(button);
      gsap
        .timeline()
        .to(button, { y: -10, duration: 0.15, ease: 'power2.out' })
        .to(button, { y: 0, duration: 0.8, ease: 'bounce.out' });
    });
  });
}

/* ---- Smooth scroll: GSAP eases the real page scroll (wheel and anchor links), so the native scrollbar, keyboard, sticky header and touch keep working. Skipped for reduced motion. ---- */
if (window.gsap && window.ScrollToPlugin && !reducedMotion) {
  gsap.registerPlugin(ScrollToPlugin);
  const root = document.documentElement;
  root.setAttribute('data-smooth', '');

  const maxScroll = () => root.scrollHeight - window.innerHeight;
  const clamp = (value) => Math.max(0, Math.min(value, maxScroll()));
  let target = window.scrollY;
  let tweening = false;

  const scrollToY = (y, duration) => {
    target = clamp(y);
    tweening = true;
    gsap.to(window, {
      scrollTo: { y: target, autoKill: false },
      duration,
      ease: 'power3.out',
      overwrite: true,
      onComplete: () => { tweening = false; },
    });
  };

  // Scrolling by other means (keyboard, scrollbar, touch, browser find) takes over from the tween
  window.addEventListener('scroll', () => {
    if (!tweening) target = window.scrollY;
  }, { passive: true });
  ['keydown', 'pointerdown', 'touchstart'].forEach((type) => {
    window.addEventListener(type, () => {
      gsap.killTweensOf(window);
      tweening = false;
      target = window.scrollY;
    }, { passive: true });
  });

  // A mouse wheel moves the target and the tween catches up. Leave zoom, sideways scroll and inner scroll areas alone.
  const scrollsInside = (element, deltaY) => {
    for (let node = element; node && node !== document.body; node = node.parentElement) {
      const { overflowY } = getComputedStyle(node);
      if (!/(auto|scroll)/.test(overflowY) || node.scrollHeight <= node.clientHeight) continue;
      const atTop = node.scrollTop <= 0 && deltaY < 0;
      const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1 && deltaY > 0;
      if (!atTop && !atBottom) return true;
    }
    return false;
  };
  window.addEventListener('wheel', (event) => {
    if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    if (scrollsInside(event.target, event.deltaY)) return;
    event.preventDefault();
    const unit = event.deltaMode === 1 ? 40 : event.deltaMode === 2 ? window.innerHeight : 1;
    scrollToY(target + event.deltaY * unit, 0.8);
  }, { passive: false });

  // Anchor links glide to their section, leaving room for the sticky header.
  // preventDefault() also cancels the browser moving focus to the target, so it is done by hand:
  // otherwise the skip link (and the menu links) would leave keyboard users back in the header.
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    const hash = link.getAttribute('href');
    if (hash === '#') return;
    const section = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!section) return;
    event.preventDefault();
    const headerOffset = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
    scrollToY(section.id === 'top' ? 0 : section.getBoundingClientRect().top + window.scrollY - headerOffset, 0.9);
    history.pushState(null, '', hash);
    if (!section.hasAttribute('tabindex')) section.setAttribute('tabindex', '-1'); // focusable by script only, no ring (style.css)
    section.focus({ preventScroll: true }); // the tween does the scrolling
  });
}

/* ---- Header: the bottom line only shows once the page has scrolled ---- */
const header = $('[data-header]');
const syncHeaderLine = () => header.toggleAttribute('data-scrolled', window.scrollY > 0);
window.addEventListener('scroll', syncHeaderLine, { passive: true });
syncHeaderLine();

/*
 * ---- Opening animation: plays once per visit, on top of the page (CSS in style.css, "Opening animation") ----
 * 1. A big welcome word (ink on cream) fades in. Then the background turns ink from left to right, and the word
 *    turns amber with it: a second, identical layer is revealed with a clip-path.
 * 2. The reveal runs in one go to 100%. If the page is still loading by then, it waits (at most 4 s), then the
 *    ink panel lifts away with the message.
 * Returns a promise that resolves while the panel is leaving, so the hero can start building.
 * Without the data-intro attribute (seen already, reduced motion, link to a section) it does nothing.
 */
function playIntro() {
  const root = document.documentElement;
  if (!root.hasAttribute('data-intro') || !window.gsap || reducedMotion) {
    root.removeAttribute('data-intro');
    return Promise.resolve();
  }

  const screen = $('[data-intro-screen]');
  const panel = $('[data-intro-panel]', screen);
  const fill = $('[data-intro-fill]', screen);
  const messages = $$('.intro-message', screen);

  // Set here (not written by the build) so both layers always carry the same text
  messages.forEach((message) => (message.textContent = T['intro.welcome']));

  // Nothing behind the panel can be reached with the keyboard while it covers the page
  // (main itself stays outside the inert part: an inert <main> is not a landmark for a tool that reads the page meanwhile)
  const behind = [...document.body.children]
    .filter((el) => el !== screen && el.tagName !== 'SCRIPT')
    .flatMap((el) => (el.tagName === 'MAIN' ? [...el.children] : [el]));
  behind.forEach((el) => (el.inert = true));

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const loaded =
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));
  const run = (timeline) => new Promise((resolve) => timeline.eventCallback('onComplete', resolve));

  let release;
  const released = new Promise((resolve) => (release = resolve));

  (async () => {
    try {
      await sequence();
    } finally {
      // Also runs if something above throws, so the page is never left covered or unreachable
      behind.forEach((el) => (el.inert = false));
      root.removeAttribute('data-intro');
      screen.remove();
      release();
    }
  })();

  async function sequence() {
    await Promise.race([document.fonts.ready, wait(1500)]);

    // How much of the ink layer is revealed, from the left
    const progress = { value: 0 };
    const draw = () => {
      fill.style.clipPath = `inset(0 ${100 - progress.value}% 0 0)`;
    };

    await run(
      gsap
        .timeline()
        .fromTo(messages, { yPercent: 25, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0)
        .to(progress, { value: 100, duration: 1.2, ease: 'power2.inOut', onUpdate: draw }, 0.3),
    );
    // Only if the page is still loading once the screen is full, it waits here (at most 4 s)
    await Promise.race([loaded, wait(4000)]);
    await wait(150);

    await run(
      gsap
        .timeline()
        .to(panel, { y: -panel.offsetHeight, duration: 0.7, ease: 'power3.inOut' })
        .call(release, null, 0.45),
    );
  }

  return released;
}
const introDone = playIntro();

/*
 * The wireframe only builds once it is on screen (on phones and tablets it
 * sits below the fold), and not before the opening animation is done, so it
 * doesn't build behind the panel.
 */
const mock = $('[data-mock]');
const startMock = () => mock.setAttribute('data-visible', '');
if (reducedMotion) {
  startMock();
} else {
  // 0.8 could never fire on short viewports (e.g. a phone in landscape)
  introDone.then(() => onceVisible(mock, startMock, { threshold: 0.5 }));
}

/* ---- What you get: rings fill and numbers count up once the panel is on screen ---- */
function playReport(report) {
  const DURATION = 1400;

  $$('[data-gauge]', report).forEach((gauge) => {
    const score = SITE.scores[gauge.dataset.gauge];
    const value = $('[data-gauge-value]', gauge);
    if (score === null) {
      value.textContent = '--'; // not measured yet: the ring stays empty
      return;
    }
    // The number and the arc grow together, so the ring always fills to exactly the score
    const arc = $('.gauge-arc', gauge);
    animateProgress(DURATION, (p) => {
      value.textContent = Math.round(score * p);
      arc.style.strokeDashoffset = 100 - score * p; // the arc is 100 long (pathLength)
    });
  });
}

(function setupReport() {
  const report = $('[data-report]');
  // Everything starts at its first frame; playReport() moves it to the final state
  $$('[data-gauge-value]', report).forEach((el) => (el.textContent = '0'));

  if (reducedMotion) return playReport(report);
  onceVisible(report, () => playReport(report), { threshold: 0.4 });
})();

/* ---- Services: when the list reaches the screen, its rows slide in from the left in order, in one go ---- */
(function setupServices() {
  if (reducedMotion || !('IntersectionObserver' in window)) return; // rows just stay visible
  const START_MS = 200; // wait before the first row moves
  const STEP_MS = 250; // gap between one row and the next
  const list = $('[data-services]');
  // The delays are fixed up front, so the sequence plays the same no matter how the page is scrolled
  $$('li', list).forEach((row, index) => {
    row.classList.add('reveal');
    row.style.setProperty('--reveal-delay', `${START_MS + index * STEP_MS}ms`);
  });

  // Force the hidden first frame to be computed now. If the page reloads already scrolled
  // to this section, the observer fires at once and without this the rows would skip the transition.
  void list.offsetHeight;

  // Low threshold, because the list is taller than a phone screen
  onceVisible(list, () => list.setAttribute('data-visible', ''), { threshold: 0.1 });
})();

/* ---- How it works: when the row reaches the screen, the boxes and the line between them appear one after the other (timing in style.css) ---- */
(function setupProcess() {
  if (reducedMotion || !('IntersectionObserver' in window)) return; // everything just stays visible
  const frame = $('.steps-frame');
  const paths = $$('svg path', frame);

  // The lines are drawn with a dash as long as the line itself. The strokes keep their width when the
  // SVG is stretched, so the dash is measured in screen pixels: sample the path and scale each point.
  // getPointAtLength() is slow (about 0.5 ms a call), so each shape is sampled once, in viewBox units
  // (the 9 lines share 5 shapes), and when the screen changes size only those points are rescaled.
  const SAMPLES = 24; // within a fraction of a pixel of the real length, and --len rounds up anyway
  const shapes = new Map();
  const pointsOf = (path) => {
    const d = path.getAttribute('d');
    if (!shapes.has(d)) {
      const total = path.getTotalLength();
      shapes.set(d, Array.from({ length: SAMPLES + 1 }, (_, i) => path.getPointAtLength((total * i) / SAMPLES)));
    }
    return shapes.get(d);
  };
  const measure = () => {
    const lengths = paths.map((path) => {
      const svg = path.ownerSVGElement;
      const box = svg.getBoundingClientRect();
      const view = svg.viewBox.baseVal;
      const kx = box.width / view.width;
      const ky = box.height / view.height;
      const points = pointsOf(path);
      let length = 0;
      for (let i = 1; i < points.length; i += 1) {
        length += Math.hypot((points[i].x - points[i - 1].x) * kx, (points[i].y - points[i - 1].y) * ky);
      }
      return length;
    });
    // Written after all the reads, so setting one line does not force a new layout to read the next
    paths.forEach((path, i) => path.style.setProperty('--len', `${Math.ceil(lengths[i]) + 1}px`));
  };

  frame.classList.add('steps-anim'); // the hidden first frame (lines stay hidden until measured, see style.css)

  // Measuring waits until the row is about a screen away, so it stays out of the page load
  onceVisible(frame, () => {
    measure();
    // The lines change length with the width of the screen; arcs hidden on mobile measure 0 until they show
    new ResizeObserver(measure).observe(frame);
    void frame.offsetHeight; // compute the hidden first frame with the real lengths, so the transitions always play

    // Starts once the first box is well inside the screen
    onceVisible(frame, () => frame.setAttribute('data-visible', ''), { rootMargin: '0px 0px -20% 0px' });
  }, { rootMargin: '100% 0px' });
})();

/* ---- Footer year: the build writes it too; this keeps it right when the page was not rebuilt in a new year ---- */
$('[data-copyright]').textContent = `© ${new Date().getFullYear()} Samuel Dutra`;

/* ---- Analytics: Google Tag Manager, only after the visitor accepts the notice ----
   Off when SITE.tracking.gtm is empty (no notice, no script). The choice is kept in localStorage and can be
   changed from the footer, and expires after CONSENT_MONTHS. Ads stay denied in Consent Mode: only analytics storage is ever granted.
   Events go to the dataLayer as plain names; the GTM container turns them into GA4 events (see the README). */
const CONSENT_KEY = 'analytics-consent';
const CONSENT_DATE_KEY = 'analytics-consent-date';
const CONSENT_MONTHS = 12; // ask again after this long (common practice, not a legal limit)
const consentBox = $('[data-consent]');
const consentReopen = $('[data-consent-open]');
let analyticsOn = false;
let consentFromFooter = false;

// The saved choice, or null when there is none, it is older than CONSENT_MONTHS (or has no date), or storage is blocked
function storedConsent() {
  try {
    const choice = localStorage.getItem(CONSENT_KEY);
    const date = new Date(localStorage.getItem(CONSENT_DATE_KEY));
    if (!choice || Number.isNaN(date.getTime())) return null;
    date.setMonth(date.getMonth() + CONSENT_MONTHS);
    return date > new Date() ? choice : null;
  } catch {
    return null; // storage blocked: ask again on every visit
  }
}

function storeConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());
  } catch {
    /* storage blocked: the choice only lasts for this visit */
  }
}

// GTM reads the arguments object itself, an array would be ignored
function gtag() {
  window.dataLayer.push(arguments);
}

function track(event, params) {
  if (analyticsOn) window.dataLayer.push({ event, ...params });
}

function startAnalytics() {
  window.dataLayer = window.dataLayer || [];
  if (analyticsOn) return;
  analyticsOn = true;
  const denied = { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' };
  gtag('consent', 'default', denied);
  gtag('consent', 'update', { analytics_storage: 'granted' });
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${SITE.tracking.gtm}`;
  document.head.append(script);
}

// Changed their mind: tell Google, forget its cookies (_ga, _ga_XXXX) and stop sending events
function stopAnalytics() {
  if (!analyticsOn) return;
  analyticsOn = false;
  gtag('consent', 'update', { analytics_storage: 'denied' });
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
    document.cookie = `${name}=; Max-Age=0; Path=/`;
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${location.hostname}`;
  });
}

function showConsent() {
  consentBox.hidden = false;
  void consentBox.offsetHeight; // let the first frame render, so the fade plays
  consentBox.setAttribute('data-visible', '');
}

function hideConsent() {
  consentBox.removeAttribute('data-visible');
  setTimeout(() => (consentBox.hidden = true), reducedMotion ? 0 : 250);
}

function chooseConsent(value) {
  storeConsent(value);
  if (value === 'granted') startAnalytics();
  else stopAnalytics();
  hideConsent();
  if (consentFromFooter) consentReopen.focus(); // from the footer, put the keyboard back where it was
  consentFromFooter = false;
}

if (SITE.tracking.gtm) {
  consentReopen.hidden = false;
  consentReopen.addEventListener('click', () => {
    consentFromFooter = true;
    showConsent();
    $('[data-consent-choice]', consentBox).focus();
  });
  $$('[data-consent-choice]', consentBox).forEach((button) =>
    button.addEventListener('click', () => chooseConsent(button.dataset.consentChoice)),
  );

  const choice = storedConsent();
  if (choice === 'granted') startAnalytics();
  // First visit: ask once the opening animation is done, so the notice never competes with it
  else if (choice !== 'denied') introDone.then(() => setTimeout(showConsent, 600));

  // Conversions. One listener for the contact links (email and WhatsApp) wherever they are on the page
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-link="email"], a[data-link="whatsapp"]');
    if (link) track('contact_click', { contact_method: link.dataset.link });
  });
  $$('[data-project-toggle]').forEach((toggle) =>
    toggle.addEventListener('click', () => {
      if (toggle.getAttribute('aria-expanded') === 'true') track('project_open', { project_title: toggle.textContent.trim() });
    }),
  );
}

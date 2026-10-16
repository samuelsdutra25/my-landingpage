/* ==========================================================================
   1. SITE: everything Samuel replaces lives here. Edit this object only.
   ========================================================================== */
const SITE = {
  // Public address of the site, with the final slash. Canonical links, share previews, the sitemap and the
  // structured data are built from it (npm run build). The Portuguese page lives at url + 'pt/'.
  url: 'https://samueldutra.com.br/',

  // Shown in the About section until a photo exists.
  initials: 'SD',
  photo: '', // TODO: e.g. 'assets/samuel.jpg'

  // TODO: replace every '#' and the example e-mail with the real links.
  links: {
    github: '#',
    linkedin: '#',
    instagram: '#',
    whatsapp: '#', // TODO: e.g. 'https://wa.me/5511999999999' (country code + number, digits only)
    email: 'mailto:hello@example.com',
  },

  // Contact form. Without an action it opens the visitor's email app with the message ready (mailto).
  // TODO: to receive messages directly, set action to a form endpoint that accepts a POST and answers JSON
  // (e.g. 'https://formspree.io/f/xxxxxxxx'). The form then sends in the background.
  form: { action: '' },

  stack: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'GSAP', 'React'],

  // Lighthouse scores of THIS page (mobile, 0 to 100). Measured 2026-10-15 with Lighthouse 12.8.2 on the
  // local Cloudflare server (wrangler dev), 6 runs on the English and Portuguese pages: performance 100 in
  // every run, accessibility 100, SEO 100. Before, the "How it works" lines were measured during the page
  // load and performance was 85 to 89; now they are measured when the section gets close.
  // TODO: run Lighthouse again on the deployed URL and update these. null shows "--" and leaves the ring empty.
  scores: { performance: 100, accessibility: 100, seo: 100 },

  // TODO: three real projects (a website, an online store and a dashboard).
  // The text below says what each one will prove. Replace titles, text and url when the project exists,
  // then set placeholder to false.
  projects: [
    {
      placeholder: true,
      image: '', // e.g. 'assets/project-1.jpg'
      url: '#',
      type: { en: 'Website', pt: 'Site' },
      title: { en: 'Website built from a Figma design', pt: 'Site feito a partir de um design no Figma' },
      text: {
        en: 'A pixel-perfect build of a Figma project: spacing, type and colors match the design, on every screen size.',
        pt: 'Uma implementação pixel a pixel de um projeto do Figma: espaçamentos, tipografia e cores iguais ao design, em qualquer tela.',
      },
      // Shown when the card is opened. TODO: real overview and what Samuel did.
      details: {
        about: {
          en: 'A website built to match a Figma file exactly. The goal is to show that the page you approve in the design is the page you get in the browser.',
          pt: 'Um site construído para ficar igual a um arquivo do Figma. A ideia é mostrar que a página que você aprova no design é a que você recebe no navegador.',
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
    'intro.welcome': 'Welcome',
    skip: 'Skip to content',

    // 404 page (404.html)
    'notfound.meta': 'Page not found | Samuel Dutra',
    'notfound.title': 'Page not found',
    'notfound.text': 'The address may have a typo, or the page may have moved. The home page has everything you need.',
    'notfound.cta': 'Go to the home page',
    'notfound.mockAria': 'Illustration of a browser window with an empty page',

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
    'hero.ready': 'This page was ready in',
    'hero.ms': 'ms',

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
    'form.sending': 'Sending...',
    'form.sent': 'Message sent. I will reply by email.',
    'form.mailto': 'Your email app should open with the message ready. If it does not, write to',
    'form.failed': 'The message could not be sent. Write to',
    'form.mailSubject': 'New project from',

    'footer.tagline': 'Front-end for websites, online stores and dashboards.',
    'footer.menu': 'Menu',
    'footer.menuLabel': 'Footer',
    'footer.top': 'Back to top',
    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
    'footer.instagram': 'Instagram',
    'footer.whatsapp': 'WhatsApp',
  },

  pt: {
    'meta.title': 'Samuel Dutra, programador front-end freelancer',
    'meta.description':
      'Desenvolvedor front-end de sites, lojas virtuais e dashboards. Rápidos, responsivos e acessíveis, com orçamento claro e duas semanas de suporte depois da entrega.',
    'meta.jobTitle': 'Desenvolvedor front-end',
    'intro.welcome': 'Seja bem-vindo',
    skip: 'Pular para o conteúdo',

    // Página 404 (404.html)
    'notfound.meta': 'Página não encontrada | Samuel Dutra',
    'notfound.title': 'Página não encontrada',
    'notfound.text': 'O endereço pode ter um erro de digitação, ou a página pode ter mudado de lugar. A página inicial tem tudo o que você precisa.',
    'notfound.cta': 'Ir para a página inicial',
    'notfound.mockAria': 'Ilustração de uma janela de navegador com uma página vazia',

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
    'hero.ready': 'Esta página ficou pronta em',
    'hero.ms': 'ms',

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
    'form.sending': 'Enviando...',
    'form.sent': 'Mensagem enviada. Respondo por e-mail.',
    'form.mailto': 'Seu app de e-mail deve abrir com a mensagem pronta. Se não abrir, escreva para',
    'form.failed': 'Não foi possível enviar a mensagem. Escreva para',
    'form.mailSubject': 'Novo projeto de',

    'footer.tagline': 'Front-end para sites, lojas virtuais e painéis.',
    'footer.menu': 'Menu',
    'footer.menuLabel': 'Rodapé',
    'footer.top': 'Voltar ao topo',
    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
    'footer.instagram': 'Instagram',
    'footer.whatsapp': 'WhatsApp',
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
   Validation is ours (the form has novalidate) so the messages are in the language of the page. */
const form = $('[data-contact-form]');
const formStatus = $('[data-form-status]', form);
const formSubmit = $('[data-form-submit]', form);

function setI18n(el, key) {
  if (key) {
    el.dataset.i18n = key;
    el.textContent = T[key];
  } else {
    delete el.dataset.i18n;
    el.textContent = '';
  }
}

function setFieldError(input, key) {
  setI18n($(`#${input.id}-error`), key);
  if (key) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');
}

function showStatus(key, withEmail = false) {
  formStatus.hidden = !key;
  setI18n($('[data-form-status-text]', form), key);
  $('[data-form-status-email]', form).hidden = !withEmail;
}

// Returns true when every required field is filled in; focuses the first one that is not
function validateForm() {
  const checks = [
    [$('#f-name'), (input) => input.value.trim() !== '', 'form.error.name'],
    [$('#f-email'), (input) => input.value.trim() !== '' && !input.validity.typeMismatch, 'form.error.email'],
    [$('#f-message'), (input) => input.value.trim() !== '', 'form.error.message'],
  ];
  let firstInvalid = null;
  checks.forEach(([input, isValid, errorKey]) => {
    const ok = isValid(input);
    setFieldError(input, ok ? '' : errorKey);
    if (!ok && !firstInvalid) firstInvalid = input;
  });
  firstInvalid?.focus();
  return !firstInvalid;
}

form.addEventListener('input', (event) => {
  if (event.target.hasAttribute('aria-invalid')) setFieldError(event.target, '');
});

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

async function sendToEndpoint(data) {
  formSubmit.disabled = true;
  showStatus('form.sending');
  try {
    const response = await fetch(SITE.form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error(String(response.status));
    form.reset();
    showStatus('form.sent');
  } catch {
    showStatus('form.failed', true);
  } finally {
    formSubmit.disabled = false;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateForm()) return;
  const data = new FormData(form);
  if (data.get('company')) return; // the hidden field is filled in: a bot
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
 * 1. A welcome message fades in letter by letter. Under it an amber line is drawn (with a dot at its tip, like the
 *    lines in "How it works") while a number counts from 0 to 100%.
 * 2. The count holds at 90% until the page has finished loading (at most 4 s), then it reaches 100% and the
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
  const message = $('.intro-message', screen);
  const track = $('.intro-track', screen);
  const line = $('.intro-line', screen);
  const head = $('.intro-dot', screen);
  const percent = $('.intro-percent', screen);

  // Set here (not written by the build) because it is split into letters
  const chars = [...T['intro.welcome']].map((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    return span;
  });
  message.append(...chars);

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

    // The line, the dot and the number all follow one value
    const progress = { value: 0 };
    const width = track.offsetWidth;
    const draw = () => {
      line.style.clipPath = `inset(0 ${100 - progress.value}% 0 0)`;
      gsap.set(head, { x: (progress.value / 100) * width });
      percent.textContent = `${Math.round(progress.value)}%`;
    };
    draw();

    await run(
      gsap
        .timeline()
        .set(message, { opacity: 1 })
        .fromTo(message, { yPercent: 35 }, { yPercent: 0, duration: 0.9, ease: 'power3.out' }, 0)
        .fromTo(chars, { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.05, ease: 'none' }, 0)
        .fromTo(head, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(2)' }, 0.2)
        .to(percent, { opacity: 1, duration: 0.3, ease: 'none' }, 0.2)
        .to(progress, { value: 90, duration: 1.4, ease: 'power2.out', onUpdate: draw }, 0.2),
    );
    await Promise.race([loaded, wait(4000)]);
    await run(gsap.to(progress, { value: 100, duration: 0.4, ease: 'power1.out', onUpdate: draw }));
    await wait(250);

    await run(
      gsap
        .timeline()
        .to(panel, { y: -panel.offsetHeight, duration: 0.85, ease: 'power3.inOut' })
        .call(release, null, 0.45),
    );
  }

  return released;
}
const introDone = playIntro();

/* ---- Hero: how long this page took to be ready, measured in the visitor's browser ---- */
function measureReadyTime() {
  const [navigation] = performance.getEntriesByType('navigation');
  const ms = navigation ? Math.round(navigation.domContentLoadedEventEnd) : 0;
  return ms > 0 ? ms : null;
}

/*
 * The wireframe only builds once it is on screen (on phones and tablets it
 * sits below the fold). mockBuilt resolves when the animation has finished.
 * BUILD_MS = initial delay + 12 steps + duration, as set in style.css.
 */
const BUILD_MS = 250 + 12 * 110 + 600;
const mock = $('[data-mock]');
const mockBuilt = new Promise((resolve) => {
  const start = () => {
    mock.setAttribute('data-visible', '');
    setTimeout(resolve, reducedMotion ? 0 : BUILD_MS);
  };
  if (reducedMotion) return start();
  // Waits for the opening animation, so the wireframe doesn't build behind the panel.
  // 0.8 could never fire on short viewports (e.g. a phone in landscape)
  introDone.then(() => onceVisible(mock, start, { threshold: 0.5 }));
});

function showReadyTime() {
  const ms = measureReadyTime();
  if (ms === null) return; // can't measure: the line stays invisible
  const readout = $('[data-ready-time]');
  readout.classList.remove('invisible');
  // Wait for the wireframe to finish building, then count up to the real number.
  const number = $('[data-ms]', readout);
  mockBuilt.then(() => animateProgress(800, (p) => (number.textContent = Math.round(ms * p))));
}

if (document.readyState === 'complete') {
  showReadyTime();
} else {
  window.addEventListener('load', () => setTimeout(showReadyTime, 0));
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

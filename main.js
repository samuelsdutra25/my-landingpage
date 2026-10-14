/* ==========================================================================
   1. SITE: everything Samuel replaces lives here. Edit this object only.
   ========================================================================== */
const SITE = {
  // Shown in the About section until a photo exists.
  initials: 'SD',
  photo: '', // TODO: e.g. 'assets/samuel.jpg'

  // TODO: replace every '#' and the example e-mail with the real links.
  links: {
    upwork: '#',
    github: '#',
    linkedin: '#',
    email: 'mailto:hello@example.com',
  },

  stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],

  // Lighthouse scores of THIS page (mobile, 0 to 100). Measured 2026-10-13 on a local server
  // (8 runs: performance 92 to 93, accessibility 100, SEO 100). The lowest performance run is shown.
  // TODO: run Lighthouse again on the deployed URL and update these. null shows "--" and leaves the ring empty.
  scores: { performance: 92, accessibility: 100, seo: 100 },

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
    'meta.title': 'Samuel Dutra | Front-end developer for websites, stores and dashboards',
    skip: 'Skip to content',

    'nav.label': 'Main',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.talk': 'Talk to me',
    'nav.menu': 'Menu',
    'lang.label': 'Language',

    'hero.title': 'I build the websites, stores and dashboards your customers use.',
    'hero.text':
      'They load fast, work on every screen and are easy to use. You get a clear estimate before we start and two weeks of support after delivery.',
    'hero.cta': 'Tell me about your project',
    'hero.upwork': 'Hire me on Upwork',
    'hero.projects': 'See projects',
    'hero.stack': 'Built with HTML, CSS, JavaScript, React and Tailwind.',
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
    'projects.view': 'View project',
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

    'footer.email': 'Email',
    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
  },

  pt: {
    'meta.title':
      'Samuel Dutra | Desenvolvedor front-end de sites, lojas virtuais e dashboards',
    skip: 'Pular para o conteúdo',

    'nav.label': 'Principal',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.process': 'Processo',
    'nav.contact': 'Contato',
    'nav.talk': 'Fale comigo',
    'nav.menu': 'Menu',
    'lang.label': 'Idioma',

    'hero.title': 'Eu construo os sites, lojas e painéis que os seus clientes usam.',
    'hero.text':
      'Abrem rápido, funcionam em qualquer tela e são fáceis de usar. Você conhece custo e prazo antes de começar e conta com suporte depois da entrega.',
    'hero.cta': 'Conte sobre o seu projeto',
    'hero.upwork':
      'Contratar pelo Upwork',
    'hero.projects': 'Ver projetos',
    'hero.stack': 'Feito com HTML, CSS, JavaScript, React e Tailwind.',
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
    'projects.view': 'Ver projeto',
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

    'footer.email': 'E-mail',
    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
  },
};

/* ==========================================================================
   3. Behavior. Nothing below needs editing to change content.
   ========================================================================== */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- Language ---- */
function getSavedLang() {
  try {
    const saved = localStorage.getItem('lang');
    return saved in TRANSLATIONS ? saved : 'en';
  } catch {
    return 'en'; // storage can be blocked (private window, file://)
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem('lang', lang);
  } catch {
    /* ignore: the choice just won't be remembered */
  }
}

function renderProjects(lang) {
  const t = TRANSLATIONS[lang];
  $$('[data-project]').forEach((card) => {
    const project = SITE.projects[Number(card.dataset.project)];
    if (!project) return;

    $('[data-project-type]', card).textContent = project.type[lang];
    $('[data-project-title]', card).textContent = project.title[lang];
    $('[data-project-text]', card).textContent = project.text[lang];
    $('[data-project-about]', card).textContent = project.details.about[lang];
    $('[data-project-role]', card).textContent = project.details.role[lang];
    $('[data-project-stack]', card).replaceChildren(
      ...project.details.stack.map((name) => {
        const item = document.createElement('li');
        item.className = 'rounded-full bg-sand px-3 py-1 text-small font-bold';
        item.textContent = name;
        return item;
      })
    );
    $('[data-project-link]', card).href = project.url;
    $('[data-project-badge]', card).hidden = !project.placeholder;

    const media = $('[data-project-media]', card);
    media.replaceChildren();
    if (project.image) {
      const img = document.createElement('img');
      img.src = project.image;
      img.alt = project.title[lang];
      img.loading = 'lazy';
      img.className = 'h-full w-full object-cover';
      media.append(img);
    } else {
      const label = document.createElement('span');
      label.className = 'text-small';
      label.textContent = t['projects.image'];
      media.append(label);
    }
  });
}

/* ---- Project cards: click anywhere on a card to open or close its details ---- */
$$('[data-project]').forEach((card) => {
  const toggle = $('[data-project-toggle]', card);
  toggle.addEventListener('click', () => {
    const open = !card.hasAttribute('data-open');
    card.toggleAttribute('data-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
});

/* Screen reader text for the gauges. The visible numbers animate, so they are hidden from assistive tech. */
function renderScores(lang) {
  const t = TRANSLATIONS[lang];
  $$('[data-gauge]').forEach((gauge) => {
    const score = SITE.scores[gauge.dataset.gauge];
    $('[data-gauge-sr]', gauge).textContent = score === null ? '' : `${score} ${t['included.outOf']}`;
  });
}

function renderAbout() {
  const photo = $('[data-about-photo]');
  photo.replaceChildren();
  if (SITE.photo) {
    const img = document.createElement('img');
    img.src = SITE.photo;
    img.alt = 'Samuel Dutra';
    img.className = 'h-full w-full object-cover';
    photo.append(img);
  } else {
    photo.setAttribute('aria-hidden', 'true');
    photo.textContent = SITE.initials;
  }

  $('[data-stack]').replaceChildren(
    ...SITE.stack.map((name) => {
      const item = document.createElement('li');
      item.className = 'rounded-full bg-sand px-3 py-1 text-small font-bold';
      item.textContent = name;
      return item;
    })
  );
}

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];

  document.documentElement.lang = lang;
  document.title = t['meta.title'];

  $$('[data-i18n]').forEach((el) => {
    el.textContent = t[el.dataset.i18n];
  });
  $$('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t[el.dataset.i18nAria]);
  });
  $$('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });

  renderProjects(lang);
  renderScores(lang);
  $('[data-copyright]').textContent = `© ${new Date().getFullYear()} Samuel Dutra`;
}

$$('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => {
    // Enable the switch transitions only after the first click, not on page load
    $('[data-lang-switch]').setAttribute('data-animate', '');
    saveLang(button.dataset.lang);
    applyLanguage(button.dataset.lang);
  });
});

/* ---- Links from SITE.links ---- */
$$('[data-link]').forEach((a) => {
  a.href = SITE.links[a.dataset.link];
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

/* ---- Buttons: hop on hover, landing with a GSAP bounce (transform only, skipped for reduced motion) ---- */
if (window.gsap && !reducedMotion) {
  $$('.btn').forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.killTweensOf(button);
      gsap
        .timeline()
        .to(button, { y: -10, duration: 0.15, ease: 'power2.out' })
        .to(button, { y: 0, duration: 0.8, ease: 'bounce.out' });
    });
  });
}

/* ---- Header: the bottom line only shows once the page has scrolled ---- */
const header = $('[data-header]');
const syncHeaderLine = () => header.toggleAttribute('data-scrolled', window.scrollY > 0);
window.addEventListener('scroll', syncHeaderLine, { passive: true });
syncHeaderLine();

/* ---- Hero: how long this page took to be ready, measured in the visitor's browser ---- */
function measureReadyTime() {
  const [navigation] = performance.getEntriesByType('navigation');
  const ms = navigation ? Math.round(navigation.domContentLoadedEventEnd) : 0;
  return ms > 0 ? ms : null;
}

function countUp(element, target) {
  if (reducedMotion) {
    element.textContent = target;
    return;
  }
  const duration = 800;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    element.textContent = Math.round(target * (1 - (1 - progress) ** 3)); // ease-out
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
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
  if (reducedMotion || !('IntersectionObserver' in window)) return start();
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    start();
  }, { threshold: 0.5 }); // 0.8 could never fire on short viewports (e.g. a phone in landscape)
  observer.observe(mock);
});

function showReadyTime() {
  const ms = measureReadyTime();
  if (ms === null) return; // can't measure: the line stays invisible
  const readout = $('[data-ready]');
  readout.classList.remove('invisible');
  // Wait for the wireframe to finish building, then settle on the real number.
  mockBuilt.then(() => countUp($('[data-ms]', readout), ms));
}

if (document.readyState === 'complete') {
  showReadyTime();
} else {
  window.addEventListener('load', () => setTimeout(showReadyTime, 0));
}

/* ---- What you get: rings fill and numbers count up once the panel is on screen ---- */
// Runs render(progress) from 0 to 1 with an ease-out. With reduced motion it jumps straight to the end.
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

function playReport() {
  const report = $('[data-report]');
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

  if (reducedMotion || !('IntersectionObserver' in window)) return playReport();
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    playReport();
  }, { threshold: 0.4 });
  observer.observe(report);
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

  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    list.setAttribute('data-visible', '');
  }, { threshold: 0.1 }); // low, because the list is taller than a phone screen
  observer.observe(list);
})();

/* ---- Start ---- */
renderAbout();
applyLanguage(getSavedLang());
document.body.setAttribute('data-ready', ''); // reveals the page, see style.css

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

  // TODO: three real projects (ideally a website, an online store and a dashboard).
  // Set placeholder to false when a project is real.
  projects: [
    {
      placeholder: true,
      image: '', // e.g. 'assets/project-1.jpg'
      url: '#',
      type: { en: 'Website', pt: 'Site' },
      title: { en: 'Lorem ipsum dolor', pt: 'Lorem ipsum dolor' },
      text: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        pt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      },
    },
    {
      placeholder: true,
      image: '',
      url: '#',
      type: { en: 'Online store', pt: 'Loja virtual' },
      title: { en: 'Sit amet consectetur', pt: 'Sit amet consectetur' },
      text: {
        en: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        pt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
    },
    {
      placeholder: true,
      image: '',
      url: '#',
      type: { en: 'Dashboard', pt: 'Dashboard' },
      title: { en: 'Adipiscing elit sed', pt: 'Adipiscing elit sed' },
      text: {
        en: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        pt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      },
    },
  ],
};

/* ==========================================================================
   2. TRANSLATIONS: all site text, English first. Keys match data-i18n in
   index.html. The body copy is lorem ipsum for now: replace it with real text.
   ========================================================================== */
const LOREM = {
  s1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  s2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  s3: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  s4: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  s5: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
};
const LOREM_LONG = `${LOREM.s1} ${LOREM.s2}`;

const TRANSLATIONS = {
  en: {
    'meta.title': 'Samuel Dutra | Front-end developer',
    skip: 'Skip to content',

    'nav.label': 'Main',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.talk': 'Talk to me',
    'nav.menu': 'Menu',
    'lang.label': 'Language',

    'hero.title': 'I build websites, online stores and dashboards.',
    'hero.text': LOREM_LONG,
    'hero.upwork': 'Hire me on Upwork',
    'hero.projects': 'See projects',
    'hero.stack': 'Built with HTML, CSS, JavaScript, React and Tailwind.',
    'hero.mockLabel': 'Your site',
    'hero.mockAria': 'Illustration of a small website being built',
    'hero.ready': 'This page was ready in',
    'hero.ms': 'ms',

    'included.title': 'What you get',
    'included.lead': LOREM_LONG,
    'included.1.title': 'Works on every screen',
    'included.1.text': LOREM.s1,
    'included.2.title': 'Fast loading',
    'included.2.text': LOREM.s2,
    'included.3.title': 'Clean, maintainable code',
    'included.3.text': LOREM.s3,
    'included.4.title': 'Delivery with support',
    'included.4.text': LOREM.s4,

    'services.title': 'Services',
    'services.lead': LOREM.s1,
    'services.1.title': 'Websites and landing pages',
    'services.1.text': LOREM_LONG,
    'services.2.title': 'Online stores',
    'services.2.text': `${LOREM.s3} ${LOREM.s4}`,
    'services.3.title': 'Dashboards and web apps',
    'services.3.text': `${LOREM.s5} ${LOREM.s1}`,
    'services.4.title': 'Tweaks and maintenance',
    'services.4.text': `${LOREM.s2} ${LOREM.s3}`,

    'projects.title': 'Projects',
    'projects.lead': LOREM.s2,
    'projects.placeholder': 'Placeholder',
    'projects.image': 'Project image',
    'projects.view': 'View project',

    'process.title': 'Process',
    'process.lead': LOREM.s3,
    'process.terminal': 'terminal',
    'process.command': 'samuel start --project',
    'process.1.title': 'Briefing',
    'process.1.text': LOREM.s1,
    'process.2.title': 'Layout',
    'process.2.text': LOREM.s2,
    'process.3.title': 'Development',
    'process.3.text': LOREM.s3,
    'process.4.title': 'Delivery',
    'process.4.text': LOREM.s4,
    'process.done': 'Project delivered.',

    'about.title': 'About',
    'about.text1': LOREM_LONG,
    'about.text2': 'I pick the tool for the job: plain HTML for a simple site, React when the interface has a lot of state.',
    'about.stack': 'Tech stack',

    'contact.title': "Let's talk?",
    'contact.text': LOREM_LONG,

    'footer.email': 'Email',
    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
  },

  pt: {
    'meta.title': 'Samuel Dutra | Desenvolvedor front-end',
    skip: 'Pular para o conteúdo',

    'nav.label': 'Principal',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.process': 'Processo',
    'nav.contact': 'Contato',
    'nav.talk': 'Fale comigo',
    'nav.menu': 'Menu',
    'lang.label': 'Idioma',

    'hero.title': 'Eu crio sites, lojas virtuais e dashboards.',
    'hero.text': LOREM_LONG,
    'hero.upwork': 'Contrate no Upwork',
    'hero.projects': 'Ver projetos',
    'hero.stack': 'Feito com HTML, CSS, JavaScript, React e Tailwind.',
    'hero.mockLabel': 'Seu site',
    'hero.mockAria': 'Ilustração de um site pequeno sendo montado',
    'hero.ready': 'Esta página ficou pronta em',
    'hero.ms': 'ms',

    'included.title': 'O que você recebe',
    'included.lead': LOREM_LONG,
    'included.1.title': 'Funciona em qualquer tela',
    'included.1.text': LOREM.s1,
    'included.2.title': 'Carregamento rápido',
    'included.2.text': LOREM.s2,
    'included.3.title': 'Código limpo e fácil de manter',
    'included.3.text': LOREM.s3,
    'included.4.title': 'Entrega com suporte',
    'included.4.text': LOREM.s4,

    'services.title': 'Serviços',
    'services.lead': LOREM.s1,
    'services.1.title': 'Sites e landing pages',
    'services.1.text': LOREM_LONG,
    'services.2.title': 'Lojas virtuais',
    'services.2.text': `${LOREM.s3} ${LOREM.s4}`,
    'services.3.title': 'Dashboards e aplicações web',
    'services.3.text': `${LOREM.s5} ${LOREM.s1}`,
    'services.4.title': 'Ajustes e manutenção',
    'services.4.text': `${LOREM.s2} ${LOREM.s3}`,

    'projects.title': 'Projetos',
    'projects.lead': LOREM.s2,
    'projects.placeholder': 'Exemplo',
    'projects.image': 'Imagem do projeto',
    'projects.view': 'Ver projeto',

    'process.title': 'Processo',
    'process.lead': LOREM.s3,
    'process.terminal': 'terminal',
    'process.command': 'samuel start --project',
    'process.1.title': 'Briefing',
    'process.1.text': LOREM.s1,
    'process.2.title': 'Layout',
    'process.2.text': LOREM.s2,
    'process.3.title': 'Desenvolvimento',
    'process.3.text': LOREM.s3,
    'process.4.title': 'Entrega',
    'process.4.text': LOREM.s4,
    'process.done': 'Projeto entregue.',

    'about.title': 'Sobre',
    'about.text1': LOREM_LONG,
    'about.text2': 'Escolho a ferramenta pelo trabalho: HTML puro para um site simples, React quando a interface tem muito estado.',
    'about.stack': 'Tecnologias',

    'contact.title': 'Vamos conversar?',
    'contact.text': LOREM_LONG,

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
  if (ms === null) return; // can't measure: leave the line hidden
  const readout = $('[data-ready]');
  readout.hidden = false;
  // Wait for the wireframe to finish building, then settle on the real number.
  mockBuilt.then(() => countUp($('[data-ms]', readout), ms));
}

if (document.readyState === 'complete') {
  showReadyTime();
} else {
  window.addEventListener('load', () => setTimeout(showReadyTime, 0));
}

/* ---- Start ---- */
renderAbout();
applyLanguage(getSavedLang());

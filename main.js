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
      // Shown when the card is opened. TODO: real overview, what Samuel did, and the stack used.
      details: {
        about: {
          en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          pt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        role: { en: 'Lorem ipsum dolor sit amet.', pt: 'Lorem ipsum dolor sit amet.' },
        stack: ['HTML', 'CSS', 'JavaScript'],
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
      // Shown when the card is opened. TODO: real overview, what Samuel did, and the stack used.
      details: {
        about: {
          en: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          pt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        role: { en: 'Lorem ipsum dolor sit amet.', pt: 'Lorem ipsum dolor sit amet.' },
        stack: ['HTML', 'CSS', 'JavaScript'],
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
      // Shown when the card is opened. TODO: real overview, what Samuel did, and the stack used.
      details: {
        about: {
          en: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          pt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        role: { en: 'Lorem ipsum dolor sit amet.', pt: 'Lorem ipsum dolor sit amet.' },
        stack: ['HTML', 'CSS', 'JavaScript'],
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
    'included.report': 'Measured with Lighthouse on this page',
    'included.outOf': 'out of 100',
    'included.performance.title': 'Performance',
    'included.performance.text': LOREM.s1,
    'included.accessibility.title': 'Accessibility',
    'included.accessibility.text': LOREM.s2,
    'included.seo.title': 'SEO',
    'included.seo.text': LOREM.s3,
    'included.responsive.title': 'Responsive',
    'included.responsive.text': LOREM.s4,
    'included.clean.title': 'Clean, maintainable code',
    'included.clean.text': LOREM.s5,
    'included.support.title': 'Delivery with support',
    'included.support.text': LOREM.s1,

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
    'projects.details': 'Details',
    'projects.about': 'About the project',
    'projects.role': 'What I did',
    'projects.stack': 'Stack',

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
    'included.report': 'Medido com o Lighthouse nesta página',
    'included.outOf': 'de 100',
    'included.performance.title': 'Desempenho',
    'included.performance.text': LOREM.s1,
    'included.accessibility.title': 'Acessibilidade',
    'included.accessibility.text': LOREM.s2,
    'included.seo.title': 'SEO',
    'included.seo.text': LOREM.s3,
    'included.responsive.title': 'Responsividade',
    'included.responsive.text': LOREM.s4,
    'included.clean.title': 'Código limpo e fácil de manter',
    'included.clean.text': LOREM.s5,
    'included.support.title': 'Entrega com suporte',
    'included.support.text': LOREM.s1,

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
    'projects.details': 'Detalhes',
    'projects.about': 'Sobre o projeto',
    'projects.role': 'O que fiz',
    'projects.stack': 'Tecnologias',

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
  const START_MS = 400; // wait before the first row moves
  const STEP_MS = 1000; // gap between one row and the next: enough to read a title before the next row starts
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

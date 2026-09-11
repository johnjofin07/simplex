/**
 * The page's one script. Reveals content as it enters the viewport, slides the
 * hero photo for parallax, and steps the horizontal card scrollers. Under reduced motion it only flips classes; CSS
 * renders everything already settled.
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Reveal on entry ---------- */
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !reduced) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.01 }
  );
  targets.forEach((el) => io.observe(el));
} else {
  targets.forEach((el) => el.classList.add('is-in'));
}

/* ---------- Stat counters: count up from 0 the first time each card scrolls in ---------- */
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (counters.length && 'IntersectionObserver' in window && !reduced) {
  const DURATION = 1400;
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const run = (el: HTMLElement) => {
    const end = parseInt(el.dataset.count || '', 10);
    if (!Number.isFinite(end)) return;
    // Start together with the card's own reveal delay so the number and the card arrive as one.
    const card = el.closest<HTMLElement>('[data-reveal]');
    const delay = card ? parseFloat(getComputedStyle(card).getPropertyValue('--d')) * 1000 || 0 : 0;
    let t0 = 0;
    const tick = (now: number) => {
      if (!t0) t0 = now;
      const p = Math.min(1, (now - t0) / DURATION);
      el.textContent = String(Math.round(easeOut(p) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    // Hold the final width so the unit beside it does not drift as digits fill in.
    el.style.minWidth = `${el.getBoundingClientRect().width}px`;
    el.textContent = '0';
    window.setTimeout(() => requestAnimationFrame(tick), delay);
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          run(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => io.observe(el));
}

/* ---------- Bottom bar: only once the hero's own buttons have scrolled away ---------- */
const bar = document.querySelector<HTMLElement>('[data-bottombar]');
const heroCta = document.querySelector<HTMLElement>('[data-hero-cta]');
if (bar && heroCta && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => bar.classList.toggle('is-on', !e.isIntersecting), { threshold: 0 }).observe(heroCta);
} else if (bar) {
  bar.classList.add('is-on');
}

/* ---------- Horizontal scroller controls ---------- */
document.querySelectorAll<HTMLElement>('[data-scroller-controls]').forEach((ctl) => {
  const scroller = document.getElementById(ctl.dataset.scrollerControls || '');
  if (!scroller) return;
  const prev = ctl.querySelector<HTMLButtonElement>('[data-dir="-1"]');
  const next = ctl.querySelector<HTMLButtonElement>('[data-dir="1"]');
  const card = scroller.querySelector<HTMLElement>('li');
  const step = () => (card ? card.offsetWidth + parseFloat(getComputedStyle(card.parentElement!).gap || '24') : 320);
  const sync = () => {
    const max = scroller.scrollWidth - scroller.clientWidth;
    const frac = max > 0 ? scroller.scrollLeft / max : 0;
    const w = Math.max(0.2, scroller.clientWidth / scroller.scrollWidth);
    ctl.style.setProperty('--thumb-w', `${(w * 100).toFixed(1)}%`);
    ctl.style.setProperty('--thumb-x', `${(frac * (1 / w - 1) * 100).toFixed(1)}%`);
    if (prev) prev.disabled = scroller.scrollLeft <= 2;
    if (next) next.disabled = scroller.scrollLeft >= max - 2;
  };
  prev?.addEventListener('click', () => scroller.scrollBy({ left: -step(), behavior: reduced ? 'auto' : 'smooth' }));
  next?.addEventListener('click', () => scroller.scrollBy({ left: step(), behavior: reduced ? 'auto' : 'smooth' }));
  scroller.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync);
  sync();
});

/* ---------- Hero parallax: sky and text linger (0.3x / 0.4x), the building cutout rises at 1x ---------- */
const hero = document.querySelector<HTMLElement>('[data-parallax]');
if (hero && !reduced) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const y = window.scrollY;
    const limit = hero.offsetHeight;
    const t = Math.min(y, limit);
    hero.style.setProperty('--py', `${t * 0.7}px`);
    hero.style.setProperty('--ty', `${t * 0.6}px`);
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
}

/* ---------- Photo viewer: one album per service card ---------- */
type LbItem = { src: string; alt: string; caption: string };
const lb = document.querySelector<HTMLDialogElement>('[data-lightbox]');
if (lb && typeof lb.showModal === 'function') {
  const img = lb.querySelector<HTMLImageElement>('[data-lb-img]')!;
  const title = lb.querySelector<HTMLElement>('[data-lb-title]')!;
  const cap = lb.querySelector<HTMLElement>('[data-lb-caption]')!;
  const count = lb.querySelector<HTMLElement>('[data-lb-count]')!;
  let items: LbItem[] = [];
  let cur = 0;
  let opener: HTMLElement | null = null;

  const preload = (i: number) => {
    const it = items[((i % items.length) + items.length) % items.length];
    if (it) new Image().src = it.src;
  };
  const show = (i: number) => {
    const n = items.length;
    cur = ((i % n) + n) % n;
    const it = items[cur];
    if (!reduced) lb.classList.add('is-loading');
    img.onload = img.onerror = () => lb.classList.remove('is-loading');
    img.src = it.src;
    img.alt = it.alt;
    cap.textContent = it.caption;
    count.textContent = `${cur + 1} / ${n}`;
    preload(cur + 1);
    preload(cur - 1);
  };

  document.querySelectorAll<HTMLAnchorElement>('a[data-lb-album]').forEach((card) =>
    card.addEventListener('click', (e) => {
      const data = document.querySelector<HTMLScriptElement>(`script[data-lb-album="${card.dataset.lbAlbum}"]`);
      let album: LbItem[] = [];
      try {
        album = JSON.parse(data?.textContent || '[]');
      } catch {
        return; // fall through to the href
      }
      if (!album.length) return;
      e.preventDefault();
      items = album;
      opener = card;
      title.textContent = data?.dataset.lbTitle || '';
      show(0);
      document.documentElement.classList.add('lb-open');
      lb.showModal();
    })
  );

  lb.querySelector('[data-lb-prev]')?.addEventListener('click', () => show(cur - 1));
  lb.querySelector('[data-lb-next]')?.addEventListener('click', () => show(cur + 1));
  lb.querySelector('[data-lb-close]')?.addEventListener('click', () => lb.close());
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') show(cur + 1);
    else if (e.key === 'ArrowLeft') show(cur - 1);
  });
  // Click on the backdrop or the empty frame around the photo closes.
  lb.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t === lb || t.hasAttribute('data-lb-frame')) lb.close();
  });
  // Swipe to step on touch screens.
  let x0 = 0;
  let y0 = 0;
  lb.addEventListener('touchstart', (e) => ((x0 = e.touches[0].clientX), (y0 = e.touches[0].clientY)), { passive: true });
  lb.addEventListener(
    'touchend',
    (e) => {
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) show(dx < 0 ? cur + 1 : cur - 1);
    },
    { passive: true }
  );
  lb.addEventListener('close', () => {
    document.documentElement.classList.remove('lb-open');
    img.removeAttribute('src');
    opener?.focus();
  });
}

/* ---------- Mobile menu: the section links live behind one button under 1040px ---------- */
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
if (menuBtn && menu) {
  const setOpen = (open: boolean) => {
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('menu-open', open);
  };
  menuBtn.addEventListener('click', () => setOpen(menu.hidden));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      menuBtn.focus();
    }
  });
  document.addEventListener('click', (e) => {
    const t = e.target as Node;
    if (!menu.hidden && !menu.contains(t) && !menuBtn.contains(t)) setOpen(false);
  });
  window.matchMedia('(min-width: 1041px)').addEventListener('change', (m) => m.matches && setOpen(false));
}

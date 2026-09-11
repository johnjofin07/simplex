/**
 * The page's one script. Reveals content as it enters the viewport, measures
 * the section drawing so it draws along real path lengths, and steps the
 * horizontal card scroller. Under reduced motion it only flips classes; CSS
 * renders everything already settled.
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Section drawing: measure real lengths ---------- */
function measureDrawing(root: Element) {
  const lines = root.querySelectorAll<SVGGeometryElement>('.l');
  const speed = 1600;
  const overlap = 0.3;
  const budget = 2.2;
  const plan: { el: SVGGeometryElement; dur: number; at: number }[] = [];
  let clock = 0;
  lines.forEach((el) => {
    let len = 1;
    try {
      len = el.getTotalLength();
    } catch {
      len = 1;
    }
    const dur = Math.max(0.1, len / speed);
    plan.push({ el, dur, at: clock });
    el.style.setProperty('--len', String(len));
    clock += dur * overlap;
  });
  const k = Math.min(1, budget / Math.max(clock, 0.001));
  for (const p of plan) {
    p.el.style.setProperty('--dur', `${(p.dur * k).toFixed(3)}s`);
    p.el.style.setProperty('--delay', `${(p.at * k).toFixed(3)}s`);
  }
  (root as HTMLElement).style.setProperty('--total', `${(clock * k + 0.3).toFixed(2)}s`);
}

/* ---------- Reveal on entry ---------- */
const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-drawing]');
targets.forEach((el) => {
  if (el.hasAttribute('data-drawing') && !reduced) measureDrawing(el);
});
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

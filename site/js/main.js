// xTAK site — minimal client-side enhancements

// Mark <html> with .js immediately so CSS can opt-in to JS-only behaviors
// (e.g., the reveal animation). If this script doesn't load, content stays visible by default.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  burger?.addEventListener('click', () => nav.classList.toggle('is-open'));

  // Close mobile nav on link click
  document.querySelectorAll('.nav__links a').forEach((a) => {
    a.addEventListener('click', () => nav?.classList.remove('is-open'));
  });

  // Reveal on scroll. Failsafe: if IntersectionObserver isn't available
  // or any reveal item is already in/above the viewport on load, it shows immediately.
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-in'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-in');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: '0px 0px 0px 0px' }
      );
      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If already in/above the viewport, show right away (no animation delay)
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-in');
        } else {
          io.observe(el);
        }
      });
    }
  }

  // Live timestamp in the readout bar (ZULU/UTC)
  const clock = document.querySelector('[data-clock]');
  if (clock) {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, '0');
      const mm = String(d.getUTCMinutes()).padStart(2, '0');
      const ss = String(d.getUTCSeconds()).padStart(2, '0');
      clock.textContent = `${hh}${mm}${ss}Z`;
    };
    tick();
    setInterval(tick, 1000);
  }
});

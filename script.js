// ===== Neeraj Search: type an ID and jump to that section =====
const form = document.getElementById('neeraj-search');
const input = document.getElementById('search-input');
const error = document.getElementById('search-error');

// a few nicknames people might type
const aliases = {
  fun: 'fun', party: 'fun', goa: 'fun',
  neeraj: 'neeraj', normal: 'neeraj', noodles: 'neeraj', goofy: 'neeraj',
  lockedin: 'lockedin', 'locked in': 'lockedin', lockin: 'lockedin', work: 'lockedin', pitch: 'lockedin',
  physical: 'physical', sports: 'physical', run: 'physical', gym: 'physical'
};

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const typed = input.value.trim().toLowerCase().replace('#', '');
  const id = aliases[typed];

  if (id) {
    error.classList.remove('show');
    window.location.hash = id;
    confetti();
  } else {
    error.classList.add('show');
  }
});

// confetti when a chip is clicked too
document.querySelectorAll('.chip').forEach(function (chip) {
  chip.addEventListener('click', confetti);
});

// ===== Confetti burst =====
function confetti() {
  const colours = ['#2f7bff', '#9d4dff', '#2bff88', '#ffffff'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.backgroundColor = colours[i % colours.length];
    piece.style.animationDuration = 1.5 + Math.random() * 1.5 + 's';
    piece.style.animationDelay = Math.random() * 0.3 + 's';
    document.body.appendChild(piece);
    setTimeout(function () { piece.remove(); }, 3500);
  }
}

// ===== Glow that follows the mouse =====
const glow = document.getElementById('cursor-glow');
window.addEventListener('mousemove', function (event) {
  glow.style.transform = 'translate(' + event.clientX + 'px, ' + event.clientY + 'px)';
  glow.classList.add('on');
});
document.addEventListener('mouseleave', function () {
  glow.classList.remove('on');
});

// ===== 3D tilt on cards and photos =====
document.querySelectorAll('.card, .polaroid, .about-photo, .stat-card, .note').forEach(function (el) {
  el.classList.add('tilt');
  el.addEventListener('mousemove', function (event) {
    const box = el.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    el.style.transform = 'perspective(800px) rotateY(' + x * 12 + 'deg) rotateX(' + -y * 12 + 'deg) scale(1.03)';
  });
  el.addEventListener('mouseleave', function () {
    el.style.transform = '';
  });
});

// ===== Numbers count up when you scroll to them =====
const counters = document.querySelectorAll('.num[data-to]');
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.to);
    const decimals = parseInt(el.dataset.decimals || '0');
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / 1400, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    observer.unobserve(el);
  });
}, { threshold: 0.6 });
counters.forEach(function (el) { observer.observe(el); });

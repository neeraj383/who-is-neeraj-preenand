// Neeraj Search: type an ID and jump to that section (#fun, #neeraj, #lockedin, #physical)
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
  } else {
    error.classList.add('show');
  }
});

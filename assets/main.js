// Markeer komende en voorbije afspraken op basis van de datum van vandaag,
// zodat de site niet opnieuw gepubliceerd hoeft te worden als de tijd verstrijkt.
(function () {
  var now = new Date();
  var today = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
    .map(function (n) { return String(n).padStart(2, '0'); }).join('-');
  var events = Array.prototype.slice.call(document.querySelectorAll('.event[data-datum]'));
  var next = null;

  events.forEach(function (el) {
    var upcoming = el.dataset.datum >= today;
    el.classList.add(upcoming ? 'upcoming' : 'past');
    if (el.dataset.datum === today) el.classList.add('today');
    if (upcoming) next = el; // lijst loopt van nieuw naar oud, dus de laatste is de eerstvolgende
  });

  var box = document.getElementById('next-up');
  if (box && next) {
    var date = next.querySelector('.event-date').textContent.trim();
    var title = next.querySelector('h3').textContent.trim();
    box.querySelector('.next-up-body').textContent = date + ' · ' + title;
    box.hidden = false;
  }

  // Onderstreep het menu-item van de sectie die in beeld is.
  var links = document.querySelectorAll('.nav ul a');
  if (!('IntersectionObserver' in window)) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) {
        a.classList.toggle('active', a.hash === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach(function (s) { observer.observe(s); });
})();

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.addEventListener('keydown', function (e) {
    var prev = document.querySelector('a[data-pager="prev"]');
    var next = document.querySelector('a[data-pager="next"]');
    if (e.key === 'ArrowLeft' && prev) { window.location.href = prev.href; }
    if (e.key === 'ArrowRight' && next) { window.location.href = next.href; }
  });
})();

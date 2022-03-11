window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nav-toggle').addEventListener('click', function(e) {
      e.target.setAttribute('aria-pressed', !e.target.getAttribute('aria-pressed'));
      document.getElementById('menu').classList.toggle('collapsed');
    });
  })
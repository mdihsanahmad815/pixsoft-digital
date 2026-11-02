
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '✕' : '☰';
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('#quoteForm').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [
        'Hello PIXSOFT DIGITAL!',
        '',
        'I would like to discuss a project.',
        ...Array.from(data.entries()).filter(([key, value]) => String(value).trim()).map(([key, value]) => `${key.charAt(0).toUpperCase()+key.slice(1)}: ${value}`)
      ];
      const url = 'https://wa.me/880192289616?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  });
})();

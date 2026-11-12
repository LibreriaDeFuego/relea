// Menú colapsable (móvil)
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('menu');
  if (!toggle || !menu) return;
  function set(open) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
  toggle.addEventListener('click', function () {
    set(toggle.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') set(false);
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav')) set(false);
  });
})();

// Formulario de contacto: abre el correo del visitante con el mensaje listo.
// Para enviarlo sin pasar por el cliente de correo, reemplazar este bloque
// por un fetch() al servicio de formularios que se elija.
(function () {
  var form = document.getElementById('form-contacto');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (n) { return (form.elements[n].value || '').trim(); };
    var asunto = 'Contacto desde relea.cl' + (v('libreria') ? ' · ' + v('libreria') : '');
    var cuerpo = [
      'Nombre: ' + v('nombre'),
      'Correo: ' + v('correo'),
      'Librería: ' + v('libreria'),
      '',
      v('mensaje')
    ].join('\n');
    window.location.href = 'mailto:somosrelea@gmail.com?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);
  });
})();

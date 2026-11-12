// Pestañas del menú en móvil: centra la página actual y desvanece los bordes
// cuando hay más pestañas hacia un lado.
(function () {
  var menu = document.getElementById('menu');
  if (!menu) return;
  function bordes() {
    var max = menu.scrollWidth - menu.clientWidth;
    menu.classList.toggle('fade-l', menu.scrollLeft > 2);
    menu.classList.toggle('fade-r', menu.scrollLeft < max - 2);
  }
  var actual = menu.querySelector('[aria-current="page"]');
  if (actual && menu.scrollWidth > menu.clientWidth) {
    menu.scrollLeft = actual.offsetLeft - menu.offsetLeft - (menu.clientWidth - actual.offsetWidth) / 2;
  }
  bordes();
  menu.addEventListener('scroll', bordes, { passive: true });
  window.addEventListener('resize', bordes);
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

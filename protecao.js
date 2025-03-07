document.addEventListener('DOMContentLoaded', function () {
  // Bloqueia o arrastar de elementos (imagens, textos, etc.)
  document.addEventListener('dragstart', function (event) {
    event.preventDefault();
  });

  // Bloqueia a seleção de texto
  document.addEventListener('selectstart', function (event) {
    event.preventDefault();
  });

  // Bloqueia o clique com botão direito (context menu)
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  // Bloqueia copiar, recortar e colar
  document.addEventListener('copy', function (event) {
    event.preventDefault();
  });

  document.addEventListener('cut', function (event) {
    event.preventDefault();
  });

  document.addEventListener('paste', function (event) {
    event.preventDefault();
  });

  // Bloqueia arrasto específico para imagens
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.setAttribute('draggable', 'false');
  });
});

document.addEventListener('keydown', (e) => {
  // Bloqueia F12
  if (e.key === 'F12' || e.code === 'F12') {
      e.preventDefault();
  }

  // Bloqueia Ctrl + Shift + I, Ctrl + Shift + J e Ctrl + U
  if ((e.ctrlKey && e.shiftKey && ['I', 'J'].includes(e.key)) || (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
  }
});
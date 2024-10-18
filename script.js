const boto = document.getElementById('botonako');
    const text = document.getElementById('textako');

    boto.addEventListener('click', function() {
      // Mostrar/ocultar la vinyeta
      text.classList.toggle('hidden');

      // Mover el botón hacia abajo y cambiar el color
      boto.classList.toggle('move-down');

      // Cambiar el contenido del botón entre "+" y "x"
      if (!text.classList.contains('hidden')) {
        boto.innerHTML = '<p class="text-4xl text-white pb-2">×</p>'; // Cambiar a 'x'
      } else {
        boto.innerHTML = '<p class="text-4xl text-white pb-2">+</p>'; // Cambiar a '+'
      }
    });
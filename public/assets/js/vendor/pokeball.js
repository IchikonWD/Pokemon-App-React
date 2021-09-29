(function() {
    function togglePokeball(event) {
      event.preventDefault();
  
      const pokeball = document.getElementById('pokeball-1');
      if (pokeball.classList.contains('open')) {
        pokeball.classList.remove('open');
      } else {
        pokeball.classList.add('open');
      }
    }
  
    const button = document.getElementById('toggle-button');
    button.addEventListener('click', togglePokeball)
  })();
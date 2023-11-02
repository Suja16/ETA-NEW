const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        navbar.classList.add('no-bg-image');
      } else {
        navbar.classList.remove('no-bg-image');
      }
    });
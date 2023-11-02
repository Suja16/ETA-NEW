document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');

  container.addEventListener('scroll', () => {
    const scrollPosition = container.scrollTop;

    if (scrollPosition >= 0 && scrollPosition < 33.33) {
      container.style.setProperty('--num', 6);
    } else if (scrollPosition >= 33.33 && scrollPosition < 66.66) {
      container.style.setProperty('--num', 1);
    } else {
      container.style.setProperty('--num', 23);
    }
  });
});

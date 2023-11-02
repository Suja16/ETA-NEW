document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const content = document.querySelector(".content");

  if (navbar && content) {
    window.addEventListener("scroll", () => {
      const scrollPercentage = (window.scrollY / (content.offsetHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 30) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
});

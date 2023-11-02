const sections = document.querySelectorAll(".team-member");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const h1 = entry.target.querySelector("h1");
      const num = parseInt(h1.getAttribute("data-num"), 10);
      let currentNum = parseInt(h1.textContent, 10);
      
      const counterInterval = setInterval(() => {
        if (currentNum < num) {
          currentNum++;
          h1.textContent = currentNum;
        } else {
          clearInterval(counterInterval);
        }
      }, 100); // Adjust the interval duration as needed
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

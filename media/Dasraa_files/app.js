// back to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


// typed multiples words
const typed = new Typed ('.multiple-text',{
  strings: ['Graphics Designs', 'SEO Optimization', 'WebSites Development', 'Software Development'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


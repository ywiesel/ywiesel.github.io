const slideshows = document.querySelectorAll("[data-slideshow]");

slideshows.forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll(".slide"));
  const previousButton = slideshow.querySelector("[data-slide-previous]");
  const nextButton = slideshow.querySelector("[data-slide-next]");
  const counter = slideshow.querySelector("[data-slide-counter]");
  let activeIndex = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
    });

    counter.textContent = `${activeIndex + 1} of ${slides.length}`;
  };

  previousButton.addEventListener("click", () => {
    showSlide(activeIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(activeIndex + 1);
  });

  showSlide(activeIndex);
});

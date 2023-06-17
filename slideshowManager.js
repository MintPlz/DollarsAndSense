var slideIndex = 0;

window.onload = () => {
  showSlides(0);
}

function plusSlides(n) {
  showSlides(slideIndex + n);
}

function showSlides(n) {
  /* Get slides and dots.
  slides and dots should be parallel. */
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  /* If slideIndex is negative, make it cycle. */
  slideIndex = (n < 0) ? slides.length - 1 : n % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("currSlide");
  }

  slides[slideIndex].style.display = "flex";
  dots[slideIndex].classList.add("currSlide");
}
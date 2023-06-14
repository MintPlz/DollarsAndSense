/* Sections and Navbar Buttons */
const sections = document.querySelectorAll("section");
const btns = document.querySelectorAll(".navbar a");

/* Give each button a click event listener */
btns.forEach(btn => {
  btn.addEventListener("click", function() {
    moveTo(this)
  })
});

/* Smooth scroll to section on click */
function moveTo(btn) {

  /* Get the button's target section by finding its href */
  var hash = btn.hash;

  /* If the button is home, go to top of page instead */
  var target = ((hash == '#homeSection') ? 0 : $(hash).offset().top);

  /* Scroll to target */
  $('html').animate({
    scrollTop: target
  }, 800);
}
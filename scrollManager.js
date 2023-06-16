/* Sections and Navbar Buttons */
const sections = document.querySelectorAll("section");
const btns = document.querySelectorAll(".navbar a");

/* --- Smooth Scroll Implementation --- */

/* Navlinks Click Listener */
btns.forEach(btn => {
  btn.addEventListener("click", function() {
    moveTo(this)
  })
});

/* Smooth scroll to section on click */
function moveTo(btn) {

  /* Get the button's target section by finding its href */
  var hash = btn.hash;

  /* Target the hash and give room for the navbar */
  var target = $(hash).offset().top - window.innerHeight/10;


  /* Scroll to target */
  $('html').animate({
    scrollTop: target
  }, 800);
}

/* --- Highlight Navigation Button on Scroll Implementation --- */

/* Scroll Event Listener */
window.addEventListener('scroll', () => {
  changeActiveNav();
});

/* Make a Navlink 'active' when viewing section */
function changeActiveNav() {
  sections.forEach(section => {

    /* Top and Height of Section */
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    /* Section is active if 2/3 is visible */
    if(scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }

  });

  btns.forEach(btn => {
    btn.classList.remove("active");

    var currHash = "#" + currentSection;

    if(btn.hash == currHash) {
      btn.classList.add("active");
    }
  });
}
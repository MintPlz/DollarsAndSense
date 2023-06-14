//Get sections and buttons
const sections = document.querySelectorAll("section");
const btns = document.querySelectorAll(".navbar a");

//testing
function test() {

  console.log("testing");

  console.log(sections)

  sections.forEach(section => {
    console.log(section.id)
  });

  console.log(btns)

  btns.forEach(btn => {
    console.log(btn.textContent)
  });
}
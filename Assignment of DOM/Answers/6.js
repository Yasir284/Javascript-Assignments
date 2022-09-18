// Topics
// -   Query Selector, Event listeners, Changing Styles

// Tasks
//  Target the search box and on hover change thebackground color to red.

let form = document.querySelector(".searchinput___zXLAR");

form.addEventListener("mouseenter", red);
form.addEventListener("mouseout", white);

function red() {
  form.style.background = "red";
  form.style.transition = "all 0.2s ease-in-out";
}
function white() {
  form.style.background = "white";
}

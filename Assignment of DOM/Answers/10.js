// Topics
//    querySelector, mouseover, click eventListener,  callback function, style,

// Tasks
// Target the button and change background colour on mouseover

let btn = document.querySelector(".btn-cta-big");
let btnText = document.querySelector(".btn-cta-big .login-btn-text");

// add red colour on hover
btn.addEventListener("mouseover", () => {
  btnText.style.background = "red";
});

// remove colour
btn.addEventListener("mouseout", () => {
  btnText.style.background = "transparent";
});

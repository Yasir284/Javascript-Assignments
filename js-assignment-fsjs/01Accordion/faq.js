const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

// Creating elements of faq and adding eventListner to the button
function createFaq(questionTxt, answerTxt) {
  let mainDiv = document.createElement("div");
  let headerDiv = document.createElement("div");
  let question = document.createElement("h3");
  let answer = document.createElement("p");
  let btn = document.createElement("button");
  mainDiv.setAttribute("class", "faq");
  headerDiv.setAttribute("class", "faq_header");
  answer.setAttribute("class", "hidden");
  btn.setAttribute("class", "show_btn");
  btn.textContent = "+";
  accordianBody.appendChild(mainDiv);
  mainDiv.appendChild(headerDiv);
  headerDiv.appendChild(question);
  mainDiv.appendChild(answer);
  headerDiv.appendChild(btn);

  question.textContent = questionTxt;
  answer.textContent = answerTxt;

  // button click event
  btn.addEventListener("click", btnStatusUpdate);
  function btnStatusUpdate() {
    btn.classList.toggle("rotate");

    // ====== Optimized Logic ========
    setTimeout(() => {
      answer.classList.toggle("hidden", !answer.classList.contains("hidden"));
    }, 300);
    answer.classList.toggle("opacityIn", !answer.classList.contains("hidden"));
    answer.classList.toggle("opacityOut", answer.classList.contains("hidden"));
  }

  // ====== Unoptimized Logic =========
  // if (answer.classList.contains("hidden")) {
  //   setTimeout(() => {
  //     answer.classList.remove("hidden");
  //   }, 300);
  //   answer.classList.remove("opacityIn");
  //   answer.classList.add("opacityOut");
  // } else {
  //   answer.classList.remove("opacityOut");
  //   answer.classList.add("opacityIn");
  //   setTimeout(() => {
  //     answer.classList.add("hidden");
  //   }, 300);
  // }
}

// Adding Faq to the page
function showFaq() {
  for (let i = 0; i < faqData.length; i++) {
    createFaq(faqData[i].question, faqData[i].answer);
  }
}
showFaq();

let userScore = document.querySelector("#userScoreVal");
let compScore = document.querySelector("#compScoreVal");
let userStat = document.querySelector("#result-user-stat");
let compStat = document.querySelector("#result-comp-stat");
let winner = document.querySelector("#result-final-stat");
let rock = document.querySelector("#r");
let paper = document.querySelector("#p");
let scissor = document.querySelector("#s");
userStat.appendChild(document.createElement("span"));
compStat.appendChild(document.createElement("span"));
winner.appendChild(document.createElement("span"));
// onclick add stat to userStat
// make function that choose random stat and add that to compStat
rock.addEventListener("click", () => {
  getWinner("🪨");
});

paper.addEventListener("click", () => {
  getWinner("📃");
});

scissor.addEventListener("click", () => {
  getWinner("​✂️");
});

function randomStat() {
  return new Promise(async (resolve) => {
    resolve(document.querySelector("#result-comp-stat span").textContent);
  });
}
// console.log(randomStat());

async function getWinner(userChoice) {
  let user = (document.querySelector("#result-user-stat span").textContent =
    userChoice);
  const interval = setInterval(() => {
    document.querySelector("#result-comp-stat span").textContent = [
      "🪨",
      "​✂️",
      "📃",
    ][Math.floor(Math.random() * 3)];
  }, 50);

  await setTimeout(() => {
    clearInterval(interval);
    let comp = document.querySelector("#result-comp-stat span").textContent;
    logic(user, comp);
  }, 2500);
}

function logic(user, comp) {
  document.querySelector("#result-comp-stat span").textContent = comp;
  //   let user = document.querySelector("#result-user-stat span").textContent;
  //   console.log(user);
  //   let comp = document.querySelector("#result-comp-stat span").textContent;
  if (user == "🪨" && comp == "​✂️") {
    winner.firstElementChild.textContent = " User";
    ++userScore.textContent;
  } else if (user == "🪨" && comp == "📃") {
    winner.firstElementChild.textContent = " Computer";
    ++compScore.textContent;
  } else if (user == "​✂️" && comp == "📃") {
    winner.firstElementChild.textContent = " User";
    ++userScore.textContent;
  } else if (user == "​✂️" && comp == "🪨") {
    winner.firstElementChild.textContent = " Computer";
    ++compScore.textContent;
  } else if (user == "📃" && comp == "🪨") {
    winner.firstElementChild.textContent = " User";
    ++userScore.textContent;
  } else if (user == "📃" && comp == "​✂️") {
    winner.firstElementChild.textContent = " Computer";
    ++compScore.textContent;
  } else if (user == comp) {
    winner.firstElementChild.textContent = " Tie";
  }
}

// function addUserCount() {
//   i = 0;
//   return (userScore.textContent = ++i);
// }
// console.log(addUserCount());
// function addCompCount() {
//   i = 0;
//   return (compScore.textContent = ++i);
// }

let randomNumberRight = Math.ceil(Math.random() * 6);
let randomNumberLeft = Math.ceil(Math.random() * 6);

function playGame() {
  document
    .querySelector(".img1")
    .setAttribute("src", `images/dice${randomNumberRight}.png`);
  document
    .querySelector(".img2")
    .setAttribute("src", `images/dice${randomNumberLeft}.png`);

  if (randomNumberRight > randomNumberLeft) {
    document.querySelector("h1").innerHTML = "Player 1 wins !";
  } else {
    if (randomNumberRight < randomNumberLeft) {
      document.querySelector("h1").innerHTML = "Player 2 wins !";
    } else {
      document.querySelector("h1").innerHTML = "Eguality! Play again!";
    }
  }
}

document.querySelector(".play-btn").addEventListener("click", playGame);

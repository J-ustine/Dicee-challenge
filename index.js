let randomNumberRight = Math.ceil(Math.random() * 6);
let randomNumberLeft = Math.ceil(Math.random() * 6);

document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNumberLeft}.png`);
document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randomNumberRight}.png`);

if (randomNumberRight > randomNumberLeft) {
  document.querySelector("h1").innerHTML = "Player 1 wins !";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins !";
}

function createRandomNumbers() {
  if (randomNumbers.length === 0) {
    for (let i = 0; i < numberPlayer; i++) {
      randomNumbers.push(Math.ceil(Math.random() * 6));
    }
  } else {
    randomNumbers = [];
    for (let i = randomNumbers.length; i < numberPlayer; i++) {
      randomNumbers.push(Math.ceil(Math.random() * 6));
    }
  }
}

function playGame() {
  createRandomNumbers();
  let duplicate = 0;
  for (let n = 0; n < randomNumbers.length; n++) {
    if (randomNumbers[n] === Math.max.apply(Math, randomNumbers)) {
      duplicate++;
    }
  }
  for (let i = 0; i < randomNumbers.length; i++) {
    document
      .querySelector(`.img${i + 1}`)
      .setAttribute("src", `images/dice${randomNumbers[i]}.png`);
  }
  let winner = randomNumbers.indexOf(Math.max.apply(Math, randomNumbers));
  if (duplicate > 1) {
    document.querySelector("h1").innerHTML = `Drawn ! Play again!`;
  } else {
    document.querySelector("h1").innerHTML = `Player ${winner + 1} wins !`;
  }
}

function addPlayer() {
  document.querySelector("h1").innerHTML = "Welcome to Dicee Game";
  if (numberPlayer < 6) {
    document.querySelector(
      ".row-dicee"
    ).innerHTML += `<div class="col"><div class="dice"><p>Player ${
      numberPlayer + 1
    }</p><img class='img${
      numberPlayer + 1
    }' src='images/dice6.png'/></div></div>`;
    numberPlayer++;
  } else {
    alert("Sorry, only 6 people can play to the Dicee Game!");
  }
}
function removePlayer() {
  document.querySelector("h1").innerHTML = "Welcome to Dicee Game";
  if (numberPlayer > 2) {
    document
      .querySelector(".row-dicee")
      .removeChild(document.querySelector(".row-dicee").lastChild);
    numberPlayer = numberPlayer - 1;
  } else {
    alert("Sorry, you can't play to the Dicee Game alone!");
  }
}

let numberPlayer = 2;
let randomNumbers = [];

document.querySelector(".play-btn").addEventListener("click", playGame);
document.querySelector(".add-player-btn").addEventListener("click", addPlayer);
document
  .querySelector(".remove-player-btn")
  .addEventListener("click", removePlayer);

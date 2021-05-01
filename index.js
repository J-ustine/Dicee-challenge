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

const animateCSS = (element, animation, prefix = "animate__") =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const elmnt = document.querySelector(element);
    elmnt.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      elmnt.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }
    elmnt.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

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

  function winnerMessage() {
    const h1 = document.querySelector("h1");
    if (duplicate > 1) {
      h1.innerHTML = `Drawn ! Play again!`;
    } else {
      h1.innerHTML = `Player ${winner + 1} wins !`;
      animateCSS("h1", "tada");
    }
  }
  winnerMessage();
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
    for (let index = 1; index < numberPlayer; index++) {
      document
        .querySelector(`.img${index}`)
        .setAttribute("src", `images/dice6.png`);
    }
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
    for (let index = 1; index <= numberPlayer; index++) {
      document
        .querySelector(`.img${index}`)
        .setAttribute("src", `images/dice6.png`);
    }
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

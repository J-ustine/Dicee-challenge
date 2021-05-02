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

const animateCSS = (element, animation) =>
  new Promise((resolve, reject) => {
    const animationName = `animate__${animation}`;
    const elmnt = document.querySelector(element);
    elmnt.classList.add(`animate__animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      elmnt.classList.remove(`animate__animated`, animationName);
      resolve("Animation ended");
    }
    elmnt.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

let angle = 0;
// function rotation() {
//   while (angle <= 360) {
//     document.querySelector(".img1").style.transform = `rotate(${angle}deg)`;
//     angle += 45;
//   }
// }
function rotation() {
  angle += 45;
  for (let n = 0; n < randomNumbers.length; n++) {
    document.querySelector(
      `.img${n + 1}`
    ).style.transform = `rotate(${angle}deg)`;
  }
}

function handleImage() {
  for (let i = 0; i < randomNumbers.length; i++) {
    document
      .querySelector(`.img${i + 1}`)
      .setAttribute("src", `images/dice${randomNumbers[i]}.png`);
  }
}

function playGame() {
  let rotate = null;
  rotate = setInterval(rotation, 300);
  debugger;
  setTimeout(() => {
    clearInterval(rotate);
  }, 2000);

  createRandomNumbers();
  let duplicate = 0;
  for (let n = 0; n < randomNumbers.length; n++) {
    if (randomNumbers[n] === Math.max.apply(Math, randomNumbers)) {
      duplicate++;
    }
  }

  setTimeout(() => {
    for (let i = 0; i < randomNumbers.length; i++) {
      document
        .querySelector(`.img${i + 1}`)
        .setAttribute("src", `images/dice${randomNumbers[i]}.png`);
    }
  }, 1900);

  let winner = randomNumbers.indexOf(Math.max.apply(Math, randomNumbers));
  function winnerMessage() {
    const h1 = document.querySelector("h1");
    if (duplicate > 1) {
      h1.innerHTML = `Drawn ! Play again!`;
      animateCSS("h1", "shakeX");
    } else {
      h1.innerHTML = `Player ${winner + 1} wins !`;
      animateCSS("h1", "tada");
    }
  }
  setTimeout(function () {
    const h1 = document.querySelector("h1");
    if (duplicate > 1) {
      h1.innerHTML = `Drawn ! Play again!`;
      animateCSS("h1", "shakeX");
    } else {
      h1.innerHTML = `Player ${winner + 1} wins !`;
      animateCSS("h1", "tada");
    }
  }, 2500);
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

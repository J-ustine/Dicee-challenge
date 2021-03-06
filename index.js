function createRandomNumbers() {
  console.log(numberPlayer);
  /*  randomNumbers += for (let a = 0; a<numberPlayer; a++){
      Math.ceil(Math.random() * 6)
  }*/
  for (let i = randomNumbers.length; i < numberPlayer; i++) {
    randomNumbers.push(Math.ceil(Math.random() * 6));
  }
  console.log(randomNumbers);
  console.log(Math.max.apply(Math, randomNumbers));
  return randomNumbers.indexOf(Math.max.apply(Math, randomNumbers));
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

  if (duplicate > 1) {
    document.querySelector("h1").innerHTML = `Drawn ! Play again!`;
  } else {
    document.querySelector("h1").innerHTML = `Player ${
      createRandomNumbers() + 1
    } wins !`;
  }
}

function addPlayer() {
  if (numberPlayer < 6) {
    document.querySelector(
      ".row"
    ).innerHTML += `<div class="col"><div class="dice"><p>Player ${
      numberPlayer + 1
    }</p><img class='img${
      numberPlayer + 1
    }' src='images/dice6.png' width='100px'/></div></div>`;
    numberPlayer++;
  } else {
    alert("Sorry, only 6 people can play to the Dicee Game!");
  }
}
let numberPlayer = 2;
let randomNumbers = [];

document.querySelector(".play-btn").addEventListener("click", playGame);
document.querySelector(".add-player-btn").addEventListener("click", addPlayer);

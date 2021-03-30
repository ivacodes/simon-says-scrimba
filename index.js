let order = [];
let playedOrder = [];
let count = 0;

const resultCount = document.querySelector(".result-count");
const startButton = document.querySelector(".start");

startButton.addEventListener("click", (e) => {
  play();
});

function play() {
  console.log("starting game");
}

function reset() {
  console.log("reseting game");
}

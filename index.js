let order = [];
let playedOrder = [];
let count = 0;
let lost = false;
let started = false;

const resultCount = document.querySelector(".result-count");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const dog = document.querySelector(".dog");
const cat = document.querySelector(".cat");
const box = document.querySelector(".box");
const fish = document.querySelector(".fish");
const message = document.querySelector(".message");

startButton.addEventListener("click", (e) => {
  lost = false;
  started = false;
  message.innerHTML = "";
  resultCount.innerHTML = count;
  reset();
  if (!started) {
    started = true;
    lost = false;
    message.innerHTML = "";
    play();
  }
});

function play() {
  resultCount.innerHTML = count;
  console.log("starting game");
  randomize();
  computerTurn();
  count++;
}

function nextTurn() {
  playedOrder = [];
  randomize();
  computerTurn();
  count++;
}

resetButton.addEventListener("click", (e) => {
  lost = false;
  started = false;
  message.innerHTML = "";
  reset();
});

function reset() {
  console.log("reseting game");
  order = [];
  playedOrder = [];
  count = 0;
  resultCount.innerHTML = count;
}

function randomize() {
  order.push(Math.floor(Math.random() * 4) + 1);
}

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

async function computerTurn() {
  for (let i = 0; i <= order.length; i++) {
    await sleep(1000);
    if (order[i] === 1) {
      flashTurn(cat);
    } else if (order[i] === 2) {
      flashTurn(box);
    } else if (order[i] === 3) {
      flashTurn(fish);
    } else if (order[i] === 4) {
      flashTurn(dog);
    }
  }
}

function flashTurn(x) {
  // console.log("adding class flash to ", x);
  x.classList.add("light");
  setTimeout(() => {
    x.classList.remove("light");
  }, 500);
}

function playerTurn() {
  console.log("players turn");
}

cat.addEventListener("click", (e) => {
  if (started) {
    playedOrder.push(1);
    check();
  }
});

box.addEventListener("click", (e) => {
  if (started) {
    playedOrder.push(2);
    check();
  }
});

fish.addEventListener("click", (e) => {
  if (started) {
    playedOrder.push(3);
    check();
  }
});

dog.addEventListener("click", (e) => {
  if (started) {
    playedOrder.push(4);
    check();
  }
});

function check() {
  if (playedOrder[playedOrder.length - 1] !== order[playedOrder.length - 1]) {
    lost = true;
  }

  if (lost) {
    message.innerHTML = `You lost. Start over?`;
  }

  if (playedOrder.length === order.length) {
    resultCount.innerHTML = count;
    nextTurn();
  }
}

const btnRest = document.querySelector("#reset-btn");
const btnStart = document.querySelector("#startcard-el");
const btnNew = document.querySelector("#newcard-el");
const displayCards = document.querySelector("#display-card");
const displaySum = document.querySelector("#display-sum");
const displayMessage = document.querySelector("#message-el");

//iNITials
let validStart = true;
let sum = 0;
let firstCard = 0;
let secondCard = 0;

//Displaying random numbers

const generateRandomNumber = function () {
  const random = Math.trunc(Math.random() * 10) + 1;

  if (random === 1) {
    return 11;
  } else {
    return random;
  }
};

//START GAME FUNCTION

const startGame = function () {
  if (validStart) {
    firstCard = generateRandomNumber();
    secondCard = generateRandomNumber();
    displayCards.textContent = `${firstCard} ${secondCard} `;
  }

  sum += firstCard + secondCard;

  validStart = false;
};

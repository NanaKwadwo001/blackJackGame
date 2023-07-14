const btnRest = document.querySelector("#reset-btn");
const btnStart = document.querySelector("#startcard-el");
const btnNew = document.querySelector("#newcard-el");
const displayCards = document.querySelector("#display-card");
const displaySum = document.querySelector("#display-sum");
const displayMessage = document.querySelector("#message-el");

//iNITials
let validStart, sum, firstCard, secondCard, newCardNum;
const init = function () {
  /* let */ validStart = true;
  /* let */ sum = 0;
  /* let */ firstCard = 0;
  /* let */ secondCard = 0;
  /* let */ newCardNum = 0;
  displayCards.textContent = "";
  displaySum.textContent = "";
  displayMessage.textContent = "Want to play a round?";
};

init();

//Displaying random numbers

const generateRandomNumber = function () {
  const random = Math.trunc(Math.random() * 10) + 1;

  if (random === 1) {
    return 11;
  } else {
    return random;
  }
};

//Checking for win, loss or continuity

const checkingBlackJack = function () {
  //FOR WIN
  if (sum === 21) {
    //Show WInning message
    displayMessage.textContent = `YOU WON 🎉🎉`;
    console.log("WIN");

    //Still in the GAME
  } else if (sum < 21) {
    //Show Continuity message
    displayMessage.textContent = `Still in the game. Display NEW CARD!`;

    console.log("continue");

    //FOR LOST
  } else {
    //Show Loosing message
    displayMessage.textContent = `YOU LOST🥲🥲`;
    console.log("LOST");
  }
};

//START GAME FUNCTION

const startGame = function () {
  //this button only works when the Valid start is true, this is to have control of the Btn
  if (validStart) {
    //generate a random num for the firstCard
    firstCard = generateRandomNumber();

    //generate a random num for the secondCard
    secondCard = generateRandomNumber();

    //Display the contents of the first and the second card
    displayCards.textContent += `${firstCard} - ${secondCard} - `;

    //Adding the first and the second card into sum
    sum += firstCard + secondCard;

    //Displaying the sum
    displaySum.textContent = sum;

    //Checking for win, loss or continuity
    checkingBlackJack();

    //this makes the start btn invalid after it has been pressed
    validStart = false;
  }
};

//Newcard function

const newCard = function () {
  //NewCard btn works only when the start btn has been pressed
  if (!validStart) {
    //generate a random num for the newCard
    newCardNum = generateRandomNumber();

    //Display the contents of the newCardNum card
    displayCards.textContent += `${newCardNum} - `;

    //add it to the sum
    sum += newCardNum;

    //Displaying the sum
    displaySum.textContent = sum;

    //Checking for win, loss or continuity
    checkingBlackJack();

    console.log(newCardNum, sum);
  }
};

//Reset Function

const resetGame = function () {
  init();
};

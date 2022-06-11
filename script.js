'use strict';
console.log("Github link: " + "https://github.com/emoltz/Pass-The-Pigs");

const winningScore = 100;
let playing = true;

const range1 = .349;
const range2 = .6511;
const range3 = .8751;
const range4 = .9631;
const range5 = .9932;
const range6 = 1;



//______________PLAYERS
let player1Name = document.getElementById('name--0');
let player2Name = document.getElementById('name--1');
let activePlayer = 0;
const player1_el = document.querySelector('.player--0');
const player2_el = document.querySelector('.player--1');

//______________TOTAL SCORE
const player1TotalScore_el = document.getElementById('score--0');
const player2TotalScore_el = document.getElementById('score--1');

const totalScores = [0, 0];

//______________CURRENT SCORE
let currentScore_player1_element = document.getElementById('current--0');
let currentScore_player2_element = document.getElementById('current--1');
let currentScore_player1;
let currentScore_player2;
let currentScore;

//______________BUTTONS
const newGameButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const renamePlayersButton = document.querySelector('.btn--rename');

//______________Dice/Pigs
const diceElement = document.querySelector('.pigs');
const pig1Element = document.getElementById('pig1');
const pig2Element = document.getElementById('pig2');



//______________Roll
function changePlayersCurrentScore(){
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}

function rollDice() {
    if (playing) {
        // generate random roll
        let dice = Math.trunc(Math.random() * 6 + 1);

        // display dice
        console.log("roll: " + dice);
        diceElement.classList.remove('hidden');
        diceElement.src = `images/dice-${dice}.png`

        // check for rolled 1 -- if true, switch to next player
        if (dice !== 1) {
            currentScore += dice;
            // document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            changePlayersCurrentScore()
        } else {
            switchActivePlayer();
        }
    }


}

//______________PIG LOGIC


function rollPigs(){
    // let min = 1;
    // let max = 7;
    // let roll1 = Math.round(max / (Math.random() * max + min));
    // let roll2 = Math.round(max / (Math.random() * max + min));
    let roll1 = (Math.random());
    let roll2 = (Math.random());

    //______________________ROLL 1:
    if (roll1 >= 0 && roll1 <= range1){
        console.log("no dot!");
        pig1Element.src = `images/pig_nodot.png`;
    }
    else if (roll1 > range1 && roll1 <= range2){
        console.log("Dot!");
        pig1Element.src = `images/pig_dot.png`;
    }
    else if (roll1 > range2 && roll1 <= range3){
        console.log("razorback");
    }
    else if (roll1 > range3 && roll1 <= range4){
        console.log("trotter");
    }
    else if (roll1 > range4 && roll1 <= range5){
        console.log("snouter");
    }
    else if (roll1 > range5 && roll1 <= range6){
        console.log("Leaning jowler");
    }
    else if (roll1 > range6 && roll1 <= range7){
        console.log("Oinker!!");
    }

    //______________________ROLL 2:
    if (roll2 >= 0 && roll2 <= range1){
        console.log("no dot!");
    }
    else if (roll2 > range1 && roll2 <= range2){
        console.log("Dot!");
    }
    else if (roll2 > range2 && roll2 <= range3){
        console.log("razorback");
    }
    else if (roll2 > range3 && roll2 <= range4){
        console.log("trotter");
    }
    else if (roll2 > range4 && roll2 <= range5){
        console.log("snouter");
    }
    else if (roll2 > range5 && roll2 <= range6){
        console.log("Leaning jowler");
    }
    else if (roll2 > range6 && roll2 <= range7){
        console.log("Oinker!!");
    }
}
//______________FUNCTIONS

function switchActivePlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player1Name.classList.toggle('highlighted')
    player2Name.classList.toggle('highlighted')

    player1_el.classList.toggle('player--active')
    player2_el.classList.toggle('player--active')


}


function changeName(name, player1) {
    if (player1 === true) {
        player1Name.textContent = name;
    } else {
        player2Name.textContent = name;
    }

}

function resetScores() {
    currentScore = 0;
    currentScore_player1_element.textContent = String(currentScore);
    currentScore_player2_element.textContent = String(currentScore);
    player1TotalScore_el.textContent = String(currentScore);
    player2TotalScore_el.textContent = String(currentScore);
}

function setPlayerNames(name1, name2) {
    //// this changes player names:
    // let nameTemp = window.prompt("Enter Player1 Name", "Your Name")
    // changeName(nameTemp, true)
    // nameTemp = window.prompt("Enter Player2 Name", "Your Name");
    // changeName(nameTemp, false);
}


function init() {
    // diceElement.classList.add('hidden')
    resetScores();
    activePlayer = 0;
    player1Name.classList.add('highlighted')
    player2Name.classList.remove('highlighted')

    player1_el.classList.remove('player--winner');
    player2_el.classList.remove('player--winner');
    player1_el.classList.add('player--active');
    player2_el.classList.remove('player--active')

}

function hold() {
    //add current score to score of active player
    totalScores[activePlayer] += currentScore;
    console.log(totalScores[activePlayer])
    if (activePlayer === 0) {
        player1TotalScore_el.textContent = totalScores[activePlayer]
    } else {
        player2TotalScore_el.textContent = totalScores[activePlayer];
    }
    // check if players score is over 100
    if (totalScores[activePlayer] >= winningScore) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false;
    }

    //switch to other player
    switchActivePlayer();

}


//______________listeners
newGameButton.addEventListener('click', init);
rollButton.addEventListener('click', rollPigs);
holdButton.addEventListener('click', hold);
// renamePlayersButton.addEventListener('click',function(){
//
// })


//______________MAIN:

init();


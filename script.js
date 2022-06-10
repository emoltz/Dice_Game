'use strict';
console.log("Github link: " + "https://github.com/emoltz/Pass-The-Pigs");

const winningScore = 100;
let playing = true;



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

//TODO turn into object
var lookup = {
    1: {range:[0,.349], points: null, name: "side (no dot)"},
    2: {range: [.3491,.6511], points: null, name: "side (dot)"},
    3: {range: [.6522, .8751], points: 5, name: "Razorback"},
    4: {range: [.8752, .9631], points: 5, name: "Trotter"},
    5: {range: [.9632, .9932], points: 10, name: "Snouter"},
    6: {range: [.9933, .9960], points: 15, name: "Leaning Jowler"},
    7: {range: [.9961, 1], points: 0, name: "Oinker!"}
}


function rollPigs(){
    // let min = 1;
    // let max = 7;
    // let roll1 = Math.round(max / (Math.random() * max + min));
    // let roll2 = Math.round(max / (Math.random() * max + min));
    let roll1 = (Math.random());
    let roll2 = (Math.random());


    console.log("Pig Roll 1: " + roll1);
    console.log("Pig Roll 2: " + roll2);


    // switch (roll1){
    //     case 1: //no dot
    //
    //         break;
    //     case 2: //dot
    //
    //         break;
    //     case 3: //back
    //         break;
    //     case 4: // Standing
    //         break;
    //     case 5: // snout
    //         break;
    //     case 6: // ear
    //         break;
    //     case 7: //touching the other pig
    //         currentScore = 0;
    //         changePlayersCurrentScore();
    //         totalScores[activePlayer] = 0;
    //         hold();
    //         break;
    //     default:
    //         console.log("Pig roll error -- Math");
    //         break;
    // }
}
rollPigs();
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

function hidePigs() {


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
    diceElement.classList.add('hidden')
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
rollButton.addEventListener('click', rollDice);
holdButton.addEventListener('click', hold);
// renamePlayersButton.addEventListener('click',function(){
//
// })


//______________MAIN:

init();


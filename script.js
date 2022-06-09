'use strict';
//______________PLAYERS
let player1Name = document.getElementById('name--0');
let player2Name = document.getElementById('name--1');
let activePlayer = 0;

//______________TOTAL SCORE
const player1TotalScore_el = document.getElementById('score--0');
const player2TotalScore_el = document.getElementById('score--1');

const totalScores = [0,0];

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

//______________Dice/Pigs
const diceElement = document.querySelector('.pigs');



//______________Roll
function rollDice(){
    // generate random roll
    let dice = Math.trunc(Math.random() * 6 + 1);

    // display dice
    console.log("roll: " + dice);
    diceElement.classList.remove('hidden');
    diceElement.src = `images/dice-${dice}.png`

    // check for rolled 1 -- if true, switch to next player
    //TODO this would be a PIG OUT
    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }
    else{
        switchActivePlayer();
    }

}

//______________FUNCTIONS

function switchActivePlayer(){
    activePlayer = activePlayer === 0 ? 1 : 0;
    if(activePlayer === 0){
        player1Name.classList.add('highlighted')
        player2Name.classList.remove('highlighted')
        // change Player1
    }
    else{
        //change player2
        player1Name.classList.remove('highlighted')
        player2Name.classList.add('highlighted')
    }
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}


function changeName(name, player1){
    if(player1 === true){
        player1Name.textContent = name;
    }
    else{
        player2Name.textContent = name;
    }

}

function hidePigs(){
    

}

function resetScores(){
    currentScore = 0;
    currentScore_player1_element.textContent = String(currentScore);
    currentScore_player2_element.textContent = String(currentScore);
    player1TotalScore_el.textContent = String(currentScore);
    player2TotalScore_el.textContent = String(currentScore);
}

function setPlayerNames(name1, name2){
    //// this changes player names:
    // let nameTemp = window.prompt("Enter Player1 Name", "Your Name")
    // changeName(nameTemp, true)
    // nameTemp = window.prompt("Enter Player2 Name", "Your Name");
    // changeName(nameTemp, false);
}


function init(){
    diceElement.classList.add('hidden')
    resetScores();
    activePlayer = 0;
    player1Name.classList.add('highlighted')
    player2Name.classList.remove('highlighted')
}


//______________listeners
newGameButton.addEventListener('click',init);
rollButton.addEventListener('click',rollDice)


//______________MAIN:

init();


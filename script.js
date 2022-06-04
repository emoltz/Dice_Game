'use strict';

//______________TOTAL SCORE
const player1TotalScore_el = document.getElementById('score--0');
const player2TotalScore_el = document.getElementById('score--1');

let player1TotalScore;
let player2TotalScore;

//______________CURRENT SCORE
let currentScore_player1 = document.getElementById('current--0');
let currentScore_player2 = document.getElementById('current--1');
const newGameButton = document.querySelector('.btn--new');
let player1Name = document.getElementById('name--0');
let player2Name = document.getElementById('name--1');


//______________FUNCTIONS

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

function init(){
//set scores to 0
    player1TotalScore_el.textContent = String(0);
    player2TotalScore_el.textContent = String(0);
    //// this changes player names:
    // let nameTemp = window.prompt("Enter Player1 Name", "Your Name")
    // changeName(nameTemp, true)
    // nameTemp = window.prompt("Enter Player2 Name", "Your Name");
    // changeName(nameTemp, false);
}




//______________MAIN:

init();


//______________listeners
newGameButton.addEventListener('click',init);
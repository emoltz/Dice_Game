'use strict';

//
const player1TotalScore_el = document.getElementById('score--0');
const player2TotalScore_el = document.getElementById('score--1');
let current_player1 = document.getElementById('current--0');
let current_player2 = document.getElementById('current--1');
const newGameButton = document.querySelector('.btn--new');



function hideDice(){

}

function init(){
//set scores to 0
    player1TotalScore_el.textContent = String(0);
    player2TotalScore_el.textContent = String(0);
}
init();


//listeners
newGameButton.addEventListener('click',init);
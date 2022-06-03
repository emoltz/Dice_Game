'use strict';

//
const score0_el = document.getElementById('score--0');
const score1_el = document.getElementById('score--1');
let player1_score = document.getElementById('current--0');
let player2_score = document.getElementById('current--1');

function hideDice(){

}

function init(){
//set scores to 0
    score0_el.textContent = String(0);
    score1_el.textContent = String(0);
}
init();


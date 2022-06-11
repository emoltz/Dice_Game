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
    let sideCalc = Math.trunc(Math.random() *2 + 1);
    let roll1PigDot = false;
    let roll2PigDot = false;

    if (sideCalc == 1){
        roll1PigDot = true;
        // console.log("Pig 1: dot!");
    }
    else{
        // console.log("Pig 1: no dot!");
    }
    sideCalc = Math.trunc(Math.random() *2 + 1);
    if (sideCalc == 1){
        roll2PigDot = true;
        // console.log("Pig 2: dot!");
    }
    else{
        // console.log("Pig 2: no dot!");
    }

    //check for Pig Out
    let pigOut = false;
    if ((roll1PigDot == false && roll2PigDot == true) || (roll1PigDot == true && roll2PigDot == false)){
        currentScore = 0;
        changePlayersCurrentScore();
        switchActivePlayer();
        console.log("Pig out!");
        pigOut = true;
    }

    if (!pigOut){
        pigRoll(roll1,roll1PigDot, pig1Element);
        pigRoll(roll2,roll2PigDot, pig2Element);
    }
    else{
        pigOut = false;
    }


}
//______________FUNCTIONS

function pigRoll(roll, pigDot1, pigElement){

    if (roll >= 0 && roll <= range2){
        //on side
        // console.log("side");

        if(pigDot1){
            //dot is on
            pigElement.src = `images/pig_dot.png`;
        }
        else{
            pigElement.src = `images/pig_nodot.png`;
        }
        currentScore += 1;
        changePlayersCurrentScore();

    }
    else if (roll > range2 && roll <= range3){
        // console.log("razorback");
        if(pigDot1){
            pigElement.src = `images/pig_dot_back.png`;
        }
        else{
            pigElement.src = `images/pig_nodot_back.png`;
        }
        currentScore += 5;
        changePlayersCurrentScore();


    }
    else if (roll > range3 && roll <= range4){
        // console.log("trotter");
        if(pigDot1){
            //dot is on
            pigElement.src = `images/pig_dot.png`;
        }
        else{
            pigElement.src = `images/pig_nodot.png`;
        }
        currentScore += 5;
        changePlayersCurrentScore();
    }
    else if (roll > range4 && roll <= range5){
        // console.log("snouter");
        if(pigDot1){
            //dot is on
            pigElement.src = `images/pig_dot_nose.png`;
        }
        else{
            pigElement.src = `images/pig_nodot_nose.png`;
        }
        currentScore += 10;
        changePlayersCurrentScore();
    }
    else if (roll > range5 && roll <= range6){
        if(pigDot1){
            //dot is on
            pigElement.src = `images/pig_dot_ear.png`;
        }
        else{
            pigElement.src = `images/pig_nodot_ear.png`;
        }
        currentScore += 15;
        changePlayersCurrentScore();
    }
    else if (roll > range6 && roll <= range7){
        pigElement.src = `images/oinker.png`;
        currentScore = 0;
        changePlayersCurrentScore();
        switchActivePlayer();
    }
}


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

//confetti:
var maxParticleCount = 150; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

(function() {
    startConfetti = startConfettiInner;
    stopConfetti = stopConfettiInner;
    toggleConfetti = toggleConfettiInner;
    removeConfetti = removeConfettiInner;
    var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
    var streamingConfetti = false;
    var animationTimer = null;
    var particles = [];
    var waveAngle = 0;

    function resetParticle(particle, width, height) {
        particle.color = colors[(Math.random() * colors.length) | 0];
        particle.x = Math.random() * width;
        particle.y = Math.random() * height - height;
        particle.diameter = Math.random() * 10 + 5;
        particle.tilt = Math.random() * 10 - 10;
        particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
        particle.tiltAngle = 0;
        return particle;
    }

    function startConfettiInner() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        window.requestAnimFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    return window.setTimeout(callback, 16.6666667);
                };
        })();
        var canvas = document.getElementById("confetti-canvas");
        if (canvas === null) {
            canvas = document.createElement("canvas");
            canvas.setAttribute("id", "confetti-canvas");
            canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none");
            document.body.appendChild(canvas);
            canvas.width = width;
            canvas.height = height;
            window.addEventListener("resize", function() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }, true);
        }
        var context = canvas.getContext("2d");
        while (particles.length < maxParticleCount)
            particles.push(resetParticle({}, width, height));
        streamingConfetti = true;
        if (animationTimer === null) {
            (function runAnimation() {
                context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                if (particles.length === 0)
                    animationTimer = null;
                else {
                    updateParticles();
                    drawParticles(context);
                    animationTimer = requestAnimFrame(runAnimation);
                }
            })();
        }
    }

    function stopConfettiInner() {
        streamingConfetti = false;
    }

    function removeConfettiInner() {
        stopConfetti();
        particles = [];
    }

    function toggleConfettiInner() {
        if (streamingConfetti)
            stopConfettiInner();
        else
            startConfettiInner();
    }

    function drawParticles(context) {
        var particle;
        var x;
        for (var i = 0; i < particles.length; i++) {
            particle = particles[i];
            context.beginPath();
            context.lineWidth = particle.diameter;
            context.strokeStyle = particle.color;
            x = particle.x + particle.tilt;
            context.moveTo(x + particle.diameter / 2, particle.y);
            context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
            context.stroke();
        }
    }

    function updateParticles() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var particle;
        waveAngle += 0.01;
        for (var i = 0; i < particles.length; i++) {
            particle = particles[i];
            if (!streamingConfetti && particle.y < -15)
                particle.y = height + 100;
            else {
                particle.tiltAngle += particle.tiltAngleIncrement;
                particle.x += Math.sin(waveAngle);
                particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
                particle.tilt = Math.sin(particle.tiltAngle) * 15;
            }
            if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
                if (streamingConfetti && particles.length <= maxParticleCount)
                    resetParticle(particle, width, height);
                else {
                    particles.splice(i, 1);
                    i--;
                }
            }
        }
    }
})();
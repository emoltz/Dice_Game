const lookup = {
    NoDot: {range:[0,.349], points: null, name: "side (no dot)"},
    Dot: {range: [.3491,.6511], points: null, name: "side (dot)"},
    3: {range: [.6522, .8751], points: 5, name: "Razorback"},
    4: {range: [.8752, .9631], points: 5, name: "Trotter"},
    5: {range: [.9632, .9932], points: 10, name: "Snouter"},
    6: {range: [.9933, .9960], points: 15, name: "Leaning Jowler"},
    7: {range: [.9961, 1], points: 0, name: "Oinker!"}
}


const range1 = .349;
const range2 = .6511;
const range3 = .8751;
const range4 = .9631;
const range5 = .9932;
const range6 = 1;



let roll1 = (Math.random());
let roll2 = (Math.random());
// console.log("Pig Roll 1: " + roll1);
// console.log("Pig Roll 2: " + roll2);

if (roll1 >= 0 && roll1 <= range1){
    console.log("no dot!");
}
else if (roll1 > range1 && roll1 <= range2){
    console.log("Dot!");
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


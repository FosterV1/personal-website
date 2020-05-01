let partsArray = 0;
let playerName ="";
let coPilotName="";
let playerResponse="";
let rockPaperScissors = [
    "fire",
    "block",
    "punch",
];
let randomAlienAI = 0;
let endGameDiceRoll = 0;
let RabbaQuestion = true;

const checkpointSystem =(checkpointSet) => {
    
switch(checkpointSet){
    case "Checkpoint Alpha":
    encounter1();
    break;
    case "Checkpoint Alpha2":
        alienEncounter1();
        break;
        case "Checkpoint Alpha3":
            alienEncounter2();
            break;
    case "Checkpoint Bravo":
    encounter2();
    break;
    case "Checkpoint Charlie":
        encounter3();
    break;
    case "Checkpoint Delta":
    rollSystem(prompt("An Alien approches you and says - Human I have your part but you must play your silly earth game rock paper scissors with a twist to get it from me. You lose, You die. Choose Punch Fire or Block"));
    break;
    case "Checkpoint Rabba":
        rabba();
        break;
}
}
const rollSystem =(playerRoll) => {
    
    playerRoll = playerRoll.toLowerCase();
    while(playerRoll !== rockPaperScissors[0] && playerRoll !== rockPaperScissors[1] && playerRoll !== rockPaperScissors[2] ){

        playerRoll = prompt("this was not a valid input please choose punch,fire or block");
        
    }
    randomAlienAI = Math.floor(Math.random()*3);
    
    if(randomAlienAI == 0) {
        randomAlienAI = rockPaperScissors[0];
    }
    else if(randomAlienAI == 1){
        randomAlienAI = rockPaperScissors[1];
    }
    else {
        randomAlienAI = rockPaperScissors[2];
    }
    combatSystem(playerRoll);

}
const combatSystem =(playerRoll) => {
if( playerRoll==rockPaperScissors[0] && randomAlienAI == rockPaperScissors[1] ){
    alert("critcal hit! you kill the attacker");
    partsArray++
}
else if( playerRoll==rockPaperScissors[0] && randomAlienAI == rockPaperScissors[2] ){
    alert("your attacker kills you!");
    checkpointSystem("Checkpoint Delta");

}
else if( playerRoll==rockPaperScissors[1] && randomAlienAI == rockPaperScissors[0] ){
    alert("your attacker kills you!");
    checkpointSystem("Checkpoint Delta");

}
else if( playerRoll==rockPaperScissors[1] && randomAlienAI == rockPaperScissors[2] ){
    alert("critcal hit! you kill the attacker");
    partsArray++
}
else if( playerRoll==rockPaperScissors[1] && randomAlienAI == rockPaperScissors[0] ){
    alert("your attacker kills you!");
    checkpointSystem("Checkpoint Delta");
  
}
else if( playerRoll==rockPaperScissors[2] && randomAlienAI == rockPaperScissors[0] ){
    alert("critcal hit! you kill the attacker");
    partsArray++
  
}
else if( playerRoll==rockPaperScissors[2] && randomAlienAI == rockPaperScissors[1] ){
    alert("your attacker kills you!");
    checkpointSystem("Checkpoint Delta");
  
}
else{
    alert("you and your attacker countered each other, next round!");
    rollSystem(prompt("choose please choose punch,fire or block "));
}
}

const dieRoll =() => {
    endGameDiceRoll = Math.floor(Math.random() * 6) + 1;
    if( endGameDiceRoll== [1]){
        alert("You get shot with a phaser and die!");
        alert("GAME OVER");
        checkPointSystem("Checkpoint Alpha");
    }
    else if( endGameDiceRoll== [2]){
        alert("They Aliens take the Rocket Booster from you and inspect it … They tell you it’s faulty!? You must go back and find another ...");
        partsArray--;
        checkpointSystem("Checkpoint Bravo");
    }
    else if( endGameDiceRoll== [3]){
        alert(`The Aliens blasts ${coPilotName} with his phaser and kills him ...`);
        alert("GAME OVER");
        checkpointSystem("Checkpoint Alpha");
    }
    else if( endGameDiceRoll== [4]){
        alert("The Aliens capture your brain for research");
        alert("Alien 1 says to Alien 2 that he's never seen anything so primitive");
        alert("GAME OVER");
    }
    else if( endGameDiceRoll== [5]){
        alert("The Aliens take you as a prisoner! oh no!");
        alert("you’re on your way to planet XX35D2 when your cellmate “Rabba the Mut” wakes you");
        checkpointSystem("Checkpoint Rabba");
    }
    else{
        alert("You've rolled a 6! You and your co-pilot are free to go!");
        alert("Congratulations you have managed to return your team to Earth!");
        alert("YOU WIN!");
        
    }
    };
    const rabba = () =>{
        rabbaQuestion = prompt ("All of the other planets in the solar system could fit between Earth and the Moon? Enter True or False");
        if(rabbaQuestion == true){
            alert("Correct, Rabba believes you are an intelligent life form and worthy of saving");
        }
        else if(rabbaQuestion == false) {
            alert("Rabba is not impressed, he decides to eat you");
            checkpointSystem("Checkpoint Delta");
        }
        };

const encounter3 = () => {
    alert("BOOOM!!! You hear a massive thud against the side of your aircraft");
    alert(`RED ALERT! A Group of Aliens have boarded the craft Captain!`);
    alert(`Captain!? Help!?`);
    alert(`The Aliens want to take your co-pilot, ${coPilotName}.`);
    playerResponse = prompt (`Do you let them take ${coPilotName}? 'Y' or 'N'`);
    playerResponse = playerResponse.toUpperCase();
    if (playerResponse == "Y") {
        alert (`They capture you for not being loyal to your fellow species`);
        checkpointSystem(`Checkpoint Alpha`);
    }
    else if (playerResponse == "N") {
        alert (`They respect you for not backing down`);
        alert (`Using their Telekinesis they paralyse you and tell you they want to ask you another question ... `);
    }
    alert (`One of the Aliens asks you why you've come to space?`);
    playerResponse = prompt (`For scientific research(A) or Just wanted to look around the neighbourhood(B)`);
    playerResponse = playerResponse.toUpperCase();
     
    if (playerResponse == "A") {
        alert (``);
        checkpointSystem(`Checkpoint Bravo`);
  
    }
    else if (playerResponse == 'B') {
        alert ('We love your honesty and give you the final missing part as a reward!');
        partsArray++;
    }
    alert ('The Aliens now pass you a die and ask you to roll it ...');
    alert ('What happens next will decide you fate!');

    dieRoll();

    Alert (`You rolled a' ${result}!`);

    }
    

// Encounter 2(Joe)

// Now where do you want to go?
// Go back and ask the alien- Alien thinks you are going to attack them and kills you with a phaser, 
// North- find rocket booster and advance to middle , 
// South- encounter diamond rain, you run for shelter, but drop the spacecraft part resulting in it’s destruction; you survive and move on to Encounter 3 without part, 
// East- You walk into a geothermically active part of the planet which is way too hot and you melt into a pile of organic goop and die returning you to Checkpoint Bravo
// West- you get sucked into a portal that brings you out on the event horizon of a large black hole and you die returning you too Checkpoint Bravo,

// Objectives - find all parts and take off into space
// Result - You’ve found all your parts - congratulations you and ‘copilot name’ take off back towards planet earth

// (((Boom you hear a massive thud against the side of your spacecraft)))
const encounter2 = () => {
alert("Now where do you want to go? A- Go back and ask the Alien B- North C- South D-East E-West");

playerResponse = prompt("Choose your option A- Go back and ask the Alien B- North C- South D-East E-West");
playerResponse = playerResponse.toUpperCase();
if (playerResponse == "A") {
    alert("The alien thinks you are going to attack them and kills you with a phaser");
    checkpointSystem("Checkpoint Bravo");
    //back to Encounter 2
}

else if  (playerResponse == "B") {
    alert("You've found spaceship part: Rocket Booster!");
    partsArray++;
    //move on to Encounter 3
}

else if  (playerResponse == "C"){
    alert("You've encountered diamond rain, you run for shelter, but drop the spacecraft part resulting in it’s destruction");
    
    //back to Encounter 2
} 

else if (playerResponse == "D"){
    alert("You've walked into a geothermically active part of the planet which is way too hot! You melt into a pile of organic goop and die");
    checkpointSystem("Checkpoint Bravo");
     //back to Encounter 2
}

else if  (playerResponse == "E"){
    alert("You get sucked into a portal that brings you out on the event horizon of a large black hole and you die");
    checkpointSystem("Checkpoint Bravo");
     //back to Encounter 2
}

else {
    alert ("You've not made a valid choice- you stand around doing nothing and eventually run out of oxygen. Woops!");

checkpointSystem("Checkpoint Bravo");
};
//back to Encounter 2


/////////////////////////////////

alert(`Captain ${playerName}, we've got all the parts we need right?`);

if (partsArray == "2") {
 alert("You have all of the parts, Nice one!") 
 checkpointSystem("Checkpoint Charlie");
}

else {
    alert ("You don't have the parts you need, you're not going anywhere!");
    checkpointSystem("Checkpoint Delta");
    alert (`You have found all of your parts- congratulations! You and ${coPilotName} take off heading for Earth`);
}






}
const alienEncounter2 = () => {
    alert("You see a spacecraft part in the sentient vines and walk in to investigate … upon picking up the spacecraft part you get attacked by the vines");
    playerResponse = prompt("Do you Struggle and fight to get free? option A or Do you relax and accept your fate? option B");
    playerResponse = playerResponse.toLowerCase();
    if (playerResponse == "a") {
        alert ("The vine fights back much harder and you die");
        checkpointSystem("Checkpoint Alpha");
        //back to Encounter 1
    }
    
    else {
        alert ("You slowly wriggle your way out of the vine but do not take the spaceship part");
        checkpointSystem("Checkpoint Bravo");
        //move on to Encounter 2
    }
    
    
}
const alienEncounter1 = () => {
    playerResponse = prompt("run,talk.or hide");
    playerResponse = playerResponse.toLowerCase();
    if (playerResponse == "run") {
        alert("The alien thinks you are going to attack them and kills you with a phaser");
        checkpointSystem("Checkpoint Alpha");
        //back to Encounter 1
    }
    
    else if  (playerResponse == "hide") {
        alert("You manage to evade the alien but they take the space part you needed ");
        checkpointSystem("Checkpoint Bravo");
        //move on to Encounter 2
    }
    
    else if  (playerResponse == "talk"){
        alert("The Alien is friendly and hands you the part to help you on your journey");
        partsArray++;
        checkpointSystem("Checkpoint Bravo");
        //back to Encounter 2
    } 
}
const encounter1 = () => {
    alert("Captain, where should we go?");
    alert("do you want to go North, East, South or West, Captain?");
    playerResponse = prompt("Choose your option A- North B- East C- South D-West");
    playerResponse = playerResponse.toUpperCase();
    if (playerResponse == "A") {
        alert("You approach a cliff with no way down ...");
        alert("What a beautiful view you think to yourself");
        alert("I guess I'm going back to the start of the path ...");
        alert("sigh");
        checkpointSystem("Checkpoint Alpha");
        //back to Checkpoint Alpha
    }
    else if  (playerResponse == "B") {
        alert("You spot an Alien lifeform walking through the ungrowth");
        alert("Do you Run from the Alien before they see you, Hide until the move on, or try to Talk to the Alien?");
        checkpointSystem("Checkpoint Alpha2");
        //your choice here will determine the next move/outcome
    }
    else if  (playerResponse == "C"){
        alert("Look!");
        alert("Captain! There's a spacecraft part in those vines over there!");
        alert("let's go get it!");
        checkpointSystem("Checkpoint Alpha3");
    } 
    else {
        alert ("You've made a bad choice!");
        alert ("Oh no!");
        alert ("You've woken Cthulhu!");
        alert ("He reaches up from the depths of darkness ...");
        alert ("He swallows you into eternal doom");
        alert ("GAME OVER");
    checkpointSystem("Checkpoint Alpha");
    }
}
const startGame = () => {
    alert("You’ve been launched into space");
    alert("I banged my head after that launch. What was your name again captain?");
    
    playerName = prompt("Enter name");
    while(playerName ==""){
        alert("You really hit your head, Try again what was your name again captain?");
        playerName = prompt("Enter name");
    }
    alert("I forgot my own name too, can you remember it sir?");
    coPilotName = prompt("Enter name");
    while(coPilotName ==""){
        alert("Cant remember me capt, Try again to remember it sir?");
        coPilotName = prompt("Enter name");
    }
    alert("We have lost parts from our spacecraft in the crash sir and need to find them before we can get back to earth. We must decide which direction we should set out in");
    encounter1();
    }
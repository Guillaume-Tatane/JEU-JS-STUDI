// Rédupération des boutons

let newGame = document.querySelector('#newGame');
let rollDiceBtn = document.querySelector('#rollDiceBtn');
let holdBtn = document.querySelector('#holdBtn');

// Recuperation des élément de jeu

let scorePlayer1 = document.querySelector('scorePlayer1');
let scorePlayer2 = document.querySelector('scorePlayer2');
let score1 = document.querySelector('score1');
let score2 = document.querySelector('score2');

//Recuperation des donnée pour evenement JEUX

let bgPlayer1 = document.querySelector('bgPlayer1');
let bgPlayer2 = document.querySelector('bgPlayer2');
let puce1 = document.querySelector('puce1');
let puce2 = document.querySelector('puce2');
let name1 = document.querySelector('#name1');
let name2 = document.querySelector('#name2');


// récuperation des elements constituant le dé.

let d2_4_5_6 = document.querySelector('#d2_4_5_6');
let d3_4_5_6 = document.querySelector("#d3_4_5_6");
let d1_3_5 = document.querySelector('#d1_3_5');
let d6 = document.querySelector('#d6');

class Player {
  constructor(round, global, status) {
    this.round = round;
    this.global = global;
    this.status = status;
  }
}
var player1 = new Player(0, 0, true);
var player2 = new Player(0, 0, false);

init();

let tempValue = 0;

newGame.addEventListener('click', (e) => {
  init();
});






  
function init() {
  name1.textContent = prompt("Entrer le nom du player 1: ");
  name2.textContent = prompt("Entrer le nom du player 2: ");
}

function rollDice(player) {
  
  tempValue = 0;
  // displayDe(tempValue);
  do  {
    tempValue = Math.floor(Math.random() * 6);
  }while (tempValue === 0) 
  
  // displayDe(tempValue);

  if (tempValue === 1) {
    player.round = 0;
    player.global += 0;
    player.status = false;

  } else {
    player.round += tempValue;
    player.status = true;
  }
}

function hold(player) {
  
  if (player.status === 1)
  {
    player.global += player.round;
    player.status = false;
  }
}

// function displayDe(value) {

// switch (value) {
  
//   case 0:

//     break;
//   case 1:
    
//     break;
//   case 2:

//     break;
//   case 3:

//     break;
//   case 4:

//     break;
//   case 5:

//     break;
//   case 6:

//     break;

//   default:
//     break;
// }

// }



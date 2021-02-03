// Rédupération des boutons

let newGame = document.querySelector('#newGame');
let rollDiceBtn = document.querySelector('#rollDiceBtn');
let holdBtn = document.querySelector('#holdBtn');

// Recuperation des élément de jeu

let scorePlayer1 = document.querySelector('#scorePlayer1');
let scorePlayer2 = document.querySelector('#scorePlayer2');
let score1 = document.querySelector('#score1');
let score2 = document.querySelector('#score2');


class Player {
  constructor(round, global, status) {
    this.round = round;
    this.global = global;
    this.status = status;

  }
}
let player1 = new Player(0, 0, 1);
let player2 = new Player(0, 0, 0);


// init();

newGame.addEventListener('click', () => {
    init();
});



rollDiceBtn.addEventListener('click', () => {

  if (player1.status == 1) {
    rollDice(player1);
    score1.textContent = player1.round;
    console.log(player1.status);
  } else if(player2.status == 1){
    rollDice(player2);
    score2.textContent = player2.round;
  }
});



holdBtn.addEventListener('click', () =>{
  if (player1.status == 1) {
    hold(player1);
    scorePlayer1.textContent = player1.global;
    swichPlayer();

  } else if (player2.status == 1) {
    hold(player2);
    scorePlayer2.textContent = player2.global;
    swichPlayer();
  }
});


  
function init() {
  let name1 = document.querySelector('#name1');
  let name2 = document.querySelector('#name2');
  name1.textContent = prompt("Entrer le nom du player 1: ");
  name2.textContent = prompt("Entrer le nom du player 2: ");
  player1.status = 1;
  player2.status = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  
}



function rollDice(player) {
  
  let tempValue = 0;
  displayDe(0);
  
  do  {
    tempValue = Math.floor(Math.random() * 6);
  }while (tempValue === 0) 
  
  displayDe(tempValue);

  if (tempValue === 1) {
    player.round = 0;
    player.global += 0;
    swichPlayer();    
  } else {
    player.round += tempValue;
  }
}

function hold(player) {
  
  if (player.status)
  {
    player.global += player.round;
    player.round = 0;
  }
  displayDe(0);
}


function swichPlayer (){

  if (player1.status == 1) {
    player1.status = 0;
    
  } else if (player2.status == 1) {
    player2.status = 0;
   
  }

}


function displayDe(value) {

switch (value) {
  
  case 0:
    
    break;
  case 1:
    
    break;
  case 2:
    
    break;
  case 3:
    
    break;
  case 4:
    
    break;
  case 5:
    
    break;
  case 6:
    d2_4_5_6.style.opacity = 1;
    d3_4_5_6.style.opacity = 1;
    d1_3_5.style.opacity = 0;
    d6.style.opacity = 1;
    break;

  default:
    break;
}

}



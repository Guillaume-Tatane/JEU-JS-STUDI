// -------------- délcaration de la classe Player ---------------------

class Player {
  constructor(round, global, status) {
    this.round = round;
    this.global = global;
    this.status = status;
  }
initPlayer(){
  this.round = 0;
  this.global = 0;
}
}
var player1 = new Player(0, 0, 1);
var player2 = new Player(0, 0, 0);

  //-----------------------------------------------------------------------------
  //----------------------- LES BOUTONS -----------------------------------------
  //-----------------------------------------------------------------------------

  // Rédupération des boutons

  let newGame = document.querySelector('#newGame');
  let rollDiceBtn = document.querySelector('#rollDiceBtn');
  let holdBtn = document.querySelector('#holdBtn');

  // Recuperation des élément de jeu

  let scorePlayer1 = document.querySelector('#scorePlayer1');
  let scorePlayer2 = document.querySelector('#scorePlayer2');
  let score1 = document.querySelector('#score1');
  let score2 = document.querySelector('#score2');


  // ---------------------------- BOUTON New GAME  ------------------------

  newGame.addEventListener('click', () => {
      init();
  });

  // ---------------------------- BOUTON Roll Dice -------------------------

  rollDiceBtn.addEventListener('click', () => {
    if (player1.status == 1) {
      rollDice(player1);
      score1.textContent = player1.round;
      
    } else if(player2.status == 1){
      rollDice(player2);
      score2.textContent = player2.round;
    }
  });

  // ------------------------------- BOUTON Hold -----------------------------

  holdBtn.addEventListener('click', () =>{
    if (player1.status == 1) {
      hold(player1);
      scorePlayer1.textContent = player1.global;
      score1.textContent = 0;

    } else if (player2.status == 1) {
      hold(player2);
      scorePlayer2.textContent = player2.global;
      score2.textContent = 0;
    }
  });

  //-----------------------------------------------------------------------------
  //----------------------- LES FONCTIONS ---------------------------------------
  //-----------------------------------------------------------------------------
  //----------------------- Fonction Init ---------------------------------------

  function init() {
    // let name1 = document.querySelector('#name1');
    // let name2 = document.querySelector('#name2');
    // name1.textContent = prompt("Entrer le nom du player 1: ");
    // name2.textContent = prompt("Entrer le nom du player 2: ");
    score1.textContent = 0;
    score2.textContent = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    player1.initPlayer();
    player2.initPlayer();
    player1.status = 1;
    player2.status = 0;
    displayDice(0);
    $(".puce2").css("opacity", "0");
    $(".puce1").css("opacity", "1");
    $(".bgPlayer2").css("background-color", "white");
    $(".bgPlayer1").css("background-color", "rgb(216, 213, 213)");
    $("#name1").css("color", "black");
    $('#name1').text('player 1');
    $("#name2").css("color", "black");
    $('#name2').text('player 2');
    
  }
  init();

  //----------------------- Fonction ROLL DICE -------------------------------------

  function rollDice(player) {
    let tempValue = 0;
    displayDice(0);
    do{
      tempValue = Math.floor(Math.random() * 6);
    }while (tempValue === 0);
    displayDice(tempValue);

    if (tempValue === 1) {
      player.round = 0;
      player.global += 0;
      switchPlayer();    
    } else {
      player.round += tempValue;
    }
  }

  //----------------------- Fonction HOLD -------------------------------------------

  function hold(player) {
    if (player.status == 1)
    {
      player.global += player.round;
      player.round = 0;
      if(player.global >= 50){
        controlScore();
      }else{
        switchPlayer();
      }
    }
    displayDice(0);
  }

  //----------------------- Fonction SwitchPlayer -------------------------------------

  function switchPlayer (){
    if (player1.status == 1) {
      player1.status = 0;
      player2.status = 1;
      $(".puce1").css("opacity", "0");
      $(".puce2").css("opacity", "1");
      $(".bgPlayer1").css("background-color", "white");
      $(".bgPlayer2").css("background-color", "rgb(216, 213, 213)");
    } 
    else if (player2.status == 1) {
      player2.status = 0;
      player1.status = 1;
      $(".puce2").css("opacity", "0");
      $(".puce1").css("opacity", "1");
      $(".bgPlayer2").css("background-color", "white");
      $(".bgPlayer1").css("background-color", "rgb(216, 213, 213)");
    }
  }

  //----------------------- Fonction Controle Score -------------------------------------

  function controlScore(){
      if (player1.status == 1) {
        $(".bgPlayer1").css("background-color", "green");
        $("#name1").css("color", "white");
        $("#name1").text('YOU WIN');
      } 
      else if(player2.status == 1){
        $(".bgPlayer2").css("background-color", "green");
        $("#name1").css("color", "white");
        $('#name2').text ('YOU WIN');
      }
  }

  //------------------------ Fonction DISPLAY DICE --------------------------------------

  function displayDice(value) {

    switch (value) {
      case 0:
        $('#d1').css("opacity", "0");
        $('#d2').css("opacity", "0");
        $('#d3').css("opacity", "0");
        $('#d4').css("opacity", "0");
        $('#d5').css("opacity", "0");
        $('#d6').css("opacity", "0");
        $('#d7').css("opacity", "0");
        break;
      case 1:
        $('#d1').css("opacity", "0");
        $('#d2').css("opacity", "0");
        $('#d3').css("opacity", "0");
        $('#d4').css("opacity", "1");
        $('#d5').css("opacity", "0");
        $('#d6').css("opacity", "0");
        $('#d7').css("opacity", "0");
        break;
      case 2:
        $('#d1').css("opacity", "1");
        $('#d2').css("opacity", "0");
        $('#d3').css("opacity", "0");
        $('#d4').css("opacity", "0");
        $('#d5').css("opacity", "0");
        $('#d6').css("opacity", "0");
        $('#d7').css("opacity", "1");
        break;
      case 3:
        $('#d1').css("opacity", "1");
        $('#d2').css("opacity", "0");
        $('#d3').css("opacity", "0");
        $('#d4').css("opacity", "1");
        $('#d5').css("opacity", "0");
        $('#d6').css("opacity", "0");
        $('#d7').css("opacity", "1");
        break;
      case 4:
        $('#d1').css("opacity", "1");
        $('#d2').css("opacity", "1");
        $('#d3').css("opacity", "0");
        $('#d4').css("opacity", "0");
        $('#d5').css("opacity", "0");
        $('#d6').css("opacity", "1");
        $('#d7').css("opacity", "1");
        break;
      case 5:
        $('#d1').css("opacity", "1");
        $('#d2').css("opacity", "1");
        $('#d3').css("opacity", "0");
        $('#d4').css("opacity", "1");
        $('#d5').css("opacity", "0");
        $('#d6').css("opacity", "1");
        $('#d7').css("opacity", "1");
        break;
      case 6:
        $('#d1').css("opacity", "1");
        $('#d2').css("opacity", "1");
        $('#d3').css("opacity", "1");
        $('#d4').css("opacity", "0");
        $('#d5').css("opacity", "1");
        $('#d6').css("opacity", "1");
        $('#d7').css("opacity", "1");
        break;
      default:
        break;
    }
  }



$(function(){
    

  $(".accordeon ul ").hide();
  $(".accordeon a").click(function(){
    $(this).next("ul").slideToggle("slow");
  });


    // -------------- délcaration de la classe Player ---------------------

  class Player {
      constructor(round, global, status,id) {
          this.round   = round;
          this.global  = global;
          this.status  = status;
          this.id      = id; 
      }
      initPlayer() {
          this.round = 0;
          this.global = 0;
          if( this.id == 1 ) this.status = 1;
          else this.status = 0;
      }
  }
  let player1  = new Player(0, 0, 1, 1);
  let player2  = new Player(0, 0, 0, 2);
  let maxScore = 20; 

  //-----------------------------------------------------------------------------
  //----------------------- LES BOUTONS -----------------------------------------
  //-----------------------------------------------------------------------------

  // ---------------------------- BOUTON New GAME  ------------------------

  $("#newGame").click(() => {

    init();
  });

  // ---------------------------- BOUTON Roll Dice -------------------------

  $("#rollDiceBtn").click(() => {

      if (player1.status == 1) {
        rollDice(player1);
        $("#score1").text(player1.round);
    } else if (player2.status == 1) {
        rollDice(player2);
        $("#score2").text(player2.round);
    }
  });

  // ------------------------------- BOUTON Hold -----------------------------

  $("#holdBtn").click(() => {

    if (player1.status == 1) {
        hold(player1);
        $("#scorePlayer1").text(player1.global);
        $("#score1").text("0");
    } else if (player2.status == 1) {
        hold(player2);
        $("#scorePlayer2").text(player2.global);
        $("#score2").text("0");
    }
  });

  //-----------------------------------------------------------------------------
  //----------------------- LES FONCTIONS ---------------------------------------
  //-----------------------------------------------------------------------------
  //----------------------- Fonction Init ---------------------------------------

  function init() {

    $("#score1").text("0");
    $("#score2").text("0");
    $("#scorePlayer1").text("0");
    $("#scorePlayer2").text("0");
    $("#scorePlayer2").animate({opacity:0.4}, "slow");
    player1.initPlayer();
    player2.initPlayer();
    displayDice(0);
    $(".puce2").css("opacity", "0");
    $(".puce1").css("opacity", "1");
    $(".bgPlayer2").css("background-color", "white");
    $(".bgPlayer1").css("background-color", "rgb(216, 213, 213)");
    $("#name1").css("color", "black");
    $('#name1').text("player 1");
    $("#name2").css("color", "black");
    $('#name2').text("player 2");
    $('#name2').animate({opacity:0.4}, "slow");

  }
  init();

  //----------------------- Fonction ROLL DICE -------------------------------------

  function rollDice(player) {

    if(player1.global >= maxScore || player2.global >= maxScore) init();

    let tempValue = 0;
    displayDice(0);
    do {
        tempValue = Math.floor(Math.random() * 6);
    } while (tempValue === 0);
    displayDice(tempValue);
    if (tempValue === 1) {
        player.round = 0;
        switchPlayer();
    } else {
        player.round += tempValue;
    }
  }

  //----------------------- Fonction HOLD -------------------------------------------

  function hold(player) {

    displayDice(0);
    if (player.status == 1) {
        player.global += player.round;
        player.round = 0;
        if (player.global >= maxScore)
          winner();
        else 
          switchPlayer();
    }
  }

  //----------------------- Fonction SwitchPlayer -------------------------------------

  function switchPlayer() {
    if (player1.status == 1) {
        player1.status = 0;
        player2.status = 1;
        $(".puce1").css("opacity", "0");
        $(".puce2").css("opacity", "1");
        $(".bgPlayer1").css("background-color", "white");
        $(".bgPlayer2").css("background-color", "rgb(216, 213, 213)");
        $("#scorePlayer1").animate({opacity:0.4}, "slow");
        $('#name1').animate({opacity:0.4}, "slow");
        $("#scorePlayer2").animate({opacity:1}, "normal");
        $('#name2').animate({opacity:1}, "normal");
    } else if (player2.status == 1) {
        player2.status = 0;
        player1.status = 1;
        $(".puce2").css("opacity", "0");
        $(".puce1").css("opacity", "1");
        $(".bgPlayer2").css("background-color", "white");
        $(".bgPlayer1").css("background-color", "rgb(216, 213, 213)");
        $("#scorePlayer2").animate({opacity:0.4}, "slow");
        $('#name2').animate({opacity:0.4}, "slow");
        $("#scorePlayer1").animate({opacity:1}, "normal");
        $('#name1').animate({opacity:1}, "normal");
    }
  }

  //----------------------- Fonction Controle Score -------------------------------------

  function winner() {
    if (player1.status == 1) {
        $(".bgPlayer1").css("background-color", "lightgreen");
        $("#name1").text('YOU WIN');
    } else if (player2.status == 1) {
        $(".bgPlayer2").css("background-color", "lightgreen");
        $('#name2').text('YOU WIN');
    }
    setTimeout(init, 10000);
   
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
            $('#d1').css("opacity", "0");
            $('#d2').css("opacity", "0");
            $('#d3').css("opacity", "0");
            $('#d4').css("opacity", "0");
            $('#d5').css("opacity", "0");
            $('#d6').css("opacity", "0");
            $('#d7').css("opacity", "0");
            break;
    }
  }



});



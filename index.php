<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
    <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
    <script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
    <link rel="stylesheet" href="images/style.css" type="text/css">
    <link rel="icon" href="images/favicon.ico" />
    <title>Jeu Du dé</title>
</head>

<body>
  <!---------------------------- ROW pour bouton RULE ---------------------------->
  <ion-row class="btnRule">
    <ion-col size="auto">
      <div>
          <ion-button color="light" size="small" expand="block" id="ruleBtn">Règle du jeu</ion-button>
            <div class="rule">
              <ul>
                <li>Si le dé sort un 1, le joueur en cours change.</li>
                <li><b>Roll Dice:</b> Lancer du dé.</li>
                <li><b>Hold:</b> Valide le score courant. Le Gagnant est le premier à 100 points</li>
              </ul>
          </div>
      </div>
    </ion-col>
  </ion-row>

  <!----------------------------Plateau de Jeu diviser en 4 Parties ---------------------------->
  <ion-row class="game">
    <div class="plateGame">
      <ion-grid>
        <!---------------------------- ROW pour bouton new Game ---------------------------->
        <ion-row class="rowHeader">
          <div id="newGameBtn">
            <ion-icon class="btn" name="add-circle-outline"></ion-icon>
            <h3>NEW GAME</h3>
          </div>
          <ion-col size="6" class="bgPlayer1">
          </ion-col>
          <ion-col size="6" class="bgPlayer2">
          </ion-col>
        </ion-row>

        <!---------------------------- ROW pour affichage des players, leurs scores, puce player en cours et Background des players ---------------------------->
        <ion-row class="rowPlayer">
          <ion-col size="6" class="bgPlayer1">
            <div class="Player1">
              <h2 id="name1">PLAYER 1</h2>
              <div class="puce1"></div>
            </div>
            <div id="scorePlayer1">
              0
            </div>
          </ion-col>
          <ion-col size="6" class="bgPlayer2">
            <div class="Player2">
              <h2 id="name2">PLAYER 2</h2>
              <div class="puce2"></div>
            </div>
            <div id="scorePlayer2">
              0
            </div>
          </ion-col>
        </ion-row>

        <!---------------------------- DICE Affichage du Dé ---------------------------->
        <ion-row class="rowDice">
          <!-- DIV element constituant le dé pour le positionnement de celui-ci-->
          <!-- Compositon du dé de jeu: 3 lignes de 3 cols avec un element div pour le point -->
          <div class="dGame">
            <!----------------------------  La premiere ligne du dé  ---------------------------->
            <ion-row class="dLine">
              <ion-col size="4" class="dCol">
                <div class="puceD" id="d1"></div>
              </ion-col>
              <ion-col size="4" class="dCol">
                <div class="puceD" id="null"></div> <!-- Ne servira jamais -->
              </ion-col>
              <ion-col size="4" class="dCol">
                <div class="puceD" id="d2"></div>
              </ion-col>
            </ion-row>
            <!----------------------------  La Deuxieme ligne du dé  ---------------------------->
            <ion-row class="dLine">
              <ion-col size="4" class="dCol">
                <div class="puceD" id="d3"></div>
              </ion-col>
              <ion-col size="4" class="dCol">
                <div class="puceD" id="d4"></div>
              </ion-col>
              <ion-col size="4" class="dCol">
                <div class="puceD" id="d5"></div>
              </ion-col>
            </ion-row>
            <!----------------------------  La Troisieme ligne du dé ---------------------------->
            <ion-row class="dLine">
              <ion-col size="4" class="dCol">
                <div class="puceD" id="d6"></div>
              </ion-col>
              <ion-col size="4" class="dCol">
                <div class="puceD" id="null"></div> <!-- Ne servira jamais -->
              </ion-col>
              <ion-col size="4" class="dCol">
                <div class="puceD" id="d7"></div>
              </ion-col>
            </ion-row>
          </div>
          <!----------------------------  Background players pour la Row Dice ---------------------------->
          <ion-col size="6" class="bgPlayer1">
          </ion-col>
          <ion-col size="6" class="bgPlayer2">
          </ion-col>
        </ion-row>

        <!----------------------------  la partie controle du Jeu, button et current score ---------------------------->
        <!-- Compositon un element DIV avec 2 row de 1 cols pour le positionnement centrer -->
        <ion-row class="rowControlGame">
          <div class="btnControlGame">
            <ion-row class="controlBtn">
              <ion-col size="12" class="dCol" id="rollDiceBtn">
                <ion-icon class="btn" name="sync-outline"></ion-icon>
                <h3>ROLL DICE</h3>
              </ion-col>
            </ion-row>
            <ion-row class="controlBtn">
              <ion-col size="12" class="dCol" id="holdBtn">
                <ion-icon class="btn" name="download-outline"></ion-icon>
                <h3>HOLD</h3>
              </ion-col>
            </ion-row>
          </div>
          <!----------------------------  Background players pour la Row Control Game avec current score  ---------------------------->
          <ion-col size="6" class="bgPlayer1 dCol">
            <div class="currentScore">
              <h4>CURRENT</h4>
              <div id="score1">
                0
              </div>
            </div>
          </ion-col>
          <ion-col size="6" class="bgPlayer2 dCol">
            <div class="currentScore">
              <h4>CURRENT</h4>
              <div id="score2">
                0
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </ion-row>
  
    <!----------------------------  Les scripts Jquery et script du jeu ---------------------------->
    <script src="images/jquery-3.5.1.min.js" type="text/javascript"></script>
    <script src="images/diceGame.js" type="text/javascript"></script>
</body>

</html>
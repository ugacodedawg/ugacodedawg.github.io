var p1_user = prompt("Name of Player One");
  if(p1_user==="") {p1_user='Player One'}
var p2_user = prompt("Name of Player Two");
  if(p2_user==="") {p2_user='Player Two'};
var playerPts = document.getElementsByClassName("points");
var playerBtn = document.getElementsByClassName("btn");
var winner; //to communicate across functions

var game = {
      players:[
        {name:p1_user, score:0},
        {name:p2_user, score:0}
      ],
      point:function(x) {
        var temp = this.players[x].score+1;
        playerPts[x].textContent = temp;
        this.players[x].score = temp;
      },
      win:0,
      reset:function(){
        this.players[0].score=0;
        this.players[1].score=0;
        this.win = 0;
      }
    };

playerBtn[0].textContent=game.players[0].name;
playerBtn[1].textContent=game.players[1].name;

startGame();

function startGame(){
  playerBtn[0].disabled = true;
  playerBtn[1].disabled = true;
}

function changeGoal() {
  var playTo = Number(document.querySelector("input").value);
  document.getElementById("goal").textContent = playTo;
  game.win=Number(playTo);
  playerBtn[0].disabled = false;
  playerBtn[1].disabled = false;
}

function changeScore(i) {
  game.point(i);
  if (game.players[i].score === game.win) {
    winner = i;
    playerPts[i].classList.toggle('win');
    document.getElementById("message").textContent = " - " + game.players[i].name + " WINS! Game Over. Hit Reset for another Game with same Players. Reload page to change Players.";
    startGame();
  }
}

function resetGame() {
  game.reset()
  playerPts[0].textContent=0;
  playerPts[1].textContent=0;
  playerPts[winner].classList.toggle('win');
  document.getElementById("message").textContent = "";
  document.getElementById("goal").textContent="";
  document.querySelector("input").value = 0;
  startGame();
}

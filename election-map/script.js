var firstRound = true; //global boolean to determine which round of vote counting
var winner;

//shorthand for output to DOM
var title = document.getElementById('title');
var stateInfoTable = document.getElementById('stateResults');
var th = stateInfoTable.children[0];
var tb = stateInfoTable.children[1];

var createPolitician = function(name, partyColor) {
  var politician = {name:name, electionResults:null, totalVotes:0, partyColor:partyColor, firstTotal:null, secondTotal:null};
  console.log("Hello, my name is " + name + "! Damn glad to meet you!");
  return politician;
}

var candidate = [];
//hardcoded colors = 0: [132, 17, 11], 1: [245, 141, 136]
candidate[0] = createPolitician("Batman", [132, 17, 11]);
candidate[1] = createPolitician("Iron Man", [245, 141, 136]);

//facilitating user input to change names/colors - can test by uncommenting HTML lines 32,53 - fires from button onClick event
function submitColor(p1, r1, g1, b1, p2, r2, g2, b2) {
  var p1 = document.getElementById('p1').value;
  var r1 = parseInt(document.getElementById('r1').value);
  var g1 = parseInt(document.getElementById('g1').value);
  var b1 = parseInt(document.getElementById('b1').value);
  var p2 = document.getElementById('p2').value;
  var r2 = parseInt(document.getElementById('r2').value);
  var g2 = parseInt(document.getElementById('g2').value);
  var b2 = parseInt(document.getElementById('b2').value);
  candidate[0] = createPolitician(p1, [r1, g1, b1]);
  candidate[1] = createPolitician(p2, [r2, g2, b2]);
}

candidate[0].electionResults=[5,	1,	7,	2,	33,	6,	4,	2,	1,	14,	8,	3,	1,	11,	11,	0,	5,	3,	3,	3,	7,	4,	8,	9,	3,	7,	2,	2,	4,	2,	8,	3,	15,	15,	2,	12,	0,	4,	13,	1,	3,	2,	8,	21,	3,	2,	11,	1,	3,	7,	2];

candidate[1].electionResults=[4,	2,	4,	4,	22,	3,	3,	1,	2,	15,	8,	1,	3,	9,	0,	6,	1,	5,	5,	1,	3,	7,	8,	1,	3,	3,	1,	3,	2,	2,	6,	2,	14,	0,	1,	6,	7,	3,	7,	3,	6,	1,	3,	17,	3,	1,	2,	11,	2,	3,	1];

function countVotes() {
  for(var i=0;i<candidate.length;i++) {
    for (var x=0;x<candidate[i].electionResults.length;x++) {
      candidate[i].totalVotes = candidate[i].totalVotes + candidate[i].electionResults[x];
    }
    console.log(candidate[i].name + " got " + candidate[i].totalVotes + " electoral votes.");
  }
  if(candidate[0].totalVotes > candidate[1].totalVotes) {
    console.log(candidate[0].name + " is the WINNER!");
    title.innerText = candidate[0].name + " is the WINNER!";
    winner = candidate[0].name;
  } else if(candidate[1].totalVotes > candidate[0].totalVotes) {
    console.log(candidate[1].name + " is the WINNER!");
    title.innerText = candidate[1].name + " is the WINNER!";
    winner = candidate[1].name;
  } else {
    winner = "DRAW";
    console.log("It's a DRAW!");
    title.innerText = "It's a DRAW!"
  }
  if(firstRound) {
    candidate[0].firstTotal = candidate[0].totalVotes;
    candidate[1].firstTotal = candidate[1].totalVotes;
  } else {
    candidate[0].secondTotal = candidate[0].totalVotes;
    candidate[1].secondTotal = candidate[1].totalVotes;
  }
  candidate[0].totalVotes = 0;
  candidate[1].totalVotes = 0;
}

console.log("First Count");
countVotes();
populateTable(firstRound);
title.innerText = candidate[0].name + " is the WINNER!";
setTimeout(
  function() {
   console.log("Wait...there's been a recount!")
  }, 3000);

setTimeout(
  function() {
   title.innerText = "Wait...there's been a recount!"
  }, 3000);
firstRound = false;

var newResults = [1,28,17,38,11,27]; //array makes it easy to manage updated results

var newFlorida = "Florida was: " + candidate[0].name + "-" + candidate[0].electionResults[9] + ", " + candidate[1].name + "-" + candidate[1].electionResults[9] + " // Now is " + candidate[0].name + "-" + newResults[0] + ", " + candidate[1].name + "-" + newResults[1];
var newCalifornia = "California was: " + candidate[0].name + "-" + candidate[0].electionResults[4] + ", " + candidate[1].name + "-" + candidate[1].electionResults[4] + " // Now is " + candidate[0].name + "-" + newResults[2] + ", " + candidate[1].name + "-" + newResults[3];
var newTexas = "Texas was: " + candidate[0].name + "-" + candidate[0].electionResults[43] + ", " + candidate[1].name + "-" + candidate[1].electionResults[43] + " // Now is " + candidate[0].name + "-" + newResults[4] + ", " + candidate[1].name + "-" + newResults[5];

function recount() {
  console.log("After FL, CA, and TX submitted their new totals:");
  title.innerText = "After FL, CA, and TX submitted their new totals:";
  console.log(newFlorida);
  console.log(newCalifornia);
  console.log(newTexas);
  console.log("Recount");
}

function populateTable(firstRound) {
  var countryInfoTable = document.getElementById('countryResults');
  var row = countryInfoTable.children[0].children[0];
    row.children[0].innerText = candidate[0].name;
    row.children[2].innerText = candidate[1].name;
  if(firstRound){
    row.children[1].innerText = candidate[0].firstTotal;
    row.children[3].innerText = candidate[1].firstTotal;
    row.children[5].innerText = winner;
  } else {
    row.children[1].innerText = candidate[0].secondTotal;
    row.children[3].innerText = candidate[1].secondTotal;
    row.children[5].innerText = winner;
  }
}

//Florida (Array Position 9)
candidate[0].electionResults[9] = newResults[0];
candidate[1].electionResults[9] = newResults[1];
//California (Array Position 4)
candidate[0].electionResults[4] = newResults[2];
candidate[1].electionResults[4] = newResults[3];
//Texas (Array Position 43)
candidate[0].electionResults[43] = newResults[4];
candidate[1].electionResults[43] = newResults[5];

setTimeout(
  function() {
    recount()
  }, 5000);
setTimeout(
  function() {
    countVotes();
  }, 10000);
setTimeout(
  function() {
    populateTable(firstRound);
  }, 10000);
firstRound = true;

var setStateResults = function(state){
  theStates[state].winner = null;
  if (candidate[0].electionResults[state] > candidate[1].electionResults[state]) {
    theStates[state].winner = candidate[0]; //set winner to the candidate object, not the candidate's name this time
  } else if (candidate[0].electionResults[state] < candidate[1].electionResults[state]) {
      theStates[state].winner = candidate[1];
  } else {
      theStates[state].winner = null;
      var stateDraw = true;
  }
  console.log(state); //index of the hovered state
  console.log(theStates[state]); //the state object that corresponds to the state hovered

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }

  var stateName = th.children[0].children[0];
  var stateAbbrev = th.children[0].children[1];
  var candidate1Name = tb.children[0].children[0];
  var candidate2Name = tb.children[1].children[0];
  var candidate1Results = tb.children[0].children[1];
  var candidate2Results = tb.children[1].children[1];
  var winnersName = tb.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = theStates[state].nameAbbrev;
  candidate1Name.innerText = candidate[0].name;
  candidate1Results.innerText = candidate[0].electionResults[state]
  candidate2Name.innerText = candidate[1].name;
  candidate2Results.innerText = candidate[1].electionResults[state]
  if(stateDraw) {
    winnersName.innerText = "DRAW!";
  } else {
    winnersName.innerText = stateWinner.name;
  }
}

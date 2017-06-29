$(document).ready(function(){
  $("#answer").hide();
  $("#resetButton").hide();

  //array of responses
  var answers = ["My sources say no",
                 "It is looking positive",
                 "Ask again",
                 "In your dreams",
                 "I wouldn't count on it",
                 "Definitely maybe"];

  //Q & A sides for the 8-ball
  var side8ball = ["http://bit.ly/2mzOgYo",
                   "http://bit.ly/2mzO8rS"];

  function showAnswer(question) {
    //$("#8ball").attr('src', side8ball[1])
    alert("You asked me '" + question + "'"); //replaces printing to console.log
    //$("#8ball").hide();
    $("#8ball").fadeIn(2000);
    $("#8ball").attr('src', side8ball[1]);
  }

  var onClick = function() {
    $("#8ball").attr('src', side8ball[0]);
    $("#questionButton").hide();
    $("#resetButton").fadeIn();
    var question = prompt("What's your Yes/No Question for the Mysterious Magic 8-Ball?");
    $("#8ball").effect('shake', {times:10, direction:"up"}, 2000);
    //console.log(question);
    var response = answers[(Math.floor(Math.random() * answers.length))];
    //console.log(response);
    $("#answer").css({ 'color': 'white'});
    $("#answer").text(response);
    $("#answer").fadeIn(10000, showAnswer(question));
  };

  var resetClick = function() {
    $("#answer").hide();
    $("#8ball").attr('src', side8ball[0]);
    $("#resetButton").hide();
    $("#questionButton").fadeIn();
  }

  $("#questionButton").click( onClick );
  $("#resetButton").click( resetClick );
});
/*
$(document).ready(function(){

    var magic8Ball = {};

    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

    magic8Ball.askQuestion = function(question){
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

        $("#answer").text( answer );

        console.log(question);
        console.log(answer);
    };

    var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
    };

    $("#questionButton").click( onClick );
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

});*/

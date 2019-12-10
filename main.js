$(document).ready(function() {
  let currentPlayer = "X";
  let squareAmount = 9;
  let Player1ScoreAmount = 0;
  let Player2ScoreAmount = 0;
  let currentSquare = 0
  let boardClear = function() {
    for (i = 1; i <= squareAmount; i++) {
      $("#"+i).attr("src","");
      $("#"+i).attr("width", 0);
      $("#"+i).attr("height", 0);
      $("#"+i).css({
        "padding":"75px"
      });
    };
    currentPlayer= "X";
  };
  let changeTurns = function() {
    if(currentPlayer === "X") {
      $("#Turn").text("It is Player 1's turn");
    } else {
      $("#Turn").text("It is Player 2's turn");
    };
  };
  let checkWinner = function() {
    if(($("#1").attr("src") === "LetterX.png" && $("#2").attr("src") === "LetterX.png" && $("#3").attr("src") === "LetterX.png") || ($("#4").attr("src") === "LetterX.png" && $("#5").attr("src") === "LetterX.png" && $("#6").attr("src") === "LetterX.png") || ($("#7").attr("src") === "LetterX.png" && $("#8").attr("src") === "LetterX.png" && $("#9").attr("src") === "LetterX.png") || ($("#1").attr("src") === "LetterX.png" && $("#4").attr("src") === "LetterX.png" && $("#7").attr("src") === "LetterX.png") || ($("#2").attr("src") === "LetterX.png" && $("#5").attr("src") === "LetterX.png" && $("#8").attr("src") === "LetterX.png") || ($("#3").attr("src") === "LetterX.png" && $("#6").attr("src") === "LetterX.png" && $("#9").attr("src") === "LetterX.png") || ($("#1").attr("src") === "LetterX.png" && $("#5").attr("src") === "LetterX.png" && $("#9").attr("src") === "LetterX.png") || ($("#3").attr("src") === "LetterX.png" && $("#5").attr("src") === "LetterX.png" && $("#7").attr("src") === "LetterX.png")) {
      console.log("Player 1 wins");
      Player1ScoreAmount = Player1ScoreAmount + 1;
      $("#Player1Score").text(Player1ScoreAmount);
      boardClear();
    } else if(($("#1").attr("src") === "Circle.png" && $("#2").attr("src") === "Circle.png" && $("#3").attr("src") === "Circle.png") || ($("#4").attr("src") === "Circle.png" && $("#5").attr("src") === "Circle.png" && $("#6").attr("src") === "Circle.png") || ($("#7").attr("src") === "Circle.png" && $("#8").attr("src") === "Circle.png" && $("#9").attr("src") === "Circle.png") || ($("#1").attr("src") === "Circle.png" && $("#4").attr("src") === "Circle.png" && $("#7").attr("src") === "Circle.png") || ($("#2").attr("src") === "Circle.png" && $("#5").attr("src") === "Circle.png" && $("#8").attr("src") === "Circle.png") || ($("#3").attr("src") === "Circle.png" && $("#6").attr("src") === "Circle.png" && $("#9").attr("src") === "Circle.png") || ($("#1").attr("src") === "Circle.png" && $("#5").attr("src") === "Circle.png" && $("#9").attr("src") === "Circle.png") || ($("#3").attr("src") === "Circle.png" && $("#5").attr("src") === "Circle.png" && $("#7").attr("src") === "Circle.png")) {
      console.log("Player 2 wins");
      Player2ScoreAmount = Player2ScoreAmount + 1;
      $("#Player2Score").text(Player2ScoreAmount);
      boardClear();
    } else if ($("#1").attr("src") !== "" && $("#2").attr("src") !== "" && $("#3").attr("src") !== "" && $("#4").attr("src") !== "" && $("#5").attr("src") !== "" && $("#6").attr("src") !== "" && $("#7").attr("src") !== "" && $("#8").attr("src") !== "" && $("#9").attr("src") !== "") {
      console.log("Draw");
      boardClear();
    };
  };
  $(".square").on("click", function() {
    if($("#" + this.id).attr("src") === "") {
      if(currentPlayer === "X") {
        $("#" + this.id).attr("src", "LetterX.png");
        $("#" + this.id).attr("width", 150);
        $("#" + this.id).attr("height", 150);
        $("#" + this.id).css({
          "padding":"0px"
        });
        currentPlayer = "O";
      } else {
        $("#" + this.id).attr("src", "Circle.png");
        $("#" + this.id).attr("width", 150);
        $("#" + this.id).attr("height", 150);
        $("#" + this.id).css({
          "padding":"0px"
        })
        currentPlayer = "X";
      };
    };
    checkWinner();
    changeTurns();
  });
});

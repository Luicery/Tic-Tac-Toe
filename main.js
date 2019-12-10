$(document).ready(function() {
  let currentPlayer = "X";
  let squareAmount = 9;
  let Player1ScoreAmount = 0;
  let Player2ScoreAmount = 0;
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
    if(($("#1").attr("src") === "LetterX.png" && $("#2").attr("src") === "LetterX.png" && $("#3").attr("src") === "LetterX.png") || ($("#4").attr("src") === "LetterX.png" && $("#5").attr("src") === "LetterX.png" && $("#6").attr("src") === "LetterX.png") || ($("#7").attr("src") === "LetterX.png" && $("#8").attr("src") === "LetterX.png" && $("#9").attr("src") === "LetterX.png")) {
      console.log("Player 1 wins");
      Player1ScoreAmount = Player1ScoreAmount + 1;
      $("#Player1Score").text(Player1ScoreAmount);
      boardClear();
    } else if (($("#1").attr("src") === "LetterX.png" && $("#4").attr("src") === "LetterX.png" && $("#7").attr("src") === "LetterX.png") || ($("#2").attr("src") === "LetterX.png" && $("#5").attr("src") === "LetterX.png" && $("#8").attr("src") === "LetterX.png") || ($("#3").attr("src") === "LetterX.png" && $("#6").attr("src") === "LetterX.png" && $("#9").attr("src") === "LetterX.png")) {
      console.log("Player 1 wins");
      Player1ScoreAmount = Player1ScoreAmount + 1;
      $("#Player1Score").text(Player1ScoreAmount);
      boardClear();
    } else if (($("#1").attr("src") === "LetterX.png" && $("#5").attr("src") === "LetterX.png" && $("#9").attr("src") === "LetterX.png") || ($("#3").attr("src") === "LetterX.png" && $("#5").attr("src") === "LetterX.png" && $("#7").attr("src") === "LetterX.png")) {
      console.log("Player 1 wins");
      Player1ScoreAmount = Player1ScoreAmount + 1;
      $("#Player1Score").text(Player1ScoreAmount);
      boardClear();
    } else if(($("#1").attr("src") === "Circle.png" && $("#2").attr("src") === "Circle.png" && $("#3").attr("src") === "Circle.png") || ($("#4").attr("src") === "Circle.png" && $("#5").attr("src") === "Circle.png" && $("#6").attr("src") === "Circle.png") || ($("#7").attr("src") === "Circle.png" && $("#8").attr("src") === "Circle.png" && $("#9").attr("src") === "Circle.png")) {
      console.log("Player 2 wins");
      Player2ScoreAmount = Player2ScoreAmount + 1;
      $("#Player2Score").text(Player2ScoreAmount);
      boardClear();
    } else if (($("#1").attr("src") === "Circle.png" && $("#4").attr("src") === "Circle.png" && $("#7").attr("src") === "Circle.png") || ($("#2").attr("src") === "Circle.png" && $("#5").attr("src") === "Circle.png" && $("#8").attr("src") === "Circle.png") || ($("#3").attr("src") === "Circle.png" && $("#6").attr("src") === "Circle.png" && $("#9").attr("src") === "Circle.png")) {
      console.log("Player 2 wins");
      Player2ScoreAmount = Player2ScoreAmount + 1;
      $("#Player2Score").text(Player2ScoreAmount);
      boardClear();
    } else if (($("#1").attr("src") === "Circle.png" && $("#5").attr("src") === "Circle.png" && $("#9").attr("src") === "Circle.png") || ($("#3").attr("src") === "Circle.png" && $("#5").attr("src") === "Circle.png" && $("#7").attr("src") === "Circle.png")) {
      console.log("Player 2 wins");
      Player2ScoreAmount = Player2ScoreAmount + 1;
      $("#Player2Score").text(Player2ScoreAmount);
      boardClear();
    } else if ($("#1").attr("src") !== "" && $("#2").attr("src") !== "" && $("#3").attr("src") !== "" && $("#4").attr("src") !== "" && $("#5").attr("src") !== "" && $("#6").attr("src") !== "" && $("#7").attr("src") !== "" && $("#8").attr("src") !== "" && $("#9").attr("src") !== "") {
      console.log("Draw");
      boardClear();
    };
  };
  $("#1").on("click", function() {
    if($("#1").attr("src") === "") {
      if(currentPlayer === "X") {
        $("#1").attr("src", "LetterX.png");
        $("#1").attr("width", 150);
        $("#1").attr("height", 150);
        $("#1").css({
          "padding":"0px"
        });
        currentPlayer = "O";
      } else {
        $("#1").attr("src", "Circle.png");
        $("#1").attr("width", 150);
        $("#1").attr("height", 150);
        $("#1").css({
          "padding":"0px"
        })
        currentPlayer = "X";
      };
    };
    checkWinner();
    changeTurns();
  });
  $("#2").on("click", function() {
    if($("#2").attr("src") === "") {
      if(currentPlayer === "X") {
        $("#2").attr("src", "LetterX.png");
        $("#2").attr("width", 150);
        $("#2").attr("height", 150);
        $("#2").css({
          "padding":"0px"
        });
        currentPlayer = "O";
      } else {
        $("#2").attr("src", "Circle.png");
        $("#2").attr("width", 150);
        $("#2").attr("height", 150);
        $("#2").css({
          "padding":"0px"
        });
        currentPlayer = "X";
      };
    };
    checkWinner();
    changeTurns();
  });
  $("#3").on("click", function() {
    if($("#3").attr("src") === "") {
      if(currentPlayer === "X") {
        $("#3").attr("src", "LetterX.png");
        $("#3").attr("width", 150);
        $("#3").attr("height", 150);
        $("#3").css({
          "padding":"0px"
        });
        currentPlayer = "O";
      } else {
        $("#3").attr("src", "Circle.png");
        $("#3").attr("width", 150);
        $("#3").attr("height", 150);
        $("#3").css({
          "padding":"0px"
        })
        currentPlayer = "X";
      }
    }
    checkWinner();
    changeTurns();
  })
  $("#4").on("click", function() {
    if($("#4").attr("src") === "") {
      if(currentPlayer === "X") {
        $("#4").attr("src", "LetterX.png");
        $("#4").attr("width", 150);
        $("#4").attr("height", 150);
        $("#4").css({
          "padding":"0px"
        })
        currentPlayer = "O";
      } else {
        $("#4").attr("src", "Circle.png");
        $("#4").attr("width", 150);
        $("#4").attr("height", 150);
        $("#4").css({
          "padding":"0px"
        })
        currentPlayer = "X";
      }
    }
    checkWinner();
    changeTurns();
  })
  $("#5").on("click", function() {
    if($("#5").attr("src") === "") {
      if(currentPlayer === "X") {
        $("#5").attr("src", "LetterX.png");
        $("#5").attr("width", 150);
        $("#5").attr("height", 150);
        $("#5").css({
          "padding":"0px"
        })
        currentPlayer = "O";
      } else {
        $("#5").attr("src", "Circle.png");
        $("#5").attr("width", 150);
        $("#5").attr("height", 150);
        $("#5").css({
          "padding":"0px"
        })
        currentPlayer = "X";
      }
    }
    checkWinner();
    changeTurns();
  })
  $("#6").on("click", function() {
    if($("#6").attr("src") === "") {
      if(currentPlayer === "X") {
        $("#6").attr("src", "LetterX.png");
        $("#6").attr("width", 150);
        $("#6").attr("height", 150);
        $("#6").css({
          "padding":"0px"
        })
        currentPlayer = "O";
      } else {
        $("#6").attr("src", "Circle.png");
        $("#6").attr("width", 150);
        $("#6").attr("height", 150);
        $("#6").css({
          "padding":"0px"
        })
        currentPlayer = "X";
      }
    }
    checkWinner();
    changeTurns();
  })
  $("#7").on("click", function() {
    if($("#7").attr("src") === "") {
      if(currentPlayer === "X") {
        $("#7").attr("src", "LetterX.png");
        $("#7").attr("width", 150);
        $("#7").attr("height", 150);
        $("#7").css({
          "padding":"0px"
        })
        currentPlayer = "O";
      } else {
        $("#7").attr("src", "Circle.png");
        $("#7").attr("width", 150);
        $("#7").attr("height", 150);
        $("#7").css({
          "padding":"0px"
        })
        currentPlayer = "X";
      }
    }
    checkWinner();
    changeTurns();
  })
  $("#8").on("click", function() {
    if($("#8").attr("src") === "") {
      if(currentPlayer === "X") {
        $("#8").attr("src", "LetterX.png");
        $("#8").attr("width", 150);
        $("#8").attr("height", 150);
        $("#8").css({
          "padding":"0px"
        })
        currentPlayer = "O";
      } else {
        $("#8").attr("src", "Circle.png");
        $("#8").attr("width", 150);
        $("#8").attr("height", 150);
        $("#8").css({
          "padding":"0px"
        });
        currentPlayer = "X";
      };
    };
    checkWinner();
    changeTurns();
  });
  $("#9").on("click", function() {
    if($("#9").attr("src") === "") {
      if(currentPlayer === "X") {
        $("#9").attr("src", "LetterX.png");
        $("#9").attr("width", 150);
        $("#9").attr("height", 150);
        $("#9").css({
          "padding":"0px"
        });
        currentPlayer = "O";
      } else {
        $("#9").attr("src", "Circle.png");
        $("#9").attr("width", 150);
        $("#9").attr("height", 150);
        $("#9").css({
          "padding":"0px"
        });
        currentPlayer = "X";
      };
    };
    checkWinner();
    changeTurns();
  });
});

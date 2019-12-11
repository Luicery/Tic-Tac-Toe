$(document).ready(function() {
  let currentPlayer = "X";
  let Player1ScoreAmount = 0;
  let Player2ScoreAmount = 0;
  let human = "X" //reminder
  let Robot = "O" //reminder
  let currentState = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let avaliableSpots = []
  // let Player1 = prompt("Enter Player 1 name team X", "Player1");
  // let Player2 = prompt("Enter Player 2 name team O", "Player2");
  $("#Player1").text(Player1);
  $("#Player2").text(Player2);
  $("#Turn").text(`It is ${Player1}'s turn'`)
  let boardClear = function() {
    for (i = 1; i <= 9; i++) {
      $("#"+i).attr("src","");
      $("#"+i).attr("width", 0);
      $("#"+i).attr("height", 0);
      $("#"+i).removeClass("used")
      $("#"+i).css({
        "padding":"75px"
      });
    };
    currentPlayer= "X";
  };
  let changeTurns = function() {
    if(currentPlayer === "X") {
      $("#Turn").text(`It is ${Player1}'s turn`);
    } else {
      $("#Turn").text(`It is ${Player2}'s turn`);
    };
  };
  let checkWinner = function() {
    if((currentState[0] === "X" && currentState[1] === "X" && currentState[2] === "X") || (currentState[3] === "X" && currentState[4] === "X" && currentState[5] === "X") || (currentState[6] === "X" && currentState[7] === "X" && currentState[8] === "X") || (currentState[0] === "X" && currentState[3] === "X" && currentState[6] === "X") || (currentState[1] === "X" && currentState[4] === "X" && currentState[7] === "X") || (currentState[2] === "X" && currentState[5] === "X" && currentState[8] === "X") || (currentState[0] === "X" && currentState[4] === "X" && currentState[8] === "X")|| (currentState[2] === "X" && currentState[4] === "X" && currentState[6] === "X")) {
      console.log("Player 1 wins");
      Player1ScoreAmount = Player1ScoreAmount + 1;
      $("#Player1Score").text(Player1ScoreAmount);
    } else if ((currentState[0] === "O" && currentState[1] === "O" && currentState[2] === "O") || (currentState[3] === "O" && currentState[4] === "O" && currentState[5] === "O") || (currentState[6] === "O" && currentState[7] === "O" && currentState[8] === "O") || (currentState[0] === "O" && currentState[3] === "O" && currentState[6] === "O") || (currentState[1] === "O" && currentState[4] === "O" && currentState[7] === "O") || (currentState[2] === "O" && currentState[5] === "O" && currentState[8] === "O") || (currentState[0] === "O" && currentState[4] === "O" && currentState[8] === "O")|| (currentState[2] === "O" && currentState[4] === "O" && currentState[6] === "O")) {
      console.log("Player 2 wins");
      Player2ScoreAmount = Player2ScoreAmount + 1;
      $("#Player2Score").text(Player2ScoreAmount);
    } else if ($("#1").attr("src") !== "" && $("#2").attr("src") !== "" && $("#3").attr("src") !== "" && $("#4").attr("src") !== "" && $("#5").attr("src") !== "" && $("#6").attr("src") !== "" && $("#7").attr("src") !== "" && $("#8").attr("src") !== "" && $("#9").attr("src") !== "") {
      console.log("Draw");
    };
  };
  let checkWinnerAI = function() {
    if((currentState[0] === "X" && currentState[1] === "X" && currentState[2] === "X") || (currentState[3] === "X" && currentState[4] === "X" && currentState[5] === "X") || (currentState[6] === "X" && currentState[7] === "X" && currentState[8] === "X") || (currentState[0] === "X" && currentState[3] === "X" && currentState[6] === "X") || (currentState[1] === "X" && currentState[4] === "X" && currentState[7] === "X") || (currentState[2] === "X" && currentState[5] === "X" && currentState[8] === "X") || (currentState[0] === "X" && currentState[4] === "X" && currentState[8] === "X")|| (currentState[2] === "X" && currentState[4] === "X" && currentState[6] === "X")) {
      return -10
    } else if ((currentState[0] === "O" && currentState[1] === "O" && currentState[2] === "O") || (currentState[3] === "O" && currentState[4] === "O" && currentState[5] === "O") || (currentState[6] === "O" && currentState[7] === "O" && currentState[8] === "O") || (currentState[0] === "O" && currentState[3] === "O" && currentState[6] === "O") || (currentState[1] === "O" && currentState[4] === "O" && currentState[7] === "O") || (currentState[2] === "O" && currentState[5] === "O" && currentState[8] === "O") || (currentState[0] === "O" && currentState[4] === "O" && currentState[8] === "O")|| (currentState[2] === "O" && currentState[4] === "O" && currentState[6] === "O")) {
      return 10
    } else if ($("#1").attr("src") !== "" && $("#2").attr("src") !== "" && $("#3").attr("src") !== "" && $("#4").attr("src") !== "" && $("#5").attr("src") !== "" && $("#6").attr("src") !== "" && $("#7").attr("src") !== "" && $("#8").attr("src") !== "" && $("#9").attr("src") !== "") {
      return 0
    };
  };
  let Minimax = function(newBoard) {
    let bestMove = -10
    let currentScore = 0
    for(i = 0; i < currentState.length; i++) {
      if (currentState[i] !== "O" && currentState[i] !== "X") {
        IndexOfSpot = currentState.indexOf(currentState[i])
        avaliableSpots.push(IndexOfSpot)
      }
    }
    let move = function() {
      for(i = 0; i < avaliableSpots.length; i++) {
        currentState[avaliableSpots[i]] = "O"
        let currentScore = checkWinnerAI();
        currentState[avaliableSpots[i]] = avaliableSpots[i]
        if (currentScore > bestMove) {
          bestMove = Score
        }
      }
    }
  }
  $(".square").on({
    mouseenter: function() {
      if($("#" + this.id).hasClass("used") === false) {
        if(currentPlayer === "X") {
          $("#" + this.id).attr("src", "LetterX.png");
          $("#" + this.id).attr("width", 150);
          $("#" + this.id).attr("height", 150);
          $("#" + this.id).css({
            "padding":"0px",
            "opacity":"0.3"
          });
        } else if(currentPlayer === "O") {
          $("#" + this.id).attr("src", "Circle.png");
          $("#" + this.id).attr("width", 150);
          $("#" + this.id).attr("height", 150);
          $("#" + this.id).css({
            "padding":"0px",
            "opacity":"0.3"
          })
        }
      }
    },
    mouseleave: function() {
      if($("#" + this.id).hasClass("used") === false) {
        $("#"+ this.id).attr("src","");
        $("#"+ this.id).attr("width", 0);
        $("#"+ this.id).attr("height", 0);
        $("#"+ this.id).css({
          "padding":"75px",
        });
      }
    }
  })
  $(".square").on("click", function() {
    if($("#" + this.id).hasClass("used") === false) {
      if(currentPlayer === "X") {
        $("#" + this.id).addClass("used")
        let Index = currentState.indexOf("" + this.id)
        currentState[Index] = "X";
        $("#" + this.id).attr("src", "LetterX.png");
        $("#" + this.id).attr("width", 150);
        $("#" + this.id).attr("height", 150);
        $("#" + this.id).css({
          "padding":"0px",
          "opacity":"1"
        });
        currentPlayer = "O";
      } else {
        let Index = currentState.indexOf("" + this.id)
        currentState[Index] = "O";
        $("#" + this.id).addClass("used")
        $("#" + this.id).attr("src", "Circle.png");
        $("#" + this.id).attr("width", 150);
        $("#" + this.id).attr("height", 150);
        $("#" + this.id).css({
          "padding":"0px",
          "opacity":"1"
        })
        currentPlayer = "X";
      };
      checkWinner();
      changeTurns();
    };
  });
});

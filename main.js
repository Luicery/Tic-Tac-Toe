$(document).ready(function() {
  let currentPlayer = "X";
  let Player1ScoreAmount = 0;
  let Player2ScoreAmount = 0;
  let Robot = "X"
  let Human = "O"
  let currentState = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //let Player1 = prompt("Enter Player 1 name team X", "Player1");
  //let Player2 = prompt("Enter Player 2 name team O", "Player2");
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

  let checkWinnerMinimax = function(board, player) {
    if (
      (board[0] === player && board[1] === player && board[2] === player) ||
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
      (board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player) ||
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)
    ) {
      return true
    } else if (board[0] !== "1" && board[1] !== "2" && board[2] !== "3" && board[3] !== "4" && board[4] !== "5" && board[5] !== "6" && board[6] !== "7" && board[7] !== "8" && board[8] !== "9") {
      return "tie"
    } else {
      return false
    }
  }
var origBoard = ["O","1" ,"X","X","4" ,"X", "6" ,"O","O"];
let minimax = function(board, player) {
  if (checkWinnerMinimax(board, player) === true) {
    if (player === Robot) {
      nextScore = 10
      return nextScore
    } else if (player === Human) {
      nextScore = -10
      return nextScore
    }
  } else if (checkWinnerMinimax(board, player) === "tie") {
    nextScore = 0
    return nextScore
  }
  if(player === Robot) {
    let bestScore = -1000
    for(i = 0; i < board.length; i++) {
      if(board[i] !== "X" && board[i] !== "O") {
        let origin = board[i]
        board[i] = player
        let nextScore = minimax(board, Human)
        board[i] = origin
        if (nextScore > bestScore) {
          bestScore = nextScore
        }
      }
    }
    return bestScore
  } else if (player === Human) {
    let bestScore = 1000
    // let emptySpots = avaliableSpots(board)
    for(i = 0; i < board.length; i++) {
      if(board[i] !== "X" && board[i] !== "O") {
        let origin = board[i]
        board[i] = player
        let nextScore = minimax(board, Robot)
        board[i] = origin
        if (nextScore < bestScore) {
          bestScore = nextScore
        }
      }
    }
    console.log(board)
    return bestScore
  }
}
var bestSpot = minimax(origBoard, "X");
console.log(bestSpot)
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

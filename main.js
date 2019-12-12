$(document).ready(function() {
  let currentPlayer = "X";
  let Player1ScoreAmount = 0;
  let Player2ScoreAmount = 0;
  let Robot = "X"
  let Human = "O"
  //let currentState = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let Player1 = prompt("Enter Player 1 name team X", "Player1");
  let Player2 = prompt("Enter Player 2 name team O", "Player2");
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
    if ((board[0] === player && board[1] === player && board[2] === player) ||
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
      (board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player) ||
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)) {
      return true
    }
  }
  let checkTie = function(board) {
    let spotsLeft = []
    for (i = 0; i < board.length; i++) {
      if (board[i] !== "X" && board[i] !== "O") {
        spotsLeft.push(board[i])
      }
    }
    if(spotsLeft.length === 0) {
      return true
    }
  }
  let currentState = ["O", "2", "X", "X", "5", "X", "7", "O", "O"];
  let minimax = function(board, player) {
    if (checkWinnerMinimax(board, player) === true) {
      if (player === Robot) {
        return 10
      } else if (player === Human) {
        return -10
      }
    } else if (checkTie(board) === true) {
      return 10
    }
    if(player === Robot) {
      let bestScore = -1000
      console.log(board)
      for(i = 0; i < board.length; i++) {
        let origin = (i+1).toString();
        if(board[i] !== "X" && board[i] !== "O") {
          board[i] = Robot
          let Score = minimax(board, Human)
          board[i] = origin
          if (Score > bestScore) {
            bestScore = Score
          }
        }
      }
      return bestScore
    } else if (player === Human) {
      let bestScore = 1000
      console.log(board)
      for(i = 0; i < board.length; i++) {
        let origin = (i+1).toString();
        if(board[i] !== "X" && board[i] !== "O") {
          board[i] = Human
          let newScore = minimax(board, Human)
          board[i] = origin
          if (newScore < bestScore) {
            bestScore = newScore
          }
        }
      }
      return bestScore
    }
  }
  // function bestMove() {
  //   let bestScore = -1000;
  //   let move = undefined;
  //   console.log( currentState );
  //   for (let i = 0; i < currentState.length; i++) {
  //     let origin = (i+1).toString();
  //     if (currentState[i] !== Robot && currentState[i] !== Human) {
  //       currentState[i] = Robot;
  //       console.log(currentState)
  //       let score = minimax(currentState, Human);
  //       currentState[i] = origin
  //       if (score > bestScore) {
  //         bestScore = score;
  //         move = (i+1)
  //       }
  //     }
  //   }
  //   currentPlayer = Human;
  //   console.log('chosen:', move)
  // }


  console.log(minimax(currentState,Robot));
  console.log(currentState);
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

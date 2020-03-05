$(document).ready(function() {
  let currentPlayer = "X";
  let Player1ScoreAmount = 0;
  let Player2ScoreAmount = 0;
  let currentState = ["", "", "","", "", "","", "", ""];
  let boardClear = function() {
    for(i = 1; i <= 9; i++) {
      $("#"+i).attr("src", "white.jpg");
      $("#"+i).attr("width", 0);
      $("#"+i).attr("height", 0);
      $("#"+i).removeClass("used")
    };
    currentState = ["", "", "","", "", "","", "", ""];
    currentPlayer= "X";
  };
  let checkWinner = function() {
    if(currentState[0] === "X" && currentState[1] === "X" && currentState[2] === "X" || currentState[3] === "X" && currentState[4] === "X" && currentState[5] === "X" || currentState[6] === "X" && currentState[7] === "X" && currentState[8] === "X" || currentState[0] === "X" && currentState[4] === "X" && currentState[8] === "X" || currentState[2] === "X" && currentState[4] === "X" && currentState[6] === "X" || currentState[0] === "X" && currentState[3] === "X" && currentState[6] === "X" || currentState[1] === "X" && currentState[4] === "X" && currentState[7] === "X" || currentState[2] === "X" && currentState[5] === "X" && currentState[8] === "X") {
      Player1ScoreAmount = Player1ScoreAmount + 1;
      $("#Player1Score").text(Player1ScoreAmount);
      $("#result").text(`You Win`)
      boardClear();
    } else if(currentState[0] === "O" && currentState[1] === "O" && currentState[2] === "O" || currentState[3] === "O" && currentState[4] === "O" && currentState[5] === "O" || currentState[6] === "O" && currentState[7] === "O" && currentState[8] === "O" || currentState[0] === "O" && currentState[4] === "O" && currentState[8] === "O" || currentState[2] === "O" && currentState[4] === "O" && currentState[6] === "O" || currentState[0] === "O" && currentState[3] === "O" && currentState[6] === "O" || currentState[1] === "O" && currentState[4] === "O" && currentState[7] === "O" || currentState[2] === "O" && currentState[5] === "O" && currentState[8] === "O") {
      Player2ScoreAmount = Player2ScoreAmount + 1;
      $("#Player2Score").text(Player2ScoreAmount);
      $("#result").text(`AI Minimax Wins`)
      boardClear();
    } else if(currentState[0] !== "" && currentState[1] !== "" && currentState[2] !== "" && currentState[3] !== "" && currentState[4] !== "" && currentState[5] !== "" && currentState[6] !== "" && currentState[7] !== "" && currentState[8] !== "") {
      $("#result").text(`Draw`)
      boardClear();
    };
  };
  let checkWinnerMinimax = function(currentState) {
    if(currentState[0] === "X" && currentState[1] === "X" && currentState[2] === "X" || currentState[3] === "X" && currentState[4] === "X" && currentState[5] === "X" || currentState[6] === "X" && currentState[7] === "X" && currentState[8] === "X" || currentState[0] === "X" && currentState[4] === "X" && currentState[8] === "X" || currentState[2] === "X" && currentState[4] === "X" && currentState[6] === "X" || currentState[0] === "X" && currentState[3] === "X" && currentState[6] === "X" ||      currentState[1] === "X" && currentState[4] === "X" && currentState[7] === "X" || currentState[2] === "X" && currentState[5] === "X" && currentState[8] === "X") {
        return "lose"
    } else if(currentState[0] === "O" && currentState[1] === "O" && currentState[2] === "O" || currentState[3] === "O" && currentState[4] === "O" && currentState[5] === "O" || currentState[6] === "O" && currentState[7] === "O" && currentState[8] === "O" || currentState[0] === "O" && currentState[4] === "O" && currentState[8] === "O" || currentState[2] === "O" && currentState[4] === "O" && currentState[6] === "O" || currentState[0] === "O" && currentState[3] === "O" && currentState[6] === "O" || currentState[1] === "O" && currentState[4] === "O" && currentState[7] === "O" || currentState[2] === "O" && currentState[5] === "O" && currentState[8] === "O") {
        return "win"
    } else if(currentState[0] !== "" && currentState[1] !== "" && currentState[2] !== "" && currentState[3] !== "" && currentState[4] !== "" && currentState[5] !== "" && currentState[6] !== "" && currentState[7] !== "" && currentState[8] !== "") {
        return "draw"
    }
  }
  let move = "";
  let minimax = function(board, player, depth) {
    let winnerResult = checkWinnerMinimax(board)
    if(winnerResult === "win") {
      return 100 - depth
    } else if(winnerResult === "lose") {
      return -100 - depth
    } else if(winnerResult === "draw") {
      return 0 - depth
    }
    if(player === "X") {
      minimum = [10000, undefined]
      board.forEach((value,index) => {
        if(board[index] === "") {
          board[index] = "X"
          let newScore = minimax(board, "O", depth+1)
          board[index] = ""
          if(newScore[0] < minimum[0]) {
            minimum[1] = index+1
            minimum[0] = newScore[0]
          }
        }
      })
      return minimum
    } else {
      maximise = [-10000, undefined]
      board.forEach((value,index) => {
        if(board[index] === "") {
          board[index] = "O"
          let newScore = minimax(board, "X", depth+1)
          board[index] = ""
          if (newScore[0] > maximise[0]) {
            maximise[1] = index+1
            maximise[0] = newScore[0]
          }
        }
      })
      return maximise
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
        $("#"+ this.id).attr("src","white.jpg");
        $("#"+ this.id).attr("width", 0);
        $("#"+ this.id).attr("height", 0);
      }
    }
  })
  $(".square").on("click", function() {
    if($("#" + this.id).hasClass("used") === false) {
      if(currentPlayer === "X") {
        $("#" + this.id).addClass("used")
        currentState[parseInt(this.id) - 1] = "X";
        $("#" + this.id).attr("src", "LetterX.png");
        $("#" + this.id).attr("width", 150);
        $("#" + this.id).attr("height", 150);
        $("#" + this.id).css({
          "padding":"0px",
          "opacity":"1"
        });
        let doMove = (minimax(currentState, "O", 0)[1])
        currentPlayer = "O";
        $("#"+doMove).click()
      } else {
        currentState[parseInt(this.id) - 1] = "O";
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
    };
  });
});

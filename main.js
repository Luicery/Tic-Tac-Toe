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
    } else if(currentState.includes("") === false) {
      $("#result").text(`Draw`)
      boardClear();
    };
  };
  let minimax = function(board, player, depth) {
    if(board[0] === "X" && board[1] === "X" && board[2] === "X" || board[3] === "X" && board[4] === "X" && board[5] === "X" || board[6] === "X" && board[7] === "X" && board[8] === "X" || board[0] === "X" && board[4] === "X" && board[8] === "X" || board[2] === "X" && board[4] === "X" && board[6] === "X" || board[0] === "X" && board[3] === "X" && board[6] === "X" ||      board[1] === "X" && board[4] === "X" && board[7] === "X" || board[2] === "X" && board[5] === "X" && board[8] === "X") {
      return -100 - depth
    } else if(board[0] === "O" && board[1] === "O" && board[2] === "O" || board[3] === "O" && board[4] === "O" && board[5] === "O" || board[6] === "O" && board[7] === "O" && board[8] === "O" || board[0] === "O" && board[4] === "O" && board[8] === "O" || board[2] === "O" && board[4] === "O" && board[6] === "O" || board[0] === "O" && board[3] === "O" && board[6] === "O" || board[1] === "O" && board[4] === "O" && board[7] === "O" || board[2] === "O" && board[5] === "O" && board[8] === "O") {
      return 100 - depth
    } else if(board.includes("") === false) {
      return 0 - depth
    }
    if(player === "Human") {
      minimum = Infinity
      board.map((value,index) => {
        if(value === "") {
          board[index] = "X"
          let newScore = minimax(board, "Robot", depth + 1)
          board[index] = ""
          minimum = Math.min(newScore, minimum)
        }
      })
      return minimum
    } else {
      maximise = -Infinity
      board.map((value,index) => {
        if(value === "") {
          board[index] = "O"
          let newScore = minimax(board, "Human", depth+1)
          board[index] = ""
          maximise = Math.max(newScore, maximise)
        }
      })
      return maximise
    }
  }
  let startMinMax = function() {
    let bestScore = -Infinity;
    let move;
    currentState.forEach((value, index) => {
      if(value === "") {
        if(currentState[4] === "") {
          move = 5
        } else {      
          currentState[index] = "X"
          let newScore = minimax(currentState, "Human", 0)
          currentState[index] = ""
          console.log(newScore);
          if(newScore > bestScore) {
            move = index + 1
            bestScore = newScore
          }
        }
      }
    })
    $("#"+move).click()
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
        currentPlayer = "O";
        let doMove = startMinMax()
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

$(document).ready(function() {
  let currentPlayer = "X";
  let Player1ScoreAmount = 0;
  let Player2ScoreAmount = 0;
  let Robot = "X" //reminder
  let Human = "O" //reminder
  let currentState = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
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
      //boardClear()
    } else if ((currentState[0] === "O" && currentState[1] === "O" && currentState[2] === "O") || (currentState[3] === "O" && currentState[4] === "O" && currentState[5] === "O") || (currentState[6] === "O" && currentState[7] === "O" && currentState[8] === "O") || (currentState[0] === "O" && currentState[3] === "O" && currentState[6] === "O") || (currentState[1] === "O" && currentState[4] === "O" && currentState[7] === "O") || (currentState[2] === "O" && currentState[5] === "O" && currentState[8] === "O") || (currentState[0] === "O" && currentState[4] === "O" && currentState[8] === "O")|| (currentState[2] === "O" && currentState[4] === "O" && currentState[6] === "O")) {
      console.log("Player 2 wins");
      Player2ScoreAmount = Player2ScoreAmount + 1;
      $("#Player2Score").text(Player2ScoreAmount);
      //boardClear()
    } else if ($("#1").attr("src") !== "" && $("#2").attr("src") !== "" && $("#3").attr("src") !== "" && $("#4").attr("src") !== "" && $("#5").attr("src") !== "" && $("#6").attr("src") !== "" && $("#7").attr("src") !== "" && $("#8").attr("src") !== "" && $("#9").attr("src") !== "") {
      console.log("Draw");
      //boardClear()
    };
  };

  let checkWinnerAI = function(newBoard) {
    if((newBoard[0] === "X" && newBoard[1] === "X" && newBoard[2] === "X") || (newBoard[3] === "X" && newBoard[4] === "X" && newBoard[5] === "X") || (newBoard[6] === "X" && newBoard[7] === "X" && newBoard[8] === "X") || (newBoard[0] === "X" && newBoard[3] === "X" && newBoard[6] === "X") || (newBoard[1] === "X" && newBoard[4] === "X" && newBoard[7] === "X") || (newBoard[2] === "X" && newBoard[5] === "X" && newBoard[8] === "X") || (newBoard[0] === "X" && newBoard[4] === "X" && newBoard[8] === "X")|| (newBoard[2] === "X" && newBoard[4] === "X" && newBoard[6] === "X")) {
        return true
      } else if ((newBoard[0] === "O" && newBoard[1] === "O" && newBoard[2] === "O") || (newBoard[3] === "O" && newBoard[4] === "O" && newBoard[5] === "O") || (newBoard[6] === "O" && newBoard[7] === "O" && newBoard[8] === "O") || (newBoard[0] === "O" && newBoard[3] === "O" && newBoard[6] === "O") || (newBoard[1] === "O" && newBoard[4] === "O" && newBoard[7] === "O") || (newBoard[2] === "O" && newBoard[5] === "O" && newBoard[8] === "O") || (newBoard[0] === "O" && newBoard[4] === "O" && newBoard[8] === "O")|| (newBoard[2] === "O" && newBoard[4] === "O" && newBoard[6] === "O")) {
        return false
      }
  };
  let emptySpots = function(newBoard) {
    avaliableSpotsCreate = []
    for(i = 0; i < newBoard.length; i++) {
      if (newBoard[i] !== "O" && newBoard[i] !== "X") {
        IndexOfSpot = newBoard.indexOf(newBoard[i])
        avaliableSpotsCreate.push(IndexOfSpot)
      }
    }
    return avaliableSpotsCreate
  }

 let origBoard = ["O", "1", "X", "X", "4", "X", "6", "O", "O"];
//let origBoard = ["0","1" ,"2","3","4" ,"5", "6" ,"7","8"];
let possibleResults = []
let originalBoard = []
function minimax(newBoard, player){
  let avaliableSpots = emptySpots(newBoard);
  console.log(newBoard)
  console.log(avaliableSpots)
  console.log(player === Robot)
  if (checkWinnerAI(newBoard) === false){
     return -10;
  }
	else if (checkWinnerAI(newBoard) === true){
    return 10;
	}
  else if (avaliableSpots.length === 0){
  	return 0;
  }
  for (i = 0; i < avaliableSpots.length; i++) {
    let former = newBoard[avaliableSpots[i]]
    newBoard[avaliableSpots[i]] = player
    if(player === Robot) {
      let scoreOfTest = minimax(newBoard, Human)
      possibleResults.push(scoreOfTest)
    } else if (player === Human) {
      let scoreOfTest = minimax(newBoard, Robot)
      possibleResults.push(scoreOfTest)
    }
    newBoard[Number(former)] = former
  }
  console.log(possibleResults)
  console.log(newBoard)
//   if(player == Robot){
//     let bestScore = -1000;
//     for(let i = 0; i < newMoveScore.length; i++){
//       if(newMoveScore[i] > bestScore){
//         bestScore = newMoveScore[i];
//         bestMove = i;
//       }
//     }
//   } else {
//     let bestScore = 1000;
//     for(let i = 0; i < newMoveScore.length; i++){
//       if(newMoveScore[i] < bestScore){
//         bestScore = newMoveScore[i];
//         bestMove = i;
//       }
//     }
//   }
// // return the chosen move (object) from the array to the higher depth
//   return bestMove;
}
var bestSpot = minimax(origBoard, Robot);
//loging the results
// console.log("index: " + bestSpot.index);

  $(".square").on({
    mouseenter: function() {
      if($("#" + this.id).hasClass("used") === false) {
        if(currentPlayer === "X") {
          $("#" + this.id).attr("src", "LetterX.png");
          $("#" + this.id).attr("width", 150);
          $("#" + this.id).attr("height", 150);
          $("#" + this.id).css({
            "padding":"0px",
            "opacity":"0.6"
          });
        } else if(currentPlayer === "O") {
          $("#" + this.id).attr("src", "Circle.png");
          $("#" + this.id).attr("width", 150);
          $("#" + this.id).attr("height", 150);
          $("#" + this.id).css({
            "padding":"0px",
            "opacity":"0.6"
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
        let Index = currentState.indexOf(""+this.id)
        currentState[Index] = "X";
        $("#" + this.id).attr("src", "LetterX.png");
        $("#" + this.id).attr("width", 150);
        $("#" + this.id).attr("height", 150);
        $("#" + this.id).css({
          "padding":"0px",
          "opacity":"1"
        });
        console.log(currentState)
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
        console.log(currentState)
        currentPlayer = "X";
      };
      checkWinner();
      changeTurns();
    };
  });
});

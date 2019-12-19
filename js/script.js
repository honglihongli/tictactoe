var player = "X";
var end = false;
var turns = 0;
function performLogic(buttonId,tileId) {
  $(buttonId).remove();
  $(tileId).html(player);
  winner($("#tile1").html(),$("#tile2").html(),$("#tile3").html());
  winner($("#tile4").html(),$("#tile5").html(),$("#tile6").html());
  winner($("#tile7").html(),$("#tile8").html(),$("#tile9").html());
  winner($("#tile1").html(),$("#tile4").html(),$("#tile7").html());
  winner($("#tile2").html(),$("#tile5").html(),$("#tile8").html());
  winner($("#tile3").html(),$("#tile6").html(),$("#tile9").html());
  winner($("#tile3").html(),$("#tile5").html(),$("#tile7").html());
  winner($("#tile1").html(),$("#tile5").html(),$("#tile9").html());
  if (player === "X") {
    player = "O";
  } else if (player != "X") {
    player = "X";
  }
  turns = turns+1;
  if (turns===9) {
    end===true;
    $(".loser").html("It's a draw.");
  }
}
function winner(one, two, three) {
  if(one === player && two === player && three === player) {
    $(".loser").html(player + " Wins");
  }
}



// && $("#tile5").html() === "X" && $("#tile9").html() === "X")




$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});


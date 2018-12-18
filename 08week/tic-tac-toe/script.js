'use strict';

$(document).ready(function() {
  // Put app logic in here
  
  //listen for a click and put an 'X' in in an empty space - jquery click
  
  //flip the turn to 'O'
  //check if it's a good click and if not ignore it
  //check for endgame
  //wire reset button


let turn = "X";


$(".row div").click(function(){
 if($(this).text()==""){
  $(this).text(turn);
// console.log($(this).data("cell"))
  endgame();

  if(turn=="X"){
    turn = "O";
  } else{
    turn = "X";
  }
 };
})

function endgame() {
  console.log("Did"+turn+" win?");
  let emptySpaces = 0;
  for (let a=0;a<=8;a++){
    if($('div[data-cell="'+a+'"]').text() == ""){
      emptySpaces ++;
    };
    }
    if(emptySpaces == 0) {
      console.log("the game is a tie");
    }
}

});

const winState = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6]
  ];

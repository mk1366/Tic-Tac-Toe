'user strict'
const api = require('./gameApi.js')
const ui = require('./gameUi.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']

let player = 'x'

const switchPlayer = function () {
  if (player === "x") {
    player = "y"
  } else {
    player = "x"
  }
}

const checkIfEmpty = function (box) {
  if (($(box).html() === 'x') || ($(box).html() === 'y')) {
    console.log('click an empty space')
  } else {
    // adding x or o to the html
    $(box).html(player)
    console.log('the id of the box', $(box).attr('id'))
    const position = $(box).attr('id')
    // adding x or o to the js array
    gameBoard[position] = player
    if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
      console.log('WINNER')
    }

    //
    // if gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]
    // if gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]
    // if gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]
    // if gameBoard[0] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]
    // if gameBoard[0] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]
    // if gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]
    // if gameBoard[0] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]
    // if gameBord[]
    // else if middle row
    // else if bottom row
    // elseif for left column
    // else if for middle column
    // else if for right column
    // else if left to right diag
    // else if right to left diag
    // else no winner yet
    switchPlayer()
  }
}

const playGame = function (event) {
  // console.log(event.target)
  // console.log(event.target.dataset.box)
  const box = event.target
  checkIfEmpty(box)
  // $(box).html(player)
}
// const winingCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 4, 8],
//   [2, 4, 6],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8]
// ]

// for (i = 0; i < array.length; i++)
// {

// const USER_Player = 'x'
// const COMPUTER_Player ='O'
// const currentTurn = USER_Player

// const board = document.querySelector('.board')
// board.addEventListner('click', function(playGame)) {
//   currentTurn = currenTurn === USERPlayer
// })

// function checkForWinner() {
//   const box = Array.prototype.slice.call(document.querySelectorAll) ('.box'), 0}
//   const USER_Player = box.map(function(box) {
//     return box.innerHTML;
//
//   })
//   const winningSet = [
//       ['0', '1', '2'],
//       ['3', '4', '5'],
//       ['6', '7', '8']
//     ];
//     winingSet.find(function(Set){
//       if(USER_Player[ ])
//
//     })
// possible winning combination
//
//
//
//   console.log(USER_Player);
// }

module.exports = {
  playGame
}

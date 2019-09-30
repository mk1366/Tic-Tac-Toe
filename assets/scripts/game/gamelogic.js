'user strict'
const api = require('./gameApi.js')
const ui = require('./gameUi.js')
const store = require('../store')

const gameBoard = ['', '', '', '', '', '', '', '', '']
const switchPlayer = function () {
  if (store.player === "x") {
    store.player = "y"
    console.log(store)
  } else {
    store.player = "x"
    console.log(store)
  }
}

const checkIfEmpty = function (box) {
  if (($(box).html() === 'x') || ($(box).html() === 'y')) {
    console.log('click an empty space')
  } else {
    console.log('the id of the box', $(box).attr('id'))
    store.position = $(box).attr('id')
    // adding x or o to the html
    $(box).html(store.player)
    api.updateGame()
      .then(storeGame)
    }
  }

const storeGame = function(data) {
  console.log(data)

 }


const checkWin = function () {
  gameBoard[store.position] = store.player
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    console.log('WINNER')
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    console.log('WINNER')
  } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    console.log('WINNER')
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    console.log('WINNER')
  } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    console.log('WINNER')
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    console.log('WINNER')
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    console.log('WINNER')
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    console.log('WINNER')
  }
}

// if gameBord[]
// else if middle row
// else if bottom row
// elseif for left column
// else if for middle column
// else if for right column
// else if left to right diag
// else if right to left diag
// else no winner yet

const playGame = function (event) {
  // console.log(event.target)
  // console.log(event.target.dataset.box)
  const box = event.target
  checkIfEmpty(box)
  switchPlayer()
  // $(box).html(player)
  checkWin()

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

//     })
// possible winning combination
//


//   console.log(USER_Player);
// }

module.exports = {
  playGame
}

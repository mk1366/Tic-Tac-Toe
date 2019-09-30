'user strict'
const api = require('./gameApi.js')
const ui = require('./gameUi.js')


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
    $(box).html(player)
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
// const USER_Player = 'x'
// const COMPUTER_Player ='O'
// const currentTurn = USER_Player

// const board = document.querySelector('.board')
// board.addEventListner('click', function(playGame)) {
//   e.target.innerHTML = currentTurn
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
//
//
//   console.log(USER_Player);
// }

module.exports = {
  playGame
}

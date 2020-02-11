
'use strict'// if these don't work, check if i need ./
const config = require('../config')
const store = require('../store')

// declared a varible 'newgame' with a functin expression
// that performs asynchronous HTTP request using Api url and post it to our page.
// user token to the new game functionality.
const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

// function that takes threee arguments, an array with
// index(to hold the place of each element) and the
// the value that the players get X or 0.
const updateGame = function (over) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.position,
          value: store.player
        },
        over: over
      }
    }
  })
}

module.exports = {
  newGame,
  getGames,
  updateGame
}

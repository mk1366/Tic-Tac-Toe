'use strict'

const authEvents = require('./auth/events')
const gamelogic = require('./game/gamelogic')
const gameEvent = require('./game/gameEvent')

$(() => {
  // when the page starts, hide these
  $('.game').hide()
  $('#sign-out').hide()
  $('#change-password').hide()

  $('#play').on('click', gameEvent.startGame)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onchangepassword)
  $('#sign-out').on('submit', authEvents.onsignout)
  $('#board').on('click', gamelogic.playGame)
})

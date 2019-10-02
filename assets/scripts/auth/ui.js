'use strict'

const store = require('../store')
const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('signed up successfully!')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}
// contains user object
const onSignInSuccess = function (responseData) {
  successMessage('signed in successfully!')
  console.log('responseData is', responseData)
  $('.game').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  // save the 'user' we got from the API inside of 'store'
  // so we can use it later, from any file
  store.user = responseData.user
  console.log('store is', store)
  $('#sign-in').trigger('reset')
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
  $('#sign-in').trigger('reset')
}

const onchangepasswordSuccess = function () {
  successMessage('Changepassword successfully!')
  $('#change-password').trigger('reset')
}

const onchangepasswordFailure = function () {
  failureMessage('Changepassword failed')
  $('#change-password').trigger('reset')
}
const onSignoutSuccess = function () {
  successMessage('Signed out successfully!')
  $('#Signed out').trigger('reset')
  $('.game').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const onSignoutFailure = function () {
  failureMessage('Sign out failed')
$('#sign-out').trigger('reset')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onchangepasswordSuccess,
  onchangepasswordFailure,
  onSignoutSuccess,
  onSignoutFailure
}

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
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
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
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
}

const onchangepasswordSuccess = function () {
  successMessage('Changepassword successfully!')
}

const onchangepasswordFailure = function () {
  failureMessage('Changepassword failed')
}
const onSignoutSuccess = function () {
  successMessage('Signed out successfully!')
  $('.game').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const onSignoutFailure = function () {
  failureMessage('Sign out failed')
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

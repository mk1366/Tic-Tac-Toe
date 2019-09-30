jQuery

// longhand syntax
jQuery('p')

// shorthand syntax
$('p')

// use modern CSS selectors
$('.my-targeted-class')
$('#my-targeted-id')
$('.my-parent-class .my-child-class')

const myBoxElement = $('.box')


Avoid the most expensive methods like
.append and
.prepend.
Instead, create all of your html in a string and use .html to attach it to the page all at once.

const PLAYER_TOKEN = 'X'
Const COMPUTER_TOKEN = 'Y'

$(document).ready(function() {
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  function isGameOver() {
    // check ig game is over
    for (let i = 0; i<3; i++) {
      if
      return

    } else if

  }



$('.col').click(function() {
  $this = $(this);
  $(this).html(PLAYER_TOKEN);
  const A = $this.data('A')
  const B = $this.data('B')
  grid[A][B] = PLAYER_TOKEN;

  if (isGameOver()) {
    else {

    }
  }


  });
});

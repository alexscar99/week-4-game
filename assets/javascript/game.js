$(document).ready(function() {
  // declare global variables with default values
  var randomNumber = 0;

  var score = 0;

  var wins = 0;

  var losses = 0;

  var crystals = $('#crystals');

  var crystalScores = [];

  var crystalImgSrc = [
    'assets/images/crystal1.png',
    'assets/images/crystal2.png',
    'assets/images/crystal3.png',
    'assets/images/crystal4.png'
  ];

  // function to generate random number and place it in #random-number, set score to 0 and place it in #score
  var initializeGame = function() {
    randomNumber = Math.floor(Math.random() * 102) + 19;
    $('#random-number').html('<p>' + randomNumber + '</p>');

    score = 0;
    $('#score').text(score);
  };

  initializeGame();

  // create paragraphs for wins and losses
  $('#player-record').html(
    '<p>Wins: ' + wins + '</p>' + '<p>Losses: ' + losses + '</p>'
  );

  // function to add 4 random numbers between 1-12 (crystal scores) to empty array
  var createCrystalScores = function(array) {
    array.length = 0;
    for (i = 0; i < 4; i++) {
      array.push(Math.floor(Math.random() * 12) + 1);
    }
  };

  // function to set the data-crystal-value to the new crystal scores
  var setCrystalValues = function(array) {
    $('.crystal-img').each(function(i) {
      $(this).attr('data-crystal-value', array[i]);
    });
  };

  createCrystalScores(crystalScores);

  // create 4 img elements then add class, src from img src array, data-crystal-value with random score number, alt tags, append to #crystals
  for (var i = 0; i < crystalScores.length; i++) {
    var crystalImage = $('<img>');

    crystalImage.addClass('crystal-img');

    crystalImage.attr('src', crystalImgSrc[i]);

    crystalImage.attr('data-crystal-value', crystalScores[i]);

    crystalImage.attr('alt', 'crystal image');

    crystals.append(crystalImage);
  }

  crystals.on('click', '.crystal-img', function() {
    // store the data crystal value as a string
    var crystalValue = $(this).attr('data-crystal-value');

    // turn the string into a number for the score
    crystalValue = parseInt(crystalValue);

    score += crystalValue;

    $('#score').text(score);

    // set conditional for if the user wins or losses
    if (score === randomNumber) {
      wins++;
      setTimeout(function() {
        alert('Congratulations! You won the game!');
        // reset score to 0 and new random number
        initializeGame();
      }, 200);

      $('#player-record').html(
        '<p class="player-record-end-game">You won!</p>' +
          '<p class="player-record-end-game">Wins: ' +
          wins +
          '</p>' +
          '<p class="player-record-end-game">Losses: ' +
          losses +
          '</p>'
      );

      // reset crystal scores
      createCrystalScores(crystalScores);

      // set the data-crystal-value to the new crystal scores
      setCrystalValues(crystalScores);
    } else if (score > randomNumber) {
      losses++;
      setTimeout(function() {
        alert('You lost the game!');
        // reset score to 0 and new random number
        initializeGame();
      }, 200);

      $('#player-record').html(
        '<p class="player-record-end-game">You lost!</p>' +
          '<p class="player-record-end-game">Wins: ' +
          wins +
          '</p>' +
          '<p class="player-record-end-game">Losses: ' +
          losses +
          '</p>'
      );

      // reset crystal scores
      createCrystalScores(crystalScores);

      // set the data-crystal-value to the new crystal scores
      setCrystalValues(crystalScores);
    }
  });
});

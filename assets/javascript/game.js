$(document).ready(function() {
  // store random number between 19-120
  var randomNumber = Math.floor(Math.random() * 102) + 19;

  $('#random-number').text(randomNumber);

  wins = 0;

  losses = 0;

  // create paragraphs for wins and losses
  $('#player-record').html(
    '<p>Wins: ' + wins + '</p>' + '<br>' + '<p>Losses: ' + losses + '</p>'
  );

  var crystals = $('#crystals');

  score = 0;

  $('#current-score').text(score);

  var crystalScores = [];

  // create loop to add 4 random numbers between 1-12 to empty array
  for (i = 0; i < 4; i++) {
    crystalScores.push(Math.floor(Math.random() * 12) + 1);
  }

  // create array of the four crystal images
  var crystalImgSrc = [
    'assets/images/crystal1.jpg',
    'assets/images/crystal2.jpg',
    'assets/images/crystal3.jpeg',
    'assets/images/crystal4.png'
  ];

  // loop through and create 4 imgs with same class, src from img src array defined above, add data-crystal-value attr that takes the value of the random score number from the crystal scores array, add alt tag to all imgs, and append to the element with id of crystals
  for (var i = 0; i < crystalScores.length; i++) {
    var crystalImage = $('<img>');

    crystalImage.addClass('crystal-img');

    crystalImage.attr('src', crystalImgSrc[i]);

    crystalImage.attr('data-crystal-value', crystalScores[i]);

    crystalImage.attr('alt', 'crystal image');

    crystals.append(crystalImage);
  }

  crystals.on('click', '.crystal-img', function() {
    // store the data crystal value string
    var crystalValue = $(this).attr('data-crystal-value');

    // turn the string into a number for the score
    crystalValue = parseInt(crystalValue);

    score += crystalValue;

    $('#current-score').text(score);

    // set conditional for if the user wins or losses
    if (score === randomNumber) {
      alert('Congratulations! You won the game!');

      wins += 1;

      // reset score and new random number between 19-120
      randomNumber = Math.floor(Math.random() * 102) + 19;

      score = 0;

      $('#random-number').text(randomNumber);

      $('#current-score').text(score);

      $('#player-record').html(
        '<p>You won!!!</p>' +
          '<p>Wins: ' +
          wins +
          '</p>' +
          '<br>' +
          '<p>Losses: ' +
          losses +
          '</p>'
      );

      // reset crystal scores with 4 new random numbers between 1-12
      crystalScores = [];

      for (var i = 0; i < 4; i++) {
        crystalScores.push(Math.floor(Math.random() * 12) + 1);
      }

      // for loop was replacing last value of crystal scores array into all 4 instead of setting each one. Had to use a .each function and `this` to populate it properly
      $('.crystal-img').each(function(i) {
        $(this).attr('data-crystal-value', crystalScores[i]);
      });
    } else if (score > randomNumber) {
      alert('You lost the game!');

      losses += 1;

      // reset score and new random number between 19-120
      score = 0;

      randomNumber = Math.floor(Math.random() * 102) + 19;

      $('#random-number').text(randomNumber);

      $('#current-score').text(score);

      $('#player-record').html(
        '<p>You lost!</p>' +
          '<p>Wins: ' +
          wins +
          '</p>' +
          '<br>' +
          '<p>Losses: ' +
          losses +
          '</p>'
      );

      // reset crystal scores with 4 new random numbers between 1-12
      crystalScores = [];

      for (i = 0; i < 4; i++) {
        crystalScores.push(Math.floor(Math.random() * 12) + 1);
      }

      // for loop was replacing last value of crystal scores array into all 4 instead of setting each one. Had to use a .each function and `this` to populate it properly
      $('.crystal-img').each(function(i) {
        $(this).attr('data-crystal-value', crystalScores[i]);
      });
    }
  });
});

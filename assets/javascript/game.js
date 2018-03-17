// create random number between 19-120
var randomNumber = Math.floor(Math.random() * 102) + 19;

// add the random number to the div with id random number
$('#random-number').text(randomNumber);

// set variable to crystals div
var crystals = $('#crystals');

// start off with score at 0
var score = 0;

// empty array to store crystal values
var crystalScores = [];

// create loop to generate a random number between 1-12, do it 4 times, and add to empty array
for (i = 0; i < 4; i++) {
  // push in random number
  crystalScores.push(Math.floor(Math.random() * 12) + 1);
}

var crystalImgSrc = [
  'assets/images/crystal1.jpg',
  'assets/images/crystal2.jpg',
  'assets/images/crystal3.jpeg',
  'assets/images/crystal4.png'
];

// loop through and create crystal with score from each element of the score array
for (var i = 0; i < crystalScores.length; i++) {
  var crystalImage = $('<img>');

  crystalImage.addClass('crystal-img');

  // create function to add img src
  // var addCrystalImage = function(imgSrc) {
  //   crystalImage.attr('src', imgSrc);
  // };
  crystalImage.attr('src', crystalImgSrc[i]);

  crystalImage.attr('data-crystal-value', crystalScores[i]);

  crystalImage.attr('alt', 'crystal image');

  crystals.append(crystalImage);
}

// call function 4 times for each crystal to add the different img
// addCrystalImage('assets/images/crystal1.jpg');

// addCrystalImage('assets/images/crystal2.jpg');

// addCrystalImage('assets/images/crystal3.jpeg');

// addCrystalImage('assets/images/crystal4.png');

// when any crystal is clicked:
crystals.on('click', '.crystal-img', function() {
  // store the data crystal value string
  var crystalValue = $(this).attr('data-crystal-value');

  // turn the string into a number for the score
  crystalValue = parseInt(crystalValue);

  // increment score by the value of the specific crystal
  score += crystalValue;

  // tell the user what their new score is
  alert('Your new score is ' + score);

  // conditional to alert the user for win and loss
  if (score === randomNumber) {
    alert('Congratulations! You have won the game!');
  } else if (score > randomNumber) {
    alert('You have lost the game.');
  }
});

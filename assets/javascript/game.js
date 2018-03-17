var randomNumber = Math.floor(Math.random() * 102) + 19;

var counter = 0;

$('#crystals').on('click', '.crystal-img', function() {
  counter += 10;

  alert('Your new score is ' + counter + '.');
});

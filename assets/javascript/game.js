var counter = 0;

$('#crystals').on('click', '.crystal-img', function() {
  counter += 1;

  alert('You clicked this crystal ' + counter + ' times!');
});

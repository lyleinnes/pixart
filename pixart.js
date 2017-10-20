$colorField = $('#color-field');
$setColor = $('#set-color');
$brush = $('.brush');


$setColor.on('click', function() {
  event.preventDefault();
  $brush.css('background', $colorField.val());
});
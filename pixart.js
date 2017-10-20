$colorField = $('#color-field');
$setColor = $('#set-color');
$brush = $('.brush');



$setColor.on('click', function() {
  event.preventDefault();
  $brush.css('background', $colorField.val());
});

for (i = 0; i < 1000; i++) {
  $('body').append("<div class='square'>");
}
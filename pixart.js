$colorField = $('#color-field');
$setColor = $('#set-color');
$brush = $('.brush');



$setColor.on('click', function() {
  event.preventDefault();
  $brush.css('background', $colorField.val());
});

for (i = 0; i < 1000; i++) {
  $box = $('body').append("<div class='square'>");
};

var body = document.querySelector('body');

body.addEventListener('click', function(event) {
    if (event.target.className === 'square') {
      event.target.style.background = $brush.css('background')
    }
});
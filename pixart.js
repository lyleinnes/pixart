$colorField = $('#color-field');
$setColor = $('#set-color');

$movieField = $('#movie-field');
$setMovie = $('#set-movie');

$brush = $('.brush');

$setColor.on('click', function() {
  event.preventDefault();
  $brush.css('background', $colorField.val());
});

for (i = 0; i < 5000; i++) {
  $box = $('body').append("<div class='square'>");
};

var body = document.querySelector('body');

body.addEventListener('mouseover', function(event) {
    if (event.target.className === 'square') {
      event.target.style.background = $brush.css('background')
    }
});

$setMovie.on('click', function() {
  event.preventDefault();
  $.ajax({
      url: 'http://www.omdbapi.com',
      method: 'get',
      data: { apikey: '2f6435d9', t: $movieField.val()}
    }).done(function(response) {
      posterUrl = response.Poster;
      $brush.css('background-image', "url(" + posterUrl + ")")
    })
});
//Smooth Scroll

$('nav a').on('click', function() {
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset - 50
  }, 1200);
});


//Nav properties

var navPosition = $('.container').offset().top;
var navPosition = navPosition - 60;


$(window).on('scroll', function(){
	if ($(this).scrollTop() >= navPosition) {
		$('nav').addClass('scrolled');
		$('#home').hide();
		$('#title').show();
		$('.apronTwirl').html('src', 'img/animated-turn-small-white.gif');
		$('.menu').removeClass('openMenu');
		$('.page').removeClass('shiftRight');

	} else {
		$('nav').removeClass('scrolled');
		$('#home').show();
		$('#title').hide();
	}
});

$('.hamburger').on('click', function(){
	$('.menu').toggleClass('openMenu');
	$('.page').toggleClass('shiftRight');
});


// //Switch to gif
// $(window).on('scroll', function(){
// 	if ($(this).scrollTop() >= navPosition) {
		
// 	} else {
// 		$('apronTwirl').html('src', 'img/static-turn-small-white.png');
// 	}
// });

//Map

var mymap = L.map('mapid').setView([42.359, -87.256], 7);
var fairOne = L.marker([41.918628, -87.714843]).addTo(mymap);
var fairTwo = L.marker([42.956422, -85.682373]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    minZoom: 7,
    id: 'cmcg.pbal80d5',
    accessToken: 'pk.eyJ1IjoiY21jZyIsImEiOiJlZTA1Mjg5MThhNzAwYjIwMzkzOTRhZmI0YzdhM2ZhNyJ9.qmfiogrh1Wu7_JlfoaSMKw'
}).addTo(mymap);

fairOne.bindPopup("<b>Name of Chicago Fair</b><br>Address or other info.").openPopup();
fairTwo.bindPopup("<b>Name of Michigan Fair</b><br>Address or other info.").openPopup();


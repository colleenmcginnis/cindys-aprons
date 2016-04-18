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


$(window).scroll(function () {
	$('.apronTwirl').each(function () {
	    var imagePos = $(this).offset().top;
	    var imageHeight = $(this).height();
	    var topOfWindow = $(window).scrollTop();

	    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
	        $(this).attr('src', 'img/animated-turn-small-white.gif');
	    } else {
	        $(this).attr('src', 'img/static-turn-small-white.png');
	    }
	});
});


// var images = ['../img/apron-and-stove.jpg', '../img/restaurant-table-apron.jpg', '../img/holiday.jpg', '../img/mirror-apron.jpg']
// var currentPosition = 0;

// $(window).on('load', function(){
// 	$(this).delay(700*index).nextImage();
// });

// function nextImage(){
// 	currentPosition++;
// 	changeImage();
// }

// function changeImage(){
// 	$('#carousel').attr('src', images[currentPosition]);
// }

// //Switch to gif
// $(window).on('scroll', function(){
// 	if ($(this).scrollTop() >= navPosition) {
		
// 	} else {
// 		$('apronTwirl').html('src', 'img/static-turn-small-white.png');
// 	}
// });

//Map

var mymap = L.map('map').setView([42.359, -87.256], 7);
var fairOne = L.marker([41.918628, -87.714843]).addTo(mymap);
var fairTwo = L.marker([42.956422, -85.682373]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    minZoom: 7,
    id: 'cmcg.pbal80d5',
    accessToken: 'pk.eyJ1IjoiY21jZyIsImEiOiJlZTA1Mjg5MThhNzAwYjIwMzkzOTRhZmI0YzdhM2ZhNyJ9.qmfiogrh1Wu7_JlfoaSMKw'
}).addTo(mymap);

fairOne.bindPopup("<div class='popUp'><strong><a href='#'>Name of Chicago Fair</a></strong><br>Day, Mon XX Xa - Xp<br>Location, Chicago, IL</div>").openPopup();
fairTwo.bindPopup("<div class='popUp'><strong><a href='http://grandvalleyartists.com/reedslake' target='blank'>Reed's Lake Art Festival</a></strong><br>Sat, Jun 18 9a - 5p<br>Gaslight Village, Grand Rapids, MI</div>").openPopup();


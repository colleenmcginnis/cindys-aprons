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

//Carousel

var images=['img/kitchen.jpg', 'img/apron-and-stove.jpg', 'img/mirror.jpg', 'img/vitage.jpg'];
var countDots=['#count-one', '#count-two', '#count-three', '#count-four']
var currentPosition = 0;

$('#next').on('click', nextImage);
$('#prev').on('click', previousImage);

function nextImage(){
	currentPosition++;

	$('#prev').css('display', 'inline');

	changeImage();

 	if (currentPosition === 3) {
		$('#next').css('display', 'none');
	}
}

function previousImage(){

	currentPosition--;

	$('#next').css('display', 'inline');

	changeImage();

	if (currentPosition === 0 ) {
		$('#prev').css('display', 'none');
	}
}
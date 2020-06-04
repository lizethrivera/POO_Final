$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
});

jQuery(function ($) {
    if (typeof $('.menu').offset() !== 'undefined') {
        var altura = $('.menu').offset().top;
        if ($(document).scrollTop() > altura) {
            $('.menu').addClass('menu-fixed');
        }
 
        // Fijar el menú de navegación al hacer scroll
        $(document).on('scroll', function () {
 
            if ($(document).scrollTop() > altura) {
                $('.menu').addClass('menu-fixed');
 
            } else {
                $('.menu').removeClass('menu-fixed');
            }
 
        });
    };
 
});


/** First Slider */
$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
});

$(".slider-two")
.not(".slick-intialized")
.slick({
    prevArrow: ".site-slider-two .slider-btn .prev",
    nextArrow: ".site-slider-two .slider-btn .next",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000
});


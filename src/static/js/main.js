/**
 * 
 *  Slick settings
 *
 */

$(document).ready(function(){

  $('.slick-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

})



/**
 *
 *   Dropdown menu
 *
 */

$('html').on('click', 'header .MM-button', function(){
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});

var dropdown = $('.mobile-menu__dropdown');
dropdown.each(function(){
	var button = $(this).find('p[data-toggle="dropdown"]'),
			menu = $(this).find('.mobile-menu__dropdown-menu');

	button.click(function(event) {
    if(!menu.is('.show')) {
			menu.addClass('show');
			menu.removeClass('hide');
		}
		else {
			menu.removeClass('show');
			menu.addClass('hide');
		}
	});
})

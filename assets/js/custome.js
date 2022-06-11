
$(document).ready(function(){
/*--------- Toggle Menu ----------*/
	$("#toggle").click(function() {
		$(this).toggleClass("on");
		$(".menu_inner").toggleClass('show');
		$("body").toggleClass('cm_overflow')
	});

/*--------- Searchbar show Menu ----------*/
	$('.countries').click(function(){
		if($(window).width() < 576	)
		{
			$(this).find('ul').slideToggle();
			$(this).find('ul').siblings().find('img').toggleClass('rotat');

		}
	});

	$('.search_icon').click(function(){
		$('.search_div').fadeToggle();
	})

	$('.rating_filter select').niceSelect();

	// cage silder
	/*$('.item').click(function(){
		$('body').addClass('lightbox_over');
	})
	$('.lb-close').click(function(){
		$('body').removeClass('lightbox_over');
	})

	$('.lightboxOverlay').click(function(){
		$('body').removeClass('lightbox_over');
	})

	$('#lightbox').click(function(){
		$('body').removeClass('lightbox_over');
	})*/

/*--------- Cage-Slider Menu ----------*/
	$('.cage_slider .owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots:false,
	    nav: true,
	    startPosition: 2,
  		navText: ["<img src='assets/image/silder_left_arrow.png'>","<img src='assets/image/silder_right_arrow.png'>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        575:{
	            items:2
	        },
	        767:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	    }
	})
});
/*--------- Select Menu ----------*/

	


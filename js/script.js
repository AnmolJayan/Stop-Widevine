//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut();
		jQuery("#loader").delay(400).fadeOut("slow");
		jQuery("#loaderInner p").removeClass("loading");
				
});





$(document).ready(function(){
	
	
//------------------------------------- Navigation setup ------------------------------------------------//


//--------- Scroll navigation ---------------//


$("#mainNav ul a, .logo a, .cta a").click(function(e){

	
	var full_url = this.href;
	var parts = full_url.split("#");
	var trgt = parts[1];
	var target_offset = $("#"+trgt).offset();
	var target_top = target_offset.top;
	


	$('html,body').animate({scrollTop:target_top -66}, 800);
		return false;
	
});


//-------------Highlight the current section in the navigation bar------------//
	var sections = $("section");
		var navigation_links = $("#mainNav a");

		sections.waypoint({
			handler: function(event, direction) {

				var active_section;
				active_section = $(this);
				if (direction === "up") active_section = active_section.prev();

				var active_link = $('#mainNav a[href="#' + active_section.attr("id") + '"]');
				navigation_links.removeClass("active");
				active_link.addClass("active");

			},
			offset: '35%'
		});
		
		
//------------------------------------- End navigation setup ------------------------------------------------//




//---------------------------------- Clients animation and testimonia quote -----------------------------------------//

$('.testimoniaContainer .testimonialContent .icoQuote').css({opacity:0.2});
$('.clientList a').css({opacity:0.2});
		$('.clientList a').hover( function(){ 
			$(this).stop().animate({opacity:"1"},  "slow", 'easeOutQuint');
		}, function(){ 
			$(this).stop().animate({opacity:"0.2"},  "slow", 'easeOutQuint');
		});
//---------------------------------- End clients animation and testimonia quote-----------------------------------------//



//------------------------------ Sorting portfolio elements with quicksand plugin- ----------------------------//


//------------------------------ MagnificPopup ----------------------------//

		$('a.prev').magnificPopup({
		  type: 'image'
		});
		

//-------------------------- End magnificPopup ----------------------------//


	var $portfolioClone = $('.portfolio').clone();

	$('.filter a').click(function(e){
		$('.filter li').removeClass('current');	
		var $filterClass = $(this).parent().attr('class');
		if ( $filterClass == 'all' ) {
			var $filteredPortfolio = $portfolioClone.find('li');
		} else {
			var $filteredPortfolio = $portfolioClone.find('li[data-type~=' + $filterClass + ']');
		}
		$('.portfolio').quicksand( $filteredPortfolio, { 
			duration: 800,
			easing: 'easeInOutQuad' 
		}, function(){
			


//------------------------------ Reinitilaizing magnificPopup ----------------------------//

		$('a.prev').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
		

//-------------------------- End einitilaizing magnificPopup ----------------------------//

		});


		$(this).parent().addClass('current');
		e.preventDefault();
	});

//--------------------------------- End sorting portfolio elements with quicksand plugin--------------------------------//



//---------------------------------- Form validation-----------------------------------------//




$('#submit').click(function(){ 

	$('input#name').removeClass("errorForm");
	$('textarea#message').removeClass("errorForm");
	$('input#email').removeClass("errorForm");
	
	var error = false; 
	var name = $('input#name').val(); 
	if(name == "" || name == " ") { 
		error = true; 
		$('input#name').addClass("errorForm");
	}
	
	
		var msg = $('textarea#message').val(); 
		if(msg == "" || msg == " ") {
			error = true;
			$('textarea#message').addClass("errorForm");
			
		}
	
	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
	var email = $('input#email').val(); 
	if (email == "" || email == " ") { 
		$('input#email').addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) { 
		$('input#email').addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = $('.contactForm form').serialize(); 
	

	$.ajax({
		type: "POST",
		url: $('.contactForm form').attr('action'),
		data: data_string,
		
		success: function(message) {
				if(message == 'SENDING'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
					}
					
					
					
	});

	return false; 
});



//---------------------------------- End form validation-----------------------------------------//


//--------------------------------- Mobile menu --------------------------------//


var fade=false;
$('.mobileBtn').click(function() {
		if(fade==false){
        	$('#mainNav ul').slideDown("slow");
			$('#mainNav ul').css({"display":"block"});
			fade=true;
			return false;
			
		}else{
		
			$('#mainNav ul').slideUp("faste");
			fade=false;
			return false;	
		}
});


//--------------------------------- End mobile menu --------------------------------//


//--------------------------------- Parallax --------------------------------//

$("#teaser").parallax("100%", 0.3);	
$(".testimoniaContainer").parallax("100%", 0.3);


//--------------------------------- End parallax --------------------------------//


//---------------------------------- Testimonials -----------------------------------------//

$('.testimoniaContainer').slides({
	preload: false,
	generateNextPrev: false,
	play: 6500,
	container: 'testimonialContent'
});


//---------------------------------- End testimonial -----------------------------------------//


//---------------------------------- Text animation -----------------------------------------//

$(".rotate").textrotator({
        animation: "fade",
		separator: ",",
    	speed: 2000
});



$(".loading").textrotator({
        animation: "fade",
    	speed: 1000
});


//---------------------------------- End text animation -----------------------------------------//

//--------------------------------- To the top handler --------------------------------//

$().UItoTop({ easingType: 'easeOutQuart' });

//--------------------------------- End to the top handler --------------------------------//



});


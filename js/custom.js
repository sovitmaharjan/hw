$(document).ready(function($) {
	if($(window).width() < 768 ){
		$(".global-nav").append('<div class="close-global-nav"><i class="kst-multiple"></i></div>');		
		$('.burger-menu').each(function () {
			$(".burger-menu").click(function(){	
				$('.burger-menu').css({'display':'none'});
				$('.global-nav').animate({'width': 'toggle'});
				$('.close-global-nav').css({'display':'block'});
			}),	$(".close-global-nav,ul.global-nav-inner li a").click(function(){			
				$('.global-nav').animate({'width': 'toggle'});
				$('.close-global-nav').css({'display':'none'});
				$('.burger-menu').css({'display':'block'});
			});
		});			
	}
	$('.imageGallery a').simpleLightbox();
	
	
	$("#nav-home,#nav-event,#nav-profile,#nav-album,#nav-contact,#nav-gallary").on('click', function(event) {
    if(this.hash !== "") {
      event.preventDefault();     
      var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
	$(window).scroll(function(){
		var sticky 	= $('.header-outer'),
			scroll 	= $(window).scrollTop();		
		if(scroll >200) {
				sticky.addClass('fixed-header-outer');			

		}	else {
				sticky.removeClass('fixed-header-outer');

		}
	});
	
	//Bind to scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() >120) {
            $('.go2top').fadeIn();
        } else {
            $('.go2top').fadeOut();
        }
	});	
	//Function for scroliing to top
    $('.go2top').click(function (){
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
	
	
	
});
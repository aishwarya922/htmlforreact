/*home page partner slider*/
$('.owl-carousel').owlCarousel({
    loop:true,
	autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});
		var totalItems = $('.homepage__slider .item').length;
		var currentIndex = $('div.active').index() + 1;
		$('.num').html(''+currentIndex+'/'+totalItems+'');
		$("#myCarousel .item:nth-child(2)").removeClass("selected");
		$(document).ready(function() {
			$('#myCarousel').carousel({
        			interval: 5000,
					pause: false 
				});
				$("#myCarousel .text-excerpt").addClass("wow fadeInUp animated");
	 			$('#myCarousel').on('slid.bs.carousel', function () {
				$holder = $("ol li.active" );
				$holder.removeClass('active');
				var idx = $('div.active').index('div.item');
				 $('ol.carousel-indicators li[data-slide-to="'+ idx+'"]').addClass('active');
				currentIndex = $('div.active').index() + 1;
				$('.num').html(''+currentIndex+'/'+totalItems+'');
				var ltvar = parseInt(idx-1);
				var rtvar = parseInt(idx+1);
				if($('#myCarousel .carousel-inner').children('.item').hasClass('active')) {
					$("#myCarousel .text-excerpt").removeClass("wow fadeInUp animated").addClass("wow fadeInUp animated");
					$("#myCarousel .text-excerpt").attr("style","visibility: visible; animation-name: fadeInUp;");
				}
    });
    $('ol.carousel-indicators li').on("click",function(){ 	
        	$('ol.carousel-indicators li.active').removeClass("active");
			$(this).addClass("active");
			$('#myCarousel').carousel({
        		interval: 5000 
			});
    });
});
	
	
				







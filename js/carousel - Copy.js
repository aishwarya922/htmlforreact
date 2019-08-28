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
        			interval: 4000,
					pause: false 
				});
				$("#myCarousel .text-excerpt").addClass("wow fadeInUp animated");
	 			//$("#myCarousel .item").css("background","url(images/home-bg-1.jpg)");
	 			$('#myCarousel').on('slid.bs.carousel', function () {
				/*if ($('.wow').hasClass('animated')) {
            				$(this).removeClass('animated');
            				$(this).removeAttr('style');
            				new WOW().init();
							}*/
				//clearTimeout(t);
			    //var duration = $('#myCarousel .item').find('.active').attr('data-interval');
				//alert(duration);
    			//t = setTimeout("$('#myCarousel').carousel('next');", duration);
        $holder = $("ol li.active" );
        $holder.removeClass('active');
		//$(".homepage__slider .content-section__background-element--bg-image").removeClass('effect__fadeIn');
		var idx = $('div.active').index('div.item');
         $('ol.carousel-indicators li[data-slide-to="'+ idx+'"]').addClass('active');
		 /*$('.homepage__slider .content-section__background-element--bg-image').fadeIn(1000, function() {
	     	 $('.homepage__slider .content-section__background-element--bg-image').addClass('effect__fadeIn');
    	});*/
		currentIndex = $('div.active').index() + 1;
   		$('.num').html(''+currentIndex+'/'+totalItems+'');
		var ltvar = parseInt(idx-1);
		//$("#myCarousel .item").css("background","url(images/home-bg-"+ltvar+".jpg)");
		var rtvar = parseInt(idx+1);
		//$("#myCarousel .item").css("background","url(images/home-bg-"+rtvar+".jpg)");
		 if(idx == 1){
				if ($(window).width() > 1023) {
						$("#myCarousel .item:nth-child(2)").css("background","url(../images/home-bg-2.jpg)");
						$("#myCarousel .item:nth-child(2)").addClass("selected");
						$("#myCarousel").carousel("pause");				
						$('video').attr('src','videos/analytics.mp4');				
						setTimeout(function(){ $('.carousel').carousel(); }, 187800);					
					}
			 	
			}
			else
			{
				$('video').attr('src','');
			}
			if($('#myCarousel .carousel-inner').children('.item').hasClass('active')) {
				$("#myCarousel .text-excerpt").removeClass("wow fadeInUp animated").addClass("wow fadeInUp animated");
    			$("#myCarousel .text-excerpt").attr("style","visibility: visible; animation-name: fadeInUp;");
			}
    });
    $('ol.carousel-indicators li').on("click",function(){ 	
        	$('ol.carousel-indicators li.active').removeClass("active");
			$(this).addClass("active");
			//$(".homepage__slider .content-section__background-element--bg-image").removeClass('effect__fadeIn');
			$('#myCarousel').carousel({
        		interval: 4000 
			});
    });
});


	
/*	if($('div.videoslide').hasClass('active')){
		alert();
	}*/

/*    //handle Bootstrap carousel slide event
    $('#myCarousel').on('slid.bs.carousel', function (e)
    {
        //get the next interval from the data- HTML attribute
      //  var interval = parseInt($(e.relatedTarget).data("interval"));
		currentIndex = $('div.active').index();
   		//$('.num').html(''+currentIndex+'/'+totalItems+'');
		if(currentIndex == 1){
			$("#myCarousel").carousel("pause");
			setTimeout(function(){ $('.carousel').carousel(); }, 187800);
			}
        //set the interval by first getting a reference to the widget
        //$('.carousel').data("bs.carousel").options.interval =  interval;
    });*/
	
	
				








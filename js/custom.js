$(document).ready(function() {
		if ($(window).width() < 1023) {
  				$('#removevideo').html('');
			} 
    $('#awardsCarousel').carousel({
      interval: 4000
});

$('.about-mind').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 700, 'linear');

});	
	$('.videobtn').click(function () {
 	$(this).addClass('selected').removeClass("select");
 	$(".modal-container.products").addClass("scaled").removeClass("scale");
 	 $('.modal-background').css("display","table-cell");
	 $('video')[0].play();
});

$('.companyvideo').click(function () {
 	$(this).addClass('selected').removeClass("select");
 	$(".modal-container.cloud").addClass("scaled").removeClass("scale");
 	 $('.modal-background').css("display","table-cell");
	 $('video')[0].play();
});

$('.modal-container').click(function () {
  $(this).removeClass('scaled').addClass("scale");
  $(".videobtn").addClass("select").removeClass("selected");
  $('.modal-background').css("display","none");
  $('video')[0].pause();
});

// JavaScript Documentif ($('#back-to-top').length) {
var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
	    wow = new WOW(
      {
        animateClass: 'animated',
		live:         true,
        offset:       100,
        callback:     function(box) {
        }
      }
    );
    wow.init();
	$('.closebtn').click(function(){
		$(".column__section").css("height","auto");
		$(".columns__wrapper").css("height","auto");
		$(".content__body").addClass("hidetext");
		$(".content__body").hide();
        $(this).parents().find('.containerTab').addClass("removebox");
		document.getElementById(tabName).style.display = "none";
	
    });
/*	$('.counter').counterUp({
                delay: 10,
                time: 2000
    });*/
	 $(".location__dot").click(function(e) {
		 	e.stopPropagation();
			$(".reel-highlight").removeClass("show");
			$(this).siblings().toggleClass("show");
        });
		
		
});

$(".menu-toggle").click(function(){
    $(".nav").toggleClass("js-nav-active");
	$(".foldout__menu-toggle").toggleClass("menu-toggle--clicked");
});

$(".undo-ticker").hide();
$(".close-ticker").click(function(){
    $(".ticker-wrapper").fadeOut();
	$(".undo-ticker").fadeIn();
});

$(".undo-ticker").click(function(){
    $(".ticker-wrapper").fadeIn();
	$(".undo-ticker").fadeOut();
});

$(".product__wrapper" ).hover(function() {
  $(this).toggleClass("selected");
});

$(".awards-content").hover(function() {
  $(this).toggleClass("selected");
});

$(".read-more" ).click(function() {
  $(this).find("job-card").children("job_details").toggleClass("selected");
});

$(window).resize(function() {
	if ($(window).width() < 1023) {
  			$('#removevideo').html('');
		} 
});

$(document).click(function(){
     $(".reel-highlight").removeClass("show");
});


$.cookie('MIND_cookies', 'true', { expires: 100 });
















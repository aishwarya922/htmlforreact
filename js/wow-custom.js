	    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
        }
      }
    );
    wow.init();// JavaScript Document
	
	$(".menu-toggle").click(function(){
    $(".nav").toggleClass("js-nav-active");
	$(".foldout__menu-toggle").toggleClass("menu-toggle--clicked");
});
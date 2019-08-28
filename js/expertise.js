// JavaScript Document

(function($) {
 "use strict"
 
 // Accordion Toggle Items
   var iconOpen = 'fa fa-minus',
        iconClose = 'fa fa-plus';

    $(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function (e) {
        var $target = $(e.target)
          $target.siblings('.accordion-heading')
          .find('em').toggleClass(iconOpen + ' ' + iconClose);
          if(e.type == 'show')
              $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
          if(e.type == 'hide')
              $(this).find('.accordion-toggle').not($target).removeClass('active');
    });
    
})(jQuery);


var angleStart = -360;

// jquery rotate animation
function rotate(li, d) {
    $({ d: angleStart }).animate({ d: d }, {
        step: function (now) {
            $(li).
            css({ transform: 'rotate(' + now + 'deg)' }).
            find('label').
            css({ transform: 'rotate(' + -now + 'deg)' });
        }, duration: 0 });

}
// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
    for (var i = 0; i < li.length; i++) {if (window.CP.shouldStopExecution(0)) break;
        var d = $(s).hasClass('half') ? i * deg - 90 : i * deg;
        $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
    }window.CP.exitedLoop(0);
}
$('.selector button').click(function (e) {
    toggleOptions($(this).parent());
});
setTimeout(function () {toggleOptions('.selector');}, 100);

jQuery(function($) {
  
// Function which adds the 'animated' class to any '.animatable' in view
   
  var $animation_element = $('.animatable');
  var $window = $(window);

  function check_if_in_view() {
    
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = ( window_height + window_top_position );
    
    $.each($animation_element, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_height + element_top_position);
      
      // Check all animatables and animate them if necessary
      if((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
          $element.addClass('animated');
          
        } else {
          $element.removeClass('animatable');
        }
    });
  };

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
});

        

// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});




$( document ).ready(function() {
  var $navContainer = $('.nav-container');
  var $navIcon = $('#nav-icon');  
  var $nav = $('.nav-main ul');  


  function fontWeightMedium(selector) {
    var lessThan16 = false;
    var fontSize = selector.css('font-size');
    fontSize = parseInt(fontSize.substring(0, fontSize.length - 2));
    if (fontSize < 16) {
      lessThan16 = true;
    }
    return lessThan16;
  } 

  $('strong').each(function() {
    if (fontWeightMedium($(this))) {
      $(this).css('font-weight', '500');
    }
  });
 

  function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
  } // returns object of correct viewport width and height
  
  /* toggle navigation dropdown for mobile view */
  $($navIcon).on('click', function(e) {  
    e.preventDefault(); 
    if ($nav.is(':hidden')) {
      $nav.toggleClass('nav-add-margin');
      $navContainer.toggleClass('nav-remove-padding');
      $nav.slideToggle();  
    } else {
        $nav.slideToggle(); 
        $nav.toggleClass('nav-add-margin');
        $navContainer.toggleClass('nav-remove-padding');
      }
  });  

  /* hide mobile navigation and mobile styling on resize */
    $(window).resize(function(){  
      var width = viewport().width;  

      if (width > 1440) {
        $("[class$='row']").addClass('max-width-wide-screen');
      } else if (width <= 1440) {
        /*if ($("div").hasClass('max-width-wide-screen')) { 
          $("div").removeClass('max-width-wide-screen');
          console.log("true");
        }*/
        $("[class$='max-width-wide-screen']").removeClass('max-width-wide-screen');
      }

      if (width > 767) {
      	if ($nav.is(':hidden')) {
      	  $nav.removeAttr('style');
          if ($nav.hasClass('nav-add-margin') && 
        	  $nav.hasClass('nav-remove-padding')) {
            $nav.removeClass('nav-add-margin');
      	    $nav.removeClass('nav-remove-padding');
      	  }
        } else {
           $nav.removeClass('nav-add-margin');
        }
      } else if (width < 767) {
      	if (!$nav.is(':hidden') && !$nav.hasClass('nav-add-margin')) {
      	  $nav.addClass('nav-add-margin');
      	}
      }
	}); 
});
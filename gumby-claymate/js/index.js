$( document ).ready(function() {

  var $valign = $('div.valign');
  var $list = $('ul.list-actions');
  var $icon = $('div.module-icon');

  var $navContainer = $('.nav-container');
  var $navIcon = $('#nav-icon');  
  var $nav = $('.nav-main ul');  
  var $navHeight = $navIcon.height();
  var navIsOpen = false;
  
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

    $(window).resize(function(){  
      var width = $(window).width();  
    
    //&& $nav.is(':hidden')

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


  /*$list.width($valign.width() - 5);
  $icon.css('margin-top', (($valign.height() - 90) / 2) + 'px');


  $( window ).resize(function() { 
	$list.width($valign.width() - 5);
	$icon.css('margin-top', (($valign.height() - 90) / 2) + 'px');
  });*/
});
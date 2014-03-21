$( document ).ready(function() {

  var $valign = $('div.valign');
  var $list = $('ul.list-actions');
  var $icon = $('div.module-icon');

  var $navIcon = $('#nav-icon');  
  var $nav = $('.nav-main ul');  
  var $navHeight = $navIcon.height();  
  
    $($navIcon).on('click', function(e) {  
        e.preventDefault();  
        $nav.slideToggle();  
    });  

    $(window).resize(function(){  
      var width = $(window).width();  
    
      if(width > 767 && $nav.is(':hidden')) {  
        $nav.removeAttr('style');  
      }  
	}); 


  /*$list.width($valign.width() - 5);
  $icon.css('margin-top', (($valign.height() - 90) / 2) + 'px');


  $( window ).resize(function() { 
	$list.width($valign.width() - 5);
	$icon.css('margin-top', (($valign.height() - 90) / 2) + 'px');
  });*/
});
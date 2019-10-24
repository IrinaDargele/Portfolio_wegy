

	$(function () {

          $('.header__menu-trigger').on("click", function() {
              console.log(10);
            $('nav').stop(true).slideToggle('slow', function(){
                if($('nav').is(':hidden')){
                    $('nav').removeAttr('style');
                }
            });
        });
    
        $(".owl-carousel").owlCarousel({
            items:1,
            autoplay:true,
            loop:true,
            autoplayTimeout:3000,
        }

        );
    
        
    });
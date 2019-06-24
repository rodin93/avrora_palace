// ----------------- Slider --------------------------
(function($) {
  var methods = {
    init : function(options) {
      options = options || {};
      options.timeout = options.timeout || 5;
      options.speed = options.speed || 2;

      options.timeout = options.timeout * 1000;
      options.speed = options.speed + 's';
      this.css('transition', options.speed);
      var str_slides = this.attr('data-sliders');
      if (str_slides != undefined) {
        options.slides = str_slides.split(';');
        options.total = options.slides.length;
        $(this).data('bg_slider-options', options);
        if (options.total > 1) {
          var i;
          var images = [];
          for(i = 0; i < options.total; i++) {
            images[i] = new Image();
            images[i].src = options.slides[i];
          }
          options.current = -1;
          this.bg_slider('goSlides');
        }
      }

    },
    goSlides : function( ) {
      var options = $(this).data('bg_slider-options');
      if (options && typeof options === 'object') {
        options.current = options.current + 1;
        if (options.current >= options.total) {
          options.current = 0;
        }
        $(this).data('bg_slider-options', options);
        this.css('backgroundImage', 'url('+options.slides[options.current]+')');
        var handler = this.attr('id');
        setTimeout(function() {$('#' + handler).bg_slider('goSlides');}, options.timeout);
      }
    }
  };

  $.fn.bg_slider = function(method) {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply(this, arguments );
    } else {
      $.error( 'Method ' +  method + ' not exists' );
    }
  }
})(jQuery);

// ----------------------- Preloader ------------------------------

$(document).ready(function () {
    $(".dws-progress-bar").circularProgress({

        color: "#fff",
        line_width: 5,
        height: "150px",
        width: "150px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 50,

    })
    .circularProgress('animate', 100, 2500);
}); 

$(window).on('load', function () {
    var $preloader = $('#preloader');
    $preloader.delay(1800).fadeOut('slow');
});  

// --------------------------- Slow Scroll -------------------------

$('.nav-item-1').on('click', function() {
  $('html,body').animate({scrollTop:$('.rooms').offset().top+"px"},{duration:3E3});
});

$('.nav-item-2').on('click', function() {
  $('html,body').animate({scrollTop:$('.about').offset().top+"px"},{duration:3E3});
});

$('.nav-item-3').on('click', function() {
  $('html,body').animate({scrollTop:$('.events').offset().top+"px"},{duration:3E3});
});

$('.nav-item-4').on('click', function() {
  $('html,body').animate({scrollTop:$('.offers').offset().top+"px"},{duration:3E3});
});

$('.nav-item-5').on('click', function() {
  $('html,body').animate({scrollTop:$('.contact').offset().top+"px"},{duration:3E3});
});

$('.nav-item-6').on('click', function() {
  $('html,body').animate({scrollTop:$('.about').offset().top+"px"},{duration:4E3});
});

$('.nav-item-7').on('click', function() {
  $('html,body').animate({scrollTop:$('header').offset().top+"px"},{duration:4E3});
});

// ----------------------------- Fix Load Head Pic ----------------------













(function(document, window, $) {
    $(document).ready(function(){
       $('.center').slick({
         centerMode: true,
         centerPadding: '60px',
         slidesToShow: 3,
         autoplay:true,
         autoplaySpeed:1200,
         prevArrow:'.slide .tow',
         nextArrow:'.slide .one',
    responsive: [
          {
        breakpoint: 991,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
        {
        breakpoint: 768,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]  
       });
        
        $('.links li a').click(function(){
            $('html, body').animate({
                scrollTop: $('#' + $(this).data('value')).offset().top -50  
            },2000);
        });
        
        $('.foter .arrow i').click(function(){
          
            $('html, body').animate({
                scrollTop:0
            },2500);
        });
            
    });
    
})(document, window, jQuery);
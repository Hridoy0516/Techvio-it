

//counter jequery plugin use 

$('.counter').counterUp({
    delay: 10,
    time: 1000,
    });
    
    // parbange loading jequery plugin use!

    $(document).ready(function(){

        $('#bar1').barfiller({ barColor:'red', duration:'4000'});
          $('#bar2').barfiller({ barColor:'green', duration:'4000'});
            $('#bar3').barfiller({ barColor:'orange', duration:'4000'});
    
 });

 // ow.carousel testimonial 


 $('.testimonial-slider').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true, 
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
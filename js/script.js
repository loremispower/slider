$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      responsive: true
 
  });
 
  $(".slider-menu a").on("mouseover", function(){

    var current = $('.slide-num').index(this);
    var owl = $(".owl-carousel").data('owlCarousel');

    owl.goTo(current);

    
  });


});






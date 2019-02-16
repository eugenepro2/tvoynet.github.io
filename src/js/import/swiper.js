import 'owl.carousel';
import $ from 'jquery';

let slider = $('.owl-carousel');
slider.owlCarousel({
  items: 1,
  loop: true,
  smartSpeed: 1000,
  navigation:true,
  center: true,
});


$('.next').click(function() {
  slider.trigger('next.owl.carousel');
});

$('.prev').click(function() {
  slider.trigger('prev.owl.carousel');
});

var slides = $('.slider .slide').length;
var slideWidth = 100 / slides;
var $slide = $('.slider .slide');
var hoverWidth = 90;
var siblingsWidth = (100 - hoverWidth) / (slides-1);

$slide.css('width', slideWidth+"%");

$slide.hover(function() {
  $(this).css('width', hoverWidth+"%");
  $(this).siblings().css('width', siblingsWidth+"%");
}, function() {
  $slide.css('width', slideWidth+"%");
});
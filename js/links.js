/* Credit:)
https://getbootstrap.com
https://kenwheeler.github.io/slick
https://unsplash.it
http://stackoverflow.com/a/25847520
http://stackoverflow.com/a/34684385
*/
// Slick controls
$('#popup-image-gallery').on('shown.bs.modal', function() {
    $('.popup-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav',
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.popup-slider-for',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      variableWidth: true,
      centerMode: true,
      infinite: true,
    });
  });
  // Slick.js: Get current and total slides (ie. 3/5)
  var $status = $('.pagingInfo');
  var $slickElement = $('.popup-slider-for');
  
  $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
  });
  
  // Slick slider sync situation
  var slides = $(".popup-slider-for .slick-track > .slick-slide").length;
  $('.popup-slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    var inFocus = $('.popup-slider-for .slick-current').attr('data-slick-index');
    $('.popup-slider-nav .slick-current').removeClass('slick-current');
    $('.popup-slider-nav .slick-slide[data-slick-index="' + inFocus + '"]').trigger('click');
  });